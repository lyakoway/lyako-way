import React from "react";

import { useSelectorTyped } from "src/store";
import { ArticleTitle, Article } from "src/ui/Card";
import { Reveal } from "src/ui/Reveal";

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

// Пустая строка в тексте — разрыв абзаца: каждый кусок выводим своим <p>.
const paragraphs = (text: string) =>
  text
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean);

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
      <Reveal as="header">
        <ArticleTitle>{aboutLabel}</ArticleTitle>
      </Reveal>

      <Reveal as={AboutText} delay={90}>
        {[personal.text1, personal.text2, personal.text3].flatMap((text, i) =>
          paragraphs(text).map((part, j) => <p key={`${i}-${j}`}>{part}</p>)
        )}
      </Reveal>

      <Reveal as={StackBlock} delay={180}>
        <StackLabel>{personal.stackTitle}</StackLabel>
        <StackList>
          {personal.stack.map((item) => (
            <StackChip key={item}>{item}</StackChip>
          ))}
        </StackList>
      </Reveal>

      <HighlightsSection>
        <Reveal as={HighlightsTitle}>{aboutHighlightsTitle}</Reveal>

        <HighlightsGrid>
          {aboutHighlights.map((item, i) => (
            <Reveal as={HighlightCard} key={item.id} delay={i * 90}>
              <HighlightCardTitle>{item.title}</HighlightCardTitle>
              <HighlightCardText>{item.text}</HighlightCardText>
            </Reveal>
          ))}
        </HighlightsGrid>
      </HighlightsSection>
    </Article>
  );
};

export default About;
