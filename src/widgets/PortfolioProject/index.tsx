import React, { useCallback, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { useSelectorTyped, useDispatchTyped } from "src/store";
import { showModal } from "src/reducers";
import { Article, ArticleTitle } from "src/ui/Card";
import { Reveal } from "src/ui/Reveal";
import RunBorder from "src/ui/RunBorder";
import { trackEvent } from "src/common/utils/trackAnalytics";
import { AnalyticsEvent } from "src/common/constants/analytics";
import { usePressAnimation } from "src/common/lib/usePressAnimation";
import { ReactComponent as HeartIcon } from "src/common/icon/heart.svg";
import { fetchProjectLikes, likeIdOf, sendProjectLike } from "src/reducers";
import { useToastNotify } from "src/features/customHooks/use-toast-notify";
import {
  generateConfetti,
  generateParticles,
} from "src/ui/ButtonHeart/animations";
import { Particle, ConfettiPiece, ToastHeart } from "src/ui/ButtonHeart/style";

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
  AiSection,
  AiPrinciples,
  AiPrinciple,
  AiStatus,
  AiPrincipleBody,
  AiPrincipleTitle,
  AiPrincipleCheck,
  AiPrincipleResult,
  AiCard,
  AiTableTitle,
  AiTable,
  AiFootnote,
  AiConclusion,
  AiGap,
  Preview,
  PreviewFrame,
  ModalImage,
  Actions,
  ActionsRow,
  ButtonPrimary,
  ButtonSecondary,
  HeartSquare,
  LikeButton,
  WipTag,
  NotFound,
} from "./style";

// Бейджи статуса принципов чек-листа + подсказки на двух языках сайта.
const AI_STATUS_GLYPH: Record<string, string> = {
  done: "✓",
  partial: "◐",
  todo: "·",
};
const AI_STATUS_HINT: Record<string, { russia: string; english: string }> = {
  done: { russia: "Закрыто", english: "Done" },
  partial: { russia: "Частично", english: "Partial" },
  todo: { russia: "В планах", english: "Planned" },
};

type HeartParticle = ReturnType<typeof generateParticles>[number];
type Confetti = ReturnType<typeof generateConfetti>[number];

