import React, { FC } from "react";
import { Window } from "src/components/Window/City/Skyscrapers/SkyscraperWindows/style";
import { getRandomNumber } from "src/common/utils";

interface SkyscrapersProps {
  item?: number;
  themeLight?: boolean;
  animationWindows?: number[];
}

const SkyscraperWindows: FC<SkyscrapersProps> = ({
  item,
  themeLight,
  animationWindows,
}) => {
  const showAnimation = animationWindows?.includes(item);
  return (
    <Window
      $themeLight={themeLight}
      $showAnimation={showAnimation}
      $animationDelay={item}
    />
  );
};

export default SkyscraperWindows;
