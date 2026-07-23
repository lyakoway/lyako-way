// Эффект «распыления» текста на частицы при смене языка.
// Как в референс-пенах: весь видимый текст переносим на canvas, разбиваем на
// пиксели-частицы и разлетаем их (с затуханием). Под слоем частиц реальный DOM
// уже перерисован новым языком — старый текст рассыпается, новый проявляется.
// Рисуем ТОЛЬКО текст (никаких картинок) — поэтому canvas не «пачкается»
// кросс-доменными изображениями и сцена/картинки не затрагиваются.
// Вызывать ДО dispatch(setLang), пока в DOM ещё старый текст.

const CANVAS_ID = "lang-disperse-canvas";
const DURATION = 900; // мс
const MAX_PARTICLES = 7000; // потолок для плавности
const SAMPLE_STEP = 2; // шаг сэмплирования пикселей

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
};

function rand(min: number, max: number) {
  // без Math.random в общих утилах не обойтись — эффект чисто визуальный
  return min + Math.random() * (max - min);
}

export function disperseTextSwap(): void {
  if (typeof document === "undefined" || typeof window === "undefined") return;
  const root = document.querySelector("main");
  if (!root) return;
  // уже идёт — не наслаиваем
  if (document.getElementById(CANVAS_ID)) return;

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  if (!vw || !vh) return;

  const canvas = document.createElement("canvas");
  canvas.id = CANVAS_ID;
  canvas.width = vw;
  canvas.height = vh;
  Object.assign(canvas.style, {
    position: "fixed",
    left: "0",
    top: "0",
    width: `${vw}px`,
    height: `${vh}px`,
    pointerEvents: "none",
    zIndex: "9998",
  } as CSSStyleDeclaration);
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // --- 1. Рисуем весь видимый текст на canvas (совпадает со старым текстом) ---
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim()) {
        return NodeFilter.FILTER_REJECT;
      }
      const parent = (node as Text).parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      const st = getComputedStyle(parent);
      if (
        st.visibility === "hidden" ||
        st.display === "none" ||
        parseFloat(st.opacity) === 0
      ) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const range = document.createRange();
  ctx.textBaseline = "top";
  let drewSomething = false;

  let node: Node | null;
  // eslint-disable-next-line no-cond-assign
  while ((node = walker.nextNode())) {
    const text = node.nodeValue!;
    const parent = (node as Text).parentElement!;
    range.selectNodeContents(node);
    const rects = Array.from(range.getClientRects());
    if (!rects.length) continue;

    // границы текста и фильтр по вьюпорту
    const left = Math.min(...rects.map((r) => r.left));
    const right = Math.max(...rects.map((r) => r.right));
    const top = Math.min(...rects.map((r) => r.top));
    const bottom = Math.max(...rects.map((r) => r.bottom));
    if (bottom < 0 || top > vh || right < 0 || left > vw) continue;

    const st = getComputedStyle(parent);
    ctx.font = `${st.fontStyle} ${st.fontWeight} ${st.fontSize} ${st.fontFamily}`;
    ctx.fillStyle = st.color;

    const wrapWidth = Math.max(1, right - left);
    const lineStep =
      rects.length > 1 ? rects[1].top - rects[0].top : rects[0].height;

    // выравнивание
    const align = st.textAlign;
    let anchorX = left;
    if (align === "center") {
      ctx.textAlign = "center";
      anchorX = (left + right) / 2;
    } else if (align === "right" || align === "end") {
      ctx.textAlign = "right";
      anchorX = right;
    } else {
      ctx.textAlign = "left";
      anchorX = left;
    }

    // учитываем text-transform (например «НАСТРОЙКИ» = uppercase),
    // иначе форма частиц не совпадёт с видимым текстом
    let shown = text;
    const tt = st.textTransform;
    if (tt === "uppercase") shown = shown.toUpperCase();
    else if (tt === "lowercase") shown = shown.toLowerCase();
    else if (tt.startsWith("capitalize"))
      shown = shown.replace(/(^|\s)(\S)/g, (_m, sp, ch) => sp + ch.toUpperCase());

    // перенос по словам под ширину строки
    const words = shown.trim().split(/\s+/);
    const lines: string[] = [];
    let cur = "";
    for (const w of words) {
      const test = cur ? `${cur} ${w}` : w;
      if (ctx.measureText(test).width > wrapWidth && cur) {
        lines.push(cur);
        cur = w;
      } else {
        cur = test;
      }
    }
    if (cur) lines.push(cur);

    lines.forEach((line, i) => {
      ctx.fillText(line, anchorX, top + i * lineStep);
    });
    drewSomething = true;
  }

  if (!drewSomething) {
    return; // нечего распылять
  }

  document.body.appendChild(canvas);

  // --- 2. Пиксели → частицы ---
  let img: ImageData;
  try {
    img = ctx.getImageData(0, 0, vw, vh);
  } catch {
    canvas.remove();
    return;
  }
  const data = img.data;
  const particles: Particle[] = [];
  for (let y = 0; y < vh; y += SAMPLE_STEP) {
    for (let x = 0; x < vw; x += SAMPLE_STEP) {
      const idx = (y * vw + x) * 4;
      const a = data[idx + 3];
      // низкий порог, чтобы ловить приглушённый текст (напр. «НАСТРОЙКИ» —
      // rgba(255,255,255,0.5), альфа ~127) — иначе он не даёт частиц
      if (a > 40) {
        particles.push({
          x,
          y,
          vx: rand(-0.6, 2.4), // сдувает вправо + разброс
          vy: rand(-2, 0.8), // лёгкий подброс вверх, затем гравитация
          color: `${data[idx]},${data[idx + 1]},${data[idx + 2]}`,
        });
      }
    }
  }
  // прорежаем до потолка (равномерная плотность независимо от объёма текста)
  if (particles.length > MAX_PARTICLES) {
    const keep = MAX_PARTICLES / particles.length;
    for (let i = particles.length - 1; i >= 0; i -= 1) {
      if (Math.random() > keep) particles.splice(i, 1);
    }
  }

  const size = 1.5;
  const gravity = 0.08;
  let start = 0;

  const frame = (ts: number) => {
    if (!start) start = ts;
    const t = Math.min((ts - start) / DURATION, 1);
    const alpha = 1 - t; // затухание
    ctx.clearRect(0, 0, vw, vh);
    ctx.textAlign = "left";
    for (let i = 0; i < particles.length; i += 1) {
      const pt = particles[i];
      pt.x += pt.vx;
      pt.y += pt.vy;
      pt.vy += gravity;
      pt.vx *= 0.99;
      ctx.fillStyle = `rgba(${pt.color},${alpha})`;
      ctx.fillRect(pt.x, pt.y, size, size);
    }
    if (t < 1) {
      requestAnimationFrame(frame);
    } else {
      canvas.remove();
    }
  };
  requestAnimationFrame(frame);
}
