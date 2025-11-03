import { FC, useState } from "react";

import {
  SelectContainer,
  InputWrapper,
  SearchIconWrapper,
  DeleteIconWrapper,
  Input,
} from "./style";

import { ReactComponent as SearchIcon } from "src/common/icon/search.svg";
import { ReactComponent as DeleteIcon } from "src/common/icon/delete.svg";

interface ClimateBannerProps {
  placeholder: string;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export const SearchInput: FC<ClimateBannerProps> = ({
  placeholder,
  searchQuery,
  setSearchQuery,
}) => {
  const getSearchQuery = (valueInput: string) => {
    const searchQueryValue = valueInput.toLowerCase();
    setSearchQuery(searchQueryValue);
  };

  const handleClickDelete = () => {
    setSearchQuery("");
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
