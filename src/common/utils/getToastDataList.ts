import { Person } from "src/ui/Toast/Toast";

export interface IToastProps {
  text: string;
  id: number;
  title: string;
}

export const getToastDataList = ({
  text,
  id,
  title,
}: IToastProps): Person[] => [
  {
    id,
    type: "success",
    title: title,
    text: text,
    borderColor: "#fff",
  },
  {
    id,
    type: "error",
    title: title,
    text: text,
    borderColor: "#d9534f",
  },
  {
    id,
    type: "info",
    title: title,
    text: text,
    borderColor: "#5bc0de",
  },
];
