import { useEffect, useRef } from "react";

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
  // Единственный «драйвер» погоды в приложении.
  const { weather } = useWeather({ autoInit: true });

  // Загружаем лайки (один раз)
  useEffect(() => {
    dispatch(fetchLikes({ idLikes: "heart_button" }));
  }, [dispatch]);

  // Автоопределение климата и языка — применяем РОВНО ОДИН РАЗ, когда впервые
  // пришла погода. Без guard эффект дёргал setLang/setClimate на каждое
  // изменение weather, плодя ре-рендеры и мигание.
  const appliedRef = useRef(false);
  useEffect(() => {
    if (appliedRef.current) return;
    if (!weather?.current?.condition?.text) return;
    appliedRef.current = true;

    if (!userSelectedClimate) {
      const mappedClimate = WEATHER_TO_CLIMATE[weather.current.condition.text];
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
