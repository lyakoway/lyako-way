import { FC, forwardRef, useEffect, useState } from "react";

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
    },
    ref
  ) => {
    // const [searchQuery, setSearchQuery] = useState("");
    // const dispatch = useAppDispatch();

    // const getSearchQuery = (valueInput: string) => {
    //   const searchQueryValue = valueInput.toLowerCase();
    //   setSearchQuery(searchQueryValue);
    //   // dispatch(setSearchShopFilter(searchQueryValue));
    // };

    // const handleClickDelete = () => {
    //   setSearchQuery("");
    //   // dispatch(setSearchShopFilter(''));
    // };

    useEffect(() => {
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
    }, [description]);

    return (
      <SelectContainer $boxShadow={!!value}>
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
          />
          {(label || description) && <Text>{description || label}</Text>}
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
