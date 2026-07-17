import styled, { keyframes, css } from "styled-components";
import {
  TABLET_1024,
  TABLET_959,
  MOBILE_660,
  MOBILE_560,
} from "src/common/lib/media";

import myIconComp from "src/common/icon/icon-header/comp.png";
import myIconCompn from "src/common/icon/icon-header/compn.png";
import myIconMap from "src/common/icon/icon-header/map.png";
import myIconMapn from "src/common/icon/icon-header/mapn.png";
import myIconBook from "src/common/icon/icon-header/books.png";
import myIconBookn from "src/common/icon/icon-header/booksn.png";
import myIconPicture from "src/common/icon/icon-header/image.png";
import myIconPicturen from "src/common/icon/icon-header/imagen.png";
import { bgTransition } from "src/common/utils/bgTransition";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const spinBack = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

export const HeaderSectionWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 700px;
  width: 960px;
  margin: 0 auto;

  @media ${TABLET_1024} {
    width: 100%;
    min-height: 600px;
  }

  @media ${MOBILE_660} {
    padding-top: 100px;
  }
`;

export const HeaderContactWrapper = styled.div`
  display: flex;

  @media ${MOBILE_560} {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin: 0 auto;
    width: 100%;
  }
`;

export const HeaderSectionGetsite = styled.div`
  position: absolute;
  left: 411px;
  top: 34px;

  @media ${TABLET_959} {
    left: 20px;
  }

  @media ${MOBILE_660} {
    top: 100px;
  }

  @media ${MOBILE_560} {
    position: initial;
    margin-top: 18px;
  }
`;

export const HeaderSectionConteiner = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 20;

  @media ${MOBILE_560} {
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderSectionLabel = styled.span`
  color: ${({ theme }) => theme.color.text.staticWhite};
  font-size: 13px;
  font-weight: 400;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  margin: 7px 0px;
  font-style: italic;
  line-height: 18px;
  white-space: nowrap;

  @media ${MOBILE_560} {
    text-align: center;
  }
`;

export const HeaderSectionContacts = styled.div`
  display: flex;
  width: 232px;
  position: absolute;
  top: 30px;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
  color: #fff;
  right: 0;

  @media ${TABLET_1024} {
    right: 20px;
  }

  @media ${MOBILE_660} {
    top: 100px;
  }

  @media ${MOBILE_560} {
    position: initial;
    align-items: center;
    justify-content: center;
  }
`;

export const Phones = styled.div`
  display: flex;
  align-items: center;
`;

export const PhonesConteiner = styled(HeaderSectionConteiner)`
  margin-left: 10px;
`;

export const PhonesNumber = styled.a`
  display: flex;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
  color: white;
  font-size: 19px;
  font-weight: 700;
  line-height: 28px;
  text-decoration: none;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
  font-family: "Exo 2", sans-serif;
  position: relative;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &:hover:before {
    position: absolute;
    content: "";
    width: calc(100% + (1px * 2));
    height: 2px;
    bottom: 0;
    background: #fff;
  }
`;

export const PhonesTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PhonesTextDivide = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 19px;
  font-weight: 700;
  line-height: 28px;
  text-decoration: none;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
  font-family: "Exo 2", sans-serif;
  margin-right: 8px;
  margin-left: 8px;
  white-space: pre;
`;

export const PhonesText = styled.a`
  display: flex;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
  color: white;
  font-size: 19px;
  font-weight: 700;
  line-height: 28px;
  text-decoration: none;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
  font-family: "Exo 2", sans-serif;
  position: relative;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &:hover:before {
    position: absolute;
    content: "";
    width: calc(100% + (1px * 2));
    height: 2px;
    bottom: 0;
    background: #fff;
    color: #fff;
  }
`;

export const Emails = styled(Phones)`
  margin-bottom: 7px;

  @media ${MOBILE_560} {
    justify-content: center;
  }
`;

export const ContactsText = styled(PhonesText)`
  font-size: 15px;
  margin-left: 10px;
  -webkit-tap-highlight-color: transparent;
`;

