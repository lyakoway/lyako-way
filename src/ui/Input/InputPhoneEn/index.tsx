import { FC, useCallback, useEffect, useRef, useState } from "react";

import {
  SelectContainer,
  InputWrapper,
  SearchIconWrapper,
  DeleteIconWrapper,
  InputStyle,
  Text,
} from "./style";
// import { getCommonIcon } from '../Icon';
// import { useAppDispatch } from '../../../store';
// import { setSearchShopFilter } from '../../../reducers/sort-slice';

import { Input } from "src/ui/Input";
import getPhoneRaw from "src/common/utils/getPhoneRaw";
import getValidateErrorTextPhone from "src/common/utils/getValidateErrorTextPhone";
import { getMobileOperatingSystem, isIos } from "src/common/utils";

interface IInputPhoneProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "submit" | "password" | "tel";
  setPhone?: (value: string) => void;
  phone?: string;
}

export const InputPhoneEn: FC<IInputPhoneProps> = ({
  label = "",
  placeholder = "",
  type = "text",
  setPhone = () => {},
  phone = "",
}) => {
  const fieldRef = useRef<HTMLInputElement>(null);
  const [errorDescription, setErrorDescription] = useState<string>("");

  const changeHandler = (valueInput: string) => {
    let clearedPhone = valueInput || "";
    clearedPhone = clearedPhone.replace(/[^\d+]/g, "");

    // Убираем все плюсы, кроме первого
    clearedPhone = clearedPhone.replace(/\+(?=.+\+)/g, "");

    // Гарантируем, что плюс только в начале
    if (clearedPhone.length > 0 && clearedPhone[0] !== "+") {
      clearedPhone = "+" + clearedPhone.replace(/\+/g, "");
    }

    setPhone(clearedPhone);
    if (
      !!clearedPhone &&
      clearedPhone !== "+" &&
      clearedPhone?.trim() !== "+7"
    ) {
      setErrorDescription("");
    }
  };

  const validateData = useCallback(
    (changePhoneValue: string) => {
      let validatorErrorTextPhone = "";
      if (changePhoneValue?.length) {
        validatorErrorTextPhone = getValidateErrorTextPhone(changePhoneValue);

        if (validatorErrorTextPhone) {
          setErrorDescription(validatorErrorTextPhone);
        }
      }
      return !validatorErrorTextPhone ? changePhoneValue : "";
    },
    [phone]
  );

  const onFocusHandler = () => {
    fieldRef.current?.focus();
  };

  const handleClickDelete = useCallback(() => {
    setPhone("");
    setErrorDescription("");
  }, [setPhone, setErrorDescription]);

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
    />
  );
};
