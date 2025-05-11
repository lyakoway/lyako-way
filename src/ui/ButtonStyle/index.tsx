import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  padding: 10px;
  background: rgb(81, 92, 102);

  box-shadow: 0 1px rgb(255 255 255 / 20%) inset, 0 3px 5px rgb(0 1 6 / 50%),
    0 0 1px 1px rgb(0 1 6 / 20%);
  cursor: pointer;
  &:hover {
    box-shadow: 0px 15px 25px -5px rgba(darken(dodgerblue, 40%));
    transform: scale(1.03);
  }
  &:active {
    box-shadow: 0px 4px 8px rgba(darken(dodgerblue, 30%));
    transform: scale(0.98);
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
  title: string;
  handleClick: () => void;
}

const ButtonStyle: FC<PropsWithChildren<IButtonProps>> = ({
  title,
  handleClick,
  children,
}) => {
  return (
    <ButtonWrapper type="submit" onClick={handleClick}>
      {children}
      {title && <Label>{title}</Label>}
    </ButtonWrapper>
  );
};

export default ButtonStyle;
