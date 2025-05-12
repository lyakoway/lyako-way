import { FC, PropsWithChildren, useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import MailLoader from "src/ui/MailLoader";

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
  background-color: ${({ theme }) => theme.color.background.button};
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

  background-color: ${({ theme }) => theme.color.background.button};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5) inset,
    0 1px 1px 1px rgba(255, 255, 255, 0.4), 0 -1px 1px 1px rgba(0, 0, 0, 0.1);
`;

export const Result = styled.div<{ status?: string }>`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ status }) =>
    status === "success" ? "#4caf50" : "#ec3b03"};

  transition: background-color 0.35s ease;
  animation: ${ani1} 1s forwards;

  &:before {
    font-weight: 900;
    font-size: 24px;
    color: #ffffff;
    content: "\\2718";
    animation: ${ani} 1s forwards;

    ${({ status }) =>
      status === "success" &&
      css`
        color: #ffffff;
        content: "\\2713";
      `};
  }
`;

const ButtonContent = styled.button`
  width: 120px;
  height: 40px;

  padding: 10px;

  cursor: pointer;
  outline: none;
  transition: 1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 6px;

  background-color: ${({ theme }) => theme.color.background.button};
  box-shadow: 0 1px rgb(255 255 255 / 20%) inset, 0 3px 5px rgb(0 1 6 / 50%),
    0 0 1px 1px rgb(0 1 6 / 20%);

  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  color: white;

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

  &:hover {
    transition: 1s ease-in-out;
    background-color: #ff8560;
    color: white;
  }

  &:hover svg {
    stroke-dashoffset: -480;
  }

  &:active {
    background-color: ${({ theme }) => theme.color.background.button};
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5) inset,
      0 1px 1px 1px rgba(255, 255, 255, 0.4), 0 -1px 1px 1px rgba(0, 0, 0, 0.1);
    transition: none;
    color: black;
    cursor: pointer;
  }
`;

const Label = styled.div`
  color: white;
  line-height: 17px;
  font-size: 14px;
  font-weight: 400;
  font-family: "Exo 2", sans-serif;
  text-align: center;
  text-transform: uppercase;
`;

interface IButtonProps {
  title?: string;
  handleClick?: () => void;
  loading?: boolean;
  status?: "success" | "error" | null;
}

const ButtonForm: FC<PropsWithChildren<IButtonProps>> = ({
  title,
  handleClick,
  children,
  loading,
  status,
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
          <Result status={statusRequest} />
        </Wrapper>
      </ButtonWrapper>
    );
  }

  return (
    <ButtonWrapper>
      <ButtonContent type="submit" onClick={handleClick}>
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

ButtonForm.defaultProps = {
  loading: false,
  title: "",
  status: null,
  handleClick: () => {},
};

export default ButtonForm;
