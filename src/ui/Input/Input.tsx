import { useEffect, useState } from "react";

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

export const Input = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // const dispatch = useAppDispatch();

  console.log("searchQuery", searchQuery);

  const getSearchQuery = (valueInput: string) => {
    const searchQueryValue = valueInput.toLowerCase();
    setSearchQuery(searchQueryValue);
    // dispatch(setSearchShopFilter(searchQueryValue));
  };

  const handleClickDelete = () => {
    setSearchQuery("");
    // dispatch(setSearchShopFilter(''));
  };

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
  }, []);

  return (
    <SelectContainer $boxShadow={!!searchQuery} id="input">
      <InputWrapper>
        <InputStyle
          required
          type="text"
          className="prp-products-input"
          placeholder="Быстрый поиск"
          value={searchQuery}
          onChange={(e) => getSearchQuery(e.target.value)}
        />
        <Text>Password</Text>
        {searchQuery && (
          <DeleteIconWrapper onClick={handleClickDelete}>
            <DeleteIcon />
          </DeleteIconWrapper>
        )}
      </InputWrapper>
    </SelectContainer>
  );
};
