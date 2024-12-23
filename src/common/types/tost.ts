export interface Tost {
  id: number;
  title: string;
  text: string;
  backgroundColor: string;
  type?: "info" | "success" | "error";
}
