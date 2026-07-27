import { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { Spinner } from "src/ui/Spinner";
import {
  PANEL_BORDER,
  PANEL_ELEVATED,
  PANEL_ELEVATED_HOVER,
} from "src/common/lib/panelStyles";

// В стиле проекта: во всю ширину поля, полупрозрачный «приподнятый» фон с
// границей, белый текст. Оранжевый (границы + текст) — только на наведении,
// как у остальных контролов, чтобы кнопка не кричала цветом.
const ButtonWrapper = styled.button<{ disabled?: boolean }>`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
  padding: 10px;
  border: 1px solid ${PANEL_BORDER};
  border-radius: 10px;
  background: ${PANEL_ELEVATED};
  color: #ffffff;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background: ${PANEL_ELEVATED_HOVER};
    border-color: ${({ theme }) => theme.color.basic.primaryLight};
    color: ${({ theme }) => theme.color.basic.primaryLight};
    transform: translateY(-1px);
  }
  &:active {
    transform: scale(0.99);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
      transform: none;
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
    </ButtonWrapper>
  );
};

export default ButtonStyle;
