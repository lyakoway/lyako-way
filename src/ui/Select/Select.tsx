import {
  useEffect,
  useRef,
  useState,
  MouseEvent,
  Fragment,
  useCallback,
} from "react";

import {
  SelectContainer,
  InputText,
  Chips,
  ChipsItem,
  ChipsClose,
  Divider,
  Caret,
  DropdownList,
  ListOption,
  NotChosen,
  CheckboxIcon,
  DeleteIconWrapper,
} from "./style";
import { ISelectOption } from "src/common/types/select";

import { ReactComponent as DeleteIcon } from "src/common/icon/delete.svg";

type MultipleSelectProps = {
  multiple: true;
  value: ISelectOption[];
  onChange: (value: ISelectOption[]) => void;
};

type SingleSelectProps = {
  multiple?: false;
  value?: ISelectOption;
  onChange: (value: ISelectOption | undefined) => void;
};

type SelectProps = {
  defaultText: string;
  options: ISelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

const getInputMultipleText = (
  value: ISelectOption[],
  getSelectOption: (value: ISelectOption) => void,
  defaultText: string
) => {
  const setCounterChip = (index: number) => " + " + index;

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
    <>
      {value.map((item, i: number) => (
        <Fragment key={item.value}>
          <ChipsItem>{setCounterChip(value.length - i)}</ChipsItem>
          <Chips data-is-chip>
            {item.label}
            <ChipsClose
              onClick={(e) => {
                e.stopPropagation();
                getSelectOption(item);
              }}
            >
              &times;
            </ChipsClose>
          </Chips>
        </Fragment>
      ))}
      <NotChosen $moveText={value.length !== 0}>{defaultText}</NotChosen>
    </>
  );
};

const getInputTextSelect = (
  value: ISelectOption | undefined,
  defaultText: string
) => {
  if (value?.label !== undefined) {
    return <NotChosen>{value.label}</NotChosen>;
  }
  return <NotChosen>{defaultText}</NotChosen>;
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

  const showInputDelete = multiple
    ? value?.length !== 0
    : value?.label !== undefined;

  const clearOptions = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      multiple ? onChange([]) : onChange(undefined);
    },
    [onChange]
  );

  const getSelectOption = useCallback(
    (option: ISelectOption) => {
      if (multiple) {
        if (value?.includes(option)) {
          onChange(value?.filter((o) => o !== option));
        } else {
          onChange([...value, option]);
        }
      } else {
        if (option !== value) onChange(option);
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
      $boxShadow={value.length !== 0}
      ref={containerRef}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
    >
      <InputText>
        {multiple
          ? getInputMultipleText(value, getSelectOption, defaultText)
          : getInputTextSelect(value, defaultText)}
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
