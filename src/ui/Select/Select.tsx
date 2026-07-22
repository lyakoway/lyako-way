import { useEffect, useRef, useState, MouseEvent, useCallback } from "react";
import { useIsomorphicLayoutEffect } from "src/features/customHooks";

import {
  SelectContainer,
  InputText,
  Chips,
  ChipsItem,
  Divider,
  Caret,
  DropdownList,
  ListOption,
  NotChosen,
  CheckboxIcon,
  DeleteIconWrapper,
  TextChips,
} from "./style";
import { ISelectOption } from "src/common/types/select";

import { ReactComponent as DeleteIcon } from "src/common/icon/delete.svg";

type MultipleSelectProps = {
  multiple: true;
  value: ISelectOption[];
  onChange: (value: ISelectOption[]) => void;
  defaultText: string;
  options: ISelectOption[];
};

type SingleSelectProps = {
  multiple?: false;
  value?: ISelectOption;
  onChange: (value: ISelectOption | undefined) => void;
  defaultText: string;
  options: ISelectOption[];
};

type SelectProps = SingleSelectProps | MultipleSelectProps;

// Разбивает текст на буквы-спаны со ступенчатой задержкой — для той же
// «волновой» анимации всплытия, что и у плавающих лейблов в Input.
const letters = (text: string) =>
  text.split("").map((letter, idx) => (
    <span key={idx} style={{ transitionDelay: `${idx * 50}ms` }}>
      {letter}
    </span>
  ));

// fit === null — режим измерения: рендерим все чипы (чтобы замерить ширины).
// Иначе показываем первые `fit` чипов, остальные — счётчиком «+N».
const getInputMultipleText = (
  value: ISelectOption[],
  defaultText: string,
  fit: number | null
) => {
  if (value.length === 0) {
    return <NotChosen>{letters(defaultText)}</NotChosen>;
  }
  const count =
    fit === null ? value.length : Math.max(1, Math.min(fit, value.length));
  const rest = value.length - count;
  return (
    <>
      {value.slice(0, count).map((item) => (
        <Chips data-is-chip data-chip key={item.value}>
          <TextChips>{item.label}</TextChips>
        </Chips>
      ))}
      {rest > 0 && <ChipsItem data-counter>+ {rest}</ChipsItem>}
      <NotChosen $moveText>{letters(defaultText)}</NotChosen>
    </>
  );
};

const getInputTextSelect = (
  value: ISelectOption | undefined,
  defaultText: string
) => {
  if (value?.label !== undefined) {
    return <NotChosen>{letters(value.label)}</NotChosen>;
  }
  return <NotChosen>{letters(defaultText)}</NotChosen>;
};

