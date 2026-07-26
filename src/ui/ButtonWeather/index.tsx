import React, { useCallback } from "react";
import styled from "styled-components";

import { useDispatchTyped, useSelectorTyped } from "src/store";
import { showModal } from "src/reducers";
import ClimateControl from "src/components/Window/ClimateControl";
import WeatherIcon from "src/components/Window/WeatherIcon";

// Кнопка погоды в панели «Настройки»: тот же стиль, что у соседних контролов
// (язык/тема/лайк), внутри — климат/тема-зависимая иконка (та, что раньше была
// на окне). По клику открывает модалку «Погодные условия».
const ButtonWrapper = styled.button`
  display: flex;
  -webkit-tap-highlight-color: transparent;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #2b3037;
  border-radius: 8px;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: scale(0.98);
  }

  /* Иконка погоды (ContainerWeather 40×40 с margin) уменьшена под кнопку. */
  & > div {
    margin: 0;
    width: 30px;
    height: 30px;
  }
  svg {
    width: 30px;
    height: 30px;
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
