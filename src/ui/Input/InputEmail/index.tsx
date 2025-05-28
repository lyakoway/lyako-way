import { FC, useCallback, useEffect, useRef, useState } from "react";

import { Input } from "src/ui/Input";
import getValidateErrorTextPhone from "src/common/utils/getValidateErrorTextPhone";
import { getMobileOperatingSystem, isIos } from "src/common/utils";
import getValidateErrorTextMail from "src/common/utils/getValidateErrorTextMail";

interface IInputEmailProps {
  label?: string;
  type?: "text" | "email" | "submit" | "password" | "tel";
  setEmail?: (value: string) => void;
  email?: string;
  langName?: string;
  description?: string;
}

export const InputEmail: FC<IInputEmailProps> = ({
  label = "",
  type = "text",
  setEmail = () => {},
  email = "",
  langName = "russia",
  description = "",
}) => {
  const fieldRef = useRef<HTMLInputElement>(null);
  const [errorDescription, setErrorDescription] = useState<string>("");

  useEffect(() => {
    setErrorDescription(description);
  }, [description]);

  const changeHandler = (valueInput: string) => {
    setEmail(valueInput);
    if (valueInput) {
      setErrorDescription("");
    }
  };

  const validateData = useCallback(
    (changeMailValue: string) => {
      const changeMailValidate = changeMailValue?.length
        ? changeMailValue?.trimEnd()
        : "";
      let validatorErrorTextMail = "";
      if (changeMailValidate) {
        validatorErrorTextMail = getValidateErrorTextMail(
          changeMailValidate,
          langName
        );

        if (validatorErrorTextMail) {
          setErrorDescription(validatorErrorTextMail);
        }
      }
      return !validatorErrorTextMail ? changeMailValidate : "";
    },
    [setErrorDescription, getValidateErrorTextPhone, langName]
  );

  const onFocusHandler = () => {
    fieldRef.current?.focus();
  };

  const handleClickDelete = useCallback(() => {
    setEmail("");
    setErrorDescription("");
  }, [setEmail, setErrorDescription]);

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
        validateData(email);
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
      placeholder={"yours@email.com"}
      type={type}
      changeHandler={changeHandler}
      value={email}
      onBlurHandler={() => validateData(email)}
      onFocusHandler={onFocusHandler}
      handleClickDelete={handleClickDelete}
      valid={!errorDescription}
    />
  );
};
