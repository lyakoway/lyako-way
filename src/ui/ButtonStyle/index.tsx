import { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { Spinner } from "src/ui/Spinner";
import { PANEL_BORDER, PANEL_ELEVATED } from "src/common/lib/panelStyles";
import { runningBorder } from "src/common/lib/runningBorder";
import RunBorder from "src/ui/RunBorder";

// В стиле проекта: во всю ширину поля, полупрозрачный «приподнятый» фон с
// границей, белый текст. Оранжевый (границы + текст) — только на наведении,
// как у остальных контролов, чтобы кнопка не кричала цветом.
const ButtonWrapper = styled.button<{ disabled?: boolean }>`
  ${runningBorder}
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
  height: 40px;
  padding: 0 16px;
  border: 1px solid ${PANEL_BORDER};
  border-radius: 12px;
  background: ${PANEL_ELEVATED};
  color: #ffffff;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;

const Label = styled.div`
  color: inherit;
  line-height: 17px;
  font-size: 14px;
  font-weight: 400;
  font-family: "Exo 2", sans-serif;
  text-align: center;
  text-transform: uppercase;
`;

interface IButtonProps {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  handleClick: () => void;
}

const ButtonStyle: FC<PropsWithChildren<IButtonProps>> = ({
  title,
  disabled = false,
  loading = false,
  handleClick,
  children,
}) => {
  const onClick = () => {
    if (!disabled && !loading) {
      handleClick();
    }
  };

  if (loading) {
    return (
      <ButtonWrapper type="submit">
        <Spinner size="small" />
      </ButtonWrapper>
    );
  }
  return (
    <ButtonWrapper type="submit" onClick={onClick} disabled={disabled}>
      {children}
      {title && <Label>{title}</Label>}
      <RunBorder radius={12} />
    </ButtonWrapper>
  );
};

export default ButtonStyle;
