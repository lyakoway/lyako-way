import { FC, useEffect, useRef, useState, KeyboardEvent } from "react";
import { useDispatchTyped, useSelectorTyped } from "src/store";
import { fetchCities, setSelectedCity } from "src/reducers";

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
import { useClickOutside } from "src/features/customHooks";
import { HighlightedText } from "src/ui/SearchInput/HighlightedText";

interface SearchInputProps {
  placeholder: string;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  onSelectCity?: (value: string) => void;
  onEnterPress?: (value: string) => void; // 👈 новый
}

export const SearchInput: FC<SearchInputProps> = ({
  placeholder,
  searchQuery,
  setSearchQuery,
  onSelectCity,
  onEnterPress,
}) => {
  const dispatch = useDispatchTyped();
  const { cityAutofill = [], loading } = useSelectorTyped(
    ({ climate }) => climate
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [initialized, setInitialized] = useState(false); // для первого открытия

  // 🔹 Debounce запрос городов
  useEffect(() => {
    if (!initialized) return;

    if (searchQuery.length >= 2) {
      const timeout = setTimeout(() => {
        dispatch(fetchCities({ city: searchQuery }));
        setIsOpen(true);
      }, 300);
      return () => clearTimeout(timeout);
    } else {
      setIsOpen(false);
    }
  }, [searchQuery, dispatch, initialized]);

  // 🔹 Первый фокус активирует автозапросы
  const handleFocus = () => {
    if (!initialized) setInitialized(true);
    if (searchQuery.length >= 2) setIsOpen(true);
  };

  // 🔹 Клик вне контейнера закрывает dropdown
  useClickOutside(containerRef, () => {
    setIsOpen(false);
    setHighlightedIndex(-1);
  });

  // 🔹 Escape закрывает dropdown
  useEffect(() => {
    const handleEscape = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setHighlightedIndex(-1);
        inputRef.current?.blur();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleSelectCity = (city: string) => {
    setSearchQuery(city);
    onSelectCity?.(city);
    dispatch(setSelectedCity(city)); // ✅ сохраняем город в store
    setIsOpen(false);
    setHighlightedIndex(-1);
    inputRef.current?.blur();
  };

  // 🔹 Обработка клавиш
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && e.key === "Enter" && searchQuery.trim()) {
      const cityName = searchQuery.trim();
      onSelectCity?.(cityName);
      onEnterPress?.(cityName);
      dispatch(setSelectedCity(cityName)); // ✅ сохраняем
      setIsOpen(false);
      setHighlightedIndex(-1);
      inputRef.current?.blur();
      return;
    }

    if (!isOpen || cityAutofill.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev + 1) % cityAutofill.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex(
          (prev) => (prev - 1 + cityAutofill.length) % cityAutofill.length
        );
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleSelectCity(cityAutofill[highlightedIndex]);
        } else if (searchQuery.trim()) {
          onSelectCity?.(searchQuery.trim());
          dispatch(setSelectedCity(searchQuery.trim())); // ✅ сохраняем
        }
        setIsOpen(false);
        setHighlightedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  const handleClickDelete = () => {
    setSearchQuery("");
    setIsOpen(false);
    setHighlightedIndex(-1);
    inputRef.current?.focus();
  };

  const shouldShowDropdown =
    initialized &&
    isOpen &&
    (cityAutofill.length > 0 || loading || searchQuery.length >= 2);

  return (
    <SelectContainer ref={containerRef} $boxShadow={!!searchQuery}>
      <InputWrapper>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <Input
          ref={inputRef}
          aria-label={placeholder}
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
        />

        {searchQuery && (
          <DeleteIconWrapper onClick={handleClickDelete}>
            <DeleteIcon />
          </DeleteIconWrapper>
        )}
      </InputWrapper>

      {shouldShowDropdown && (
        <Dropdown>
          {loading && <DropdownMessage>Загрузка...</DropdownMessage>}
          {!loading && cityAutofill.length === 0 && searchQuery.length >= 2 && (
            <DropdownMessage>Нет совпадений</DropdownMessage>
          )}
          {!loading &&
            cityAutofill.map((city, index) => (
              <DropdownItem
                key={city + index}
                $highlighted={index === highlightedIndex}
                onClick={() => handleSelectCity(city)}
              >
                <HighlightedText text={city} query={searchQuery} />
              </DropdownItem>
            ))}
        </Dropdown>
      )}
    </SelectContainer>
  );
};
