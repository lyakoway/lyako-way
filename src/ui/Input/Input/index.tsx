import { forwardRef } from "react";

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
  // Подсказки автозаполнения браузера (напр. "tel" — сохранённые телефоны).
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
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
      autoComplete,
      inputMode,
    },
    ref
  ) => {
    return (
      <SelectContainer $boxShadow={!!value} $valid={valid}>
        <InputWrapper>
          <InputStyle
            required
            id={autoComplete || type}
            type={type}
            name={autoComplete || type}
            autoComplete={autoComplete}
            inputMode={inputMode}
            aria-label={label || placeholder || type}
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
          {label && !description && (
            <Text>
              {label.split("").map((letter, idx) => (
                <span key={idx} style={{ transitionDelay: `${idx * 50}ms` }}>
                  {letter}
                </span>
              ))}
            </Text>
          )}
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
