import { useEffect } from "react";

import { useDispatchTyped, useSelectorTyped } from "src/store";
import {
  fetchLikes,
  setClimateControl,
  setLang,
} from "src/reducers";
import { useWeather } from "src/features/customHooks/useWeather";
import { WEATHER_TO_CLIMATE } from "src/components/Window/ClimateControl/constants";

// Сайд-эффекты, которые раньше жили в hero (src/components/HeaderSection):
//  — загрузка лайков;
//  — автоопределение климата по погоде (если пользователь не выбирал вручную);
//  — автоопределение языка по стране из погоды (если пользователь не выбирал).
// Вынесено в отдельный хук, чтобы работало из общей оболочки (Layout),
// а не только при рендере hero на главной.
export function useAutoLocaleClimate() {
  const dispatch = useDispatchTyped();
  const { userSelectedClimate } = useSelectorTyped(({ climate }) => climate);
  const { userSelectedLang } = useSelectorTyped(({ lang }) => lang);
  const { weather } = useWeather();

  // Загружаем лайки
  useEffect(() => {
    dispatch(fetchLikes({ idLikes: "heart_button" }));
  }, [dispatch]);

  // Климат и язык из API только если пользователь ещё не выбирал вручную
  useEffect(() => {
    if (!userSelectedClimate && weather?.current?.condition?.text) {
      const conditionText = weather.current.condition.text;
      const mappedClimate = WEATHER_TO_CLIMATE[conditionText];
      if (mappedClimate) {
        dispatch(setClimateControl(mappedClimate));
      }
    }

    const country = weather?.location?.country?.toLowerCase() || null;
    if (!userSelectedLang && country) {
      const isRussia = country === "russia" || country === "россия";
      dispatch(setLang(!isRussia));
    }
  }, [weather, dispatch, userSelectedClimate, userSelectedLang]);
}
