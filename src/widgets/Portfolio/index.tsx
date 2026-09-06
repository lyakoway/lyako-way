import React, { useEffect, useMemo } from "react";

import { useDispatchTyped, useSelectorTyped } from "src/store";
import { Article, ArticleTitle } from "src/ui/Card";
import { Reveal } from "src/ui/Reveal";
import { trackEvent } from "src/common/utils/trackAnalytics";
import { AnalyticsEvent } from "src/common/constants/analytics";
import { ReactComponent as HeartIcon } from "src/common/icon/heart.svg";
import { fetchProjectLikes, likeIdOf } from "src/reducers";
import { PortfolioListProps } from "src/common/types/lang";

import {
  HeroSection,
  HeroRole,
  HeroTitle,
  HeroChips,
  SectionHead,
  SectionIcon,
  SectionTitle,
  NumbersSection,
  StatsGrid,
  StatCard,
  StatValue,
  StatLabel,
  StatNote,
  FeaturedSection,
  FeaturedGrid,
  CardDescription,
  CardMetrics,
  CaseLink,
  FocusSection,
  FocusList,
  FocusRow,
  FocusName,
  FocusItems,
  ResearchSection,
  ResearchGrid,
  Card,
  CardThumb,
  ThumbOverlay,
  WipBadge,
  ThemeThumb,
  CardBody,
  CardName,
  CardDate,
  LikeRow,
  ChipList,
  Chip,
} from "./style";

// Палитра градиентов для обложек — каждой карточке свой оттенок.
const GRADIENTS = [
  "linear-gradient(135deg, rgba(249, 87, 33, 0.30), rgba(255, 255, 255, 0.04))",
  "linear-gradient(135deg, rgba(69, 182, 252, 0.28), rgba(255, 255, 255, 0.04))",
  "linear-gradient(135deg, rgba(139, 117, 255, 0.28), rgba(255, 255, 255, 0.04))",
  "linear-gradient(135deg, rgba(0, 193, 155, 0.26), rgba(255, 255, 255, 0.04))",
  "linear-gradient(135deg, rgba(234, 31, 73, 0.26), rgba(255, 255, 255, 0.04))",
  "linear-gradient(135deg, rgba(193, 235, 29, 0.24), rgba(255, 255, 255, 0.04))",
];

// Избранные проекты — порядок зафиксирован.
const FEATURED_IDS = ["rag-chat", "ai-data-pilot"];
// WIP-проекты, не показываемые в Research & Experiments:
// RAG Chat уже сильнее доказывает эту компетенцию.
const HIDDEN_WIP_IDS = ["assistant"];

const BrowserGlyph = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect
      x="3"
      y="4"
      width="18"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path d="M3 9h18" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="6" cy="6.5" r="0.7" fill="currentColor" />
    <circle cx="8.4" cy="6.5" r="0.7" fill="currentColor" />
  </svg>
);

const EyeGlyph = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const NumbersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M5 20v-6M12 20V6M19 20v-9M3 20h18"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const FeaturedIcon = () => (
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

const FocusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const ResearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M9 3h6M10 3v5.5L4.8 18a2 2 0 0 0 1.8 3h10.8a2 2 0 0 0 1.8-3L14 8.5V3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Шапка секции: иконка в плашке + капс-заголовок.
const Head = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <SectionHead>
    <SectionIcon>{icon}</SectionIcon>
    <SectionTitle>{title}</SectionTitle>
  </SectionHead>
);

// Сердечко и число лайков проекта (загружаются с бэкенда; пока числа нет —
// не показываем ничего).
const CardLikes: React.FC<{ slug: string }> = ({ slug }) => {
  const dispatch = useDispatchTyped();
  const count = useSelectorTyped(({ likes }) => likes.projectLikes[likeIdOf(slug)]);

  useEffect(() => {
    dispatch(fetchProjectLikes({ id: likeIdOf(slug) }));
  }, [slug, dispatch]);

  if (typeof count !== "number") return null;

  return (
    <LikeRow>
      <HeartIcon />
      {count}
    </LikeRow>
  );
};

// Обложка карточки: тематические картинки, скриншот или декоративный глиф.
const ProjectThumb: React.FC<{
  project: PortfolioListProps;
  grad: string;
  children?: React.ReactNode;
}> = ({ project, grad, children }) => {
  const { theme } = useSelectorTyped(({ theme }) => theme);
  const isLight = theme.name === "light";

  return (
    <CardThumb $grad={grad}>
      {children}
      {project.thumbLight && project.thumbDark ? (
        <>
          <ThemeThumb
            className="theme-thumb"
            src={project.thumbLight}
            alt={isLight ? project.portfolioNameList : ""}
            aria-hidden={!isLight}
            $variant="light"
          />
          <ThemeThumb
            className="theme-thumb"
            src={project.thumbDark}
            alt={isLight ? "" : project.portfolioNameList}
            aria-hidden={isLight}
            $variant="dark"
          />
        </>
      ) : project.screenshots?.[0] ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={project.screenshots[0]} alt={project.portfolioNameList} />
      ) : (
        <BrowserGlyph />
      )}
      <ThumbOverlay>
        <EyeGlyph />
      </ThumbOverlay>
    </CardThumb>
  );
};

