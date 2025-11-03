import { FC, useEffect, useRef, useState, KeyboardEvent } from "react";
import { useDispatchTyped, useSelectorTyped } from "src/store";
import { fetchCities } from "src/reducers";

import {
  SelectContainer,
  InputWrapper,
  SearchIconWrapper,
  DeleteIconWrapper,
  Input,
  Dropdown,
  DropdownItem,
  DropdownMessage,
} from "./style";

import { ReactComponent as SearchIcon } from "src/common/icon/search.svg";
import { ReactComponent as DeleteIcon } from "src/common/icon/delete.svg";

interface SearchInputProps {
  placeholder: string;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  onSelectCity?: (value: string) => void;
}

export const SearchInput: FC<SearchInputProps> = ({
  placeholder,
  searchQuery,
  setSearchQuery,
  onSelectCity,
}) => {
  const dispatch = useDispatchTyped();
  const {
    cityAutofill = [],
    loading,
    error,
  } = useSelectorTyped((state) => state.climate);

  const containerRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // 🔹 Индекс выделенного элемента для клавиатуры
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  // 🔹 Debounce запрос к API
  useEffect(() => {
    if (searchQuery.length >= 2) {
      const timeout = setTimeout(() => {
        dispatch(fetchCities({ city: searchQuery }));
        setShowDropdown(true);
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      closeDropdown();
    }
  }, [searchQuery, dispatch]);

  const closeDropdown = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowDropdown(false);
      setIsClosing(false);
      setHighlightedIndex(-1);
    }, 250 + cityAutofill.length * 50);
  };

  // 🔹 Закрытие при клике вне контейнера
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        closeDropdown();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [cityAutofill.length]);

  const handleSelectCity = (city: string) => {
    setSearchQuery(city);
    onSelectCity?.(city);
    closeDropdown();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown || cityAutofill.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < cityAutofill.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : cityAutofill.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0) {
        handleSelectCity(cityAutofill[highlightedIndex]);
      } else if (searchQuery.trim()) {
        closeDropdown();
      }
    } else if (e.key === "Escape") {
      closeDropdown();
    }
  };

  const handleClickDelete = () => {
    setSearchQuery("");
    closeDropdown();
  };

  const showMessage =
    !loading &&
    (error || cityAutofill.length === 0) &&
    searchQuery.trim().length >= 2;

  return (
    <SelectContainer ref={containerRef} $boxShadow={!!searchQuery}>
      <InputWrapper>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <Input
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => cityAutofill.length && setShowDropdown(true)}
          onKeyDown={handleKeyDown}
        />

        {searchQuery && (
          <DeleteIconWrapper onClick={handleClickDelete}>
            <DeleteIcon />
          </DeleteIconWrapper>
        )}
      </InputWrapper>

      {showDropdown && (
        <Dropdown $closing={isClosing}>
          {loading && <DropdownMessage>Загрузка...</DropdownMessage>}

          {showMessage && !loading && (
            <DropdownMessage>
              {error ? "Ошибка" : "Нет совпадений"}
            </DropdownMessage>
          )}

          {!loading &&
            !error &&
            cityAutofill.map((city, index) => (
              <DropdownItem
                key={city + index}
                $closing={isClosing}
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => handleSelectCity(city)}
                $highlighted={index === highlightedIndex}
              >
                {city}
              </DropdownItem>
            ))}
        </Dropdown>
      )}
    </SelectContainer>
  );
};
