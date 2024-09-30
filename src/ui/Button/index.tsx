import React, { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

const ButtonWrapper = styled.button<{
  $toOrder?: boolean;
  $toOrderHeader?: boolean;
  $modal?: boolean;
}>`
  display: flex;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  margin: ${({ $modal }) => ($modal ? "0" : "0 auto")};
  margin-top: 20px;
  width: ${({ $modal }) => ($modal ? "200px" : "260px")};
  height: 44px;
  background-color: ${({ theme, $modal }) =>
    $modal ? "#6a6f7c" : theme.color.background.button};
  border-radius: 8px;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: #ff8560;
    box-shadow: 0 15px 25px -5px rgba(darken(dodgerblue, 40%));
    transform: scale(1.03);
  }
  &:active {
    box-shadow: 0 4px 8px rgba(darken(dodgerblue, 30%));
    transform: scale(0.98);
  }
  ${({ $toOrder }) =>
    $toOrder &&
    css`
      border: 2px solid white;
      box-shadow: none;
    `}
  ${({ $toOrderHeader }) =>
    $toOrderHeader &&
    css`
      width: 260px;
      background-color: #ff8560;
      box-shadow: none;
      &:hover {
        background-color: #fa5f1d;
      }
      border: 2px solid white;
      margin-top: 0;
    `}
`;

const Label = styled.div`
  color: white;
  line-height: 17px;
  font-size: 14px;
  font-weight: 400;
  font-family: "Exo 2", sans-serif;
  text-transform: uppercase;
  text-align: center;
  margin-left: 12px;
  margin-top: 5px;
`;

interface ButtonProps {
  title?: string;
  toOrder?: boolean;
  toOrderHeader?: boolean;
  modal?: boolean;
  handleClick: () => void;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  title = "",
  toOrder = false,
  toOrderHeader = false,
  modal = false,
  handleClick,
}) => {
  return (
    <ButtonWrapper
      type="submit"
      $toOrder={toOrder}
      $toOrderHeader={toOrderHeader}
      onClick={handleClick}
      $modal={modal}
    >
      {children}
      {title && <Label>{title}</Label>}
    </ButtonWrapper>
  );
};

export default Button;
