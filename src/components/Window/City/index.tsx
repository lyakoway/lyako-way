import React, { FC } from "react";
import { CityWrapper } from "src/components/Window/City/style";
import Houses from "src/components/Window/City/Houses";
import Tree from "src/components/Window/City/Tree";
import Streetlamp from "src/components/Window/City/Streetlamp";
import MailTruck from "src/components/Window/City/MailTruck";

interface CloudProps {
  themeLight?: boolean;
  climateControl: string;
}

const City: FC<CloudProps> = ({ themeLight, climateControl }) => {
  return (
    <CityWrapper $climateControl={climateControl}>
      <Houses themeLight={themeLight} climateControl={climateControl} />
      <Tree left="12px" climateControl={climateControl} />
      <Tree left="448px" climateControl={climateControl} />
      <Streetlamp
        left="38px"
        themeLight={themeLight}
        climateControl={climateControl}
      />
      <Streetlamp
        left="213px"
        themeLight={themeLight}
        climateControl={climateControl}
      />
      <MailTruck themeLight={themeLight} climateControl={climateControl} />
    </CityWrapper>
  );
};

export default City;
