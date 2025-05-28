import { FC, useCallback, useEffect, useRef, useState } from "react";

import { Input } from "src/ui/Input";
import { getMobileOperatingSystem, isIos } from "src/common/utils";

interface IInputNameProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "submit" | "password" | "tel";
  setName?: (value: string) => void;
  name?: string;
  langName?: string;
}

export const InputName: FC<IInputNameProps> = ({
  label = "",
  placeholder = "",
  type = "text",
  setName = () => {},
  name = "",
  langName = "russia",
}) => {
  const fieldRef = useRef<HTMLInputElement>(null);
  const [errorDescription, setErrorDescription] = useState<string>("");

  const changeHandler = (valueInput: string) => {
    setName(valueInput.replace(/[^a-zA-ZА-Яа-яЁё\s\-]/g, ""));
    if (valueInput) {
      setErrorDescription("");
    }
  };

  const validateData = useCallback(
    (changeValue: string) => {
      if (changeValue?.length < 3) {
        const textError =
          langName === "russia"
            ? "Введите имя полностью"
            : "The number is not entered completely";
        setErrorDescription(textError);
      }
    },
    [setErrorDescription]
  );

  const onFocusHandler = () => {
    fieldRef.current?.focus();
  };

  const handleClickDelete = useCallback(() => {
    setName("");
    setErrorDescription("");
  }, [setName, setErrorDescription]);

  // useEffect(() => {
  //   if (fieldRef.current) {
  //     fieldRef.current.focus();
  //   }
  // }, []);

  useEffect(() => {
    const listener = async (event) => {
      const userAgent = getMobileOperatingSystem();
      if (
        (event.code === "Enter" || event.code === "NumpadEnter") &&
        !isIos(userAgent)
      ) {
        event.preventDefault();
        validateData(name);
        fieldRef.current?.blur();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [validateData]);

  return (
    <Input
      ref={fieldRef}
      description={errorDescription}
      label={label}
      placeholder={placeholder}
      type={type}
      changeHandler={changeHandler}
      value={name}
      onBlurHandler={() => validateData(name)}
      onFocusHandler={onFocusHandler}
      handleClickDelete={handleClickDelete}
      valid={!errorDescription}
    />
  );
};
