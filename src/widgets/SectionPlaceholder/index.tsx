import React from "react";
import styled from "styled-components";

import { useSelectorTyped } from "src/store";
import { Article, ArticleTitle } from "src/ui/Card";
import { PANEL_TEXT_SECONDARY } from "src/common/lib/panelStyles";

const Note = styled.p`
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 15px;
  font-weight: 300;
  line-height: 1.6;
`;

// Временная заглушка раздела в стиле vCard. Заголовок берётся из
// переведённого пункта меню по его value. Полноценный контент — след. этап.
const SectionPlaceholder = ({ menuValue }: { menuValue: string }) => {
  const {
    lang: { propsHeaderTopMenu, name },
  } = useSelectorTyped(({ lang }) => lang);

  const title =
    propsHeaderTopMenu.find((item) => item.value === menuValue)?.label ?? "";
  const note =
    name === "russia" ? "Раздел в разработке." : "Section under construction.";

  return (
    <Article style={{ minHeight: "60vh" }}>
      <header>
        <ArticleTitle>{title}</ArticleTitle>
      </header>
      <Note>{note}</Note>
    </Article>
  );
};

export default SectionPlaceholder;
