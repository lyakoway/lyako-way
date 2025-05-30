import { FC, useCallback, useEffect, useRef, useState } from "react";

import { Input } from "src/ui/Input";
import { getMobileOperatingSystem, isIos } from "src/common/utils";
import { useSelectorTyped } from "src/store";

interface IInputNameProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "submit" | "password" | "tel";
  setName?: (value: string) => void;
  name?: string;
  description?: string;
  setValid: (value: boolean) => void;
  setFormDescriptionName: (value: string) => void;
}

export const InputName: FC<IInputNameProps> = ({
  label = "",
  placeholder = "",
  type = "text",
  setName = () => {},
  name = "",
  description = "",
  setValid,
  setFormDescriptionName,
}) => {
  const {
    lang: { contactForm },
  } = useSelectorTyped(({ lang }) => lang);
  const fieldRef = useRef<HTMLInputElement>(null);
  const [errorDescription, setErrorDescription] = useState<string>("");

  useEffect(() => {
    setErrorDescription(description);
  }, [description, setErrorDescription]);

  useEffect(() => {
    setValid(!errorDescription);
  }, [errorDescription, setValid]);

  const changeHandler = (valueInput: string) => {
    setName(valueInput.replace(/[^a-zA-ZА-Яа-яЁё\s\-]/g, ""));
    setErrorDescription("");
    setFormDescriptionName("");
  };

  const validateData = useCallback(
    (changeValue: string) => {
      if (changeValue?.length < 3 && changeValue) {
        setErrorDescription(contactForm.errorDescriptionName);
      }
    },
    [setErrorDescription, contactForm]
  );

  const onFocusHandler = () => {
    fieldRef.current?.focus();
  };

  const handleClickDelete = useCallback(() => {
    setName("");
    setErrorDescription("");
    setFormDescriptionName("");
  }, [setName, setErrorDescription, setFormDescriptionName]);

  // useEffect(() => {
  //   if (fieldRef.current && errorDescription) {
  //     fieldRef.current.focus();
  //   }
  // }, [errorDescription]);

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
  }, [validateData, name]);

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
      customValidity={contactForm.customValidityName}
    />
  );
};
