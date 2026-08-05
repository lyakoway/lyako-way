import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";

import { useDispatchTyped, useSelectorTyped } from "src/store";
import { setLang, setUserSelectedLang } from "src/reducers";
import { disperseTextSwap } from "src/common/utils/disperseTextSwap";
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

  const [opened, setOpened] = useState(false);
  const dispatch = useDispatchTyped();

  const handleClick = useCallback(() => {
    // Снимаем «распыление» СТАРОГО текста ДО смены языка (пока он ещё в DOM):
    // копия-overlay рассыпается, а под ней уже рендерится новый язык.
    const nextIsEnglish = !opened;
    trackEvent(AnalyticsEvent.LANGUAGE_TOGGLE, {
      to: nextIsEnglish ? "en" : "ru",
    });
    disperseTextSwap();
    setOpened(nextIsEnglish);
    dispatch(setLang(nextIsEnglish));
    dispatch(setUserSelectedLang(true));
  }, [opened, dispatch]);

  useEffect(() => {
    setOpened(name !== "russia");
  }, []);

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