export const Skype = styled(Phones)`
  @media ${MOBILE_560} {
    justify-content: center;
  }
`;

export const HeaderSectionFon = styled.div`
  position: relitive;
  display: flex;

  @media ${TABLET_959} {
    display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    flex-direction: column-reverse;
  }
`;

export const IconComp = styled.div<{ $themeLight?: boolean }>`
  ${({ $themeLight }) =>
    $themeLight
      ? css`
          background: url(${myIconComp.src}) 100% 100% no-repeat;
        `
      : css`
          background: url(${myIconCompn.src}) 100% 100% no-repeat;
        `};
  ${bgTransition};
  display: flex;
  width: 697px;
  height: 321px;
  position: absolute;
  bottom: 0;
  left: 230px;
  z-index: 10;

  @media ${TABLET_959} {
    position: relative;
  }

  @media ${MOBILE_660} {
    width: 94%;
    background-size: 100%;
    z-index: 0;
  }
`;

// ——— Имитация набора кода на экране ноутбука ———

// Цвета токенов взяты из оригинальной иллюстрации экрана
export const CODE_COLORS = {
  g: "#c6d2dc", // светлый текст
  m: "#7f96a8", // приглушённый
  o: "#f47b54", // ключевое слово (оранжевый)
  O: "#f86a4a", // длинная строка (яркий оранжевый)
  c: "#34c0cd", // акцент (бирюзовый)
} as const;

export type CodeColor = keyof typeof CODE_COLORS;

// Раскладка строк: отступ + набор токенов [цвет, ширина в %]
export const CODE_LINES: {
  indent: number;
  caret?: boolean;
  tokens: [CodeColor, number][];
}[] = [
  {
    indent: 0,
    tokens: [
      ["o", 12],
      ["g", 24],
    ],
  },
  {
    indent: 6,
    tokens: [
      ["o", 14],
      ["c", 18],
      ["g", 10],
    ],
  },
  {
    indent: 6,
    tokens: [
      ["g", 18],
      ["g", 26],
      ["O", 40],
    ],
  },
  {
    indent: 14,
    tokens: [
      ["m", 10],
      ["g", 22],
    ],
  },
  {
    indent: 6,
    tokens: [
      ["o", 12],
      ["g", 20],
      ["c", 14],
    ],
  },
  {
    indent: 14,
    tokens: [
      ["g", 16],
      ["c", 22],
    ],
  },
  {
    indent: 6,
    tokens: [
      ["o", 10],
      ["g", 28],
    ],
  },
  {
    indent: 14,
    tokens: [
      ["g", 14],
      ["g", 20],
      ["c", 12],
    ],
  },
  { indent: 0, caret: true, tokens: [["g", 16]] },
];

// Общий период для набора кода (ноутбук) и загрузки (монитор), чтобы они шли
// последовательно: сначала печатается код, затем запускается загрузка.
const CODE_CYCLE = "10s";

// Печать строки: скрыта → проявляется слева направо → держится → исчезает
const typeLine = (start: number, end: number) => keyframes`
  0%, ${start}% {
    clip-path: inset(0 100% 0 0);
  }
  90%, ${end}% {
    clip-path: inset(0 0 0 0);
  }
  96%, 100% {
    clip-path: inset(0 100% 0 0);
  }
`;

const caretBlink = keyframes`
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
`;

// Анимации откалиброваны под светлую картинку — в тёмной теме плавно скрываем
// их тем же переходом, что и смена фона (bgTransition): 4s / 1s на планшете.
const themeFade = css<{ $themeLight?: boolean }>`
  opacity: ${({ $themeLight }) => ($themeLight ? 1 : 0)};
  transition: opacity 4s ease;

  @media ${TABLET_959} {
    transition: opacity 1s ease;
  }
`;

