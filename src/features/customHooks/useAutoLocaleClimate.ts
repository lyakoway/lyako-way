import { useEffect, useRef } from "react";

import { useDispatchTyped, useSelectorTyped } from "src/store";
import {
  fetchLikes,
  setClimateControl,
  setLang,
  setUserSelectedLang,
} from "src/reducers";
import { useWeather } from "src/features/customHooks/useWeather";
import { weatherToClimate } from "src/components/Window/ClimateControl/constants";
import { getStoredLang } from "src/common/utils/langStorage";

// Сайд-эффекты, которые раньше жили в hero (src/components/HeaderSection):
//  — загрузка лайков;
//  — автоопределение климата по погоде (если пользователь не выбирал вручную);
//  — автоопределение языка по стране из погоды (если пользователь не выбирал):
//    по умолчанию английский, русский — только если гео нашло Россию.
// Вынесено в отдельный хук, чтобы работало из общей оболочки (Layout),
// а не только при рендере hero на главной.
export function useAutoLocaleClimate() {
  const dispatch = useDispatchTyped();
  const { userSelectedClimate, climate } = useSelectorTyped(
    ({ climate }) => climate
  );
  const { userSelectedLang } = useSelectorTyped(({ lang }) => lang);
  // Единственный «драйвер» погоды в приложении.
  const { weather } = useWeather({ autoInit: true });

  // Загружаем лайки строго один раз — ref защищает от повторных запусков
  // эффекта, если dispatch/стор внезапно меняют идентичность.
  const likesLoadedRef = useRef(false);
  useEffect(() => {
    if (likesLoadedRef.current) return;
    likesLoadedRef.current = true;
    dispatch(fetchLikes({ idLikes: "heart_button" }));
  }, [dispatch]);

  // Климат синхронизируем при каждом обновлении погоды (в т.ч. periodic
  // refresh), пока пользователь не выбрал тип вручную.
  useEffect(() => {
    if (userSelectedClimate || !weather?.current?.condition) return;
    const { code, text } = weather.current.condition;
    const mappedClimate = weatherToClimate(code, text);
    if (mappedClimate && mappedClimate !== climate) {
      dispatch(setClimateControl(mappedClimate));
    }
  }, [weather, dispatch, userSelectedClimate, climate]);

  // Сохранённый ручной выбор языка применяем сразу при монтировании, не
  // дожидаясь погоды. Если смена города сбросила userSelectedLang —
  // накладываем выбор снова: гео-детект работает только пока сохранённого
  // выбора нет вовсе.
  useEffect(() => {
    if (userSelectedLang) return;
    const storedIsEnglish = getStoredLang();
    if (storedIsEnglish === null) return;
    dispatch(setLang(storedIsEnglish));
    dispatch(setUserSelectedLang(true));
  }, [dispatch, userSelectedLang]);

  // Язык — один раз при первой погоде: русский только для России, иначе
  // остаётся английский (дефолт из initialState).
  const langAppliedRef = useRef(false);
  useEffect(() => {
    if (langAppliedRef.current || userSelectedLang) return;
    // Сохранённый выбор перекрывает гео, даже если флаг userSelectedLang
    // ещё не успел обновиться в этом же проходе эффектов (смена города).
    if (getStoredLang() !== null) return;
    const country = weather?.location?.country?.toLowerCase() || null;
    if (!country) return;
    langAppliedRef.current = true;
    // setLang(true) → английский, setLang(false) → русский: русский ставится
    // только когда гео нашло Россию, для остальных — остаётся английский.
    const isRussia = country === "russia" || country === "россия";
    dispatch(setLang(!isRussia));
  }, [weather, dispatch, userSelectedLang]);
}
