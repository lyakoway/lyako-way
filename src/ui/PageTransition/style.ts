import styled, { css, keyframes } from "styled-components";
import { PANEL_BORDER } from "src/common/lib/panelStyles";

// Хронометраж: сама анимация — DURATION, слой выхода держим до EXIT_HOLD
// (таймаут в index.tsx), чтобы анимация успела доиграть до размонтирования.
const DURATION = "0.55s";
const EASING = "cubic-bezier(0.22, 1, 0.36, 1)"; // как у Reveal — плавный выезд
const BLUR = "12px";

// Вход: новый раздел выезжает со своей стороны меню, «фокусируясь» к месту.
const enterFromRight = keyframes`
  from {
    transform: translateX(100%);
    filter: blur(${BLUR});
    opacity: 0.55;
  }
  to {
    transform: none;
    filter: none;
    opacity: 1;
  }
`;

const enterFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    filter: blur(${BLUR});
    opacity: 0.55;
  }
  to {
    transform: none;
    filter: none;
    opacity: 1;
  }
`;

// Выход: прежний раздел уезжает в противоположную сторону, расфокусируясь.
const exitToLeft = keyframes`
  from {
    transform: none;
    filter: none;
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    filter: blur(${BLUR});
    opacity: 0;
  }
`;

const exitToRight = keyframes`
  from {
    transform: none;
    filter: none;
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    filter: blur(${BLUR});
    opacity: 0;
  }
`;

// Вьюпорт «слайдера». В покое ничем не мешает (без клипа — тени и sticky
// внутри страниц работают как раньше). На время перехода сам становится
// рамкой карточки: фон/границу/скругление/тень у страниц (Article) снимает и
// рисует здесь — поэтому рамка стоит на месте, а внутри едет только контент.
export const TransitionViewport = styled.div<{ $active: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  /* раньше flex:1 был у карточек-статей напрямую в Content — сохраняем
     растяжку контента на высоту колонки (≥1250px) через цепочку слоёв */
  flex: 1;

  ${({ $active, theme }) =>
    $active &&
    css`
      overflow: hidden;
      /* рамка попиксельно та же, что была у Article (вьюпорт занимает его бокс) */
      border-radius: 20px;
      background: var(--panel-bg);
      border: 1px solid ${PANEL_BORDER};
      ${theme.shadow.NonClickable};

      /* хром страниц убираем без скачка раскладки: рамка остаётся в потоке
         (1px, прозрачная), меняются только фон и тень */
      & > div > article {
        background: none;
        border-color: transparent;
        box-shadow: none;
      }
    `}
`;

// Слой-«слайд». Входящий — в потоке (задаёт высоту вьюпорту); выходящий —
// абсолютный, той же геометрии (inset: 0), чтобы растянутая по высоте
// карточка не «сжималась» в первый кадр анимации выхода.
export const TransitionLayer = styled.div<{
  $role: "idle" | "enter" | "exit";
  $dir?: 1 | -1;
}>`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${({ $role, $dir }) => {
    if ($role === "exit") {
      return css`
        position: absolute;
        inset: 0;
        /* прежняя страница больше не интерактивна */
        pointer-events: none;
        will-change: transform, filter, opacity;
        /* forwards — держим конечное состояние до размонтирования слоя */
        animation: ${$dir === 1 ? exitToLeft : exitToRight} ${DURATION} ${EASING}
          forwards;
      `;
    }

    if ($role === "enter") {
      return css`
        will-change: transform, filter, opacity;
        /* именно backwards (не forwards): после анимации transform/filter
           сбрасываются в none — иначе остаточный transform/filter сделал бы
           слой содержащим блоком для position:fixed внутри страниц
           (например, полноэкранный просмотрщик PDF в резюме) */
        animation: ${$dir === 1 ? enterFromRight : enterFromLeft} ${DURATION}
          ${EASING} backwards;
      `;
    }

    return css``;
  }}

  /* Меньше движения: переход вырождается в мгновенную замену страниц. */
  @media (prefers-reduced-motion: reduce) {
    animation: none;

    ${({ $role }) =>
      $role === "exit" &&
      css`
        display: none;
      `}
  }
`;
