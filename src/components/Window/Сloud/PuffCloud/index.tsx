import React, { useEffect, useState } from "react";

import { getRandomArra } from "src/common/utils";

import { PuffCloudPattern } from "./style";

interface PuffCloudProps {
  dropAmount: number;
  min: number;
  max: number;
  fallTimeMin: number;
  fallTimeMax: number;
  colorCloud: number;
  colorBorder: number;
}

const PuffCloud = ({
  dropAmount,
  min,
  max,
  fallTimeMin,
  fallTimeMax,
  colorCloud,
  colorBorder,
}: PuffCloudProps) => {
  const [randomPuffCloud, setRandomPuffCloud] = useState([]);

  useEffect(() => {
    const randomPuffCloudValue = getRandomArra(
      dropAmount,
      min,
      max,
      fallTimeMin,
      fallTimeMax
    );
    setRandomPuffCloud(randomPuffCloudValue);
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
