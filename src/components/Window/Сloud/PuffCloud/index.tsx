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

interface PuffItem {
  top: number;
  left: number;
}

const PuffCloud: React.FC<PuffCloudProps> = ({
  dropAmount,
  min,
  max,
  fallTimeMin,
  fallTimeMax,
  top,
  idType,
}) => {
  const [randomPuffCloud, setRandomPuffCloud] = useState<PuffItem[]>([]);
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
  }, [dropAmount, min, max, fallTimeMin, fallTimeMax]);

  useEffect(() => {
    if (
      idType === "sunnyMoon" ||
      (top <= 40 && (idType === "cloudyWithSunMoon" || idType === "cloudy"))
    ) {
      setColorCloud(100);
      setColorBorder(70);
    } else if (
      top > 40 &&
      (idType === "cloudyWithSunMoon" || idType === "cloudy")
    ) {
      setColorCloud(80);
      setColorBorder(50);
    } else if (top <= 40 && idType === "rainy") {
      setColorCloud(80);
      setColorBorder(50);
    } else if (top > 40 && idType === "rainy") {
      setColorCloud(60);
      setColorBorder(30);
    } else if (top <= 40 && idType === "cloudyWithRainAndLightning") {
      setColorCloud(60);
      setColorBorder(30);
    } else if (top > 40 && idType === "cloudyWithRainAndLightning") {
      setColorCloud(50);
      setColorBorder(12);
    }
  }, [idType, top]);

  return (
    <>
      {randomPuffCloud.map((itemPuff, i) => (
        <PuffCloudPattern
          key={i}
          $top={itemPuff.top}
          $left={itemPuff.left}
          $colorCloud={colorCloud}
          $colorBorder={colorBorder}
        />
      ))}
    </>
  );
};

export default PuffCloud;
