import React from "react";
import { observer } from "mobx-react";

import { getRandomArra, getRandomNumber } from "src/common/utils";

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

const PuffCloud = observer(
  ({
    dropAmount,
    min,
    max,
    fallTimeMin,
    fallTimeMax,
    colorCloud,
    colorBorder,
  }: PuffCloudProps) => {
    return getRandomArra(dropAmount, min, max, fallTimeMin, fallTimeMax).map(
      (itemPuff, i) => {
        const leftRandom = getRandomNumber(itemPuff.top, itemPuff.left);
        const topRandom = getRandomNumber(itemPuff.top, itemPuff.left);
        return (
          <PuffCloudPattern
            key={i}
            $top={itemPuff.top}
            $left={itemPuff.left}
            $animationDuration={itemPuff.animationDuration}
            $leftRandom={leftRandom}
            $topRandom={topRandom}
            $colorCloud={colorCloud}
            $colorBorder={colorBorder}
          />
        );
      }
    );
  }
);

export default PuffCloud;
