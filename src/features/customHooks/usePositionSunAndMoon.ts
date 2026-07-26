import { useMemo } from "react";
import { useDayTime } from "src/features/customHooks/useDayTime";

const SECONDS_IN_DAY = 86400;

/**
 * Позиция и «яркость» солнца/луны по времени суток.
 *
 * Считается СИНХРОННО (useMemo) от входных данных — детерминированно и без
 * цепочки useEffect+useState, которая раньше «устаканивалась» через транзиенты
 * (−60 → 60 → реальное) и при ремаунте (возврат на «Дом») могла давать другой
 * результат. Теперь при одинаковом времени → одинаковый угол, поэтому позиция
 * не «сбивается» при переходах между страницами.
 *
 * leftRotateWindowSunMoon — угол тела в окне: 0% пройденного пути → −60°
 * (слева, восход/закат-начало), 50% → 0° (зенит), 100% → +60° (правый край).
 */
export const usePositionSunAndMoon = ({
  themeLight,
}: {
  themeLight: boolean;
}): {
  timeLeftSunMoon: number;
  leftRotateWindowSunMoon: number;
  lightOffOpacitySun: number;
  lightOffOpacityMoon: number;
} => {
  const { sunriseTime, sunsetTime, timesHouse, dayTime } = useDayTime();

  return useMemo(() => {
    let timeLeft: number;
    let percentRemaining: number;

    if (dayTime) {
      // Днём: сколько дня осталось до заката.
      const dayLength = sunsetTime - sunriseTime;
      timeLeft = Math.abs(sunsetTime - timesHouse);
      percentRemaining =
        dayLength > 0 ? ((sunsetTime - timesHouse) * 100) / dayLength : 0;
    } else {
      // Ночью: сколько ночи осталось до восхода (с учётом перехода через 24:00).
      const timesMoon =
        timesHouse <= sunriseTime
          ? Math.abs(sunriseTime - timesHouse)
          : Math.abs(SECONDS_IN_DAY - timesHouse + sunriseTime);
      const nightLength = sunriseTime + Math.abs(SECONDS_IN_DAY - sunsetTime);
      timeLeft = timesMoon;
      percentRemaining = nightLength > 0 ? (timesMoon * 100) / nightLength : 0;
    }

    // % пройденного пути (0..100), с защитой от выхода за границы/NaN.
    const percentPassed = Math.min(
      100,
      Math.max(0, 100 - (Number.isFinite(percentRemaining) ? percentRemaining : 0))
    );

    // Угол: 0% → −60°, 50% → 0°, 100% → +60°.
    const leftRotate = Math.round((60 * percentPassed) / 50) - 60;

    // Яркость — треугольник с пиком в зените (percentPassed = 50).
    const peak = 1 - Math.abs(percentPassed - 50) / 50; // 0..1
    const lightOffOpacitySun = themeLight ? peak : 0;
    const lightOffOpacityMoon = themeLight ? 0 : peak * 0.4;

    return {
      // Длительность оборота не может быть 0 (иначе CSS-анимация ломается).
      timeLeftSunMoon: Math.max(1, Math.round(Number.isFinite(timeLeft) ? timeLeft : 1)),
      leftRotateWindowSunMoon: leftRotate,
      lightOffOpacitySun,
      lightOffOpacityMoon,
    };
  }, [sunriseTime, sunsetTime, timesHouse, dayTime, themeLight]);
};
