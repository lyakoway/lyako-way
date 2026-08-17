import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { useSelectorTyped } from "src/store";
import { ROUTE_BY_VALUE } from "src/common/lib/navigation";
import { HeaderTopMenuProps } from "src/common/types/lang";

import { TransitionViewport, TransitionLayer } from "./style";

// Направление перехода по меню: 1 — новый раздел правее текущего, -1 — левее.
type Direction = 1 | -1;

type ExitPage = {
  key: string;
  element: ReactNode;
  dir: Direction;
};

// Сколько держать слой выхода после старта анимации: сама анимация 550 мс
// (см. style.ts) + запас на поздний старт таймера.
const EXIT_HOLD_MS = 700;

// Порог свайпа: минимальный горизонтальный сдвиг пальца (px) и его
// доминирование над вертикальным — скролл страницы не должен листать разделы.
// Медленный жест (> SWIPE_SLOW_MS, выделение текста перетаскиванием) требует
// уверенного длинного движения.
const SWIPE_MIN_DX = 60;
const SWIPE_DOMINANCE = 1.2;
const SWIPE_SLOW_MS = 600;
const SWIPE_SLOW_MIN_DX = 140;

// Порядок разделов — как в навбаре: из переведённого меню берём пункты с роутом.
const getOrderedRoutes = (menu: HeaderTopMenuProps[]) =>
  menu
    .filter((item) => item.value in ROUTE_BY_VALUE)
    .map((item) => ROUTE_BY_VALUE[item.value]);

// Индекс раздела в порядке пунктов навбара. Вложенные пути (пост блога)
// относятся к разделу своего корня; неизвестный путь (404) → -1.
const getSectionIndex = (pathname: string, routes: string[]) => {
  const route = routes.find((r) =>
    r === "/" ? pathname === "/" : pathname.startsWith(r)
  );
  return route === undefined ? -1 : routes.indexOf(route);
};

const getDirection = (
  from: string,
  to: string,
  menu: HeaderTopMenuProps[]
): Direction | null => {
  const routes = getOrderedRoutes(menu);
  const fromIndex = getSectionIndex(from, routes);
  const toIndex = getSectionIndex(to, routes);

  // Неизвестный раздел или тот же (пост → пост, 404) — без слайда.
  if (fromIndex < 0 || toIndex < 0 || fromIndex === toIndex) return null;
  return toIndex > fromIndex ? 1 : -1;
};

// Переход между страницами как в слайдере: новый раздел выезжает со своей
// стороны меню (слева/справа), прежний уезжает в противоположную — оба с
// плавным размытием. Направление — по порядку пунктов навбара. На тач-
// устройствах разделы также листаются свайпом по области контента.
// Подключён в Layout вокруг содержимого страниц; навбар и сайдбар — на месте.
const PageTransition: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;
  const {
    lang: { propsHeaderTopMenu },
  } = useSelectorTyped(({ lang }) => lang);

  // Снимок отображаемой страницы: когда роут сменился, children — уже новая
  // страница, прежняя остаётся только в этом состоянии (для анимации выхода).
  const [current, setCurrent] = useState<{ key: string; element: ReactNode }>({
    key: pathname,
    element: children,
  });
  const [exit, setExit] = useState<ExitPage | null>(null);

  // Смена роута. Состояние правим прямо в рендере (паттерн «adjust state
  // during render» из доков React): в эффекте было бы поздно — между рендером
  // и эффектом новый раздел мелькнул бы без анимации.
  if (pathname !== current.key) {
    const dir = getDirection(current.key, pathname, propsHeaderTopMenu);
    const leaving = current.element;

    setCurrent({ key: pathname, element: children });
    setExit(dir ? { key: current.key, element: leaving, dir } : null);
  } else if (children !== current.element && !exit) {
    // Тот же роут, элемент пересоздан (смена языка/темы) — освежаем снимок,
    // чтобы будущая анимация выхода стартовала с актуальной карточки.
    setCurrent({ ...current, element: children });
  }

  // Убираем слой выхода после анимации.
  useEffect(() => {
    if (!exit) return;
    const id = window.setTimeout(() => setExit(null), EXIT_HOLD_MS);
    return () => window.clearTimeout(id);
  }, [exit]);

  // Свайп по контенту на тач-устройствах: пальцем влево — следующий раздел
  // меню, вправо — предыдущий (стороны совпадают с анимацией перехода).
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const routes = getOrderedRoutes(propsHeaderTopMenu);
    const index = getSectionIndex(pathname, routes);
    if (index < 0) return; // неизвестный раздел (404) — не листаем

    const neighbor = (offset: 1 | -1) => routes[index + offset];

    let startX = 0;
    let startY = 0;
    let startT = 0;
    let active = false;

    // Жест начинается в элементе, который сам листается по горизонтали
    // (горизонтальный скролл внутри контента), или в fixed-оверлее
    // (просмотрщик PDF) — не отбираем у него палец.
    const intercepted = (target: HTMLElement) => {
      for (let n = target; n && n !== el; n = n.parentElement) {
        const cs = getComputedStyle(n);
        if (cs.position === "fixed") return true;
        if (
          (cs.overflowX === "auto" || cs.overflowX === "scroll") &&
          n.scrollWidth > n.clientWidth + 1
        ) {
          return true;
        }
      }
      return false;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) {
        active = false; // щипок/мультитач — не листаем
        return;
      }
      const t = e.touches[0];
      startX = t.clientX;
      startY = t.clientY;
      startT = e.timeStamp;
      active = !intercepted(e.target as HTMLElement);
      if (active) {
        // свайп может пойти в любую сторону — прогреваем обоих соседей
        for (const offset of [1, -1] as const) {
          const href = neighbor(offset);
          if (href) void router.prefetch(href);
        }
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!active) return;
      active = false;
      const t = e.changedTouches[0];
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;
      const minDx =
        e.timeStamp - startT > SWIPE_SLOW_MS ? SWIPE_SLOW_MIN_DX : SWIPE_MIN_DX;
      if (Math.abs(dx) < minDx || Math.abs(dx) < Math.abs(dy) * SWIPE_DOMINANCE)
        return;
      const href = dx < 0 ? neighbor(1) : neighbor(-1);
      if (href) void router.push(href);
    };

    const onTouchCancel = () => {
      active = false;
    };

    // passive: слушаем только чтение координат — вертикальный скролл не блокируем
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("touchcancel", onTouchCancel, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchCancel);
    };
  }, [pathname, propsHeaderTopMenu, router]);

  return (
    <TransitionViewport ref={viewportRef} $active={!!exit}>
      {exit && (
        <TransitionLayer key={exit.key} $role="exit" $dir={exit.dir}>
          {exit.element}
        </TransitionLayer>
      )}
      {/* key по роуту: смена страницы перемонтирует слой и перезапускает
          анимацию входа; в покое ключ стабилен и перемонтирования нет. */}
      <TransitionLayer
        key={current.key}
        $role={exit ? "enter" : "idle"}
        $dir={exit?.dir}
      >
        {children}
      </TransitionLayer>
    </TransitionViewport>
  );
};

export default PageTransition;
