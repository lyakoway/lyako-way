import React from "react";
import { useSelectorTyped } from "src/store";

import {
  HeaderSectionWrapper,
  HeaderSectionFon,
  IconComp,
  IconMap,
  IconBook,
  NewYear,
  IconCompImage,
  CodeScreen,
  CodeLineRow,
  CodeToken,
  CodeCaret,
  CODE_LINES,
  CODE_COLORS,
  Steam,
  SteamWisp,
  MonitorScreen,
  MonitorGlare,
  MonitorLoader,
  MonitorLoaderFill,
} from "./style";

import Clock from "src/components/Clock";
import Window from "src/components/Window";

import myIconComp from "src/common/icon/icon-header/comp.png";
import myIconCompn from "src/common/icon/icon-header/compn.png";

import LampSwitch from "src/ui/LampSwitch";

import { isNewYearPeriod } from "src/common/utils/isNewYearPeriod";
import { NewYearTree } from "src/components/NewYearTree";

// Анимированная сцена рабочего стола (стол, монитор, часы, окно, полка с
// книгами). Сайд-эффекты (лайки, погода→климат, гео→язык) вынесены в
// useAutoLocaleClimate (вызывается в Layout). Контакты и форма — в сайдбаре
// и на страницах «Контакты» / «Услуги», не в hero.
const HeaderSection = () => {
  const {
    theme: { name },
  } = useSelectorTyped(({ theme }) => theme);
  const themeLight = name === "light";

  const showTree = isNewYearPeriod();

  return (
    <HeaderSectionWrapper>
      <HeaderSectionFon>
        {showTree && (
          <NewYear>
            <NewYearTree themeLight={themeLight} />
          </NewYear>
        )}
        <IconComp>
          {/* Оба слоя рендерятся всегда; какой виден — решает html[data-theme]
              через CSS (верная тема с первой отрисовки, без ожидания JS).
              Светлая — LCP: priority => next вставит preload + fetchpriority. */}
          <IconCompImage
            src={myIconComp}
            alt=""
            aria-hidden
            fill
            sizes="697px"
            priority
            fetchPriority="high"
          />
          <IconCompImage
            src={myIconCompn}
            alt=""
            aria-hidden
            fill
            sizes="697px"
            $dark
          />
          <LampSwitch />
          <CodeScreen aria-hidden $themeLight={themeLight}>
            {CODE_LINES.map((line, i) => (
              <CodeLineRow
                key={i}
                $start={i * 5}
                $end={i * 5 + 4}
                $themeLight={themeLight}
                style={{ marginLeft: line.indent }}
              >
                {line.tokens.map(([color, w], j) => (
                  <CodeToken key={j} $color={CODE_COLORS[color]} $w={w} />
                ))}
                {line.caret && <CodeCaret />}
              </CodeLineRow>
            ))}
          </CodeScreen>
          <MonitorScreen aria-hidden $themeLight={themeLight}>
            <MonitorGlare $themeLight={themeLight} />
            <MonitorLoader>
              <MonitorLoaderFill $themeLight={themeLight} />
            </MonitorLoader>
          </MonitorScreen>
          <Steam aria-hidden $themeLight={themeLight}>
            <SteamWisp $left={8} $delay={0} $themeLight={themeLight} />
            <SteamWisp $left={50} $delay={1} $themeLight={themeLight} />
            <SteamWisp $left={92} $delay={2} $themeLight={themeLight} />
          </Steam>
        </IconComp>
        <IconMap />
        <Window themeLight={themeLight} />
        <Clock />
        <IconBook />
      </HeaderSectionFon>
    </HeaderSectionWrapper>
  );
};

export default HeaderSection;
