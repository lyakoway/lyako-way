import { FC, useEffect, useState } from "react";

import { SelectContainer, TextareaStyle, Text } from "./style";

interface ITextareaProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "submit" | "password";
}

export const Textarea: FC<ITextareaProps> = ({
  label = "",
  placeholder = "",
  type = "text",
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  // const dispatch = useAppDispatch();

  const getSearchQuery = (valueInput: string) => {
    const searchQueryValue = valueInput.toLowerCase();
    setSearchQuery(searchQueryValue);
    // dispatch(setSearchShopFilter(searchQueryValue));
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
    <SelectContainer $boxShadow={!!searchQuery}>
      <TextareaStyle
        required
        id={type}
        name={type}
        placeholder={placeholder}
        onChange={(e) => getSearchQuery(e.target.value)}
      />
      {label && <Text>{label}</Text>}
    </SelectContainer>
  );
};
