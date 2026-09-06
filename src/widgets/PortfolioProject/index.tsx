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
  FeaturesHead,
  FeaturesIcon,
  FeaturesTitle,
  FeatureList,
  Feature,
  AiSection,
  AiPrinciples,
  AiPrinciple,
  AiPrincipleBody,
  AiPrincipleTitle,
  AiPrincipleCheck,
  AiPrincipleResult,
  AiTableTitle,
  AiTable,
  AiFootnote,
  AiConclusion,
  AiConclusionFlow,
  AiConclusionStep,
  AiConclusionArrow,
  AiConclusionText,
  AiGap,
  AiDiagram,
  AiLane,
  AiLaneCard,
  AiLaneTitle,
  AiNodes,
  AiNode,
  AiNodeLabel,
  AiNodeNote,
  AiFlow,
  AiUseCases,
          Preview,
  PreviewFrame,
  Actions,
  ActionsRow,
  ButtonPrimary,
  ButtonSecondary,
  HeartSquare,
  LikeButton,
  WipTag,
  NotFound,
  AiUseCase,
  AiUseCasesContent,
  AiUseCaseCard,
  AiUseCasesHeading,
  AiUseCaseTitle,
  AiUseCaseText,
  MetricsStrip,
  KeyResultsGrid,
  KeyStatCard,
  KeyStatValue,
  KeyStatLabel,
  ProductionItem,
  ProductionName,
  ProductionText,
  PipelineChain,
  PipelineChainStep,
} from "./style";

/* Иконки заголовков разделов — инлайн-SVG в стиле иконок дерева навыков
   резюме (stroke = currentColor, толщина 2, скруглённые концы). */
