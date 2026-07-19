import React from "react";
import Head from "next/head";
import Link from "next/link";

import { useSelectorTyped } from "src/store";
import { Article, ArticleTitle } from "src/ui/Card";

import {
  Breadcrumb,
  Crumb,
  Sep,
  MetaList,
  MetaRow,
  MetaLabel,
  MetaValue,
  TechChips,
  Chip,
  Desc,
  Preview,
  PreviewFrame,
  Actions,
  ButtonPrimary,
  ButtonSecondary,
  NotFound,
} from "./style";

const PortfolioProject = ({ slug }: { slug: string }) => {
  const {
    lang: { propsPortfolioList, portfolioHeader },
  } = useSelectorTyped(({ lang }) => lang);

  const project = propsPortfolioList.find(
    (item) => item.hrefNameList === slug
  );

  const name = project?.portfolioNameList ?? portfolioHeader.textPortfolio;

  return (
    <Article>
      <Head>
        <title>{`${name} · ${portfolioHeader.textPortfolio} — LYAKOWAY`}</title>
      </Head>

      <Breadcrumb>
        <Link href="/portfolio">{portfolioHeader.textPortfolio}</Link>
        <Sep>/</Sep>
        <Crumb>{name}</Crumb>
      </Breadcrumb>

      <header>
        <ArticleTitle>{name}</ArticleTitle>
      </header>

      {!project ? (
        <NotFound>
          <Link href="/portfolio">{portfolioHeader.textPortfolio}</Link>
        </NotFound>
      ) : (
        <>
          <MetaList>
            <MetaRow>
              <MetaLabel>{portfolioHeader.date}</MetaLabel>
              <MetaValue>{project.portfolioDataTime}</MetaValue>
            </MetaRow>

            <MetaRow>
              <MetaLabel>{portfolioHeader.technology}</MetaLabel>
              <MetaValue as="dd">
                <TechChips>
                  {project.technologies.map((tech, i) => (
                    <Chip key={i}>{tech}</Chip>
                  ))}
                </TechChips>
              </MetaValue>
            </MetaRow>

            {project.github && (
              <MetaRow>
                <MetaLabel>{portfolioHeader.linkGithub}</MetaLabel>
                <MetaValue>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {project.github}
                  </a>
                </MetaValue>
              </MetaRow>
            )}

            {project.hrefPortfolio && (
              <MetaRow>
                <MetaLabel>{portfolioHeader.link}</MetaLabel>
                <MetaValue>
                  <a
                    href={project.hrefPortfolio}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {project.hrefPortfolio}
                  </a>
                </MetaValue>
              </MetaRow>
            )}
          </MetaList>

          <Desc>
            {project.portfolioText
              .split("\n")
              .map((line) => line.trim())
              .filter(Boolean)
              .map((line, i) => (
                <p key={i}>{line}</p>
              ))}
          </Desc>

          {project.screenshots && project.screenshots.length > 0 && (
            <Preview>
              {project.screenshots.map((src, i) => (
                <PreviewFrame
                  key={i}
                  href={src}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`${name} — ${i + 1}`} loading="lazy" />
                </PreviewFrame>
              ))}
            </Preview>
          )}

          <Actions>
            {project.hrefPortfolio && (
              <ButtonPrimary
                href={project.hrefPortfolio}
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M14 4h6v6M20 4l-8 8M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {portfolioHeader.link.replace(/:$/, "")}
              </ButtonPrimary>
            )}

            {project.github && (
              <ButtonSecondary
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </ButtonSecondary>
            )}
          </Actions>
        </>
      )}
    </Article>
  );
};

export default PortfolioProject;