// Кнопка-лайк проекта — та же, что сердечко в панели настроек (ButtonWrapper:
// тёмный квадрат с белым сердцем, оранжевый ховер), но заводит счётчик
// конкретного проекта. Числа на кнопке нет: счётчик — на карточке в списке
// и в тосте после клика (как у сайдбарного сердца: «Спасибо за оценку!
// <проект> <число> ❤️»). При клипе сердце на кнопке вспыхивает красным
// и пульсирует, вокруг летят красные сердечки и конфетти.
const ProjectLikeButton: React.FC<{
  slug: string;
  name: string;
  label: string;
}> = ({ slug, name, label }) => {
  const id = likeIdOf(slug);
  const {
    lang: { toast },
  } = useSelectorTyped(({ lang }) => lang);
  const toastNotify = useToastNotify();
  const dispatch = useDispatchTyped();
  const [busy, setBusy] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [particles, setParticles] = useState<HeartParticle[]>([]);
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  // Прогреваем счётчик проекта — карточка в списке потом не будет его дёргать
  useEffect(() => {
    dispatch(fetchProjectLikes({ id }));
  }, [id, dispatch]);

  const triggerAnimations = () => {
    const newConfetti = generateConfetti(15);
    setConfetti((prev) => [...prev, ...newConfetti]);
    setTimeout(
      () =>
        setConfetti((prev) =>
          prev.filter((c) => !newConfetti.some((nc) => nc.id === c.id)),
        ),
      1500,
    );

    const count = Math.floor(Math.random() * 3) + 5;
    const newParticles = generateParticles(count);
    setParticles((prev) => [...prev, ...newParticles]);
    setTimeout(
      () =>
        setParticles((prev) =>
          prev.filter((p) => !newParticles.some((np) => np.id === p.id)),
        ),
      1500,
    );

    setPulse(true);
    setTimeout(() => setPulse(false), 700);
  };

  const handle = () => {
    if (busy) return;
    setBusy(true);
    // Пока запрос в полёте — сердце непрерывно бьётся ($beating от busy);
    // празднование (конфетти + улетающее сердце + удар) — только по успеху.
    trackEvent(AnalyticsEvent.PROJECT_LIKE_CLICK, { slug });
    dispatch(sendProjectLike({ id }))
      .unwrap()
      .then((res) => {
        // Успех: конфетти, улетающее сердце, одиночный удар — и тост.
        triggerAnimations();
        const num = res?.likes;
        toastNotify({
          title: toast.textHeart,
          text: (
            <>
              {name}
              {num != null && (
                <>
                  {" - "}
                  <ToastHeart>
                    <HeartIcon />
                  </ToastHeart>
                  {"\u00A0"}
                  {num}
                </>
              )}
            </>
          ),
          type: "success",
        });
      })
      .catch(() => {
        toastNotify({ title: toast.textError, type: "error" });
      })
      .finally(() => setBusy(false));
  };

  const press = usePressAnimation();

  return (
    <LikeButton
      onClick={handle}
      title={label}
      aria-label={label}
      {...press.pressHandlers}
      $pressed={press.pressed}
    >
      {/* То же анимированное сердце (квадрат с пульсом), справа — надпись */}
      <HeartSquare $animate={pulse} $beating={busy}>
        <HeartIcon />
        {particles.map((p) => (
          <Particle
            key={p.id}
            x={p.x}
            size={p.size}
            rotate={p.rotate}
            color="#ff3d6e"
            $fly={p.$fly}
          >
            ♥
          </Particle>
        ))}
        {confetti.map((c) => (
          <ConfettiPiece
            key={c.id}
            x={c.x}
            y={c.y}
            size={c.size}
            rotate={c.rotate}
            color={c.color}
          />
        ))}
      </HeartSquare>
      {label}
      <RunBorder radius={12} />
    </LikeButton>
  );
};

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

  const sitePress = usePressAnimation();
  const githubPress = usePressAnimation();

  const project = propsPortfolioList.find((item) => item.hrefNameList === slug);

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
  const openImage = (src: string, alt: string, index: number) => {
    trackEvent(AnalyticsEvent.PORTFOLIO_SCREENSHOT_OPEN, {
      slug,
      index,
    });
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
      }),
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
                    onClick={() =>
                      trackEvent(AnalyticsEvent.PORTFOLIO_GITHUB_OPEN, {
                        slug,
                        placement: "meta",
                      })
                    }
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
                    onClick={() =>
                      trackEvent(AnalyticsEvent.PORTFOLIO_DEMO_OPEN, {
                        slug,
                        placement: "meta",
                      })
                    }
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

          {project.aiEngineering && (
            <AiSection>
              <FeaturesTitle>{project.aiEngineering.sectionTitle}</FeaturesTitle>
              <Reveal as={DescCard} delay={60}>
                {project.aiEngineering.intro}
              </Reveal>

              <FeaturesTitle>{project.aiEngineering.principlesTitle}</FeaturesTitle>
              <AiPrinciples>
                {project.aiEngineering.principles.map((p, i) => (
                  <Reveal as={AiPrinciple} key={i} delay={i * 50}>
                    <AiStatus
                      $status={p.status}
                      title={
                        AI_STATUS_HINT[p.status]?.[langName] ??
                        AI_STATUS_HINT[p.status]?.english
                      }
                    >
                      {AI_STATUS_GLYPH[p.status] ?? "·"}
                    </AiStatus>
                    <AiPrincipleBody>
                      <AiPrincipleTitle>{p.title}</AiPrincipleTitle>
                      <AiPrincipleCheck>{p.check}</AiPrincipleCheck>
                      <AiPrincipleResult>{p.result}</AiPrincipleResult>
                    </AiPrincipleBody>
                  </Reveal>
                ))}
              </AiPrinciples>

              <FeaturesTitle>{project.aiEngineering.metricsTitle}</FeaturesTitle>
              {project.aiEngineering.tables.map((t, i) => (
                <Reveal as={AiCard} key={i} delay={i * 80}>
                  <AiTableTitle>{t.title}</AiTableTitle>
                  <AiTable>
                    <thead>
                      <tr>
                        {t.columns.map((c, j) => (
                          <th key={j}>{c}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {t.rows.map((r, j) => (
                        <tr key={j} data-highlight={r.highlight ? "true" : undefined}>
                          {r.cells.map((cell, k) => (
                            <td key={k}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </AiTable>
                  {t.footnote && <AiFootnote>{t.footnote}</AiFootnote>}
                </Reveal>
              ))}

              {project.aiEngineering.findings &&
                project.aiEngineering.findings.length > 0 && (
                  <>
                    <FeaturesTitle>{project.aiEngineering.findingsTitle}</FeaturesTitle>
                    <FeatureList>
                      {project.aiEngineering.findings.map((f, i) => (
                        <Reveal as={Feature} key={i} delay={i * 50}>
                          {f}
                        </Reveal>
                      ))}
                    </FeatureList>
                  </>
                )}

              {project.aiEngineering.gaps && project.aiEngineering.gaps.length > 0 && (
                <>
                  <FeaturesTitle>{project.aiEngineering.gapsTitle}</FeaturesTitle>
                  <FeatureList>
                    {project.aiEngineering.gaps.map((g, i) => (
                      <Reveal as={AiGap} key={i} delay={i * 50}>
                        {g}
                      </Reveal>
                    ))}
                  </FeatureList>
                </>
              )}

              {project.aiEngineering.conclusion && (
                <Reveal as={AiConclusion} delay={0}>
                  {project.aiEngineering.conclusion}
                </Reveal>
              )}

              {project.aiEngineering.footnote && (
                <AiFootnote>{project.aiEngineering.footnote}</AiFootnote>
              )}
            </AiSection>
          )}

          {project.screenshots && project.screenshots.length > 0 && (
            <Preview>
              {project.screenshots.map((src, i) => (
                <Reveal
                  as={PreviewFrame}
                  key={i}
                  delay={i * 90}
                  type="button"
                  onClick={() => openImage(src, `${name} — ${i + 1}`, i)}
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
                {...sitePress.pressHandlers}
                $pressed={sitePress.pressed}
                onClick={() =>
                  trackEvent(AnalyticsEvent.PORTFOLIO_DEMO_OPEN, {
                    slug,
                    placement: "button",
                  })
                }
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

            {/* GitHub и сердце — под-рядом: на <580 они вместе стоят под
                кнопкой «Сайт» (см. Actions/ActionsRow в style.ts) */}
            <ActionsRow>
              {project.github && (
                <ButtonSecondary
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  {...githubPress.pressHandlers}
                  $pressed={githubPress.pressed}
                  onClick={() =>
                    trackEvent(AnalyticsEvent.PORTFOLIO_GITHUB_OPEN, {
                      slug,
                      placement: "button",
                    })
                  }
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.25.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.18-1.49 3.14-1.18 3.14-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.84 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                      fill="currentColor"
                    />
                  </svg>
                  GitHub
                  <RunBorder radius={12} />
                </ButtonSecondary>
              )}

              {project.likeable && (
                <ProjectLikeButton
                  slug={slug}
                  name={name}
                  label={portfolio.likeLabel}
                />
              )}
            </ActionsRow>
          </Reveal>
        </>
      )}
    </Article>
  );
};

export default PortfolioProject;
