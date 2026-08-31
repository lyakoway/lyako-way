import React, { useCallback } from "react";
import styled from "styled-components";

import { useDispatchTyped, useSelectorTyped } from "src/store";
import { setLang, setUserSelectedLang } from "src/reducers";
import { disperseTextSwap } from "src/common/utils/disperseTextSwap";
import { setStoredLang } from "src/common/utils/langStorage";
import { controlButtonBase } from "src/common/lib/controlButton";
import { trackEvent } from "src/common/utils/trackAnalytics";
import { AnalyticsEvent } from "src/common/constants/analytics";

// Кнопка языка: без флага — просто «RU»/«EN» белыми буквами, оранжевый акцент
// при наведении/нажатии (см. controlButtonBase). Показывает текущий язык.
const ButtonWrapper = styled.button`
  ${controlButtonBase}
`;

const ButtonLang = () => {
  const {
    lang: { name },
  } = useSelectorTyped(({ lang }) => lang);

  const dispatch = useDispatchTyped();

  const handleClick = useCallback(() => {
    // Следующий язык считаем из стора: локальное зеркало (useState) здесь
    // устаревало, если язык менялся после монтирования кнопки (гео-детект) —
    // первый клик «проглатывался».
    const nextIsEnglish = name === "russia";
    trackEvent(AnalyticsEvent.LANGUAGE_TOGGLE, {
      to: nextIsEnglish ? "en" : "ru",
    });
    // Снимаем «распыление» СТАРОГО текста ДО смены языка (пока он ещё в DOM):
    // копия-overlay рассыпается, а под ней уже рендерится новый язык.
    disperseTextSwap();
    dispatch(setLang(nextIsEnglish));
    dispatch(setUserSelectedLang(true));
    // Ручной выбор переживает перезагрузку и перекрывает гео-детект.
    setStoredLang(nextIsEnglish);
  }, [name, dispatch]);

  const isRussia = name === "russia";

  // Показываем язык, на который переключим: сейчас русский → «EN», иначе «RU».
  return (
    <ButtonWrapper
      onClick={handleClick}
      type="button"
      aria-label={isRussia ? "Switch to English" : "Переключить на русский"}
    >
      {isRussia ? "EN" : "RU"}
    </ButtonWrapper>
  );
};

export default ButtonLang;
