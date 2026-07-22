import { FC } from "react";

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

  return (
    <SelectContainer $boxShadow={!!message}>
      <TextareaStyle
        required
        id={type}
        name={type}
        aria-label={label || placeholder || "message"}
        placeholder={placeholder}
        onChange={(e) => handleClick(e.target.value)}
      />
      {label && (
        <Text>
          {label.split("").map((letter, idx) => (
            <span key={idx} style={{ transitionDelay: `${idx * 50}ms` }}>
              {letter}
            </span>
          ))}
        </Text>
      )}
    </SelectContainer>
  );
};
