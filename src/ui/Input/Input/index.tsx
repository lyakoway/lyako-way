import { FC, forwardRef, useEffect } from "react";

import {
  SelectContainer,
  InputWrapper,
  DeleteIconWrapper,
  InputStyle,
  Text,
  TextDescription,
} from "./style";

import { ReactComponent as SearchIcon } from "src/common/icon/search.svg";
import { ReactComponent as DeleteIcon } from "src/common/icon/delete.svg";

interface IInputProps {
  description?: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "submit" | "password" | "tel";
  value?: string;
  valid?: boolean | null;
  onFocusHandler?: () => void;
  onBlurHandler?: () => void;
  changeHandler?: (value: string) => void;
  handleClickDelete?: () => void;
  customValidity?: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      description = "",
      label = "",
      placeholder = "",
      type = "text",
      value = "",
      valid = null,
      onFocusHandler = () => {},
      onBlurHandler = () => {},
      changeHandler = () => {},
      handleClickDelete = () => {},
      customValidity = "Это поле обязательно!",
    },
    ref
  ) => {
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
    }, [description]);

    return (
      <SelectContainer $boxShadow={!!value} $valid={valid}>
        <InputWrapper>
          <InputStyle
            required
            id={type}
            type={type}
            name={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => changeHandler(e.target.value)}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            ref={ref}
            onInvalid={(e: React.InvalidEvent<HTMLInputElement>) => {
              e.currentTarget.setCustomValidity(customValidity);
            }}
            onInput={(e: React.FormEvent<HTMLInputElement>) => {
              e.currentTarget.setCustomValidity("");
            }}
          />
          {label && !description && <Text>{label}</Text>}
          {description && <TextDescription>{description}</TextDescription>}
          {value && (
            <DeleteIconWrapper onClick={handleClickDelete}>
              <DeleteIcon />
            </DeleteIconWrapper>
          )}
        </InputWrapper>
      </SelectContainer>
    );
  }
);
