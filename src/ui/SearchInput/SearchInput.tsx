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
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  // 🔹 Debounce для запроса городов
  useEffect(() => {
    if (searchQuery.length >= 2) {
      const timeout = setTimeout(() => {
        dispatch(fetchCities({ city: searchQuery }));
      }, 300);
      return () => clearTimeout(timeout);
    } else {
      closeDropdown();
    }
  }, [searchQuery, dispatch]);

  // 🔹 Закрытие dropdown с анимацией
  const closeDropdown = () => {
    setIsClosing(true);
    setHighlightedIndex(-1);
    setTimeout(() => {
      setIsClosing(false);
    }, 250 + cityAutofill.length * 50); // учитываем анимацию fade-out
  };

  // 🔹 Клик вне контейнера закрывает dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsFocused(false);
        closeDropdown();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSelectCity = (city: string) => {
    setSearchQuery(city);
    onSelectCity?.(city);
    closeDropdown();
    inputRef.current?.blur(); // снимаем фокус после выбора
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const showDropdown =
      isFocused &&
      !isClosing &&
      (cityAutofill.length > 0 || loading || searchQuery.length >= 2);

    if (!showDropdown) return;

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
        inputRef.current?.blur(); // снимаем фокус после Enter без выделения
      }
    } else if (e.key === "Escape") {
      closeDropdown();
      inputRef.current?.blur();
    }
  };

  const handleClickDelete = () => {
    setSearchQuery("");
    closeDropdown();
    inputRef.current?.focus(); // оставляем фокус для продолжения ввода
  };

  const shouldShowDropdown =
    isFocused &&
    !isClosing &&
    (cityAutofill.length > 0 || loading || searchQuery.length >= 2);

  return (
    <SelectContainer ref={containerRef} $boxShadow={!!searchQuery}>
      <InputWrapper>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <Input
          ref={inputRef}
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          onKeyDown={handleKeyDown}
        />

        {searchQuery && (
          <DeleteIconWrapper onClick={handleClickDelete}>
            <DeleteIcon />
          </DeleteIconWrapper>
        )}
      </InputWrapper>

      {shouldShowDropdown && (
        <Dropdown $closing={isClosing}>
          {loading && <DropdownMessage>Загрузка...</DropdownMessage>}

          {!loading && cityAutofill.length === 0 && searchQuery.length >= 2 && (
            <DropdownMessage>
              {error ? "Ошибка" : "Нет совпадений"}
            </DropdownMessage>
          )}

          {!loading &&
            cityAutofill.map((city, index) => (
              <DropdownItem
                key={city + index}
                $closing={isClosing}
                $highlighted={index === highlightedIndex}
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => handleSelectCity(city)}
              >
                {city}
              </DropdownItem>
            ))}
        </Dropdown>
      )}
    </SelectContainer>
  );
};