export const Select = ({
  multiple,
  value,
  onChange,
  options,
  defaultText,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Сколько выбранных чипов помещается в поле; остальные — в счётчик «+N».
  // null — режим измерения (рендерим все чипы, чтобы замерить их ширины).
  const inputRef = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState<number | null>(null);

  // При смене выбора и при ресайзе — заново измеряем.
  useIsomorphicLayoutEffect(() => {
    if (multiple) setFit(null);
  }, [value, multiple]);

  useIsomorphicLayoutEffect(() => {
    if (!multiple || typeof ResizeObserver === "undefined") return;
    const el = inputRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setFit(null));
    ro.observe(el);
    return () => ro.disconnect();
  }, [multiple]);

  // Измерение: считаем, сколько чипов влезает (с запасом под счётчик).
  useIsomorphicLayoutEffect(() => {
    if (!multiple || fit !== null) return;
    const arr = value as ISelectOption[];
    const el = inputRef.current;
    if (!el || arr.length === 0) {
      setFit(arr.length);
      return;
    }
    const chips = Array.from(
      el.querySelectorAll("[data-chip]")
    ) as HTMLElement[];
    const s = getComputedStyle(el);
    const gap = parseFloat(s.columnGap || s.gap || "8") || 8;
    const padRight = parseFloat(s.paddingRight || "0") || 0;
    const avail = el.clientWidth - padRight;
    const COUNTER_RESERVE = 52; // место под «+N»
    let used = 0;
    let n = 0;
    for (let i = 0; i < chips.length; i += 1) {
      used += (i > 0 ? gap : 0) + chips[i].offsetWidth;
      const needsCounter = i < chips.length - 1;
      if (used + (needsCounter ? gap + COUNTER_RESERVE : 0) <= avail) n = i + 1;
      else break;
    }
    setFit(Math.max(1, n));
  }, [fit, value, multiple]);

  const showInputDelete = multiple
    ? value.length !== 0
    : !multiple && value && "label" in value
    ? value.label !== undefined
    : false;

  const clearOptions = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      // e.stopPropagation(); блокирует закрытие dropdownList
      multiple ? onChange([]) : onChange(undefined);
    },
    [onChange]
  );

  const getSelectOption = useCallback(
    (option: ISelectOption) => {
      if (multiple) {
        // TS теперь точно знает, что value — массив
        const arr = value as ISelectOption[];
        if (arr.includes(option)) {
          onChange(arr.filter((o) => o !== option));
        } else {
          onChange([...arr, option]);
        }
      } else {
        // value точно объект или undefined
        const singleValue = value as ISelectOption | undefined;
        if (option !== singleValue) {
          // TS теперь понимает, что onChange принимает ISelectOption | undefined
          (onChange as (v: ISelectOption | undefined) => void)(option);
        }
      }
    },
    [onChange, multiple, value]
  );

  const isOptionSelected = useCallback(
    (option: ISelectOption) => {
      return multiple ? value.includes(option) : option === value;
    },
    [value]
  );

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen, setHighlightedIndex]);

  useEffect(() => {
    const containerRefCurrent = containerRef.current;
    const handler = (e: KeyboardEvent) => {
      if (e.target !== containerRefCurrent) return;
      switch (e.code) {
        case "Enter":
        case "Space":
          setIsOpen((prev) => !prev);
          if (isOpen) getSelectOption(options[highlightedIndex]);
          break;
        case "ArrowUp":
        case "ArrowDown": {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }

          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case "Escape":
          setIsOpen(false);
          break;
      }
    };
    containerRefCurrent?.addEventListener("keydown", handler);

    return () => {
      containerRefCurrent?.removeEventListener("keydown", handler);
    };
  }, [
    isOpen,
    highlightedIndex,
    options,
    getSelectOption,
    setIsOpen,
    setHighlightedIndex,
  ]);

  return (
    <SelectContainer
      $boxShadow={
        Array.isArray(value)
          ? value.length !== 0
          : value && "label" in value
          ? value.label !== undefined
          : false
      }
      ref={containerRef}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
    >
      <InputText ref={inputRef}>
        {multiple
          ? getInputMultipleText(value as ISelectOption[], defaultText, fit)
          : getInputTextSelect(value as ISelectOption | undefined, defaultText)}
      </InputText>
      {showInputDelete && (
        <DeleteIconWrapper onClick={(e) => clearOptions(e)}>
          <DeleteIcon />
        </DeleteIconWrapper>
      )}
      <Divider />
      <Caret $isOpen={isOpen} />
      <DropdownList $isOpen={isOpen}>
        {options.map((option, index) => (
          <ListOption
            onClick={(e) => {
              e.stopPropagation();
              getSelectOption(option);
              setIsOpen(!!multiple);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.value}
            selected={isOptionSelected(option)}
            $highlighted={index === highlightedIndex}
          >
            {multiple ? (
              <CheckboxIcon checked={isOptionSelected(option)}>
                {option.label}
              </CheckboxIcon>
            ) : (
              option.label
            )}
          </ListOption>
        ))}
      </DropdownList>
    </SelectContainer>
  );
};
