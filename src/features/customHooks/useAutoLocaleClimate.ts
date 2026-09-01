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
import { getStoredLang, setRuBrowserHint } from "src/common/utils/langStorage";

// Сайд-эффекты, которые раньше жили в hero (src/components/HeaderSection):
//  — загрузка лайков;
//  — автоопределение климата по погоде (если пользователь не выбрал вручную);
//  — язык: navigator.language — единственный автоматический сигнал (мгновенный
//    и не врёт при VPN, в отличие от гео-IP); гео на язык не влияет.
//    По умолчанию английский, русский — если браузер русский.
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

  // navigator.language — единственный автоматический сигнал языка: русский
  // интерфейс браузера получает русскую версию сразу при монтировании
  // (английский — дефолт, диспатчить нечего). Гео-IP на язык не влияет:
  // VPN и корпоративные адреса переносят «страну» на другой континент,
  // а язык браузера — осознанный выбор самого пользователя.
  // langHint-cookie подсказывает SSR следующей загрузке отдать русский
  // с первого байта, без вспышки английского.
  const browserLangRef = useRef(false);
  useEffect(() => {
    if (browserLangRef.current || userSelectedLang) return;
    if (getStoredLang() !== null) return;
    browserLangRef.current = true;
    const isRuBrowser = navigator.language?.toLowerCase().startsWith("ru");
    if (isRuBrowser) {
      dispatch(setLang(false));
      setRuBrowserHint();
    }
  }, [dispatch, userSelectedLang]);

  // Язык гео не определяет (см. эффект navigator.language выше) — погода
  // из гео нужна только климату и сцене.
}
