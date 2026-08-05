import React from "react";

import { ResumeProjectProps } from "src/common/types/lang";
import { useSelectorTyped, useDispatchTyped } from "src/store";
import { showModal } from "src/reducers";
import { useMediaQuery } from "src/features/customHooks";
import { ArticleTitle, Article } from "src/ui/Card";
import { Reveal } from "src/ui/Reveal";
import RunBorder from "src/ui/RunBorder";
import PdfViewer from "src/components/PdfViewer";
import { trackEvent } from "src/common/utils/trackAnalytics";
import { AnalyticsEvent } from "src/common/constants/analytics";

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
  SkillsTree,
  Branch,
  SkillCard,
  SkillHead,
  SkillIcon,
  SkillCategory,
  ChipList,
  Chip,
  PdfModal,
  PdfModalHead,
  PdfFrame,
  ProjectBlock,
  ProjectNote,
  ProjectResultNote,
} from "./style";

/* Блок проекта внутри записи опыта оформляем так же, как страницу проекта
   в портфолио, — переиспользуем её стили, чтобы вид не разъезжался. */
import {
  MetaList,
  MetaRow,
  MetaLabel,
  MetaValue,
  Desc,
  DescLead,
  FeaturesTitle,
  FeatureList,
  Feature,
} from "src/widgets/PortfolioProject/style";

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

// Показ ссылки без «https://» и служебных параметров — как в портфолио.
const prettyUrl = (url: string) => {
  try {
    const { hostname, pathname } = new URL(url);
    return `${hostname}${pathname.replace(/\/$/, "")}`;
  } catch {
    return url;
  }
};

