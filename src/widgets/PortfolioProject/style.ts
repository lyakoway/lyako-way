import styled, { css, keyframes } from "styled-components";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_TEXT_MUTED,
  PANEL_BORDER,
  PANEL_ELEVATED,
} from "src/common/lib/panelStyles";
import { runningBorder } from "src/common/lib/runningBorder";
import { pressedFill } from "src/common/lib/usePressAnimation";

/* ——— Хлебные крошки ——— */

export const Breadcrumb = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
  font-size: 13px;
  color: ${PANEL_TEXT_MUTED};

  a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: ${PANEL_TEXT_SECONDARY};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.color.basic.primaryLight};
    }
  }

  svg {
    width: 15px;
    height: 15px;
  }
`;

export const Crumb = styled.span`
  color: ${PANEL_TEXT};
`;

export const Sep = styled.span`
  color: ${PANEL_TEXT_MUTED};
`;

export const WipTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 22px;
  padding: 6px 14px;
  border-radius: 999px;
  background: ${PANEL_ELEVATED};
  border: 1px solid ${({ theme }) => theme.color.basic.primary};
  color: ${PANEL_TEXT};
  font-size: 13px;
  font-weight: 500;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.basic.primary};
  }
`;

/* ——— Мета-информация ——— */

// <580px — без верхнего отступа: под заголовком уже есть его собственные 20px,
// и вместе с ними мета уезжала от заголовка почти на полсотни пикселей.
export const MetaList = styled.dl`
  margin: 0;
  display: grid;
  gap: 14px;

  @media (min-width: 580px) {
    margin-top: 22px;
  }
`;

// <580px — подпись над значением: колонка подписей (130px) на узком экране
// оставляла у коротких значений («2025») дыру в полстроки, а длинные ссылки
// выжимала в три строки. С 580px — две колонки, значения выровнены по одной
// вертикали. minmax(0, 1fr) обязателен: без него неразрывный URL распирает
// колонку и ломает сетку.
export const MetaRow = styled.div`
  display: grid;
  gap: 3px;

  @media (min-width: 580px) {
    grid-template-columns: 130px minmax(0, 1fr);
    align-items: baseline;
    gap: 6px 14px;
  }
`;

export const MetaLabel = styled.dt`
  color: ${PANEL_TEXT_MUTED};
  font-size: 14px;
`;

export const MetaValue = styled.dd`
  min-width: 0;
  margin: 0;
  color: ${PANEL_TEXT};
  font-size: 14px;
  font-weight: 500;

  a {
    color: ${({ theme }) => theme.color.basic.primaryLight};
    text-decoration: none;
    /* anywhere вместо break-all: перенос только когда строка реально не
       влезает, а не посреди слова при каждом удобном случае. */
    overflow-wrap: anywhere;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const TechChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

export const Chip = styled.span`
  padding: 4px 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 12px;
`;

/* ——— Описание ——— */

// Обёртка: вводный лид сверху + карточки-блоки ниже.
export const Desc = styled.div`
  margin-top: 26px;
  padding-top: 22px;
  border-top: 1px solid ${PANEL_BORDER};
  display: grid;
  gap: 14px;
`;

// Первый абзац — «лид»: крупнее и светлее, задаёт суть проекта.
export const DescLead = styled.p`
  margin: 0;
  color: ${PANEL_TEXT};
  font-size: 17px;
  font-weight: 400;
  line-height: 1.55;

  @media (max-width: 579px) {
    font-size: 15px;
    line-height: 1.5;
  }
`;

// Остальные абзацы (демо/модели, стек) — отдельными карточками.
export const DescCard = styled.div`
  margin: 0;
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  border-radius: 12px;
  padding: 14px 16px;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.6;

  @media (max-width: 579px) {
    font-size: 13.5px;
    padding: 12px 14px;
  }
`;

// Если в тексте карточки есть «;» — разбиваем на пункты-строки с маркерами.
export const CardList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 8px;

  li {
    position: relative;
    padding-left: 16px;

    &::before {
      content: "";
      position: absolute;
      left: 2px;
      top: 9px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.basic.primary};
    }
  }
`;

/* ——— Список возможностей (простой список с маркерами) ——— */

export const FeaturesTitle = styled.p`
  margin: 28px 0 14px;
  color: ${PANEL_TEXT_MUTED};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
`;

export const FeatureList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 9px;
`;

// Пункт с оранжевым маркером слева (как Bullets в Резюме).
export const Feature = styled.li`
  position: relative;
  padding-left: 18px;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.55;

  &::before {
    content: "";
    position: absolute;
    left: 2px;
    top: 9px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.basic.primary};
  }
