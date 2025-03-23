import React, { useEffect, useState } from "react";

import { getRandomArra } from "src/common/utils";

import { PuffCloudPattern } from "./style";

interface PuffCloudProps {
  dropAmount: number;
  min: number;
  max: number;
  fallTimeMin: number;
  fallTimeMax: number;
  top: number;
  idType: string;
}

const PuffCloud = ({
  dropAmount,
  min,
  max,
  fallTimeMin,
  fallTimeMax,
  top,
  idType,
}: PuffCloudProps) => {
  const [randomPuffCloud, setRandomPuffCloud] = useState([]);
  const [colorCloud, setColorCloud] = useState(100);
  const [colorBorder, setColorBorder] = useState(50);

  useEffect(() => {
    const randomPuffCloudValue = getRandomArra(
      dropAmount,
      min,
      max,
      fallTimeMin,
      fallTimeMax
    );
    setRandomPuffCloud(randomPuffCloudValue);

    if (
      idType === "sunnyMoon" ||
      (top < 40 && (idType === "cloudyWithSunMoon" || idType === "cloudy"))
    ) {
      setColorCloud(100);
      setColorBorder(70);
    }
    if (top > 40 && (idType === "cloudyWithSunMoon" || idType === "cloudy")) {
      setColorCloud(80);
      setColorBorder(50);
    }
    if (top < 40 && idType === "rainy") {
      setColorCloud(80);
      setColorBorder(50);
    }
    if (top > 40 && idType === "rainy") {
      setColorCloud(60);
      setColorBorder(30);
    }
    if (idType === "cloudyWithRainAndLightning") {
      setColorCloud(50);
      setColorBorder(12);
    }
  }, []);

  return (
    randomPuffCloud.length &&
    randomPuffCloud.map((itemPuff, i) => (
      <PuffCloudPattern
        key={i}
        $top={itemPuff.top}
        $left={itemPuff.left}
        $animationDuration={itemPuff.animationDuration}
        $colorCloud={colorCloud}
        $colorBorder={colorBorder}
      />
    ))
  );
};

export default PuffCloud;