const Portfolio = () => {
  const {
    lang: { propsHeaderTopMenu, propsPortfolioList, portfolio },
  } = useSelectorTyped(({ lang }) => lang);

  const title =
    propsHeaderTopMenu.find((item) => item.value === "portfolio")?.label ?? "";

  // Закрепляем за каждым проектом свой градиент (стабильно).
  const items = useMemo(
    () =>
      propsPortfolioList.map((project, i) => ({
        project,
        grad: GRADIENTS[i % GRADIENTS.length],
      })),
    [propsPortfolioList]
  );

  // Избранные — в зафиксированном порядке; research — WIP без исключённых.
  const featured = useMemo(
    () =>
      FEATURED_IDS.map((id) =>
        items.find(({ project }) => project.id === id)
      ).filter((item): item is { project: PortfolioListProps; grad: string } =>
        Boolean(item)
      ),
    [items]
  );

  const research = useMemo(
    () =>
      items.filter(
        ({ project }) => project.wip && !HIDDEN_WIP_IDS.includes(project.id)
      ),
    [items]
  );

  const openProject = (project: PortfolioListProps) =>
    trackEvent(AnalyticsEvent.PORTFOLIO_PROJECT_OPEN, {
      slug: project.hrefNameList,
      name: project.portfolioNameList,
      direction: project.direction,
      wip: Boolean(project.wip),
    });

  return (
    <Article>
      <Reveal as="header">
        <ArticleTitle>{title}</ArticleTitle>
      </Reveal>

      {/* Hero: роль, позиционирование, направления */}
      <Reveal as={HeroSection} delay={60}>
        <HeroRole>{portfolio.hero.role}</HeroRole>
        <HeroTitle>{portfolio.hero.title}</HeroTitle>
        <HeroChips>{portfolio.hero.chips}</HeroChips>
      </Reveal>

      {/* AI engineering in numbers — trust-блок */}
      <NumbersSection>
        <Reveal>
          <Head icon={<NumbersIcon />} title={portfolio.numbersTitle} />
        </Reveal>
        <StatsGrid>
          {portfolio.stats.map((stat, i) => (
            <Reveal as={StatCard} key={stat.label} delay={i * 60}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
              <StatNote>{stat.note}</StatNote>
            </Reveal>
          ))}
        </StatsGrid>
      </NumbersSection>

      {/* Featured projects — витрина двух ключевых кейсов */}
      <FeaturedSection>
        <Reveal>
          <Head icon={<FeaturedIcon />} title={portfolio.featuredTitle} />
        </Reveal>
        <FeaturedGrid>
          {featured.map(({ project, grad }, i) => (
            <Reveal key={project.id} delay={i * 90}>
              <Card
                href={`/portfolio/${project.hrefNameList}`}
                onClick={() => openProject(project)}
              >
                <ProjectThumb project={project} grad={grad}>
                  {project.wip && <WipBadge>{portfolio.wip}</WipBadge>}
                </ProjectThumb>
                <CardBody>
                  <CardName>{project.portfolioNameList}</CardName>
                  {project.cardDescription && (
                    <CardDescription>{project.cardDescription}</CardDescription>
                  )}
                  {project.cardMetrics && project.cardMetrics.length > 0 && (
                    <CardMetrics>
                      {project.cardMetrics.map((metric) => (
                        <li key={metric}>{metric}</li>
                      ))}
                    </CardMetrics>
                  )}
                  {project.likeable && <CardLikes slug={project.hrefNameList} />}
                  <ChipList>
                    {project.technologies.slice(0, 4).map((tech, j) => (
                      <Chip key={j}>{tech}</Chip>
                    ))}
                  </ChipList>
                  <CaseLink>
                    {portfolio.caseLink}
                    <span className="arrow">→</span>
                  </CaseLink>
                </CardBody>
              </Card>
            </Reveal>
          ))}
        </FeaturedGrid>
      </FeaturedSection>

      {/* Engineering focus — карта специализации */}
      <FocusSection>
        <Reveal>
          <Head icon={<FocusIcon />} title={portfolio.focusTitle} />
        </Reveal>
        <FocusList>
          {portfolio.focus.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <FocusRow>
                <FocusName>{item.title}</FocusName>
                <FocusItems>{item.items}</FocusItems>
              </FocusRow>
            </Reveal>
          ))}
        </FocusList>
      </FocusSection>

      {/* Research & experiments — проекты в разработке */}
      <ResearchSection>
        <Reveal>
          <Head icon={<ResearchIcon />} title={portfolio.researchTitle} />
        </Reveal>
        <ResearchGrid>
          {research.map(({ project, grad }, i) => (
            <Reveal key={project.id} delay={i * 60}>
              <Card
                href={`/portfolio/${project.hrefNameList}`}
                onClick={() => openProject(project)}
              >
                <ProjectThumb project={project} grad={grad}>
                  {project.wip && <WipBadge>{portfolio.wip}</WipBadge>}
                </ProjectThumb>
                <CardBody>
                  <CardName>{project.portfolioNameList}</CardName>
                  {project.direction && (
                    <CardDate>{project.direction}</CardDate>
                  )}
                  <ChipList>
                    {project.technologies.slice(0, 4).map((tech, j) => (
                      <Chip key={j}>{tech}</Chip>
                    ))}
                  </ChipList>
                </CardBody>
              </Card>
            </Reveal>
          ))}
        </ResearchGrid>
      </ResearchSection>
    </Article>
  );
};

export default Portfolio;
