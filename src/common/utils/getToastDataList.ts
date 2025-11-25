import { Toast } from "src/common/types/toast";

export interface IToastProps {
  text: string;
  id: number;
  title?: string;
}

export const getToastDataList = ({ text, id, title }: IToastProps): Toast[] => [
  {
    id,
    type: "success",
    title: title,
    text: text,
    backgroundColor: "#fff",
  },
  {
    id,
    type: "error",
    title: title,
    text: text,
    backgroundColor: "#d9534f",
  },
  {
    id,
    type: "info",
    title: title,
    text: text,
    backgroundColor: "#5bc0de",
  },
];
