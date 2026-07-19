import React from "react";
import Link from "next/link";

import { useSelectorTyped } from "src/store";
import { Article, ArticleTitle } from "src/ui/Card";

import {
  Grid,
  Card,
  CardThumb,
  ThumbOverlay,
  CardBody,
  CardName,
  CardDate,
  ChipList,
  Chip,
} from "./style";

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
    lang: { propsHeaderTopMenu, propsPortfolioList },
  } = useSelectorTyped(({ lang }) => lang);

  const title =
    propsHeaderTopMenu.find((item) => item.value === "portfolio")?.label ?? "";

  return (
    <Article>
      <header>
        <ArticleTitle>{title}</ArticleTitle>
      </header>

      <Grid>
        {propsPortfolioList.map((project) => (
          <Link
            key={project.id}
            href={`/portfolio/${project.hrefNameList}`}
            passHref
            legacyBehavior
          >
            <Card>
              <CardThumb>
                <BrowserGlyph />
                <ThumbOverlay>
                  <EyeGlyph />
                </ThumbOverlay>
              </CardThumb>
              <CardBody>
                <CardName>{project.portfolioNameList}</CardName>
                <CardDate>{project.portfolioDataTime}</CardDate>
                <ChipList>
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <Chip key={i}>{tech}</Chip>
                  ))}
                </ChipList>
              </CardBody>
            </Card>
          </Link>
        ))}
      </Grid>
    </Article>
  );
};

export default Portfolio;
