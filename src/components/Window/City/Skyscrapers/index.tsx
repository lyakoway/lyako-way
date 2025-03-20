import React, { FC } from "react";
import {
  CityWrapper,
  SkyscrapersWrapper,
  Skyscraper1,
  Skyscraper2,
  Skyscraper3,
  Skyscraper4,
  Skyscraper5,
  Skyscraper6,
  Skyscraper7,
  Skyscraper8,
  SkyscraperWindowsWrapper,
  SkyscraperWindowsWrapper7,
} from "src/components/Window/City/Skyscrapers/style";
import SkyscraperWindows from "src/components/Window/City/Skyscrapers/SkyscraperWindows";

interface SkyscrapersProps {
  themeLight?: boolean;
}

const Skyscrapers: FC<SkyscrapersProps> = ({ themeLight }) => {
  const color = themeLight ? "#d6d6d6" : "#8f8c8c";
  const propsSkyscrapers = Array.from(Array(50).keys());

  return (
    <CityWrapper>
      <SkyscrapersWrapper>
        <Skyscraper1 $color={color}>
          <SkyscraperWindowsWrapper7>
            {propsSkyscrapers.map((item, id) => (
              <SkyscraperWindows
                key={id}
                item={item}
                animationWindows={[3, 6, 9, 18]}
                themeLight={themeLight}
              />
            ))}
          </SkyscraperWindowsWrapper7>
        </Skyscraper1>
        <Skyscraper2 $color={color}>
          <SkyscraperWindowsWrapper>
            {propsSkyscrapers.map((item, id) => (
              <SkyscraperWindows
                key={id}
                item={item}
                animationWindows={[3, 6, 9, 18]}
                themeLight={themeLight}
              />
            ))}
          </SkyscraperWindowsWrapper>
        </Skyscraper2>
        <Skyscraper3 $color={color}>
          <SkyscraperWindowsWrapper>
            {propsSkyscrapers.map((item, id) => (
              <SkyscraperWindows
                key={id}
                item={item}
                animationWindows={[3, 6, 9, 18]}
                themeLight={themeLight}
              />
            ))}
          </SkyscraperWindowsWrapper>
        </Skyscraper3>
        <Skyscraper4 $color={color}>
          <SkyscraperWindowsWrapper>
            {propsSkyscrapers.map((item, id) => (
              <SkyscraperWindows
                key={id}
                item={item}
                animationWindows={[1, 3, 7, 18]}
                themeLight={themeLight}
              />
            ))}
          </SkyscraperWindowsWrapper>
        </Skyscraper4>
        <Skyscraper5 $color={color}>
          <SkyscraperWindowsWrapper>
            {propsSkyscrapers.map((item, id) => (
              <SkyscraperWindows
                key={id}
                item={item}
                animationWindows={[2, 3, 7, 18]}
                themeLight={themeLight}
              />
            ))}
          </SkyscraperWindowsWrapper>
        </Skyscraper5>
        <Skyscraper6 $color={color}>
          <SkyscraperWindowsWrapper>
            {propsSkyscrapers.map((item, id) => (
              <SkyscraperWindows
                key={id}
                item={item}
                animationWindows={[3, 6, 9, 18]}
                themeLight={themeLight}
              />
            ))}
          </SkyscraperWindowsWrapper>
        </Skyscraper6>
        <Skyscraper7 $color={color}>
          <SkyscraperWindowsWrapper7>
            {propsSkyscrapers.map((item, id) => (
              <SkyscraperWindows
                key={id}
                item={item}
                animationWindows={[3, 6, 9, 18]}
                themeLight={themeLight}
              />
            ))}
          </SkyscraperWindowsWrapper7>
        </Skyscraper7>
        <Skyscraper8 $color={color}>
          <SkyscraperWindowsWrapper>
            {propsSkyscrapers.map((item, id) => (
              <SkyscraperWindows
                key={id}
                item={item}
                animationWindows={[3, 8, 10, 18, 28]}
                themeLight={themeLight}
              />
            ))}
          </SkyscraperWindowsWrapper>
        </Skyscraper8>
      </SkyscrapersWrapper>
    </CityWrapper>
  );
};

export default Skyscrapers;
