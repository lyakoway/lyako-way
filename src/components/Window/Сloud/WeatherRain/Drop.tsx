import React from "react";
import { DropStyled } from "./style";

interface DropProps {
  left: number;
  animationDuration: number;
}

const Drop: React.FC<DropProps> = ({ left, animationDuration }) => {
  return <DropStyled $animationDuration={animationDuration} style={{ left }} />;
};

export default Drop;
