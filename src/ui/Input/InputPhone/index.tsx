import { FC, useCallback, useEffect, useRef, useState } from "react";

import { Input } from "src/ui/Input";
import getPhoneRaw from "src/common/utils/getPhoneRaw";
import getValidateErrorTextPhone from "src/common/utils/getValidateErrorTextPhone";
import { getMobileOperatingSystem, isIos } from "src/common/utils";
import {
  getFormatPhone,
  getFormatPhoneEn,
} from "src/common/utils/getFormatPhone";
import { useSelectorTyped } from "src/store";

interface IInputPhoneProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "submit" | "password" | "tel";
  setPhone?: (value: string) => void;
  phone?: string;
  description?: string;
  setValid: (value: boolean) => void;
  setFormDescriptionPhone: (value: string) => void;
}

const changeHandlerFormatPhone = (valueInput: string): string => {
  const clearedPhone = valueInput ? getPhoneRaw(valueInput) : "";
  const standardPhoneLength =
    clearedPhone?.length > 10 ? clearedPhone.substring(0, 10) : clearedPhone;

  return getFormatPhone(standardPhoneLength);
};

export const InputPhone: FC<IInputPhoneProps> = ({
  label = "",
  placeholder = "",
  type = "text",
  setPhone = () => {},
  phone = "",
  description = "",
  setValid,
  setFormDescriptionPhone,
}) => {
  const {
    lang: { name: langName, contactForm },
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
    const inputPhone =
      langName === "russia"
        ? changeHandlerFormatPhone(valueInput)
        : getFormatPhoneEn(valueInput);

    setPhone(inputPhone);
    setFormDescriptionPhone("");
    if (!!valueInput && valueInput !== "+" && valueInput?.trim() !== "+7") {
      setErrorDescription("");
    }
  };

  const validateData = useCallback(
    (changePhoneValue: string) => {
      let validatorErrorTextPhone = "";
      if (changePhoneValue?.length) {
        validatorErrorTextPhone = getValidateErrorTextPhone(
          changePhoneValue,
          contactForm
        );

        if (validatorErrorTextPhone) {
          setErrorDescription(validatorErrorTextPhone);
        }
      }
      return !validatorErrorTextPhone ? changePhoneValue : "";
    },
    [setErrorDescription, getValidateErrorTextPhone, contactForm]
  );

  const onFocusHandler = () => {
    fieldRef.current?.focus();
  };

  const handleClickDelete = useCallback(() => {
    setPhone("");
    setErrorDescription("");
    setFormDescriptionPhone("");
  }, [setPhone, setErrorDescription, setFormDescriptionPhone]);

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
        validateData(phone);
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
      value={phone}
      onBlurHandler={() => validateData(phone)}
      onFocusHandler={onFocusHandler}
      handleClickDelete={handleClickDelete}
      valid={!errorDescription}
      customValidity={contactForm.customValidityPhone}
    />
  );
};
