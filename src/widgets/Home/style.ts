import styled from "styled-components";

// Сцена «Дом» рассчитана на фиксированный холст 960px. Внутри более узкой
// колонки контента vCard масштабируем её под ширину (useFitScale) и
// центрируем; выходящие за холст декоративные элементы обрезаются.
export const HomeStage = styled.div<{ $scale: number }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  /* высота = масштабированная высота холста (700px), иначе transform:scale
     оставляет пустое место (layout-бокс не сжимается). */
  height: ${({ $scale }) => Math.round(700 * $scale)}px;

  & > div {
    flex: none;
    transform: scale(${({ $scale }) => $scale});
    transform-origin: top center;
  }

  @media (min-width: 1024px) {
    /* высота = масштабированная высота сцены (холст 720px), сцена прижата
       к низу — стол касается нижней границы блока */
    height: ${({ $scale }) => Math.round(720 * $scale)}px;
    align-items: flex-end;

    & > div {
      transform-origin: bottom center;
    }
  }

  /* на широком экране тянемся на всю высоту карточки (= высоте сайдбара),
     сцена остаётся прижатой к низу */
  @media (min-width: 1250px) {
    height: auto;
    flex: 1;
  }
`;
