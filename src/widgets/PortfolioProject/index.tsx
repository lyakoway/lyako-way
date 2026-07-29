import React from "react";
import Head from "next/head";
import Link from "next/link";

import { useSelectorTyped, useDispatchTyped } from "src/store";
import { showModal } from "src/reducers";
import { Article, ArticleTitle } from "src/ui/Card";
import { Reveal } from "src/ui/Reveal";
import RunBorder from "src/ui/RunBorder";

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
  DescLead,
  DescCard,
  CardList,
  FeaturesTitle,
  FeatureList,
  Feature,
  Preview,
  PreviewFrame,
  ModalImage,
  Actions,
  ButtonPrimary,
  ButtonSecondary,
  WipTag,
  NotFound,
} from "./style";

// Текст ссылки в мете: домен и путь, без «https://» и служебных параметров
// (?lang=ru&theme=light). Сам href остаётся полным — режем только показ,
// иначе на узком экране адрес занимал три строки. Если разобрать не удалось,
// показываем как есть.
const prettyUrl = (url: string) => {
  try {
    const { hostname, pathname } = new URL(url);
    return `${hostname}${pathname.replace(/\/$/, "")}`;
  } catch {
    return url;
  }
};

const PortfolioProject = ({ slug }: { slug: string }) => {
  const {
    lang: { propsPortfolioList, portfolioHeader, portfolio, name: langName },
  } = useSelectorTyped(({ lang }) => lang);
  const themeName = useSelectorTyped(({ theme }) => theme.theme.name);
  const dispatch = useDispatchTyped();

  const project = propsPortfolioList.find(
    (item) => item.hrefNameList === slug
  );

  // Ссылка на развёрнутое демо: пробрасываем текущие язык и тему сайта
  // (?lang=ru|en&theme=light|dark), чтобы демо открылось в тех же настройках.
  const demoHref = (() => {
    if (!project?.hrefPortfolio) return "";
    const url = new URL(project.hrefPortfolio);
    url.searchParams.set("lang", langName === "russia" ? "ru" : "en");
    url.searchParams.set("theme", themeName);
    return url.toString();
  })();

  const name = project?.portfolioNameList ?? portfolioHeader.textPortfolio;

  // Открываем скриншот в модалке-лайтбоксе.
  const openImage = (src: string, alt: string) => {
    dispatch(
      showModal({
        width: "min(1200px, 96vw)",
        backgroundOverlay: "rgba(0, 0, 0, 0.82)",
        content: (
          <ModalImage>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} />
          </ModalImage>
        ),
      })
    );
  };

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

      <Reveal as="header">
        <ArticleTitle>{name}</ArticleTitle>
      </Reveal>

      {!project ? (
        <NotFound>
          <Link href="/portfolio">{portfolioHeader.textPortfolio}</Link>
        </NotFound>
      ) : (
        <>
          {project.wip && <WipTag>{portfolio.wip}</WipTag>}

          <Reveal as={MetaList} delay={80}>
            {project.portfolioDataTime && (
              <MetaRow>
                <MetaLabel>{portfolioHeader.date}</MetaLabel>
                <MetaValue>{project.portfolioDataTime}</MetaValue>
              </MetaRow>
            )}

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
          </Reveal>

          <Desc>
            {project.portfolioText
              .split("\n")
              .map((line) => line.trim())
              .filter(Boolean)
              .map((line, i) => {
                if (i === 0) {
                  return (
                    <Reveal as={DescLead} key={i} delay={0}>
                      {line}
                    </Reveal>
                  );
                }
                // Карточка: если есть «;» — разбиваем на пункты-строки.
                const parts = line
                  .split(";")
                  .map((p) => p.trim())
                  .filter(Boolean);
                return (
                  <Reveal as={DescCard} key={i} delay={i * 80}>
                    {parts.length > 1 ? (
                      <CardList>
                        {parts.map((p, j) => (
                          <li key={j}>{p}</li>
                        ))}
                      </CardList>
                    ) : (
                      line
                    )}
                  </Reveal>
                );
              })}
          </Desc>

          {project.features && project.features.length > 0 && (
            <>
              <FeaturesTitle>{portfolioHeader.features}</FeaturesTitle>
              <FeatureList>
                {project.features.map((f, i) => (
                  <Reveal as={Feature} key={i} delay={i * 60}>
                    {f}
                  </Reveal>
                ))}
              </FeatureList>
            </>
          )}

          {project.screenshots && project.screenshots.length > 0 && (
            <Preview>
              {project.screenshots.map((src, i) => (
                <Reveal
                  as={PreviewFrame}
                  key={i}
                  delay={i * 90}
                  type="button"
                  onClick={() => openImage(src, `${name} — ${i + 1}`)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`${name} — ${i + 1}`} loading="lazy" />
                </Reveal>
              ))}
            </Preview>
          )}

          <Reveal as={Actions}>
            {demoHref && (
              <ButtonPrimary
                href={demoHref}
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
                <RunBorder radius={12} />
              </ButtonPrimary>
            )}

            {project.github && (
              <ButtonSecondary
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
                <RunBorder radius={12} />
              </ButtonSecondary>
            )}
          </Reveal>
        </>
      )}
    </Article>
  );
};

export default PortfolioProject;
