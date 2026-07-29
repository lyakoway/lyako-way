import styled from "styled-components";
import { PANEL_TEXT_MUTED } from "src/common/lib/panelStyles";

// Знак бренда «LYAK⊙WAY»: вместо «O» — круг (идеальная фигура, путь к
// совершенству) с искрой внутри (AI). Кольцо рисуется цветом текста,
// искра — акцентом, поэтому знак живёт в обеих темах без отдельных файлов.
export const Brand = styled.p`
  display: inline-flex;
  align-items: center;
  margin: 0 0 8px;
  color: ${PANEL_TEXT_MUTED};
  font-family: "Exo 2", sans-serif;
  /* <580px — компактный размер (крупный 18px только с 580px). */
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 2px;
  text-transform: uppercase;
  white-space: nowrap;

  /* Знак стоит на месте «O», поэтому по бокам — только межбуквенный зазор
     (letter-spacing уже добавлен после «K» и после знака). */
  svg {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    margin-right: 1px;
  }

  svg path {
    fill: ${({ theme }) => theme.color.basic.primaryLight};
  }

  @media (min-width: 580px) {
    margin-bottom: 10px;
    font-size: 18px;
    letter-spacing: 2.8px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
