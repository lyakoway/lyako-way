import styled, { keyframes } from "styled-components";

// Лоадер сцены с ЗАДЕРЖКОЙ появления: если сцена готова раньше (быстрая сеть) —
// он снимается (см. index: рендерится только при !ready) и не успевает
// проявиться, поэтому визуально не мешает. Если загрузка затянулась (медленная
// сеть) — плавно проявляется. Реализовано на CSS (opacity + delay), чтобы
// работать и до загрузки JS: элемент есть в SSR-HTML, анимация идёт от момента
// первой отрисовки, а не от гидрации.
const loaderFadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const SceneLoader = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  opacity: 0;
  /* появляется только если карточка пустует дольше ~0.7с */
  animation: ${loaderFadeIn} 0.4s ease 0.7s forwards;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// Кольцевой спиннер брендового оранжевого (theme.color.basic.primary),
// адаптивный (компактнее на мобильных).
export const SceneSpinner = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.15);
  border-top-color: ${({ theme }) => theme.color.basic.primary};
  animation: ${spin} 0.8s linear infinite;

  @media (max-width: 579px) {
    width: 28px;
    height: 28px;
    border-width: 2.5px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 2s;
  }
`;

// Сцена «Дом» рассчитана на фиксированный холст 960px. Внутри более узкой
// колонки контента vCard масштабируем её под ширину (useFitScale) и
// центрируем; выходящие за холст декоративные элементы обрезаются.
export const HomeStage = styled.div<{ $scale: number; $ready: boolean }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  /* Высоту холста задаём чисто через CSS (aspect-ratio + max-height), а НЕ
     через JS (было height: 700·$scale). Иначе до загрузки JS высота = 700·1,
     а после измерения прыгает — «дёрганье» размера карточки на медленной сети.
     Формулы эквивалентны прежним: h = w·700/960 с капом 700px (scale≤1). */
  aspect-ratio: 960 / 700;
  max-height: 700px;

  & > div {
    flex: none;
    transform: scale(${({ $scale }) => $scale});
    transform-origin: top center;
    /* Проявляем сцену только после измерения масштаба (useFitScale.ready).
       До этого место уже зарезервировано (aspect-ratio выше), поэтому сцена
       появляется сразу в правильном размере — без скачка зума. На быстрой сети
       измерение проходит в layout-эффекте до отрисовки, паузы нет. */
    visibility: ${({ $ready }) => ($ready ? "visible" : "hidden")};
  }

  @media (min-width: 1024px) {
    /* холст 720px: h = w·720/960 с капом 720px; сцена прижата к низу */
    aspect-ratio: 960 / 720;
    max-height: 720px;
    align-items: flex-end;

    & > div {
      transform-origin: bottom center;
    }
  }

  /* на широком экране тянемся на всю высоту карточки (= высоте сайдбара),
     сцена остаётся прижатой к низу */
  @media (min-width: 1250px) {
    aspect-ratio: auto;
    max-height: none;
    flex: 1;
  }
`;