// Задержка запуска анимации = длительности проявления картинки (4s / 1s на планшете),
// чтобы анимация стартовала, когда светлая тема уже полностью проявилась.
const ANIM_START = "4s";
const animStartDelay = css`
  @media ${TABLET_959} {
    animation-delay: 1s;
  }
`;

// Накладывается ровно поверх экрана ноутбука и повторяет его цвет
export const CodeScreen = styled.div<{ $themeLight?: boolean }>`
  position: absolute;
  left: 26.97%;
  top: 45.48%;
  width: 20.37%;
  height: 24.3%;
  box-sizing: border-box;
  padding: 5px 6px 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  background: linear-gradient(135deg, #4f7692 0%, #466f8c 100%);
  z-index: 11;
  pointer-events: none;
  ${themeFade};

  @media ${MOBILE_660} {
    display: none;
  }
`;

export const CodeLineRow = styled.div<{
  $start: number;
  $end: number;
  $themeLight?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 3px;
  height: 3px;
  clip-path: inset(0 100% 0 0);
  animation: ${({ $start, $end, $themeLight }) =>
    $themeLight
      ? css`
          ${typeLine($start, $end)} ${CODE_CYCLE} steps(12, end) ${ANIM_START}
            infinite
        `
      : "none"};
  ${animStartDelay};
`;

export const CodeToken = styled.span<{ $color: string; $w: number }>`
  display: block;
  height: 3px;
  border-radius: 1.5px;
  background: ${({ $color }) => $color};
  width: ${({ $w }) => $w}%;
`;

export const CodeCaret = styled.span`
  display: block;
  width: 2px;
  height: 6px;
  margin-left: 1px;
  background: ${CODE_COLORS.g};
  animation: ${caretBlink} 1s steps(1, end) infinite;
`;

// ——— Пар над кружкой ———

const steamRise = keyframes`
  0% {
    transform: translateY(0) translateX(0) scaleX(1);
    opacity: 0;
  }
  20% {
    opacity: 0.55;
  }
  55% {
    opacity: 0.4;
    transform: translateY(-9px) translateX(2px) scaleX(1.5);
  }
  100% {
    transform: translateY(-20px) translateX(-2px) scaleX(2.1);
    opacity: 0;
  }
`;

export const Steam = styled.div<{ $themeLight?: boolean }>`
  position: absolute;
  left: 15.3%;
  top: 52%;
  width: 3.4%;
  height: 11%;
  z-index: 12;
  pointer-events: none;
  ${themeFade};

  @media ${MOBILE_660} {
    display: none;
  }
`;

export const SteamWisp = styled.span<{
  $left: number;
  $delay: number;
  $themeLight?: boolean;
}>`
  position: absolute;
  bottom: 0;
  left: ${({ $left }) => $left}%;
  width: 3px;
  height: 13px;
  border-radius: 2px;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.75)
  );
  filter: blur(1.4px);
  opacity: 0;
  animation: ${({ $delay, $themeLight }) =>
    $themeLight
      ? css`
          ${steamRise} 3s ease-in-out ${4 + $delay}s infinite
        `
      : "none"};

  @media ${TABLET_959} {
    animation-delay: ${({ $delay }) => 1 + $delay}s;
  }
`;

// ——— «Работа окон» на экране монитора ———

// «Обновление окна»: блик стоит за кадром, пока печатается код, и один раз
// проходит по экрану сразу после того, как код допечатался (~44–58% цикла).
const glareSweep = keyframes`
  0%,
  44% {
    transform: translateX(-160%) skewX(-18deg);
  }
  58%,
  100% {
    transform: translateX(380%) skewX(-18deg);
  }
`;

// Полоса заполнена, пока печатается код (и в начале цикла). Как только код
// допечатан (~45%), происходит «обновление окна»: полоса сбрасывается и заново
// загружается, после чего снова остаётся заполненной до следующей печати.
const loadingFill = keyframes`
  0%,
  45% {
    width: 100%;
  }
  48% {
    width: 0;
  }
  72% {
    width: 100%;
  }
  100% {
    width: 100%;
  }
