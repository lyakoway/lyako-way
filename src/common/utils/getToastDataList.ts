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
    backgroundColor: "#5a5a5a",
  },
  {
    id,
    type: "error",
    title: "Error",
    text: text,
    backgroundColor: "#d9534f",
  },
  {
    id,
    type: "info",
    title: "Info",
    text: text,
    backgroundColor: "#5bc0de",
  },
];
