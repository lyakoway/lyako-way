import { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { Spinner } from "src/ui/Spinner";
import { PANEL_BORDER, PANEL_ELEVATED } from "src/common/lib/panelStyles";
import { runningBorder } from "src/common/lib/runningBorder";
import { usePressAnimation, pressedFill } from "src/common/lib/usePressAnimation";
import RunBorder from "src/ui/RunBorder";

// В стиле проекта: во всю ширину поля, полупрозрачный «приподнятый» фон с
// границей, белый текст. Оранжевый (границы + текст) — только на наведении,
// как у остальных контролов, чтобы кнопка не кричала цветом.
const ButtonWrapper = styled.button<{
  disabled?: boolean;
  $pressed?: boolean;
  $scaling?: boolean;
}>`
  ${runningBorder}
  ${pressedFill}
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
  height: 40px;
  padding: 0 16px;
  /* Продавливание через $scaling (JS pointerdown — мгновенно на любом
     касании). CSS :active на тач срабатывает с задержкой — не используем. */
  transition: transform 0.15s cubic-bezier(0.22, 1, 0.36, 1),
    background-color 1s ease-in-out, border-color 1s ease-in-out,
    color 0.4s ease;

  ${({ $scaling }) =>
    $scaling &&
    css`
      transform: scale(0.94);
    `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
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
  const press = usePressAnimation();

  const onClick = () => {
    if (!disabled && !loading) {
      handleClick();
    }
  };

  if (loading) {
    return (
      <ButtonWrapper type="submit" disabled>
        <Spinner size="small" />
      </ButtonWrapper>
    );
  }

  return (
    <ButtonWrapper
      type="submit"
      onClick={onClick}
      disabled={disabled}
      $pressed={press.pressed}
      $scaling={press.scaling}
      {...press.pressHandlers}
    >
      {children}
      {title && <Label>{title}</Label>}
      <RunBorder radius={12} />
    </ButtonWrapper>
  );
};

export default ButtonStyle;
