import { ReactNode } from "react";

export interface Toast {
  id: number;
  title: ReactNode;
  text: ReactNode;
  backgroundColor: string;
  type?: "info" | "success" | "error";
}