const IconFeatures = () => (
  // Возможности — звезда
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 3l2.09 5.26L20 9.27l-4 3.64L17.18 19 12 15.9 6.82 19 8 12.91l-4-3.64 5.91-1.01L12 3z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const IconUseCases = () => (
  // Для чего нужен проект — мишень
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconDiagram = () => (
  // Схема проекта — слои
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 3 3 8l9 5 9-5-9-5z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="m3 12.5 9 5 9-5M3 17l9 5 9-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconAiView = () => (
  // Взгляд AI-инженера — чип
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
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
  </svg>
);

const IconMetrics = () => (
  // Замеры — столбики диаграммы
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M5 20v-6M12 20V6M19 20v-9M3 20h18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconFindings = () => (
  // Что показали замеры — лампа
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M9 18h6M10 21h4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 3a6 6 0 0 0-3.5 10.9c.7.5 1.2 1.3 1.3 2.1h4.4c.1-.8.6-1.6 1.3-2.1A6 6 0 0 0 12 3z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const IconTakeaway = () => (
  // Главный вывод — ключ (ключевая мысль)
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconGaps = () => (
  // Честные пробелы — компас
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path
      d="m15.5 8.5-2 5-5 2 2-5 5-2z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

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

  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [principlesOpen, setPrinciplesOpen] = useState(false);

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
        type: "image",
        width: "min(1200px, 96vw)",
        backgroundOverlay: "rgba(0, 0, 0, 0.82)",
        data: { src, alt },
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

          {/* Первый экран: тизер и строка ключевых метрик */}
          {project.tagline && (
            <Reveal as={DescLead} delay={40}>
              {project.tagline}
            </Reveal>
          )}

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

          {/* Строка метрик под тизером */}
          {project.metricsLine && (
            <Reveal as={MetricsStrip} delay={100}>
              {project.metricsLine}
            </Reveal>
          )}

          {/* Key results — стена цифр сразу после первого экрана */}
          {project.keyResults && project.keyResults.length > 0 && (
            <>
              <FeaturesHead>
                <FeaturesIcon>
                  <IconMetrics />
                </FeaturesIcon>
                <FeaturesTitle>
                  {project.keyResultsTitle ?? portfolioHeader.features}
                </FeaturesTitle>
              </FeaturesHead>
              <KeyResultsGrid>
                {project.keyResults.map((k, i) => (
                  <Reveal as={KeyStatCard} key={k.label} delay={i * 60}>
                    <KeyStatValue>{k.value}</KeyStatValue>
                    <KeyStatLabel>{k.label}</KeyStatLabel>
                  </Reveal>
                ))}
              </KeyResultsGrid>
            </>
          )}

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
              <FeaturesHead>
                <FeaturesIcon><IconFeatures /></FeaturesIcon>
                <FeaturesTitle>{portfolioHeader.features}</FeaturesTitle>
              </FeaturesHead>
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
              {project.aiEngineering.useCases &&
                project.aiEngineering.useCases.length > 0 && (
                  <>
                    <FeaturesHead>
                      <FeaturesIcon><IconUseCases /></FeaturesIcon>
                      <FeaturesTitle>{project.aiEngineering.useCasesTitle}</FeaturesTitle>
                    </FeaturesHead>
                    {project.aiEngineering.useCasesIntro && (
                      <Reveal as={DescCard} delay={40}>
                        {project.aiEngineering.useCasesIntro}
                      </Reveal>
                    )}
                    <AiUseCases $open={useCasesOpen}>
                      {/* Заголовок-кнопка аккордеона */}
                      <AiUseCase
                        $open={useCasesOpen}
                        onClick={() => setUseCasesOpen(!useCasesOpen)}
                        aria-expanded={useCasesOpen}
                      >
                        <AiUseCasesHeading>
                          {project.aiEngineering.useCasesListTitle}
                        </AiUseCasesHeading>
                      </AiUseCase>
                      {/* Контент: сетка карточек сценариев */}
                      <AiUseCasesContent $open={useCasesOpen}>
                        <div>
                          <div>
                            {project.aiEngineering.useCases.map((u) => (
                              <AiUseCaseCard key={u.title}>
                                <AiUseCaseTitle>{u.title}</AiUseCaseTitle>
                                <AiUseCaseText>{u.detail}</AiUseCaseText>
                              </AiUseCaseCard>
                            ))}
                          </div>
                        </div>
                      </AiUseCasesContent>
                    </AiUseCases>
                  </>
                )}

              {project.aiEngineering.diagram &&
                project.aiEngineering.diagram.length > 0 && (
                  <>
                    <FeaturesHead>
                      <FeaturesIcon><IconDiagram /></FeaturesIcon>
                      <FeaturesTitle>{project.aiEngineering.diagramTitle}</FeaturesTitle>
                    </FeaturesHead>
                    {/* Без внешней подложки: только дерево слева и карточки дорожек */}
                    <Reveal as={AiDiagram} delay={60}>
                      {project.aiEngineering.diagram.map((lane, i) => (
                        <React.Fragment key={i}>
                          {i > 0 && <AiFlow aria-hidden>↓</AiFlow>}
                          {/* Карточка выезжает справа, дерево стоит на месте */}
                          <AiLane>
                            <Reveal as={AiLaneCard} x={64} y={0} delay={i * 90}>
                              <AiLaneTitle>{lane.title}</AiLaneTitle>
                              <AiNodes>
                                {lane.nodes.map((node, j) => (
                                  <AiNode key={j} $accent={node.accent}>
                                    <AiNodeLabel>{node.label}</AiNodeLabel>
                                    {node.note && (
                                      <AiNodeNote>{node.note}</AiNodeNote>
                                    )}
                                  </AiNode>
                                ))}
                              </AiNodes>
                            </Reveal>
                          </AiLane>
                        </React.Fragment>
                      ))}
                    </Reveal>
                    {project.aiEngineering.diagramNote && (
                      <AiFootnote>{project.aiEngineering.diagramNote}</AiFootnote>
                    )}
                  </>
                )}

              <FeaturesHead>
                <FeaturesIcon><IconAiView /></FeaturesIcon>
                <FeaturesTitle>{project.aiEngineering.sectionTitle}</FeaturesTitle>
              </FeaturesHead>
              <Reveal as={DescCard} delay={60}>
                {project.aiEngineering.intro}
              </Reveal>

              {/* Чек-лист AI-инженера — тот же аккордеон, что и у сценариев */}
              <AiUseCases $open={principlesOpen}>
                <AiUseCase
                  $open={principlesOpen}
                  onClick={() => setPrinciplesOpen(!principlesOpen)}
                  aria-expanded={principlesOpen}
                >
                  <AiUseCasesHeading>
                    {project.aiEngineering.principlesTitle}
                  </AiUseCasesHeading>
                </AiUseCase>
                <AiUseCasesContent $open={principlesOpen}>
                  <div>
                    <div>
                      <AiPrinciples>
                        {project.aiEngineering.principles.map((p, i) => (
                          <Reveal as={AiPrinciple} key={i} delay={i * 50}>
                            <AiPrincipleBody>
                              <AiPrincipleTitle>{p.title}</AiPrincipleTitle>
                              <AiPrincipleCheck>{p.check}</AiPrincipleCheck>
                              {p.result && (
                                <AiPrincipleResult>
                                  {p.result}
                                </AiPrincipleResult>
                              )}
                            </AiPrincipleBody>
                          </Reveal>
                        ))}
                      </AiPrinciples>
                    </div>
                  </div>
                </AiUseCasesContent>
              </AiUseCases>

              {project.aiEngineering.pipelines &&
                project.aiEngineering.pipelines.length > 0 && (
                  <>
                    <FeaturesHead>
                      <FeaturesIcon>
                        <IconDiagram />
                      </FeaturesIcon>
                      <FeaturesTitle>
                        {project.aiEngineering.pipelinesTitle}
                      </FeaturesTitle>
                    </FeaturesHead>
                    <AiDiagram>
                      {project.aiEngineering.pipelines.map((pipeline) => (
                        <AiLane key={pipeline.title}>
                          <Reveal as={AiLaneCard} x={64} y={0} delay={90}>
                            <AiLaneTitle>{pipeline.title}</AiLaneTitle>
                            <PipelineChain>
                              {pipeline.steps.map((step, i) => (
                                <React.Fragment key={step}>
                                  <PipelineChainStep>{step}</PipelineChainStep>
                                  {i < pipeline.steps.length - 1 && (
                                    <span className="down">↓</span>
                                  )}
                                </React.Fragment>
                              ))}
                            </PipelineChain>
                          </Reveal>
                        </AiLane>
                      ))}
                    </AiDiagram>
                  </>
                )}

              <FeaturesHead>
                <FeaturesIcon><IconMetrics /></FeaturesIcon>
                <FeaturesTitle>{project.aiEngineering.metricsTitle}</FeaturesTitle>
              </FeaturesHead>
              {/* Тот же дерево: узел на стволе + карточка, выезжающая справа */}
              <AiDiagram>
                {project.aiEngineering.tables.map((t, i) => (
                  <AiLane key={i}>
                    <Reveal as={AiLaneCard} x={64} y={0} delay={i * 90}>
                      <AiTableTitle>{t.title}</AiTableTitle>
                      {/* На узких карточках любая таблица перестраивается
                          в мини-карточки (container-запрос в AiTable) */}
                      <AiTable $firstFill={t.columns.length === 2}>
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
                                <td key={k} data-label={t.columns[k]}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </AiTable>
                      {t.footnote && <AiFootnote>{t.footnote}</AiFootnote>}
                    </Reveal>
                  </AiLane>
                ))}
              </AiDiagram>

              {project.aiEngineering.findings &&
                project.aiEngineering.findings.length > 0 && (
                  <>
                    <FeaturesHead>
                      <FeaturesIcon><IconFindings /></FeaturesIcon>
                      <FeaturesTitle>{project.aiEngineering.findingsTitle}</FeaturesTitle>
                    </FeaturesHead>
                    <FeatureList>
                      {project.aiEngineering.findings.map((f, i) => (
                        <Reveal as={Feature} key={i} delay={i * 50}>
                          {f}
                        </Reveal>
                      ))}
                    </FeatureList>
                  </>
                )}

              {project.aiEngineering.production &&
                project.aiEngineering.production.items.length > 0 && (
                  <>
                    <FeaturesHead>
                      <FeaturesIcon>
                        <IconGaps />
                      </FeaturesIcon>
                      <FeaturesTitle>
                        {project.aiEngineering.production.title}
                      </FeaturesTitle>
                    </FeaturesHead>
                    <div>
                      {project.aiEngineering.production.items.map((item) => (
                        <ProductionItem key={item.title}>
                          <ProductionName>{item.title}</ProductionName>
                          <ProductionText>{item.text}</ProductionText>
                        </ProductionItem>
                      ))}
                    </div>
                  </>
                )}

              {project.aiEngineering.gaps && project.aiEngineering.gaps.length > 0 && (
                <>
                    <FeaturesHead>
                      <FeaturesIcon><IconGaps /></FeaturesIcon>
                      <FeaturesTitle>{project.aiEngineering.gapsTitle}</FeaturesTitle>
                    </FeaturesHead>
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
                <>
                  {project.aiEngineering.conclusionLabel && (
                    <FeaturesHead>
                      <FeaturesIcon><IconTakeaway /></FeaturesIcon>
                      <FeaturesTitle>{project.aiEngineering.conclusionLabel}</FeaturesTitle>
                    </FeaturesHead>
                  )}
                  <Reveal as={AiConclusion} delay={0}>
                    {project.aiEngineering.conclusionSteps &&
                      project.aiEngineering.conclusionSteps.length > 0 && (
                        <AiConclusionFlow>
                          {project.aiEngineering.conclusionSteps.map((step, i) => (
                            <React.Fragment key={i}>
                              {i > 0 && <AiConclusionArrow aria-hidden>→</AiConclusionArrow>}
                              <AiConclusionStep>{step}</AiConclusionStep>
                            </React.Fragment>
                          ))}
                        </AiConclusionFlow>
                      )}
                    <AiConclusionText>
                      {/* каждая строка до \n — отдельный акцент */}
                      {project.aiEngineering.conclusion
                        .split("\n")
                        .map((line, i) => (
                          <span key={i}>{line}</span>
                        ))}
                    </AiConclusionText>
                  </Reveal>
                </>
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
