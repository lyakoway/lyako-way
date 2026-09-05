import React from "react";

import { useSelectorTyped } from "src/store";
import { ArticleTitle, Article } from "src/ui/Card";
import { Reveal } from "src/ui/Reveal";

import {
  AboutText,
  AboutBullets,
  StackLabel,
  StackList,
  StackChip,
  HeroSection,
  HeroRole,
  HeroTagline,
  StatsGrid,
  StatCard,
  StatValue,
  StatLabel,
  SectionBlock,
  HighlightsGrid,
  PipelineFlow,
  PipelineStep,
  ProductCard,
  ProductTitle,
  SkillCard,
  SkillCardTitle,
  SkillCardText,
  SectionNote,
  StackGroupTitle,
  ApproachItem,
  ApproachHead,
  ApproachNum,
  ApproachTitle,
  CycleBlock,
} from "./style";

// Пустая строка в тексте — разрыв абзаца: каждый кусок выводим своим <p>.
const paragraphs = (text: string) =>
  text
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean);

// Экранирование + инлайн-выделение **жирным** (теги вставляются безопасно).
const withBold = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

const About = () => {
  const {
    lang: { personal, propsHeaderTopMenu },
  } = useSelectorTyped(({ lang }) => lang);

  // Заголовок раздела берём из переведённого пункта меню «Обо мне».
  const aboutLabel =
    propsHeaderTopMenu.find((item) => item.value === "person")?.label ??
    personal.titleText;

  const page = personal.page;

  return (
    <Article>
      <Reveal as="header">
        <ArticleTitle>{aboutLabel}</ArticleTitle>
      </Reveal>

      {/* Hero: роль, тезис и цифры */}
      <Reveal as={HeroSection} delay={60}>
        <HeroRole>{page.hero.role}</HeroRole>
        <HeroTagline>{page.hero.tagline}</HeroTagline>
        <StatsGrid>
          {page.stats.map((stat) => (
            <StatCard key={stat.label}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </Reveal>

      {/* Обо мне — пунктами с жирными врезками */}
      <Reveal as={SectionBlock} delay={90}>
        <StackLabel>{page.about.title}</StackLabel>
        <AboutBullets>
          {page.about.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: withBold(item) }} />
          ))}
        </AboutBullets>
      </Reveal>

      {/* AI / LLM Engineer — профиль абзацами */}
      <Reveal as={SectionBlock} delay={120}>
        <StackLabel>{page.profile.title}</StackLabel>
        <AboutText>
          {page.profile.paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: withBold(p) }} />
          ))}
        </AboutText>
      </Reveal>

      {/* Что я создаю — карточки */}
      <Reveal as={SectionBlock} delay={150}>
        <StackLabel>{page.create.title}</StackLabel>
        {page.create.cards.map((card) => (
          <div key={card.title} className="create-card">
            <div className="create-card-title">{card.title}</div>
            <AboutText>{card.text}</AboutText>
            {card.items && card.items.length > 0 && (
              <AboutBullets>
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </AboutBullets>
            )}
            {card.pipeline && card.pipeline.length > 0 && (
              <PipelineFlow>
                {card.pipeline.map((step, i) => (
                  <PipelineStep key={step}>
                    {step}
                    {i < card.pipeline.length - 1 && (
                      <span className="arrow">→</span>
                    )}
                  </PipelineStep>
                ))}
              </PipelineFlow>
            )}
            {card.footnote && <SectionNote>{card.footnote}</SectionNote>}
          </div>
        ))}
      </Reveal>

      {/* AI-продукты, которые я разработал */}
      <Reveal as={SectionBlock} delay={180}>
        <StackLabel>{page.products.title}</StackLabel>
        <HighlightsGrid>
          {page.products.items.map((product) => (
            <ProductCard key={product.name}>
              <ProductTitle>{product.name}</ProductTitle>
              <AboutText>{product.tagline}</AboutText>
              {product.paragraphs.map((p, i) => (
                <AboutText key={i}>{p}</AboutText>
              ))}
              {product.flows && product.flows.length > 0 && (
                <div className="product-flows">
                  {product.flows.map((flow) => (
                    <div key={flow.name} className="flow-row">
                      <span className="flow-label">{flow.name}:</span>{" "}
                      <span className="flow-steps">{flow.steps}</span>
                    </div>
                  ))}
                </div>
              )}
              {product.notes && product.notes.length > 0 && (
                <AboutBullets>
                  {product.notes.map((note, i) => (
                    <li key={i}>{note}</li>
                  ))}
                </AboutBullets>
              )}
              {product.result && (
                <SectionNote>{product.result}</SectionNote>
              )}
              {product.stack && (
                <div className="product-stack">
                  <span className="stack-label">{product.stack.label}:</span>{" "}
                  <span className="stack-items">{product.stack.items.join(" · ")}</span>
                </div>
              )}
            </ProductCard>
          ))}
        </HighlightsGrid>
      </Reveal>

      {/* Мой подход к AI Engineering — 7 принципов */}
      <Reveal as={SectionBlock} delay={210}>
        <StackLabel>{page.approach.title}</StackLabel>
        <AboutText>{page.approach.intro}</AboutText>
        {page.approach.principles.map((principle) => (
          <ApproachItem key={principle.num}>
            <ApproachHead>
              <ApproachNum>{principle.num}</ApproachNum>
              <ApproachTitle>{principle.title}</ApproachTitle>
            </ApproachHead>
            <AboutText>{principle.text}</AboutText>
            {principle.items && principle.items.length > 0 && (
              <AboutBullets>
                {principle.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </AboutBullets>
            )}
          </ApproachItem>
        ))}

        {/* Инженерный цикл */}
        <CycleBlock>
          <StackLabel>{page.approach.cycle.title}</StackLabel>
          <PipelineFlow>
            {page.approach.cycle.steps.map((step, i) => (
              <PipelineStep key={step}>
                {step}
                {i < page.approach.cycle.steps.length - 1 && (
                  <span className="arrow">→</span>
                )}
              </PipelineStep>
            ))}
          </PipelineFlow>
          <AboutText>{page.approach.cycle.closing}</AboutText>
        </CycleBlock>
      </Reveal>

      {/* End-to-End Engineering */}
      <Reveal as={SectionBlock} delay={240}>
        <StackLabel>{page.engineering.title}</StackLabel>
        <AboutText>{page.engineering.intro}</AboutText>
        <HighlightsGrid>
          {page.engineering.areas.map((area) => (
            <ProductCard key={area.title}>
              <ProductTitle>{area.title}</ProductTitle>
              <AboutText>{area.text}</AboutText>
            </ProductCard>
          ))}
        </HighlightsGrid>
      </Reveal>

      {/* Технологический стек */}
      <Reveal as={SectionBlock} delay={270}>
        <StackLabel>{page.stack.title}</StackLabel>
        {page.stack.groups.map((group) => (
          <div key={group.title} className="stack-section-row">
            <span className="stack-section-label">{group.title}</span>
            <StackList>
              {group.items.map((item) => (
                <StackChip key={item}>{item}</StackChip>
              ))}
            </StackList>
          </div>
        ))}
      </Reveal>

      {/* Ключевые принципы */}
      <Reveal as={SectionBlock} delay={300}>
        <StackLabel>{page.principles.title}</StackLabel>
        <AboutBullets>
          {page.principles.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </AboutBullets>
      </Reveal>

      {/* Сейчас я развиваюсь в сторону */}
      <Reveal as={SectionBlock} delay={330}>
        <StackLabel>{page.growth.title}</StackLabel>
        <StackList>
          {page.growth.chips.map((chip) => (
            <StackChip key={chip}>{chip}</StackChip>
          ))}
        </StackList>
        <AboutText>{page.growth.text}</AboutText>
      </Reveal>
    </Article>
  );
};

export default About;
