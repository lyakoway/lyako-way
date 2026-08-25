import { FC, MouseEvent, PropsWithChildren, useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import MailLoader from "src/ui/MailLoader";
import RunBorder from "src/ui/RunBorder";
import { MailIconWrap } from "./style";
import { runningBorder } from "src/common/lib/runningBorder";
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

/* <580px (телефоны): кнопка «Отправить» — во всю ширину формы. */
const FULL_WIDTH = css`
  @media (max-width: 579px) {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  width: 160px;
  height: 50px;
  position: relative;
  /* Скругляем углы всем состояниям сразу (в т.ч. анимированной svg-обводке),
     не трогая саму анимацию. */
  border-radius: 12px;
  overflow: hidden;

  ${FULL_WIDTH};
`;

export const MailLoaderWrapper = styled.div`
  height: 50px;
  width: 100%;
  position: relative;
`;

export const Wrapper = styled.div`
  width: 160px;
  height: 50px;

  outline: none;
  transition: 1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;
  background-color: ${PANEL_ELEVATED};

  ${FULL_WIDTH};
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
  width: 160px;
  height: 50px;

  ${FULL_WIDTH};

  padding: 10px;

  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 6px;

  /* Панельный стиль проекта: полупрозрачный фон + граница. */
  border-radius: 12px;
  border: 1px solid ${PANEL_BORDER};
  background-color: ${PANEL_ELEVATED};

  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  color: #ffffff;

  /* Анимация наведения — та же, что у кнопок «Резюме» («Просмотреть» и др.):
     бегунок <RunBorder/> проходит по периметру, фон синхронно наполняется
     оранжевым. Работает с кнопкой любой ширины (в т.ч. во всю ширину <580px). */
  ${runningBorder};
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

  // Анимация иконки при клике: конверт стирается, самолётик рисуется
  // и улетает; затем конверт возвращается (см. MailIconWrap в style.ts).
  const [fly, setFly] = useState(false);

  const handleIconAndClick = (e: MouseEvent<HTMLButtonElement>) => {
    setFly(true);
    window.setTimeout(() => setFly(false), 2200);
    handleClick(e);
  };

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
      <ButtonContent onClick={handleIconAndClick}>
        <RunBorder radius={12} />
        <MailIconWrap $fly={fly} aria-hidden="true">
          <svg className="mail" viewBox="0 0 120 70" focusable="false">
            <polyline points="119,1 119,69 1,69 1,1" />
            <polyline points="119,1 60,45 1,1 119,1" />
          </svg>
          <svg className="plane" viewBox="0 0 120 110" focusable="false">
            <polyline points="119,1 1,59 106,80 119,1" />
            <polyline points="119,1 40,67 43,105 69,73" />
          </svg>
        </MailIconWrap>
        {children}
        {title && <Label>{title}</Label>}
      </ButtonContent>
    </ButtonWrapper>
  );
};

export default ButtonForm;
