import { FC, useEffect, useState } from "react";

import { SelectContainer, TextareaStyle, Text } from "./style";

interface ITextareaProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "submit" | "password";
  setMessage?: (value: string) => void;
  message?: string;
}

export const Textarea: FC<ITextareaProps> = ({
  label = "",
  placeholder = "",
  type = "text",
  setMessage = () => {},
  message = "",
}) => {
  const handleClick = (valueInput: string) => {
    setMessage(valueInput);
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      const labels = document.querySelectorAll("label");
      labels.forEach((label) => {
        label.innerHTML = label.innerText
          .split("")
          .map(
            (letter, idx) =>
              `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
          )
          .join("");
      });
    }
  }, []);

  return (
    <SelectContainer $boxShadow={!!message}>
      <TextareaStyle
        required
        id={type}
        name={type}
        placeholder={placeholder}
        onChange={(e) => handleClick(e.target.value)}
      />
      {label && <Text>{label}</Text>}
    </SelectContainer>
  );
};
