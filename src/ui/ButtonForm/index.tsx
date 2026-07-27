import { FC, MouseEvent, PropsWithChildren, useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import MailLoader from "src/ui/MailLoader";
import { PANEL_BORDER, PANEL_ELEVATED } from "src/common/lib/panelStyles";

const ani = keyframes`
  0% {
    opacity: 0;
    transform: rotate(0);
  }
  100% {
    opacity: 1;
    transform: rotate(720deg);
  }
`;

const ani1 = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ButtonWrapper = styled.div`
  width: 120px;
  height: 40px;
  position: relative;
  /* Скругляем углы всем состояниям сразу (в т.ч. анимированной svg-обводке),
     не трогая саму анимацию. */
  border-radius: 10px;
  overflow: hidden;
`;

export const MailLoaderWrapper = styled.div`
  height: 40px;
  width: 100%;
  position: relative;
`;

export const Wrapper = styled.div`
  width: 120px;
  height: 40px;

  outline: none;
  transition: 1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  background-color: ${PANEL_ELEVATED};
`;

export const Result = styled.div<{ $status?: string }>`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ $status }) =>
    $status === "success" ? "#4caf50" : "#ec3b03"};

  transition: background-color 0.35s ease;
  animation: ${ani1} 1s forwards;

  &:before {
    font-weight: 900;
    font-size: 24px;
    color: #ffffff;
    content: "✘";
    animation: ${ani} 1s forwards;

    ${({ $status }) =>
      $status === "success" &&
      css`
        color: #ffffff;
        content: "✓";
      `};
  }
`;

const ButtonContent = styled.button`
  width: 120px;
  height: 40px;

  padding: 10px;

  cursor: pointer;
  outline: none;
  /* Заливка/граница меняются за 1s — синхронно с пробегающим бегунком (svg),
     поэтому кнопка «наполняется» оранжевым пока линия идёт вокруг, и так же
     плавно теряет цвет в обратную сторону. */
  transition: background-color 1s ease-in-out, border-color 1s ease-in-out,
    transform 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 6px;

  /* Панельный стиль проекта: полупрозрачный фон + граница. */
  border-radius: 10px;
  border: 1px solid ${PANEL_BORDER};
  background-color: ${PANEL_ELEVATED};

  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  color: #ffffff;

  /* Анимированная обводка (рисуется оранжевым при наведении) — без изменений. */
  svg {
    position: absolute;
    left: 0;
    top: 0;
    fill: none;
    stroke: #ff8560;
    stroke-dasharray: 150 480;
    stroke-dashoffset: 150;
    transition: 1s ease-in-out;
  }

  &:hover,
  &:focus-visible,
  &:active {
    /* Заливка — брендовый оранжевый (темнее бегунка), текст остаётся белым. */
    background-color: ${({ theme }) => theme.color.basic.primary};
    border-color: #ff8560;
    color: #ffffff;
  }

  /* Обводка «рисуется» и при наведении, и при нажатии/тапе (мобилка), и в
     фокусе — а не только при снятии ховера. */
  &:hover svg,
  &:focus svg,
  &:active svg {
    stroke-dashoffset: -480;
  }

  &:active {
    transform: scale(0.97);
  }
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
  title?: string;
  handleClick?: (value: MouseEvent<HTMLElement>) => void;
  loading?: boolean;
  status?: "success" | "error" | null;
}

const ButtonForm: FC<PropsWithChildren<IButtonProps>> = ({
  title = "",
  handleClick = () => {},
  children,
  loading = false,
  status = null,
}) => {
  const [statusRequest, setStatusRequest] = useState<
    "success" | "error" | null
  >(null);

  useEffect(() => {
    setStatusRequest(status);
    if (status) {
      const timeoutId = setTimeout(() => {
        setStatusRequest(null);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [status]);

  if (loading) {
    return (
      <MailLoaderWrapper>
        <MailLoader />
      </MailLoaderWrapper>
    );
  }

  if (statusRequest) {
    return (
      <ButtonWrapper>
        <Wrapper>
          <Result $status={statusRequest} />
        </Wrapper>
      </ButtonWrapper>
    );
  }

  return (
    <ButtonWrapper>
      <ButtonContent onClick={(e) => handleClick(e)}>
        <svg
          width="120px"
          height="40px"
          viewBox="0 0 120 40"
          className="border"
        >
          <polyline points="119,1 119,39 1,39 1,1 119,1" className="bg-line" />
          <polyline points="119,1 119,39 1,39 1,1 119,1" className="hl-line" />
        </svg>
        {children}
        {title && <Label>{title}</Label>}
      </ButtonContent>
    </ButtonWrapper>
  );
};

export default ButtonForm;
