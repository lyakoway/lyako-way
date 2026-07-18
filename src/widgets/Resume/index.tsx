import React from "react";

import { useSelectorTyped } from "src/store";
import { ArticleTitle, Article } from "src/ui/Card";

import {
  Actions,
  ButtonPrimary,
  ButtonSecondary,
  Section,
  SectionTitle,
  Timeline,
  TimelineItem,
  ItemRole,
  ItemCompany,
  ItemPeriod,
  ItemMeta,
  ItemSummary,
  Group,
  GroupTitle,
  Bullets,
  SkillGroup,
  SkillCategory,
  ChipList,
  Chip,
} from "./style";

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
        <SectionTitle>{resumeCv.experienceTitle}</SectionTitle>
        <Timeline>
          {resumeCv.experience.map((item) => (
            <TimelineItem key={item.id}>
              <ItemRole>{item.role}</ItemRole>
              <ItemCompany>{item.company}</ItemCompany>
              <ItemPeriod>{item.period}</ItemPeriod>
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
            </TimelineItem>
          ))}
        </Timeline>
      </Section>

      <Section>
        <SectionTitle>{resumeCv.skillsTitle}</SectionTitle>
        {resumeCv.skills.map((group) => (
          <SkillGroup key={group.id}>
            <SkillCategory>{group.category}</SkillCategory>
            <ChipList>
              {group.items.map((skill, i) => (
                <Chip key={i}>{skill}</Chip>
              ))}
            </ChipList>
          </SkillGroup>
        ))}
      </Section>

      <Section>
        <SectionTitle>{resumeCv.educationTitle}</SectionTitle>
        <Timeline>
          {resumeCv.education.map((item) => (
            <TimelineItem key={item.id}>
              <ItemRole>{item.title}</ItemRole>
              <ItemPeriod>{item.period}</ItemPeriod>
              {item.text && <ItemSummary>{item.text}</ItemSummary>}
            </TimelineItem>
          ))}
        </Timeline>
      </Section>
    </Article>
  );
};

export default Resume;