`;

// Обрезано ровно по экрану монитора
export const MonitorScreen = styled.div<{ $themeLight?: boolean }>`
  position: absolute;
  left: 43.3%;
  top: 10.3%;
  width: 33%;
  height: 45.8%;
  overflow: hidden;
  z-index: 11;
  pointer-events: none;
  ${themeFade};

  @media ${MOBILE_660} {
    display: none;
  }
`;

// Скользящий блик-отражение по экрану
export const MonitorGlare = styled.div<{ $themeLight?: boolean }>`
  position: absolute;
  top: -20%;
  left: 0;
  width: 28%;
  height: 140%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.13) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: translateX(-160%) skewX(-18deg);
  animation: ${({ $themeLight }) =>
    $themeLight
      ? css`
          ${glareSweep} ${CODE_CYCLE} ease-in-out ${ANIM_START} infinite
        `
      : "none"};
  ${animStartDelay};
`;

// Голубая полоска как индикатор загрузки: фон повторяет экран, заполнение бежит
export const MonitorLoader = styled.div`
  position: absolute;
  left: 20%;
  top: 22.4%;
  width: 40.4%;
  height: 4.1%;
  min-height: 4px;
  overflow: hidden;
  background: linear-gradient(180deg, #4f7692 0%, #608199 100%);
`;

export const MonitorLoaderFill = styled.div<{ $themeLight?: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  background: #3aacbc;
  animation: ${({ $themeLight }) =>
    $themeLight
      ? css`
          ${loadingFill} ${CODE_CYCLE} ease-in-out ${ANIM_START} infinite
        `
      : "none"};
  ${animStartDelay};
`;

export const SettingIconWrapper = styled.div<{ $openedPopup: boolean }>`
  display: flex;
  -webkit-tap-highlight-color: transparent;
  animation: ${spin} 10s linear infinite;

  &:hover {
    animation: ${spinBack} 10s linear infinite;
    & svg {
      fill: #ff8560;
    }
  }

  ${({ $openedPopup }) =>
    $openedPopup &&
    css`
      animation: ${spinBack} 10s linear infinite;
      & svg {
        fill: #ff8560;
      }
    `}
`;

export const SettingWrapper = styled.div`
  display: flex;
  width: 36px;
  height: 36px;
  margin-left: 532px;
  margin-top: 12px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  @media ${MOBILE_660} {
    display: none;
  }
`;

export const IconMap = styled.div<{ $themeLight?: boolean }>`
  ${({ $themeLight }) =>
    $themeLight
      ? css`
          background: url(${myIconMap.src}) no-repeat;
        `
      : css`
          background: url(${myIconMapn.src}) no-repeat;
        `};
  ${bgTransition};
  display: flex;
  width: 183px;
  height: 140px;
  position: absolute;
  top: 70px;
  right: 50px;

  @media ${TABLET_959} {
    display: none;
  }
`;

export const IconBook = styled.div<{ $themeLight?: boolean }>`
  ${({ $themeLight }) =>
    $themeLight
      ? css`
          background: url(${myIconBook.src}) no-repeat;
        `
      : css`
          background: url(${myIconBookn.src}) no-repeat;
        `};
  ${bgTransition};
  display: flex;
  width: 212px;
  height: 96px;
  position: absolute;
  top: 270px;
  right: 40px;

  @media ${TABLET_959} {
    display: none;
  }
`;

export const IconPicture = styled.div<{ $themeLight?: boolean }>`
  ${({ $themeLight }) =>
    $themeLight
      ? css`
          background: url(${myIconPicture.src}) no-repeat;
        `
      : css`
          background: url(${myIconPicturen.src}) no-repeat;
        `};
  ${bgTransition};
  display: flex;
  width: 233px;
  height: 107px;
  position: absolute;
  top: 80px;
  right: 70px;

  @media ${TABLET_959} {
    display: none;
  }
`;

export const NewYear = styled.div`
  display: flex;
  position: absolute;
  right: -196px;
  left: -256px;
`;
