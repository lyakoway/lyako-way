import React, { FC, useEffect, useState } from "react";
import { CityWrapper } from "src/components/Window/City/style";
import Houses from "src/components/Window/City/Houses";
import Tree from "src/components/Window/City/Tree";
import Streetlamp from "src/components/Window/City/Streetlamp";
import MailTruck from "src/components/Window/City/MailTruck";
import { getSeason } from "src/common/utils/getSeason";

interface CloudProps {
  themeLight?: boolean;
  climateControl: string;
}

const City: FC<CloudProps> = ({ themeLight, climateControl }) => {
  const [winter, setWinter] = useState<string>("");

  useEffect(() => {
    setWinter(getSeason() === "winter" ? "snowy" : "");
    if (
      climateControl === "rainy" ||
      climateControl === "cloudyWithRainAndLightning"
    ) {
      setWinter("");
    }
    if (climateControl === "snowy") {
      setWinter("snowy");
    }
  }, [climateControl]);

  return (
    <CityWrapper $climateControl={winter}>
      <Houses themeLight={themeLight} climateControl={winter} />
      <Tree left="12px" climateControl={winter} />
      <Tree left="448px" climateControl={winter} />
      <Streetlamp left="38px" themeLight={themeLight} climateControl={winter} />
      <Streetlamp
        left="213px"
        themeLight={themeLight}
        climateControl={winter}
      />
      <MailTruck themeLight={themeLight} climateControl={winter} />
    </CityWrapper>
  );
};

export default City;
