import React from "react";

import {
  PortfolioListProps,
  ResumeExperienceGroupProps,
} from "src/common/types/lang";
import { useSelectorTyped, useDispatchTyped } from "src/store";
import { showModal } from "src/reducers";
import { ArticleTitle, Article } from "src/ui/Card";
import { Reveal } from "src/ui/Reveal";
import RunBorder from "src/ui/RunBorder";
import { trackEvent } from "src/common/utils/trackAnalytics";
import { AnalyticsEvent } from "src/common/constants/analytics";
import { usePressAnimation } from "src/common/lib/usePressAnimation";

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
  GroupHeadBox,
  GroupIconBox,
  ProjectSummary,
  ProjectSummaryTitle,
  ResultBlocks,
  ResultBlockTitle,
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

/* Иконки секций внутри карточки опыта — как блоки «Схемы проекта»
   в портфолио: плашка с иконкой + капс-заголовок. */
const groupIcons = {
  projects: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
  tasks: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M10 6h10M10 12h10M10 18h10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="m4 5 1.5 1.5L8 4M4 11l1.5 1.5L8 10M4 17l1.5 1.5L8 16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  results: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
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
  processes: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20.5 12a8.5 8.5 0 1 1-2.6-6.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M20.5 2.8V6.3h-3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  demo: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="m10.2 8.8 4.8 3.2-4.8 3.2V8.8z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

// Шапка секции внутри карточки: иконка в плашке + заголовок (как разделы
// «Схемы проекта» в портфолио).
const GroupHead = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => (
  <GroupHeadBox>
    <GroupIconBox>{icon}</GroupIconBox>
    <GroupTitle>{title}</GroupTitle>
  </GroupHeadBox>
);

const Resume = () => {
  const {
    lang: {
      propsHeaderTopMenu,
      resumeCv,
      propsPortfolioList,
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

  const title =
    propsHeaderTopMenu.find((item) => item.value === "resume")?.label ?? "";

  /* Демо записи: похожие проекты реализованы в портфолио — подробности
     (описание, возможности, замеры) на их страницах. Секция оформляется
     так же, как «Стек» и «Процессы». */
  const renderPortfolioNote = (portfolioIds: string[]) => {
    const projects = portfolioIds
      .map((id) => propsPortfolioList.find((item) => item.id === id))
      .filter((p): p is PortfolioListProps => p != null);
    if (projects.length === 0) return null;

    return (
      <Group>
        <GroupHeadBox>
          <GroupIconBox>{groupIcons.demo}</GroupIconBox>
          <GroupTitle>{resumeCv.demoTitle}</GroupTitle>
        </GroupHeadBox>
        <Bullets>
          {projects.map((project) => {
            const portfolioHref = `/portfolio/${project.hrefNameList}`;
            return (
              <li key={project.id}>
                {project.portfolioNameList} —{" "}
                <a href={portfolioHref} title={portfolioHref}>
                  {portfolioHref}
                </a>
              </li>
            );
          })}
        </Bullets>
      </Group>
    );
  };

  /* Демо проекта записи — внешний продукт, не из портфолио. Секция
     оформляется так же, как «Стек» и «Процессы». */
  const renderViewLink = (name: string, url: string) => (
    <Group>
      <GroupHeadBox>
        <GroupIconBox>{groupIcons.demo}</GroupIconBox>
        <GroupTitle>{resumeCv.demoTitle}</GroupTitle>
      </GroupHeadBox>
      <Bullets>
        <li>
          {name} —{" "}
          <a href={url} target="_blank" rel="noreferrer noopener" title={url}>
            {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </a>
        </li>
      </Bullets>
    </Group>
  );

  const handleView = (e: React.MouseEvent) => {
    e.preventDefault();
    trackEvent(AnalyticsEvent.CV_VIEW);
    dispatch(
      showModal({
        type: "pdf",
        width: "min(1000px, 92vw)",
        backgroundOverlay: "rgba(0, 0, 0, 0.6)",
        data: {
          url: viewUrl,
          title,
          downloadName: resumeCv.downloadName,
        },
      })
    );
  };

  const downloadPress = usePressAnimation();
  const viewPress = usePressAnimation();

  return (
    <Article>
      <Reveal as="header">
        <ArticleTitle>{title}</ArticleTitle>
      </Reveal>

      <Reveal as={Actions} delay={90}>
        <ButtonPrimary
          href={downloadUrl}
          download={resumeCv.downloadName}
          {...downloadPress.pressHandlers}
          $pressed={downloadPress.pressed}
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
          {...viewPress.pressHandlers}
          $pressed={viewPress.pressed}
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
                {/* Описания проектов — общая секция «Проекты»: внутри блоки
                    с заголовком и подписанными строками деталей. */}
                {item.projectDescriptions && item.projectDescriptions.length > 0 && (
                  <Group>
                    <GroupHead
                      icon={groupIcons.projects}
                      title={resumeCv.projectsTitle}
                    />
                    {item.projectDescriptions.map((description, i) => (
                      <ProjectSummary key={i}>
                        <ProjectSummaryTitle>
                          {description.title}
                        </ProjectSummaryTitle>
                        <ItemSummary>{description.text}</ItemSummary>
                        {description.details && description.details.length > 0 && (
                          <Bullets>
                            {description.details.map((detail) => (
                              <li key={detail.label}>
                                {detail.label}: {detail.text}
                              </li>
                            ))}
                          </Bullets>
                        )}
                      </ProjectSummary>
                    ))}
                  </Group>
                )}
                {/* В summary «\n» разделяет абзацы — про каждый продукт свой. */}
                {item.summary
                  ?.split("\n")
                  .map((line) => line.trim())
                  .filter(Boolean)
                  .map((line, i) => <ItemSummary key={i}>{line}</ItemSummary>)}

                {item.groups?.map((group, i) => (
                  <Group key={i}>
                    {group.title && (
                      <GroupHead icon={groupIcons.tasks} title={group.title} />
                    )}
                    <Bullets>
                      {group.items.map((text, j) => (
                        <li key={j}>{text}</li>
                      ))}
                    </Bullets>
                  </Group>
                ))}

                {/* Ключевые результаты по проектам — название с линией
                    и пункты, без подложки карточек. */}
                {item.resultGroups && item.resultGroups.length > 0 && (
                  <Group>
                    <GroupHead
                      icon={groupIcons.results}
                      title={resumeCv.resultTitle}
                    />
                    <ResultBlocks>
                      {item.resultGroups.map((resultGroup) => (
                        <div key={resultGroup.title || resultGroup.items[0]}>
                          {resultGroup.title && (
                            <ResultBlockTitle>
                              {resultGroup.title}
                            </ResultBlockTitle>
                          )}
                          <Bullets>
                            {resultGroup.items.map((text, j) => (
                              <li key={j}>{text}</li>
                            ))}
                          </Bullets>
                        </div>
                      ))}
                    </ResultBlocks>
                  </Group>
                )}

                {/* Стек и процессы — подпись + чипы (как «Ключевые навыки»). */}
                {/* Стек по проектам — название + чипы, без подложки карточек:
                    стек не должен выделяться так же, как ключевые результаты. */}
                {item.stackGroups && item.stackGroups.length > 0 && (
                  <Group>
                    <GroupHead
                      icon={groupIcons.stack}
                      title={resumeCv.stackTitle}
                    />
                    <ResultBlocks>
                      {item.stackGroups.map((stackGroup) => (
                        <div key={stackGroup.title}>
                          <ResultBlockTitle>{stackGroup.title}</ResultBlockTitle>
                          <ChipList>
                            {stackGroup.items.map((text, j) => (
                              <Chip key={j}>{text}</Chip>
                            ))}
                          </ChipList>
                        </div>
                      ))}
                    </ResultBlocks>
                  </Group>
                )}

                {[
                  item.stack && { icon: groupIcons.stack, group: item.stack },
                  item.processes && {
                    icon: groupIcons.processes,
                    group: item.processes,
                  },
                ]
                  .filter(
                    (
                      entry
                    ): entry is {
                      icon: React.JSX.Element;
                      group: ResumeExperienceGroupProps;
                    } => !!entry
                  )
                  .map(({ icon, group }, i) => (
                    <Group key={`sp-${i}`}>
                      <GroupHead icon={icon} title={group.title} />
                      <ChipList>
                        {group.items.map((text, j) => (
                          <Chip key={j}>{text}</Chip>
                        ))}
                      </ChipList>
                    </Group>
                  ))}

                {/* Демо записи и ссылка на просмотр проекта — в конце
                    карточки. */}
                {item.portfolioIds && renderPortfolioNote(item.portfolioIds)}
                {item.link && renderViewLink(item.link.name, item.link.url)}
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
