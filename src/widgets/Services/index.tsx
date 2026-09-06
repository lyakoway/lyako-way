import React from "react";

import { useSelectorTyped } from "src/store";
import { ArticleTitle, Article } from "src/ui/Card";
import { Reveal } from "src/ui/Reveal";

import {
  HeroSection,
  HeroRole,
  HeroTagline,
  HeroSubtitle,
  SectionHead,
  SectionIcon,
  SectionTitle,
  ServiceCard,
  ServiceCardTitle,
  ServiceCardText,
  CardListLabel,
  CardList,
  PipelineFlow,
  PipelineStep,
  TechRow,
  TechRowLabel,
  TechRowValue,
  CardFootnote,
  CardTechNote,
  Tree,
  TreeLane,
  ProcessSection,
  StepCard,
  StepTitle,
  StepText,
  CycleFlow,
  CycleStep,
  ResultsSection,
  ResultsGrid,
  ResultCard,
  ResultTitle,
  ResultText,
  CtaSection,
  CtaCard,
  CtaTitle,
  CtaText,
  CtaCases,
  CtaLink,
} from "./style";

// Иконки секций — плашки, как на /profile и /cv.
const ICON_PROCESS = (
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
);

const ICON_RESULTS = (
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
);

const ICON_CTA = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M4 6h16v12H4z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

// Шапка секции: иконка в плашке + капс-заголовок.
const Head = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <SectionHead>
    <SectionIcon>{icon}</SectionIcon>
    <SectionTitle>{title}</SectionTitle>
  </SectionHead>
);

// Цепочка чипов со стрелками (пайплайн услуги / цикл процесса).
const Flow = ({
  steps,
  as: Box,
}: {
  steps: string[];
  as: typeof PipelineFlow;
}) => (
  <Box>
    {steps.map((step, i) => (
      <React.Fragment key={step}>
        <PipelineStep>{step}</PipelineStep>
        {i < steps.length - 1 && <span className="arrow">→</span>}
      </React.Fragment>
    ))}
  </Box>
);

const Services = () => {
  const {
    lang: { propsHeaderTopMenu, service },
  } = useSelectorTyped(({ lang }) => lang);

  const title =
    propsHeaderTopMenu.find((item) => item.value === "services")?.label ?? "";

  return (
    <Article>
      <Reveal as="header">
        <ArticleTitle>{title}</ArticleTitle>
      </Reveal>

      {/* Hero: роль, тезис, подзаголовок */}
      <Reveal as={HeroSection} delay={60}>
        <HeroRole>{service.hero.role}</HeroRole>
        <HeroTagline>{service.hero.tagline}</HeroTagline>
        <HeroSubtitle>{service.hero.subtitle}</HeroSubtitle>
      </Reveal>

      {/* Услуги 01–06 на дереве: дерево стоит на месте, карточки
          выезжают справа; у каждой услуги свой состав (список / пайплайн /
          стек) */}
      <Tree>
        {service.services.map((item, i) => (
          <TreeLane key={item.num}>
            <Reveal x={64} y={0} delay={i * 90}>
              <ServiceCard>
                <ServiceCardTitle>
                  <span className="num">{item.num}</span> — {item.title}
                </ServiceCardTitle>
                <ServiceCardText>{item.text}</ServiceCardText>

                {item.pipeline && item.pipeline.length > 0 && (
                  <Flow steps={item.pipeline} as={PipelineFlow} />
                )}

                {item.listTitle && item.list && item.list.length > 0 && (
                  <>
                    <CardListLabel>{item.listTitle}</CardListLabel>
                    <CardList>
                      {item.list.map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                    </CardList>
                  </>
                )}

                {item.extraListTitle && item.extraList && item.extraList.length > 0 && (
                  <>
                    <CardListLabel>{item.extraListTitle}</CardListLabel>
                    <CardList>
                      {item.extraList.map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                    </CardList>
                  </>
                )}

                {item.rows && item.rows.length > 0 && (
                  <div>
                    {item.rows.map((row) => (
                      <TechRow key={row.label}>
                        <TechRowLabel>{row.label}</TechRowLabel>
                        <TechRowValue>{row.value}</TechRowValue>
                      </TechRow>
                    ))}
                  </div>
                )}

                {item.footnote && <CardFootnote>{item.footnote}</CardFootnote>}
                {item.footnote2 && <CardFootnote>{item.footnote2}</CardFootnote>}
                {item.techNote && <CardTechNote>{item.techNote}</CardTechNote>}
              </ServiceCard>
            </Reveal>
          </TreeLane>
        ))}
      </Tree>

      {/* Как я работаю: шаги на дереве + итоговая цепочка цикла */}
      <ProcessSection>
        <Reveal>
          <Head icon={ICON_PROCESS} title={service.process.title} />
        </Reveal>
        <Tree>
          {service.process.steps.map((step, i) => (
            <TreeLane key={step.num}>
              <Reveal x={64} y={0} delay={i * 90}>
                <StepCard>
                  <StepTitle>
                    <span className="num">{step.num}</span> — {step.title}
                  </StepTitle>
                  <StepText>{step.text}</StepText>
                </StepCard>
              </Reveal>
            </TreeLane>
          ))}
        </Tree>
        <Reveal delay={120}>
          <Flow steps={service.process.cycle} as={CycleFlow} />
        </Reveal>
      </ProcessSection>

      {/* Что получает заказчик: сетка карточек */}
      <ResultsSection>
        <Reveal>
          <Head icon={ICON_RESULTS} title={service.results.title} />
        </Reveal>
        <ResultsGrid>
          {service.results.items.map((result, i) => (
            <Reveal as={ResultCard} key={result.title} delay={i * 60}>
              <ResultTitle>{result.title}</ResultTitle>
              <ResultText>{result.text}</ResultText>
            </Reveal>
          ))}
        </ResultsGrid>
      </ResultsSection>

      {/* CTA: обсудить задачу → /contacts */}
      <CtaSection>
        <Reveal>
          <CtaCard>
            <Head icon={ICON_CTA} title={service.hero.role} />
            <CtaTitle>{service.cta.title}</CtaTitle>
            {service.cta.texts.map((text, i) => (
              <CtaText key={i}>{text}</CtaText>
            ))}
            {/* Кейсы-доказательства: ссылки на страницы портфолио */}
            {service.cta.cases && service.cta.cases.length > 0 && (
              <CtaCases>
                {service.cta.casesLabel && (
                  <span className="label">{service.cta.casesLabel}: </span>
                )}
                {service.cta.cases.map((item, i) => (
                  <React.Fragment key={item.href}>
                    <a href={item.href}>{item.name}</a>
                    {i < service.cta.cases!.length - 1 && " · "}
                  </React.Fragment>
                ))}
              </CtaCases>
            )}
            <div>
              <CtaLink href={service.cta.href}>
                {service.cta.linkLabel}
                <span className="arrow">→</span>
              </CtaLink>
            </div>
          </CtaCard>
        </Reveal>
      </CtaSection>
    </Article>
  );
};

export default Services;
