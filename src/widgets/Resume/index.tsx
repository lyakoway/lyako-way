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
          {resumeCv.skills.map((group) => (
            <SkillCard key={group.id}>
              <SkillCategory>{group.category}</SkillCategory>
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
