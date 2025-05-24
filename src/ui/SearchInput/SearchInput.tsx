import { useState } from "react";

import {
  SelectContainer,
  InputWrapper,
  SearchIconWrapper,
  DeleteIconWrapper,
  Input,
} from "./style";
// import { getCommonIcon } from "../Icon";
// import { useAppDispatch } from "../../../store";
// import { setSearchShopFilter } from "../../../reducers/sort-slice";

import { ReactComponent as SearchIcon } from "src/common/icon/search.svg";
import { ReactComponent as DeleteIcon } from "src/common/icon/delete.svg";

export const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const SearchIcon = getCommonIcon("search");
  // const DeleteIcon = getCommonIcon("delete");

  // const dispatch = useAppDispatch();

  const getSearchQuery = (valueInput: string) => {
    const searchQueryValue = valueInput.toLowerCase();
    setSearchQuery(searchQueryValue);
    // dispatch(setSearchShopFilter(searchQueryValue));
  };

  const handleClickDelete = () => {
    setSearchQuery("");
    // dispatch(setSearchShopFilter(""));
  };

  return (
    <SelectContainer $boxShadow={!!searchQuery}>
      <InputWrapper>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <Input
          type="text"
          placeholder="Быстрый поиск"
          value={searchQuery}
          onChange={(e) => getSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <DeleteIconWrapper onClick={handleClickDelete}>
            <DeleteIcon />
          </DeleteIconWrapper>
        )}
      </InputWrapper>
    </SelectContainer>
  );
};
