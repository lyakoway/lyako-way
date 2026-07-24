import React, { useMemo, useState } from "react";

import { useSelectorTyped } from "src/store";
import { Article, ArticleTitle } from "src/ui/Card";
import { Reveal } from "src/ui/Reveal";

import {
  FilterBar,
  FilterChip,
  Grid,
  Card,
  CardThumb,
  ThumbOverlay,
  WipBadge,
  CardBody,
  CardName,
  CardDate,
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

  const shown =
    active === ALL
      ? items
      : items.filter(({ project }) => project.direction === active);

  return (
    <Article>
      <Reveal as="header">
        <ArticleTitle>{title}</ArticleTitle>
      </Reveal>

      <Reveal as={FilterBar} delay={90}>
        <FilterChip $active={active === ALL} onClick={() => setActive(ALL)}>
          {portfolio.all}
        </FilterChip>
        {directions.map((dir) => (
          <FilterChip
            key={dir}
            $active={active === dir}
            onClick={() => setActive(dir)}
          >
            {dir}
          </FilterChip>
        ))}
      </Reveal>

      <Grid>
        {shown.map(({ project, grad }, i) => (
          <Reveal key={project.id} delay={i * 90}>
            <Card href={`/portfolio/${project.hrefNameList}`}>
                <CardThumb $grad={grad}>
                  {project.wip && <WipBadge>{portfolio.wip}</WipBadge>}
                  {project.screenshots?.[0] ? (
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
