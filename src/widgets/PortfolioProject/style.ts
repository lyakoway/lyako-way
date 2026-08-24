import styled from "styled-components";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_TEXT_MUTED,
  PANEL_BORDER,
  PANEL_ELEVATED,
} from "src/common/lib/panelStyles";
import { runningBorder } from "src/common/lib/runningBorder";

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
  transition: border-color 0.25s ease, transform 0.25s ease;

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

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;
`;

// Под-ряд: GitHub + сердце. В обычной раскладке — просто строка в строке;
// на <580 кнопки заполняют ширину одной строкой, а если не помещаются —
// ряд переносится целиком (сердце всегда с GitHub).
export const ActionsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;

  @media (max-width: 579px) {
    flex: 1 1 auto;
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

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ButtonPrimary = styled.a`
  ${buttonBase};
  ${runningBorder}
  background: ${({ theme }) => theme.color.basic.primary};
  color: #ffffff;

  &:hover {
    background: ${({ theme }) => theme.color.basic.hover};
  }

  /* <580: кнопки заполняют ширину одной строкой; не помещается — перенос */
  @media (max-width: 579px) {
    flex: 1 1 auto;
    justify-content: center;
  }
`;

export const ButtonSecondary = styled.a`
  ${buttonBase};
  ${runningBorder}
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT};

  /* <580: GitHub растягивается на всё место рядом с квадратным сердцем */
  @media (max-width: 579px) {
    flex: 1 1 auto;
    justify-content: center;
  }
`;

/* ——— Не найдено ——— */

export const NotFound = styled.p`
  margin-top: 20px;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 15px;
`;
