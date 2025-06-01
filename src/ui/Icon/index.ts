import { ComponentType } from "react";

import { ReactComponent as Info } from "src/common/icon/info.svg";
import { ReactComponent as ErrorIcon } from "src/common/icon/error.svg";
import { ReactComponent as Success } from "src/common/icon/success.svg";

import { ReactComponent as LeftIcon } from "src/common/icon/left.svg";
import { ReactComponent as RightIcon } from "src/common/icon/right.svg";
import { ReactComponent as DeleteIcon } from "src/common/icon/delete.svg";
import { ReactComponent as SearchIcon } from "src/common/icon/search.svg";

const toastIcons = {
  info: Info,
  success: Success,
  error: ErrorIcon,
};

const commonIcons = {
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  delete: DeleteIcon,
  search: SearchIcon,
};

type IconComponent = ComponentType<{
  color?: string;
}>;

export const getToastIcon = (id: keyof typeof toastIcons): IconComponent =>
  toastIcons[id];
export const getCommonIcon = (id: keyof typeof commonIcons): IconComponent =>
  commonIcons[id];
