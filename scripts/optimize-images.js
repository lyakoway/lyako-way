// Разовая оптимизация тяжёлых растровых изображений через sharp.
// Перекодируем в webp-контент, СОХРАНЯЯ имя файла (.png/.jpeg) — браузер
// определяет формат по содержимому, импорты в коде менять не нужно.
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

// [относительный путь, макс. сторона (px), качество webp]
const TASKS = [
  ["src/common/icon/modal/fonIt.png", 1920, 70], // фон модалки (cover)
  ["src/common/icon/icon-blog/PortfolioImgUrl.png", 1000, 80], // скрин 285x500
  ["src/common/icon/icon-blog/JavaScript.png", 400, 82], // логотипы 200x200
  ["src/common/icon/icon-blog/TypeScript.png", 400, 82],
  ["src/common/icon/icon-blog/ReactNative.jpeg", 400, 82],
  ["src/common/icon/icon-blog/NextJs.png", 400, 82],
  ["src/common/icon/icon-blog/Redux.png", 400, 82],
  ["src/common/icon/icon-blog/React.png", 400, 82],
  ["src/common/icon/icon-blog/NodeJs.png", 400, 82],
  ["src/common/icon/icon-blog/Git.png", 400, 82],
];

(async () => {
  for (const [rel, maxDim, quality] of TASKS) {
    const file = path.join(ROOT, rel);
    if (!fs.existsSync(file)) {
      console.log(`⚠ нет файла: ${rel}`);
      continue;
    }
    const before = fs.statSync(file).size;
    const img = sharp(file);
    const meta = await img.metadata();
    // не апскейлим: ресайз только если изображение больше цели
    const needResize = Math.max(meta.width || 0, meta.height || 0) > maxDim;
    const buf = await (needResize
      ? img.resize({ width: maxDim, height: maxDim, fit: "inside" })
      : img
    )
      .webp({ quality, effort: 6 })
      .toBuffer();
    fs.writeFileSync(file, buf);
    const after = buf.length;
    const pct = (((before - after) / before) * 100).toFixed(0);
    console.log(
      `${rel}\n  ${(before / 1024).toFixed(0)}K → ${(after / 1024).toFixed(
        0
      )}K  (−${pct}%)  ${meta.width}x${meta.height}${
        needResize ? ` → ≤${maxDim}` : " (без ресайза)"
      }`
    );
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
