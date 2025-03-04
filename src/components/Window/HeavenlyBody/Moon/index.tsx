import React, { FC } from "react";
import {
  MoonContainer,
  Crater,
  MoonPhase,
} from "src/components/Window/HeavenlyBody/Moon/style";
import { craterValue } from "src/components/Window/HeavenlyBody/constants";

interface MoonProps {
  themeLight: boolean;
}
const Moon: FC<MoonProps> = ({ themeLight }) => {
  // 64 секунд полный поворот луны анимация
  const timeMoonPhase = 20;
  return (
    <MoonContainer $themeLight={themeLight}>
      <MoonPhase $themeLight={themeLight} $timeMoonPhase={timeMoonPhase} />
      {craterValue.map((item) => {
        return (
          <Crater
            $themeLight={themeLight}
            $timeMoonPhase={timeMoonPhase}
            key={item.id}
            $top={item.top}
            $left={item.left}
            $width={item.width}
            $height={item.height}
          />
        );
      })}
    </MoonContainer>
  );
};

export default Moon;
