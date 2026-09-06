import Link from "next/link";
import styled, { css } from "styled-components";
import { gradientBorder } from "src/ui/Card";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_TEXT_MUTED,
  PANEL_BORDER,
  PANEL_ELEVATED,
  PANEL_ELEVATED_HOVER,
} from "src/common/lib/panelStyles";
import { runningBorder } from "src/common/lib/runningBorder";
import { pressedFill } from "src/common/lib/usePressAnimation";

export const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 22px;

  /* <768px: кнопки остаются компактными (как в блоге — не во всю ширину
     каждая), но распределяются по строке и заполняют её целиком: каждая
     растёт от натурального размера, свободное место делится поровну. */
  @media (max-width: 767px) {
    button {
      flex: 1 0 auto;
      justify-content: center;
      text-align: center;
    }
  }
`;

export const FilterChip = styled.button<{
  $active?: boolean;
  $pressed?: boolean;
}>`
  ${runningBorder}
  ${pressedFill}
  display: inline-flex;
  align-items: center;
  height: 40px;
  padding: 0 16px;
  border-radius: 12px;
  /* Продавливание: при нажатии сжимается и возвращается */
  transition: transform 0.15s cubic-bezier(0.22, 1, 0.36, 1),
    background-color 1s ease-in-out, border-color 1s ease-in-out,
    color 0.4s ease;

  &:active {
    transform: scale(0.94);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:active {
      transform: none;
    }
  }

  /* Активный фильтр: заливка — primary, бордер — цвет бегунка (#ff8560),
     чтобы рамка читалась на фоне заливки */
  border: 1px solid ${({ $active }) => ($active ? "#ff8560" : PANEL_BORDER)};
  background: ${({ $active, theme }) =>
    $active ? theme.color.basic.primary : "rgba(255, 255, 255, 0.04)"};
  color: ${({ $active }) => ($active ? "#ffffff" : PANEL_TEXT_SECONDARY)};

  /* Активный фильтр при наведении/нажатии: белая подсветка-тень */
  ${({ $active }) =>
    $active &&
    css`
      &:hover,
      &:active {
        box-shadow: 0 0 12px rgba(255, 255, 255, 0.35),
          0 0 4px rgba(255, 255, 255, 0.2);
      }
    `}

  /* Активный фильтр: бегущая рамка раскрыта. Двойная специфичность (&&)
     чтобы гарантированно перекрывать runningBorder и pressedFill —
     рамка держится, пока фильтр выбран, не исчезает после отпускания. */
  ${({ $active }) =>
    $active &&
    css`
      && [data-run-border] rect {
        stroke-dashoffset: -182;
      }
    `}
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

// Затемняющий оверлей с иконкой «глаз», проявляется при наведении на карточку.
export const ThumbOverlay = styled.div`
  position: absolute;
  inset: 0;
  /* поверх тематических обложек (ThemeThumb: z-index 1–2) — иначе глаз
      при наведении прятался под активной картинкой */
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 12, 16, 0.5);
  color: #ffffff;
  opacity: 0;
  transition: opacity 0.25s ease;

  svg {
    width: 34px;
    height: 34px;
    transform: scale(0.85);
    transition: transform 0.25s ease;
  }
`;

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  border-radius: 16px;
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  text-decoration: none;
  transition: border-color 0.25s ease, background 0.25s ease,
    transform 0.25s ease;

  &:hover {
    background: ${PANEL_ELEVATED_HOVER};
    border-color: rgba(255, 255, 255, 0.22);
    transform: translateY(-3px);
  }

  &:hover ${ThumbOverlay} {
    opacity: 1;
  }

  &:hover ${ThumbOverlay} svg {
    transform: scale(1);
  }
`;

// Декоративная обложка карточки (окно браузера) — не зависит от ассетов.
// $grad — индивидуальный градиент карточки.
export const CardThumb = styled.div<{ $grad?: string }>`
  position: relative;
  aspect-ratio: 16 / 10;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${({ $grad }) =>
    $grad ||
    "linear-gradient(135deg, rgba(249, 87, 33, 0.22), rgba(255, 255, 255, 0.04))"};
  color: rgba(255, 255, 255, 0.85);

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }

  svg {
    width: 44px;
    height: 44px;
  }
