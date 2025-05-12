import { FC } from "react";
import styled, { css, keyframes } from "styled-components";

export interface IPropsMailLine {
  id: string;
  X0: string;
  X20: string;
  X21: string;
  X40: string;
  X60: string;
  X80: string;
  X81: string;
  X100: string;
}

const mailMove = keyframes`
  0% {
    opacity: 0;
    left: 3%
  }
  40% {
    opacity: 1;
    left: 50%;
  }
  60% {
    left: 50%;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    left: 95%;
  }
`;

const mailLine = ($itemLine: IPropsMailLine) => keyframes`
  0% {
    transform: translateX(${$itemLine.X0});
  }
  20% {
    transform: translateX(${$itemLine.X20});
  }
  20.0001% {
    transform: translateX(${$itemLine.X21});
  }
  40% {
    transform: translateX(${$itemLine.X40});
  }
  60% {
    transform: translateX(${$itemLine.X60});
  }
  80% {
    transform: translateX(${$itemLine.X80});
  }
  80.1% {
    transform: translateX(${$itemLine.X81});
  }
  100% {
    transform: translateX(${$itemLine.X100});
  }
`;

export const MailContainer = styled.div`
  display: flex;
  position: absolute;
  background-color: ${({ theme }) => theme.color.background.modal};
  border-radius: 6px;
  animation: ${mailMove} 3s infinite;
`;

const LineContainer = styled.div`
  position: absolute;
  left: -70px;
  width: 60px;
  overflow: hidden;
`;

const Line = styled.div<{ $itemLine: IPropsMailLine }>`
  margin-top: 4px;
  width: 70px;
  height: 4px;
  background: ${({ theme }) => theme.color.background.inversion};
  border-radius: 6px;

  ${({ $itemLine }) =>
    css`
      animation: ${mailLine($itemLine)} 3s infinite;
    `}
`;

const Mail = styled.div`
  width: 60px;
  height: 45px;
  border: solid 5px ${({ theme }) => theme.color.background.inversion};
  border-radius: 10px;
  overflow: hidden;
  &:before {
    content: "";
    display: inline-block;
    position: relative;
    width: 38px;
    height: 38px;
    border-top: solid 5px ${({ theme }) => theme.color.background.inversion};
    border-left: solid 5px ${({ theme }) => theme.color.background.inversion};
    transform: rotate(45deg);
    top: 14px;
    left: 6px;
  }
  &:after {
    content: "";
    display: inline-block;
    position: relative;
    width: 50px;
    height: 50px;
    border: solid 5px ${({ theme }) => theme.color.background.inversion};
    transform: rotate(45deg);
    top: -70px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.color.background.modal};
  }
`;

export const propsMailLine: IPropsMailLine[] = [
  {
    id: "line-1",
    X0: "-100%",
    X20: "100%",
    X21: "-100%",
    X40: "20%",
    X60: "20%",
    X80: "-100%",
    X81: "100%",
    X100: "-100%",
  },
  {
    id: "line-2",
    X0: "-80%",
    X20: "100%",
    X21: "-100%",
    X40: "120%",
    X60: "120%",
    X80: "-80%",
    X81: "80%",
    X100: "-120%",
  },
  {
    id: "line-3",
    X0: "-100%",
    X20: "100%",
    X21: "-100%",
    X40: "40%",
    X60: "40%",
    X80: "-100%",
    X81: "100%",
    X100: "-100%",
  },
  {
    id: "line-4",
    X0: "-80%",
    X20: "100%",
    X21: "-100%",
    X40: "150%",
    X60: "150%",
    X80: "-80%",
    X81: "80%",
    X100: "-120%",
  },
  {
    id: "line-5",
    X0: "-100%",
    X20: "100%",
    X21: "-100%",
    X40: "60%",
    X60: "60%",
    X80: "-100%",
    X81: "100%",
    X100: "-100%",
  },
];

const MailLoader: FC = () => {
  return (
    <MailContainer>
      <LineContainer>
        {propsMailLine.map((item) => (
          <Line key={item.id} $itemLine={item}></Line>
        ))}
      </LineContainer>
      <Mail />
    </MailContainer>
  );
};

export default MailLoader;
