import React from "react";

import HeaderSection from "src/components/HeaderSection";
import { useFitScale } from "src/features/customHooks";
import { Article } from "src/ui/Card";

import { HomeStage, SceneLoader, SceneSpinner } from "./style";

// Главная «Дом»: анимированная сцена рабочего стола (окно, стол, монитор,
// часы, полка с книгами) в article-рамке (как в остальных разделах),
// на сланцевом фоне ($scene) — как в исходном проекте.
const Home = () => {
  const { ref, scale, ready } = useFitScale(960);

  return (
    // className home-scene — исключаем сцену из глобального 3s-перехода темы
    // (globalStyles), чтобы работали её собственные плавные переходы
    // (themeFade/bgTransition, 4s: смена дня/ночи и фона).
    <Article $scene className="home-scene">
      <HomeStage ref={ref} $scale={scale} $ready={ready}>
        <HeaderSection />

      </HomeStage>
      {/* Лоадер только на время загрузки (при !ready). На быстрой сети сцена
          готова раньше задержки появления — лоадер не мелькает. */}
      {!ready && (
        <SceneLoader aria-hidden>
          <SceneSpinner />
        </SceneLoader>
      )}
    </Article>
  );
};

export default Home;
