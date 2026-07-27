import React, { useCallback } from "react";
import styled from "styled-components";

import { useDispatchTyped, useSelectorTyped } from "src/store";
import { showModal } from "src/reducers";
import ClimateControl from "src/components/Window/ClimateControl";
import WeatherIcon from "src/components/Window/WeatherIcon";
import { controlButtonBase } from "src/common/lib/controlButton";

// Кнопка погоды в панели «Настройки»: общий стиль контролов (язык/тема),
// внутри — климат/тема-зависимая иконка (та, что раньше была на окне). По клику
// открывает модалку «Погодные условия».
const ButtonWrapper = styled.button`
  ${controlButtonBase}
  overflow: hidden;

  /* Иконка погоды (ContainerWeather 40×40 с margin) уменьшена под кнопку. */
  & > div {
    margin: 0;
    width: 26px;
    height: 26px;
  }
  svg {
    width: 26px;
    height: 26px;
  }
`;

const ButtonWeather: React.FC = () => {
  const dispatch = useDispatchTyped();
  const { climate } = useSelectorTyped(({ climate }) => climate);
  const {
    theme: { name },
  } = useSelectorTyped(({ theme }) => theme);
  const themeLight = name === "light";

  const handleClick = useCallback(() => {
    dispatch(
      showModal({
        content: <ClimateControl />,
        width: "auto",
        backgroundOverlay: "rgba(0, 0, 0, 0.4)",
      })
    );
  }, [dispatch]);

  return (
    <ButtonWrapper onClick={handleClick} type="button" aria-label="Погода">
      <WeatherIcon climateControl={climate} themeLight={themeLight} />
    </ButtonWrapper>
  );
};

export default ButtonWeather;
