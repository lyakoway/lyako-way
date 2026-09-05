import React from "react";

import { useSelectorTyped } from "src/store";
import { ArticleTitle, Article } from "src/ui/Card";
import { Reveal } from "src/ui/Reveal";

import {
  AboutText,
  AboutBullets,
  StackLabel,
  HeadRow,
  HeadIcon,
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
  PipelineFlow,
  PipelineStep,
  ProductCard,
  ProductTitle,
  SectionNote,
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

/* Иконки секций /profile — по одной на заголовок, как плашки секций на /cv. */
const SECTION_ICONS = {
  about: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4 21c0-4 3.6-6 8-6s8 2 8 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  create: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3a6 6 0 0 1 3.7 10.7c-.6.5-.7 1.2-.7 2.3h-6c0-1.1-.1-1.8-.7-2.3A6 6 0 0 1 12 3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 19h5M10.5 21.5h3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  products: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m4 7.5 8 4.5 8-4.5M12 12v9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
  approach: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  cycle: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20.5 12a8.5 8.5 0 1 1-2.6-6.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M20.5 2.8V6.3H17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  engineering: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 12h18m-4-4 4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  stack: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="m12 3 8.5 4.75L12 12.5 3.5 7.75 12 3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m4.5 12.75 7.5 4.2 7.5-4.2M4.5 17 12 21.2l7.5-4.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="m3 17 6-6 4 4 8-8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 7h6v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

// Шапка секции: иконка в плашке + капс-заголовок.
const SectionHead = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => (
  <HeadRow>
    <HeadIcon>{icon}</HeadIcon>
    <StackLabel>{title}</StackLabel>
  </HeadRow>
);

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
        <SectionHead icon={SECTION_ICONS.about} title={page.about.title} />
        <AboutBullets>
          {page.about.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: withBold(item) }} />
          ))}
        </AboutBullets>
      </Reveal>

      {/* Что я создаю — карточки */}
      <Reveal as={SectionBlock} delay={120}>
        <SectionHead icon={SECTION_ICONS.create} title={page.create.title} />
        {page.create.cards.map((card) => (
          <div key={card.title} className="create-card">
            <div className="create-card-title">{card.title}</div>
            <AboutText>{card.text}</AboutText>
            {card.pipeline && card.pipeline.length > 0 && (
              <PipelineFlow>
                {card.pipeline.map((step, i) => (
                  <React.Fragment key={step}>
                    <PipelineStep>{step}</PipelineStep>
                    {i < card.pipeline.length - 1 && (
                      <span className="arrow">→</span>
                    )}
                  </React.Fragment>
                ))}
              </PipelineFlow>
            )}
          </div>
        ))}
      </Reveal>

      {/* AI-продукты, которые я разработал */}
      <Reveal as={SectionBlock} delay={150}>
        <SectionHead icon={SECTION_ICONS.products} title={page.products.title} />
        {page.products.items.map((product) => (
          <ProductCard key={product.name}>
            <ProductTitle>
              {/* Slug портфолио → заголовок ведёт на страницу проекта. */}
              {product.href ? (
                <a href={`/portfolio/${product.href}`}>{product.name}</a>
              ) : (
                product.name
              )}
            </ProductTitle>
            <AboutText>{product.tagline}</AboutText>
            {product.paragraphs.map((p, i) => (
              <AboutText key={i}>
                <span dangerouslySetInnerHTML={{ __html: withBold(p) }} />
              </AboutText>
            ))}
            <SectionNote>{product.result}</SectionNote>
            <div className="product-stack">
              <span className="stack-label">{product.stack.label}:</span>{" "}
              <span className="stack-items">{product.stack.items.join(" · ")}</span>
            </div>
          </ProductCard>
        ))}
      </Reveal>

      {/* Мой подход к AI Engineering — 7 принципов + инженерный цикл */}
      <Reveal as={SectionBlock} delay={180}>
        <SectionHead icon={SECTION_ICONS.approach} title={page.approach.title} />
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

        {/* Инженерный цикл — цепочка шагов без пояснений */}
        <CycleBlock>
          <SectionHead
            icon={SECTION_ICONS.cycle}
            title={page.approach.cycle.title}
          />
          <PipelineFlow>
            {page.approach.cycle.steps.map((step, i) => (
              <React.Fragment key={step}>
                <PipelineStep>{step}</PipelineStep>
                {i < page.approach.cycle.steps.length - 1 && (
                  <span className="arrow">→</span>
                )}
              </React.Fragment>
            ))}
          </PipelineFlow>
        </CycleBlock>
      </Reveal>

      {/* End-to-End Engineering — одна строка-пайплайн */}
      <Reveal as={SectionBlock} delay={210}>
        <SectionHead
          icon={SECTION_ICONS.engineering}
          title={page.engineering.title}
        />
        <PipelineFlow>
          {page.engineering.steps.map((step, i) => (
            <React.Fragment key={step}>
              <PipelineStep>{step}</PipelineStep>
              {i < page.engineering.steps.length - 1 && (
                <span className="arrow">→</span>
              )}
            </React.Fragment>
          ))}
        </PipelineFlow>
        <AboutText>{page.engineering.text}</AboutText>
      </Reveal>

      {/* Технологический стек */}
      <Reveal as={SectionBlock} delay={240}>
        <SectionHead icon={SECTION_ICONS.stack} title={page.stack.title} />
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

      {/* Сейчас я развиваюсь в сторону */}
      <Reveal as={SectionBlock} delay={270}>
        <SectionHead icon={SECTION_ICONS.growth} title={page.growth.title} />
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