`;

// Тематическая обложка: обе версии (light/dark) лежат стопкой. Какая
// активна, решает html[data-theme] — атрибут ставит инлайн-скрипт в <head>
// ДО первой отрисовки, поэтому при загрузке сразу видна верная картинка:
// без вспышки светлой и без кроссфейда на старте. При переключении темы
// въезжающая проявляется СВЕРХУ (opacity 0→1 без задержки), прежняя держит
// непрозрачность под ней и гаснет лишь потом — базовое правило несёт
// задержку 3s, равную длительности кроссфейда. Так в кадре всегда смесь
// двух картинок: иначе сквозь них просвечивал бы градиент обложки и в
// конце возникал бы рывок контраста. S-кривая (sinusoidal ease-in-out) —
// мягкий старт и мягкий финиш. Геометрию (absolute/cover) наследует от
// правила `img` в CardThumb. Класс theme-thumb исключает элемент из
// глобального theme-transition (см. globalStyles) — иначе !important
// перебил бы переход именно в момент смены темы.
export const ThemeThumb = styled.img<{ $variant: "light" | "dark" }>`
  z-index: 1;
  opacity: 0;
  transition: opacity 3s cubic-bezier(0.37, 0, 0.63, 1) 3s;

  /* Светлая версия активна и когда атрибута нет вовсе (JS отключён —
     SSR по умолчанию светлая), и в светлой теме. */
  ${({ $variant }) =>
    $variant === "light" &&
    css`
      html:not([data-theme="dark"]) && {
        z-index: 2;
        opacity: 1;
        transition-delay: 0s;
      }
    `}

  ${({ $variant }) =>
    $variant === "dark" &&
    css`
      html[data-theme="dark"] && {
        z-index: 2;
        opacity: 1;
        transition-delay: 0s;
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

// Бейдж «в разработке» в углу обложки.
export const WipBadge = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  /* как у ThumbOverlay: выше тематических обложек (z-index 1–2) */
  z-index: 3;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(10, 12, 16, 0.62);
  border: 1px solid rgba(255, 255, 255, 0.22);
  color: #ffffff;
  font-size: 11px;
  font-weight: 500;
  backdrop-filter: blur(4px);
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 18px;
`;

export const CardName = styled.h3`
  margin: 0;
  color: ${PANEL_TEXT};
  font-size: 16px;
  font-weight: 600;
`;

export const CardDate = styled.span`
  color: ${PANEL_TEXT_MUTED};
  font-size: 12px;
`;

// Сердечко и число лайков проекта — под датой, в такт ей по стилю.
// Не интерактивно: карточка целиком ведёт в проект (лайк — на его странице),
// поэтому pointer-events off, чтобы ряд не перехватывал клик по ссылке.
export const LikeRow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  /* отступ от метрик с красными точками выше */
  margin-top: 8px;
  color: ${PANEL_TEXT_MUTED};
  font-size: 12px;
  pointer-events: none;

  svg {
    width: 13px;
    height: 13px;
  }

  /* нормализуем заливку heart.svg под приглушённый цвет ряда */
  svg,
  svg [fill] {
    fill: currentColor;
  }
`;

export const ChipList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 4px 0 0;
  padding: 0;
  list-style: none;
`;

export const Chip = styled.li`
  padding: 3px 9px;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 11px;
`;


/* ——— Новые разделы /portfolio: hero, цифры, фокус, research ——— */

export const HeroSection = styled.header`
  margin: 0 0 30px;
  display: grid;
  gap: 10px;
`;

export const HeroRole = styled.div`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: ${PANEL_TEXT_MUTED};
`;

export const HeroTitle = styled.p`
  margin: 0;
  max-width: 720px;
  color: ${PANEL_TEXT};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: 580px) {
    font-size: 24px;
  }
`;

export const HeroChips = styled.p`
  position: relative;
  margin: 2px 0 0;
  padding-left: 11px;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.3px;

  /* акцентная полоска слева */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 1px;
    bottom: 1px;
    width: 3px;
    border-radius: 2px;
    background: ${({ theme }) => theme.color.basic.primary};
  }
`;

// Шапка секции: иконка в плашке + капс-заголовок (как на /profile).
export const SectionHead = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 12px;
`;

export const SectionIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT};

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const SectionTitle = styled.h3`
  margin: 0;
  color: ${PANEL_TEXT_MUTED};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

/* AI engineering in numbers */
export const NumbersSection = styled.section`
  margin-top: 34px;
`;

export const StatsGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 580px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StatCard = styled.li`
  ${gradientBorder};
  padding: 16px;
  display: grid;
  gap: 3px;
  align-content: start;
  transition: border-color 0.25s ease, background 0.25s ease;

  &:hover {
    background: ${PANEL_ELEVATED_HOVER};
    border-color: rgba(255, 255, 255, 0.22);
  }
`;

export const StatValue = styled.div`
  color: ${PANEL_TEXT};
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
`;

export const StatLabel = styled.div`
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 13px;
  font-weight: 500;
  line-height: 1.35;
`;

export const StatNote = styled.div`
  color: ${PANEL_TEXT_MUTED};
  font-size: 11.5px;
  font-weight: 300;
  line-height: 1.45;
`;

/* Featured projects */
export const FeaturedSection = styled.section`
  margin-top: 34px;
`;

export const FeaturedGrid = styled.div`
  /* Ниже 768px — карточки в столбик. */
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;

  /* Reveal-обёртка растягивается на всю ячейку — карточки равной высоты */
  > * {
    height: 100%;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const CardDescription = styled.p`
  margin: 6px 0 0;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 13.5px;
  font-weight: 300;
  line-height: 1.55;
`;

export const CardMetrics = styled.ul`
  margin: 2px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 4px;

  li {
    position: relative;
    padding-left: 14px;
    color: ${PANEL_TEXT};
    font-size: 13px;
    font-weight: 500;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 6px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.basic.primary};
    }
  }
