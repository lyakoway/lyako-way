import type { FC } from "react";

import { ReactComponent as SpinnerWhite } from "src/common/icon/spinner.svg";
import { SpinnerIconWrapper } from "./SpinnerIconWrapper";
import type { Size } from "./SpinnerIconWrapper";

export interface ISpinnerProps {
  /** Размер компонента */
  size?: Size;
  color?: string;
}

export const Spinner: FC<ISpinnerProps> = ({
  size = "big",
  color = "#ffff",
}) => {
  return (
    <SpinnerIconWrapper size={size} color={color}>
      <SpinnerWhite />
    </SpinnerIconWrapper>
  );
};
