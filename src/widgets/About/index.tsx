import React from "react";

import { useSelectorTyped } from "src/store";
import { ArticleTitle, Article } from "src/ui/Card";

import {
  AboutText,
  StackBlock,
  StackLabel,
  StackList,
  StackChip,
  HighlightsSection,
  HighlightsTitle,
  HighlightsGrid,
  HighlightCard,
  HighlightCardTitle,
  HighlightCardText,
} from "./style";

const About = () => {
  const {
    lang: {
      personal,
      propsHeaderTopMenu,
      aboutHighlightsTitle,
      aboutHighlights,
    },
  } = useSelectorTyped(({ lang }) => lang);

  // Заголовок раздела берём из переведённого пункта меню «Обо мне».
  const aboutLabel =
    propsHeaderTopMenu.find((item) => item.value === "person")?.label ??
    personal.titleText;

  return (
    <Article>
      <header>
        <ArticleTitle>{aboutLabel}</ArticleTitle>
      </header>

      <AboutText>
        <p>{personal.text1}</p>
        <p>{personal.text2}</p>
        <p>{personal.text3}</p>
      </AboutText>

      <StackBlock>
        <StackLabel>{personal.stackTitle}</StackLabel>
        <StackList>
          {personal.stack.map((item) => (
            <StackChip key={item}>{item}</StackChip>
          ))}
        </StackList>
      </StackBlock>

      <HighlightsSection>
        <HighlightsTitle>{aboutHighlightsTitle}</HighlightsTitle>

        <HighlightsGrid>
          {aboutHighlights.map((item) => (
            <HighlightCard key={item.id}>
              <HighlightCardTitle>{item.title}</HighlightCardTitle>
              <HighlightCardText>{item.text}</HighlightCardText>
            </HighlightCard>
          ))}
        </HighlightsGrid>
      </HighlightsSection>
    </Article>
  );
};

export default About;
