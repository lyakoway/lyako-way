import React from "react";

import { useSelectorTyped } from "src/store";
import { ArticleTitle, Article } from "src/ui/Card";

import {
  Actions,
  ButtonPrimary,
  ButtonSecondary,
  Section,
  SectionHead,
  SectionIcon,
  SectionTitle,
  Timeline,
  TimelineItem,
  EntryCard,
  EntryHeader,
  ItemRole,
  ItemCompany,
  PeriodBadge,
  ItemMeta,
  ItemSummary,
  Group,
  GroupTitle,
  Bullets,
  SkillsGrid,
  SkillCard,
  SkillHead,
  SkillIcon,
  SkillCategory,
  ChipList,
  Chip,
} from "./style";

const IconExperience = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect
      x="3"
      y="7"
      width="18"
      height="13"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M3 12h18" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconSkills = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 3l2.09 5.26L20 9.27l-4 3.64L17.18 19 12 15.9 6.82 19 8 12.91l-4-3.64 5.91-1.01L12 3z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const IconEducation = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 4 2 9l10 5 10-5-10-5z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M6 11v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

/* Иконки категорий навыков — по порядку из resumeCv.skills.
   Языки · LLM и агенты · RAG и качество · Backend · Frontend · Инфраструктура. */
const SKILL_ICONS = [
  // код
  <svg key="code" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="m9 8-4 4 4 4M15 8l4 4-4 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  // чип / агент
  <svg key="chip" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect
      x="7"
      y="7"
      width="10"
      height="10"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M10 3v2M14 3v2M10 19v2M14 19v2M3 10h2M3 14h2M19 10h2M19 14h2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>,
  // поиск / качество
  <svg key="search" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
    <path
      d="m20 20-3.5-3.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>,
  // база данных / backend
  <svg key="db" viewBox="0 0 24 24" fill="none" aria-hidden>
    <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>,
  // окно / frontend
  <svg key="ui" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect
      x="3"
      y="4"
      width="18"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M3 9h18" stroke="currentColor" strokeWidth="2" />
  </svg>,
  // серверы / инфраструктура
  <svg key="infra" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect
      x="3"
      y="4"
      width="18"
      height="6"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="3"
      y="14"
      width="18"
      height="6"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M7 7h.01M7 17h.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>,
];

const Resume = () => {
  const {
    lang: { propsHeaderTopMenu, resumeCv },
  } = useSelectorTyped(({ lang }) => lang);

  const title =
    propsHeaderTopMenu.find((item) => item.value === "resume")?.label ?? "";

  return (
    <Article>
      <header>
        <ArticleTitle>{title}</ArticleTitle>
      </header>

      <Actions>
        <ButtonPrimary href={resumeCv.pdfUrl} download>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {resumeCv.downloadLabel}
        </ButtonPrimary>

        <ButtonSecondary
          href={resumeCv.pdfUrl}
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="12"
              r="3"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          {resumeCv.viewLabel}
        </ButtonSecondary>
      </Actions>

      <Section>
        <SectionHead>
          <SectionIcon>
            <IconExperience />
          </SectionIcon>
          <SectionTitle>{resumeCv.experienceTitle}</SectionTitle>
        </SectionHead>

        <Timeline>
          {resumeCv.experience.map((item) => (
            <TimelineItem key={item.id}>
              <EntryCard>
                <EntryHeader>
                  <div>
                    <ItemRole>{item.role}</ItemRole>
                    <ItemCompany>{item.company}</ItemCompany>
                  </div>
                  <PeriodBadge>{item.period}</PeriodBadge>
                </EntryHeader>

                {item.meta && <ItemMeta>{item.meta}</ItemMeta>}
                {item.summary && <ItemSummary>{item.summary}</ItemSummary>}

                {item.groups.map((group, i) => (
                  <Group key={i}>
                    {group.title && <GroupTitle>{group.title}</GroupTitle>}
                    <Bullets>
                      {group.items.map((text, j) => (
                        <li key={j}>{text}</li>
                      ))}
                    </Bullets>
                  </Group>
                ))}
              </EntryCard>
            </TimelineItem>
          ))}
        </Timeline>
      </Section>

      <Section>
        <SectionHead>
          <SectionIcon>
            <IconSkills />
          </SectionIcon>
          <SectionTitle>{resumeCv.skillsTitle}</SectionTitle>
        </SectionHead>

        <SkillsGrid>
          {resumeCv.skills.map((group, idx) => (
            <SkillCard key={group.id}>
              <SkillHead>
                <SkillIcon>{SKILL_ICONS[idx % SKILL_ICONS.length]}</SkillIcon>
                <SkillCategory>{group.category}</SkillCategory>
              </SkillHead>
              <ChipList>
                {group.items.map((skill, i) => (
                  <Chip key={i}>{skill}</Chip>
                ))}
              </ChipList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Section>

      <Section>
        <SectionHead>
          <SectionIcon>
            <IconEducation />
          </SectionIcon>
          <SectionTitle>{resumeCv.educationTitle}</SectionTitle>
        </SectionHead>

        <Timeline>
          {resumeCv.education.map((item) => (
            <TimelineItem key={item.id}>
              <EntryCard>
                <EntryHeader>
                  <ItemRole>{item.title}</ItemRole>
                  {item.period && <PeriodBadge>{item.period}</PeriodBadge>}
                </EntryHeader>
                {item.text && <ItemSummary>{item.text}</ItemSummary>}
              </EntryCard>
            </TimelineItem>
          ))}
        </Timeline>
      </Section>
    </Article>
  );
};

export default Resume;
