import React, { useEffect, useMemo, useState } from "react";

import { useDispatchTyped, useSelectorTyped } from "src/store";
import { Article, ArticleTitle } from "src/ui/Card";
import { Reveal } from "src/ui/Reveal";
import RunBorder from "src/ui/RunBorder";
import { trackEvent } from "src/common/utils/trackAnalytics";
import { AnalyticsEvent } from "src/common/constants/analytics";
import { ReactComponent as HeartIcon } from "src/common/icon/heart.svg";
import { fetchProjectLikes, likeIdOf } from "src/reducers";

import {
  FilterBar,
  FilterChip,
  Grid,
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

const ALL = "__all__";

// Сердечко и число лайков проекта под датой (без клика — карточка целиком
// ведёт в проект; лайк ставится на странице проекта).
const CardLikes: React.FC<{ slug: string }> = ({ slug }) => {
  const dispatch = useDispatchTyped();
  const count = useSelectorTyped(({ likes }) => likes.projectLikes[likeIdOf(slug)]);

  useEffect(() => {
    dispatch(fetchProjectLikes({ id: likeIdOf(slug) }));
  }, [slug, dispatch]);

  return (
    <LikeRow>
      <HeartIcon />
      {typeof count === "number" ? count : "—"}
    </LikeRow>
  );
};

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

const Portfolio = () => {
  const {
    lang: { propsHeaderTopMenu, propsPortfolioList, portfolio },
  } = useSelectorTyped(({ lang }) => lang);
  const { theme } = useSelectorTyped(({ theme }) => theme);

  const title =
    propsHeaderTopMenu.find((item) => item.value === "portfolio")?.label ?? "";

  // Закрепляем за каждым проектом свой градиент (стабильно, не зависит от фильтра).
  const items = useMemo(
    () =>
      propsPortfolioList.map((project, i) => ({
        project,
        grad: GRADIENTS[i % GRADIENTS.length],
      })),
    [propsPortfolioList]
  );

  // Направления AI-инженера из проектов — опции фильтра.
  const directions = useMemo(
    () => Array.from(new Set(propsPortfolioList.map((p) => p.direction))),
    [propsPortfolioList]
  );

  const [active, setActive] = useState<string>(ALL);

  const isLight = theme.name === "light";

  const shown =
    active === ALL
      ? items
      : items.filter(({ project }) => project.direction === active);

  const handleFilter = (value: string) => {
    setActive(value);
    trackEvent(AnalyticsEvent.PORTFOLIO_FILTER_CLICK, {
      filter: value === ALL ? "all" : value,
    });
  };

  return (
    <Article>
      <Reveal as="header">
        <ArticleTitle>{title}</ArticleTitle>
      </Reveal>

      <Reveal as={FilterBar} delay={90}>
        <FilterChip $active={active === ALL} onClick={() => handleFilter(ALL)}>
          {portfolio.all}
          <RunBorder radius={12} />
        </FilterChip>
        {directions.map((dir) => (
          <FilterChip
            key={dir}
            $active={active === dir}
            onClick={() => handleFilter(dir)}
          >
            {dir}
            <RunBorder radius={12} />
          </FilterChip>
        ))}
      </Reveal>

      <Grid>
        {shown.map(({ project, grad }, i) => (
          <Reveal key={project.id} delay={i * 90}>
            <Card
              href={`/portfolio/${project.hrefNameList}`}
              onClick={() =>
                trackEvent(AnalyticsEvent.PORTFOLIO_PROJECT_OPEN, {
                  slug: project.hrefNameList,
                  name: project.portfolioNameList,
                  direction: project.direction,
                  wip: Boolean(project.wip),
                })
              }
            >
              <CardThumb $grad={grad}>
                {project.wip && <WipBadge>{portfolio.wip}</WipBadge>}
                {project.thumbLight && project.thumbDark ? (
                  // Обе версии обложки стопкой; какая активна, решает
                  // html[data-theme] ещё до первой отрисовки (см.
                  // ThemeThumb). alt только у видимой — по redux-теме,
                  // чтобы скринридер не читал дважды.
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
                  <img
                    src={project.screenshots[0]}
                    alt={project.portfolioNameList}
                  />
                ) : (
                  <BrowserGlyph />
                )}
                <ThumbOverlay>
                  <EyeGlyph />
                </ThumbOverlay>
              </CardThumb>
              <CardBody>
                <CardName>{project.portfolioNameList}</CardName>
                {project.portfolioDataTime && (
                  <CardDate>{project.portfolioDataTime}</CardDate>
                )}
                {project.likeable && <CardLikes slug={project.hrefNameList} />}
                <ChipList>
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <Chip key={i}>{tech}</Chip>
                  ))}
                </ChipList>
              </CardBody>
            </Card>
          </Reveal>
        ))}
      </Grid>
    </Article>
  );
};

export default Portfolio;