`;

/* ——— Скриншоты ——— */

export const Preview = styled.div`
  margin-top: 28px;
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  /* <900: одна колонка; 2-ю картинку (пустой light) опускаем после 3-й
     (практический dark), чтобы пары «пусто → пример» шли подряд: 1→3, 2→4. */
  @media (max-width: 899px) {
    & > *:nth-child(1) {
      order: 1;
    }
    & > *:nth-child(2) {
      order: 3;
    }
    & > *:nth-child(3) {
      order: 2;
    }
    & > *:nth-child(4) {
      order: 4;
    }
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const PreviewFrame = styled.button`
  display: block;
  width: 100%;
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${PANEL_BORDER};
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition:
    border-color 0.25s ease,
    transform 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.basic.primaryLight};
    transform: translateY(-2px);
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

// Картинка в модалке-лайтбоксе: вписывается во вьюпорт.
export const ModalImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;

  img {
    display: block;
    width: 100%;
    height: auto;
    max-height: 88vh;
    object-fit: contain;
    border-radius: 6px;
  }
`;

/* ——— Кнопки-ссылки ——— */

// Пульс сердца внутри кнопки-оценки: одиночный удар ($animate) или
// непрерывный, пока запрос в полёте ($beating).
const heartBeat = keyframes`
  0% { transform: scale(1); }
  30% { transform: scale(1.3); }
  50% { transform: scale(1.1); }
  70% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

// Сердце внутри кнопки-оценки — просто белый глиф без подложки-квадрата:
// кликает вся таблетка, в покое сердце белое, в пульсе — красное.
export const HeartSquare = styled.div<{
  $animate?: boolean;
  $beating?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #ffffff;

  ${({ $animate, $beating }) =>
    ($animate || $beating) &&
    css`
      color: #ff3d6e;

      /* светящийся ореол: красное сердце не сливается с тёмной кнопкой.
         Двойной слой — шире и ярче: внутренний красный + внешний
         светло-розовый ореол */
      svg {
        filter: drop-shadow(0 0 4px rgba(241, 237, 238, 1))
          drop-shadow(0 0 4px rgba(252, 247, 247, 1));
      }
    `}

  /* fill задан инлайн-стилем в самом heart.svg — перебиваем только
     через !important: в покое сердце белое, в пульсе — красное */
  svg path {
    fill: currentColor !important;
  }

  svg {
    width: 20px;
    height: 20px;
    animation: ${({ $animate, $beating }) =>
      $beating
        ? css`
            ${heartBeat} 0.7s ease infinite
          `
        : $animate
          ? css`
              ${heartBeat} 0.7s ease
            `
          : "none"};
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;

  /* <768: кнопки занимают всю ширину карточки (растут поровну, при
     нехватке места — перенос); <580 — столбиком, каждая своей строкой */
  @media (max-width: 767px) {
    align-items: stretch;
  }

  @media (max-width: 579px) {
    flex-direction: column;
  }
`;

// Под-ряд: GitHub + сердце. В обычной раскладке — просто строка в строке;
// на <580 кнопки заполняют ширину одной строкой, а если не помещаются —
// ряд переносится целиком (сердце всегда с GitHub).
export const ActionsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;

  @media (max-width: 767px) {
    flex: 1 1 auto;
  }

  @media (max-width: 579px) {
    width: 100%;
  }
`;

const buttonBase = `
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 20px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  /* Продавливание: при нажатии кнопка сжимается и возвращается — тактильный
     отклик и на мыши, и на тач-экранах. */
  transition: transform 0.15s cubic-bezier(0.22, 1, 0.36, 1);

  &:active {
    transform: scale(0.94);
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:active {
      transform: none;
    }
  }
`;

export const ButtonPrimary = styled.a<{ $pressed?: boolean }>`
  ${buttonBase};
  ${runningBorder}
  ${pressedFill}
  background: ${({ theme }) => theme.color.basic.primary};
  color: #ffffff;

  &:hover {
    background: ${({ theme }) => theme.color.basic.hover};
  }

  /* <768: растягивается на свободную ширину ряда; <580 — вся строка */
  @media (max-width: 767px) {
    flex: 1 1 auto;
    justify-content: center;
  }

  @media (max-width: 579px) {
    width: 100%;
  }
`;

export const ButtonSecondary = styled.a<{ $pressed?: boolean }>`
  ${buttonBase};
  ${runningBorder}
  ${pressedFill}
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT};

  /* <768: растягивается на свободную ширину ряда; <580 — вся строка */
  @media (max-width: 767px) {
    flex: 1 1 auto;
    justify-content: center;
  }

  @media (max-width: 579px) {
    width: 100%;
  }
`;

// Кнопка-оценка проекта: таблетка в стиле кнопок ряда («Сайт», GitHub) —
// то же анимированное сердце слева, справа надпись «Оценить».
export const LikeButton = styled.button<{ $pressed?: boolean }>`
  ${buttonBase};
  ${runningBorder}
  ${pressedFill}
  gap: 8px;
  /* те же отступы, что у кнопок ряда (buttonBase: padding 0 20px) */
  padding: 0 20px;
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT};

  /* <768: растягивается на свободную ширину ряда; <580 — вся строка */
  @media (max-width: 767px) {
    flex: 1 1 auto;
    justify-content: center;
  }

  @media (max-width: 579px) {
    width: 100%;
  }
`;

/* ——— Не найдено ——— */

export const NotFound = styled.p`
  margin-top: 20px;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 15px;
`;
