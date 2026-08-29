import styled, { css, keyframes } from "styled-components";
import {
  PANEL_TEXT,
  PANEL_ELEVATED_HOVER,
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
  ${pressedFill}
  background: ${({ theme }) => theme.color.basic.primary};
  color: #ffffff;

  /* Постоянный бордер цвета бегунка (без бегущей дорожки) — как у кнопки
     «Скачать PDF» в резюме */
  border: 1px solid #ff8560;

  /* Наведение/нажатие: белая подсветка-тень вокруг кнопки */
  &:hover,
  &:active {
    background: ${({ theme }) => theme.color.basic.hover};
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.35),
      0 0 4px rgba(255, 255, 255, 0.2);
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

/* ——— Взгляд AI-инженера: чек-лист принципов + замеры ——— */

export const AiSection = styled.section`
  margin-top: 30px;
  display: grid;
  gap: 14px;
`;

// Принципы — карточки в две колонки на широком экране, с бейджем статуса слева.
export const AiPrinciples = styled.div`
  display: grid;
  gap: 10px;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const AiPrinciple = styled.div`
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  border-radius: 12px;
  padding: 14px 16px;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: start;
`;

// Бейдж статуса: ✓ — закрыто, ◐ — частично, · — в планах.
export const AiStatus = styled.span<{ $status: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-top: 1px;
  border-radius: 50%;
  border: 1px solid
    ${({ $status, theme }) =>
      $status === "done" ? theme.color.basic.primary : PANEL_BORDER};
  color: ${({ $status, theme }) =>
    $status === "done"
      ? theme.color.basic.primary
      : $status === "partial"
        ? PANEL_TEXT_SECONDARY
        : PANEL_TEXT_MUTED};
  font-size: 12px;
  line-height: 1;
  user-select: none;
`;

export const AiPrincipleBody = styled.div`
  display: grid;
  gap: 5px;
`;

export const AiPrincipleTitle = styled.p`
  margin: 0;
  color: ${PANEL_TEXT};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
`;

// Формулировка принципа (что проверяем) — тише, чем результат в проекте.
export const AiPrincipleCheck = styled.p`
  margin: 0;
  color: ${PANEL_TEXT_MUTED};
  font-size: 13px;
  font-weight: 300;
  line-height: 1.5;
`;

export const AiPrincipleResult = styled.p`
  margin: 0;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 13px;
  font-weight: 300;
  line-height: 1.55;
`;

// Карточка-таблица: горизонтальный скролл на узких экранах вместо поломки сетки.
export const AiCard = styled.div`
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  border-radius: 12px;
  padding: 16px 18px;
  overflow-x: auto;
`;

export const AiTableTitle = styled.p`
  margin: 0 0 10px;
  color: ${PANEL_TEXT};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
`;

export const AiTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  color: ${PANEL_TEXT_SECONDARY};

  th {
    text-align: left;
    padding: 7px 10px;
    color: ${PANEL_TEXT_MUTED};
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    border-bottom: 1px solid ${PANEL_BORDER};
    white-space: nowrap;
  }

  td {
    padding: 7px 10px;
    border-bottom: 1px solid ${PANEL_BORDER};
    font-weight: 300;
    line-height: 1.45;
    white-space: nowrap;
  }

  /* Первый столбец — название сценария: переносим, остальное — числа. */
  th:first-child,
  td:first-child {
    white-space: normal;
    min-width: 180px;
  }

  tr:last-child td {
    border-bottom: none;
  }

  tr[data-highlight="true"] td {
    color: ${PANEL_TEXT};
    font-weight: 500;
    background: rgba(255, 133, 96, 0.07);
  }

  tr[data-highlight="true"] td:first-child {
    box-shadow: inset 3px 0 0 ${({ theme }) => theme.color.basic.primary};
  }
`;

export const AiFootnote = styled.p`
  margin: 10px 0 0;
  color: ${PANEL_TEXT_MUTED};
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
`;

// Итоговый вывод — карточка с оранжевой линейкой слева (акцент на формулу).
export const AiConclusion = styled.p`
  margin: 0;
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  border-left: 3px solid ${({ theme }) => theme.color.basic.primary};
  border-radius: 12px;
  padding: 14px 16px;
  color: ${PANEL_TEXT};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
`;

// Пробелы — тем же маркером, что возможности, но текст тише: это «не закрыто».
export const AiGap = styled(Feature)`
  color: ${PANEL_TEXT_MUTED};
`;

/* ——— Сценарии применения: зачем проект нужен ——— */

// Блок «Для чего нужен проект» — один общий аккордеон в стиле select:
// заголовок в одну строку, по клику раскрывается сетка сценариев.
// Аккордеон «Несколько сценариев» — единая подложка вокруг заголовка и
// контента: видно, что карточки относятся к этому аккордеону.
export const AiUseCases = styled.div<{ $open?: boolean }>`
  display: grid;
  gap: ${({ $open }) => ($open ? "14px" : "0")};
  background: ${PANEL_ELEVATED};
  border: 1px solid
    ${({ $open }) => ($open ? "#ff8560" : PANEL_BORDER)};
  border-radius: 16px;
  /* Верхний паддинг постоянный (нулевой): анимированное изменение вертикального
     паддинга сдвигало заголовок со стрелкой при раскрытии. Нижний растёт
     только вниз, под контентом, — на заголовок не влияет. */
  padding: 0 18px ${({ $open }) => ($open ? "16px" : "0")};
  transition: border-color 0.3s ease, padding 0.35s ease,
    box-shadow 0.3s ease;

  /* Наведение на аккордеон (заголовок или контент): оранжевая рамка
     + подсветка области нажатия */
  &:hover {
    border-color: #ff8560;
    box-shadow: inset 0 0 0 1px rgba(255, 133, 96, 0.35),
      0 0 14px rgba(255, 133, 96, 0.18);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

// Кнопка-заголовок аккордеона: прозрачная (подложка — у контейнера),
// текст + стрелка-индикатор раскрытия. Вертикальный паддинг живёт здесь,
// а не в контейнере: при раскрытии заголовок остаётся на месте, контент
// разворачивается под ним. Без scale на :active — нажатие не сдвигает
// текст и стрелку.
export const AiUseCase = styled.button<{ $open?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
  min-height: 40px;
  padding: 12px 0;
  background: none;
  border: none;
  border-radius: 10px;
  color: ${PANEL_TEXT};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  -webkit-tap-highlight-color: transparent;
  transition: color 0.2s ease;

  /* Стрелка-индикатор раскрытия */
  &::after {
    content: "";
    flex-shrink: 0;
    width: 8px;
    height: 8px;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: rotate(${({ $open }) => ($open ? "225deg" : "45deg")});
    transition: transform 0.3s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      transition: none;
    }
  }
`;

// Раскрывающийся контент: сетка карточек сценариев. Техника grid-rows
// (0fr -> 1fr): контент НЕ сжимается при анимации, в отличие от max-height.
export const AiUseCasesContent = styled.div<{ $open?: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};
  transition: grid-template-rows 0.45s ease;

  /* Внутренняя обёртка держит min-height:0 — иначе 0fr не схлопнется */
  > div {
    min-height: 0;
    overflow: hidden;
  }

  @media (min-width: 700px) {
    > div > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      align-items: start;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

// Карточка сценария (как была — сетка внутри раскрытого контента).
// Подсветка при наведении — как у карточек «Что я делаю» на «Услугах»:
// светлее фон + светлая рамка.
export const AiUseCaseCard = styled.div`
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  border-radius: 12px;
  padding: 14px 16px;
  display: grid;
  gap: 5px;
  align-content: start;
  transition: border-color 0.25s ease, background 0.25s ease;

  &:hover {
    background: ${PANEL_ELEVATED_HOVER};
    border-color: rgba(255, 255, 255, 0.22);
  }
`;

// Номер сценария — оранжевый, моноширинный: отличает пункты от чек-листа.
export const AiUseCaseNum = styled.span`
  color: ${({ theme }) => theme.color.basic.primary};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.5px;
  font-variant-numeric: tabular-nums;
`;

export const AiUseCaseTitle = styled.p`
  margin: 0;
  color: ${PANEL_TEXT};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
`;

export const AiUseCaseText = styled.p`
  margin: 0;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 13px;
  font-weight: 300;
  line-height: 1.55;
`;

/* ——— Схема проекта: дорожки сверху вниз ——— */

export const AiDiagram = styled.div`
  display: grid;
  gap: 0;
`;

// Дорожка-слой: на широком экране заголовок слева (как MetaRow), ноды — рядом;
// на узком заголовок уезжает вверх. Вертикальный ритм задают паддинги дорожки.
export const AiLane = styled.div`
  display: grid;
  gap: 8px;
  padding: 9px 0;

  @media (min-width: 700px) {
    grid-template-columns: 150px minmax(0, 1fr);
    align-items: center;
    gap: 14px;
  }
`;

export const AiLaneTitle = styled.p`
  margin: 0;
  color: ${PANEL_TEXT_MUTED};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  line-height: 1.4;

  @media (min-width: 700px) {
    padding-top: 2px;
  }
`;

export const AiNodes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const AiNode = styled.div<{ $accent?: boolean }>`
  background: ${PANEL_ELEVATED};
  border: 1px solid
    ${({ $accent, theme }) =>
      $accent ? theme.color.basic.primary : PANEL_BORDER};
  border-radius: 10px;
  padding: 8px 12px;
  display: grid;
  gap: 2px;
  min-width: 0;
`;

export const AiNodeLabel = styled.span`
  color: ${PANEL_TEXT};
  font-size: 13px;
  font-weight: 500;
  line-height: 1.35;
`;

export const AiNodeNote = styled.span`
  color: ${PANEL_TEXT_MUTED};
  font-size: 11.5px;
  font-weight: 300;
  line-height: 1.35;
`;

// Стрелка между дорожками: по центру колонки нод (на узком — по центру всей
// строки). 164px = 150px колонки заголовка + 14px зазора сетки.
export const AiFlow = styled.div`
  display: flex;
  justify-content: center;
  padding: 1px 0;
  color: ${PANEL_TEXT_MUTED};
  font-size: 14px;
  line-height: 1;
  user-select: none;

  @media (min-width: 700px) {
    margin-left: 164px;
    width: calc(100% - 164px);
  }
`;

/* ——— Не найдено ——— */

export const NotFound = styled.p`
  margin-top: 20px;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 15px;
`;