`;

// Подпись ссылки на кейс — сама карточка целиком кликабельна,
// поэтому это span (внутри <a> вложенная ссылка недопустима).
export const CaseLink = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  /* Ниже 768px карточка по высоте равна контенту — фиксируем отступ.
     От 768px карточки равной высоты — прижимаем ссылку к низу. */
  margin-top: 16px;
  color: ${PANEL_TEXT};
  font-size: 14px;
  font-weight: 600;
  transition: color 0.25s ease;

  .arrow {
    transition: transform 0.25s ease;
  }

  @media (min-width: 768px) {
    margin-top: auto;
    padding-top: 6px;
  }

  ${Card}:hover & {
    color: ${({ theme }) => theme.color.basic.primary};

    .arrow {
      transform: translateX(4px);
    }
  }
`;

/* Engineering focus */
export const FocusSection = styled.section`
  margin-top: 34px;
`;

export const FocusList = styled.div`
  display: grid;
`;

export const FocusRow = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 10px;
  padding: 10px 0 10px 16px;

  &:not(:last-child) {
    border-bottom: 1px solid ${PANEL_BORDER};
  }

  &::before {
    content: "";
    position: absolute;
    left: 2px;
    top: 16px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.basic.primary};
  }
`;

export const FocusName = styled.span`
  color: ${PANEL_TEXT};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  /* тире-разделитель перед технологиями */
  &::after {
    content: " —";
    color: ${PANEL_TEXT_MUTED};
    font-weight: 400;
  }
`;

export const FocusItems = styled.span`
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 13px;
  font-weight: 300;
  line-height: 1.5;
`;

/* Research & experiments */
export const ResearchSection = styled.section`
  margin-top: 34px;
`;

export const ResearchGrid = styled.div`
  /* Ниже 768px — карточки в столбик. */
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