const Resume = () => {
  const {
    lang: {
      propsHeaderTopMenu,
      resumeCv,
      propsPortfolioList,
      portfolioHeader,
      name: langName,
    },
  } = useSelectorTyped(({ lang }) => lang);
  const { theme } = useSelectorTyped(({ theme }) => theme);
  const dispatch = useDispatchTyped();

  // Файлы резюме зависят от языка (ru/en) и темы (light/dark):
  //  · Просмотр   — экранная версия под тему: Alexey-Mazurenko-<lang>[-dark].pdf
  //  · Скачивание — печатная версия: Alexey-Mazurenko-<lang>-print.pdf
  const slug = langName === "russia" ? "ru" : "en";
  const viewUrl = `/static/resume/Alexey-Mazurenko-${slug}${
    theme.name === "dark" ? "-dark" : ""
  }.pdf`;
  const downloadUrl = `/static/resume/Alexey-Mazurenko-${slug}-print.pdf`;

  // Тач-устройства (телефоны/планшеты, встроенные браузеры) не рендерят PDF
  // в iframe — там показываем его через PDF.js (canvas). На десктопе оставляем
  // нативный iframe (со встроенным просмотрщиком браузера).
  const isTouch = useMediaQuery("(pointer: coarse)");

  const title =
    propsHeaderTopMenu.find((item) => item.value === "resume")?.label ?? "";

  /* Проект внутри записи опыта. Если задан portfolioId — описание, ссылки и
     возможности берём из портфолио (дату создания в резюме не выводим), иначе
     показываем то, что описано прямо в резюме. Технологии не дублируем —
     они есть в разделе «Ключевые навыки». */
  const renderProject = (entry: ResumeProjectProps) => {
    const project = entry.portfolioId
      ? propsPortfolioList.find((item) => item.id === entry.portfolioId)
      : undefined;

    // В демо пробрасываем текущие язык и тему сайта — как в портфолио.
    const demoHref = (() => {
      if (!project?.hrefPortfolio) return "";
      const url = new URL(project.hrefPortfolio);
      url.searchParams.set("lang", langName === "russia" ? "ru" : "en");
      url.searchParams.set("theme", theme.name);
      return url.toString();
    })();

    // Из описания проекта в портфолио берём только лид (первый абзац) —
    // карточки про демо-режим, модели и стек остаются на его странице.
    const lead =
      entry.lead ??
      project?.portfolioText
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)[0];

    const features = entry.features ?? project?.features;

    return (
      <ProjectBlock key={entry.id}>
        {/* Порядок: лид, под ним ссылки, затем возможности. */}
        <Desc>
          {/* Выделен только первый абзац — что это за проект; остальные идут
              обычным текстом. */}
          {lead
            ?.split("\n")
            .map((line) => line.trim())
            .filter(Boolean)
            .map((line, i) =>
              i === 0 ? (
                <DescLead key={i}>{line}</DescLead>
              ) : (
                <ProjectNote key={i}>{line}</ProjectNote>
              )
            )}
          {entry.note && <ProjectNote>{entry.note}</ProjectNote>}

          {(project?.github || demoHref) && (
            <MetaList>
              {project?.github && (
                <MetaRow>
                  <MetaLabel>{portfolioHeader.linkGithub}</MetaLabel>
                  <MetaValue>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      title={project.github}
                    >
                      {prettyUrl(project.github)}
                    </a>
                  </MetaValue>
                </MetaRow>
              )}

              {demoHref && (
                <MetaRow>
                  <MetaLabel>{portfolioHeader.link}</MetaLabel>
                  <MetaValue>
                    <a
                      href={demoHref}
                      target="_blank"
                      rel="noreferrer noopener"
                      title={demoHref}
                    >
                      {prettyUrl(demoHref)}
                    </a>
                  </MetaValue>
                </MetaRow>
              )}
            </MetaList>
          )}
        </Desc>

        {features && features.length > 0 && (
          <>
            <FeaturesTitle>{portfolioHeader.features}</FeaturesTitle>
            <FeatureList>
              {features.map((f, i) => (
                <Feature key={i}>{f}</Feature>
              ))}
            </FeatureList>
          </>
        )}

        {(entry.resultsLead || entry.results?.length) && (
          <>
            <FeaturesTitle>{resumeCv.resultsTitle}</FeaturesTitle>
            {/* «\n» в resultsLead разделяет абзацы — как в summary. */}
            {entry.resultsLead
              ?.split("\n")
              .map((line) => line.trim())
              .filter(Boolean)
              .map((line, i) => (
                <ProjectResultNote key={i}>{line}</ProjectResultNote>
              ))}
            {entry.resultsNote && (
              <ProjectResultNote>{entry.resultsNote}</ProjectResultNote>
            )}
            {entry.results && entry.results.length > 0 && (
              <FeatureList>
                {entry.results.map((r, i) => (
                  <Feature key={i}>{r}</Feature>
                ))}
              </FeatureList>
            )}
          </>
        )}
      </ProjectBlock>
    );
  };

  const handleView = (e: React.MouseEvent) => {
    e.preventDefault();
    trackEvent(AnalyticsEvent.CV_VIEW);
    dispatch(
      showModal({
        width: "min(1000px, 92vw)",
        backgroundOverlay: "rgba(0, 0, 0, 0.6)",
        content: (
          <PdfModal>
            <PdfModalHead>{title}</PdfModalHead>
            {isTouch ? (
              <PdfViewer
                url={viewUrl}
                fallbackHref={viewUrl}
                downloadName={resumeCv.downloadName}
              />
            ) : (
              <PdfFrame src={viewUrl} title={title} />
            )}
          </PdfModal>
        ),
      })
    );
  };

  return (
    <Article>
      <Reveal as="header">
        <ArticleTitle>{title}</ArticleTitle>
      </Reveal>

      <Reveal as={Actions} delay={90}>
        <ButtonPrimary
          href={downloadUrl}
          download={resumeCv.downloadName}
          onClick={() => trackEvent(AnalyticsEvent.CV_DOWNLOAD)}
        >
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
          <RunBorder radius={12} />
        </ButtonPrimary>

        <ButtonSecondary
          href={viewUrl}
          target="_blank"
          rel="noreferrer noopener"
          onClick={handleView}
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
          <RunBorder radius={12} />
        </ButtonSecondary>
      </Reveal>

      <Section>
        <SectionHead>
          <SectionIcon>
            <IconExperience />
          </SectionIcon>
          <SectionTitle>{resumeCv.experienceTitle}</SectionTitle>
        </SectionHead>

        <Timeline>
          {resumeCv.experience.map((item, expIdx) => (
            <TimelineItem key={item.id}>
              <Reveal as={EntryCard} x={64} y={0} delay={expIdx * 90}>
                <EntryHeader>
                  <div>
                    <ItemRole>{item.role}</ItemRole>
                    {item.company && <ItemCompany>{item.company}</ItemCompany>}
                  </div>
                  {item.period && <PeriodBadge>{item.period}</PeriodBadge>}
                </EntryHeader>

                {item.meta && <ItemMeta>{item.meta}</ItemMeta>}
                {/* В summary «\n» разделяет абзацы — про каждый продукт свой. */}
                {item.summary
                  ?.split("\n")
                  .map((line) => line.trim())
                  .filter(Boolean)
                  .map((line, i) => <ItemSummary key={i}>{line}</ItemSummary>)}
                {item.projects?.map((project) => renderProject(project))}

                {item.groups?.map((group, i) => (
                  <Group key={i}>
                    {group.title && <GroupTitle>{group.title}</GroupTitle>}
                    <Bullets>
                      {group.items.map((text, j) => (
                        <li key={j}>{text}</li>
                      ))}
                    </Bullets>
                  </Group>
                ))}

                {/* Стек и процессы — подпись + чипы (как «Ключевые навыки»). */}
                {[item.stack, item.processes]
                  .filter((g): g is NonNullable<typeof g> => !!g)
                  .map((group, i) => (
                    <Group key={`sp-${i}`}>
                      {group.title && <GroupTitle>{group.title}</GroupTitle>}
                      <ChipList>
                        {group.items.map((text, j) => (
                          <Chip key={j}>{text}</Chip>
                        ))}
                      </ChipList>
                    </Group>
                  ))}
              </Reveal>
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

        <SkillsTree>
          {resumeCv.skills.map((group, idx) => (
            <Branch key={group.id}>
              <Reveal as={SkillCard} x={64} y={0} delay={idx * 90}>
                <SkillHead>
                  <SkillIcon>{SKILL_ICONS[idx % SKILL_ICONS.length]}</SkillIcon>
                  <SkillCategory>{group.category}</SkillCategory>
                </SkillHead>
                <ChipList>
                  {group.items.map((skill, i) => (
                    <Chip key={i}>{skill}</Chip>
                  ))}
                </ChipList>
              </Reveal>
            </Branch>
          ))}
        </SkillsTree>
      </Section>

      <Section>
        <SectionHead>
          <SectionIcon>
            <IconEducation />
          </SectionIcon>
          <SectionTitle>{resumeCv.educationTitle}</SectionTitle>
        </SectionHead>

        <Timeline>
          {resumeCv.education.map((item, i) => (
            <TimelineItem key={item.id}>
              <Reveal as={EntryCard} x={64} y={0} delay={i * 90}>
                <EntryHeader>
                  <ItemRole>{item.title}</ItemRole>
                  {item.period && <PeriodBadge>{item.period}</PeriodBadge>}
                </EntryHeader>
                {item.text && <ItemSummary>{item.text}</ItemSummary>}
              </Reveal>
            </TimelineItem>
          ))}
        </Timeline>
      </Section>
    </Article>
  );
};

export default Resume;
