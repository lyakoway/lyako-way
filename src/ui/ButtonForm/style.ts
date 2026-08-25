import styled, { css, keyframes } from "styled-components";


// Полёт самолётика: приседание, разгон вверх-вправо и растворение.
const mailFly = keyframes`
  0%, 50% {
    transform: translateY(-50%) translate3d(0, 0, 0) scale(1);
  }
  60% {
    transform: translateY(-50%) translate3d(-3px, 2px, 0) scale(1.05);
  }
  70% {
    opacity: 1;
  }
  85% {
    opacity: 0;
  }
  100% {
    transform: translateY(-50%) translate3d(30px, -14px, 0) scale(0.4);
    opacity: 0;
  }
`;


// Складывание письма: конверт сжимается к линии сгиба и растворяется.
const mailFold = keyframes`
  0% {
    transform: translateY(-50%) scaleY(1) scaleX(1);
    opacity: 1;
  }
  55% {
    transform: translateY(-50%) scaleY(0.35) scaleX(0.9);
    opacity: 0.9;
  }
  100% {
    transform: translateY(-50%) scaleY(0) scaleX(0.8);
    opacity: 0;
  }
`;

// Перемещение письма: новое письмо прилетает со стороны и встаёт на место.
const mailReturn = keyframes`
  0% {
    transform: translateY(-50%) translate(-30px, 12px) scale(0.4);
    opacity: 0;
  }
  55% {
    opacity: 1;
  }
  100% {
    transform: translateY(-50%) translate(0, 0) scale(1);
    opacity: 1;
  }
`;

// Иконка «Отправить» с трёхфазной анимацией (по мотивам известной демки):
// $phase управляется компонентом по таймингам:
//   fold   — письмо складывается: контур стирается, конверт сжимается к линии
//            сгиба (mailFold) и исчезает;
//   fly    — самолётик дорисовывается (dashoffset 325→0) и улетает (mailFly);
//   return — новое письмо прилетает со стороны и встаёт на место конверта
//            (mailReturn), штрих перерисовывается.
// Пути и dash-значения — из демки: замкнутые контуры (318/182 единицы)
// короче периода 325, каждый polyline рисуется целиком.
export const MailIconWrap = styled.span<{
  $phase?: "idle" | "fold" | "fly" | "return";
}>`
  position: relative;
  flex-shrink: 0;
  width: 26px;
  height: 16px;

  svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    fill: none;
    stroke: currentColor;
    stroke-width: 7;
    stroke-linecap: square;
    pointer-events: none;
  }

  svg.mail {
    width: 26px;
    height: 16px;
    stroke-dasharray: 325 325;
    stroke-dashoffset: 0;
    transition: stroke-dashoffset 0.45s ease-in-out;
  }

  svg.plane {
    width: 18px;
    height: 17px;
    margin-left: 4px;
    stroke-dasharray: 325 325;
    stroke-dashoffset: 325;
    transition: stroke-dashoffset 0.4s ease-in-out 0.1s;
  }

  /* 1) Складывание письма */
  ${({ $phase }) =>
    $phase === "fold" &&
    css`
      svg.mail {
        stroke-dashoffset: 326;
        animation: ${mailFold} 0.55s ease-in both;
      }
    `}

  /* 2) Самолётик дорисовывается и улетает; сложенное письмо держим
     скрытым (анимация складывания уже отыграла и снялась вместе с
     предыдущим правилом — без этого конверт перерисовывался бы во время
     полёта) */
  ${({ $phase }) =>
    $phase === "fly" &&
    css`
      svg.mail {
        stroke-dashoffset: 326;
        opacity: 0;
        transform: translateY(-50%) scaleY(0);
      }

      svg.plane {
        stroke-dashoffset: 0;
        animation: ${mailFly} 1.9s ease-in-out 0.35s both;
      }
    `}

  /* 3) Новое письмо прилетает на место; улете́вший самолётик держим
     скрытым — без этого при смене фазы он «перерисовывался» назад */
  ${({ $phase }) =>
    $phase === "return" &&
    css`
      svg.plane {
        opacity: 0;
      }

      svg.mail {
        animation: ${mailReturn} 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    svg.mail,
    svg.plane {
      transition: none;
      animation: none;
    }
  }
`;
