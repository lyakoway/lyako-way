import { FC, useCallback, useEffect, useRef, useState } from "react";

import { Input } from "src/ui/Input";
import getValidateErrorTextPhone from "src/common/utils/getValidateErrorTextPhone";
import { getMobileOperatingSystem, isIos } from "src/common/utils";
import getValidateErrorTextMail from "src/common/utils/getValidateErrorTextMail";
import { useSelectorTyped } from "src/store";

interface IInputEmailProps {
  label?: string;
  type?: "text" | "email" | "submit" | "password" | "tel";
  setEmail?: (value: string) => void;
  email?: string;
  description?: string;
  setValid: (value: boolean) => void;
  setFormDescriptionEmail: (value: string) => void;
}

export const InputEmail: FC<IInputEmailProps> = ({
  label = "",
  type = "text",
  setEmail = () => {},
  email = "",
  description = "",
  setValid,
  setFormDescriptionEmail,
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
    setEmail(valueInput);
    setErrorDescription("");
    setFormDescriptionEmail("");
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
          contactForm
        );

        if (validatorErrorTextMail) {
          setErrorDescription(validatorErrorTextMail);
        }
      }
      return !validatorErrorTextMail ? changeMailValidate : "";
    },
    [setErrorDescription, getValidateErrorTextPhone, contactForm]
  );

  const onFocusHandler = () => {
    fieldRef.current?.focus();
  };

  const handleClickDelete = useCallback(() => {
    setEmail("");
    setErrorDescription("");
    setFormDescriptionEmail("");
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
      customValidity={contactForm.customValidityEmail}
    />
  );
};
