import React from "react";
import { observer } from "mobx-react";

// import { store } from '../../../../store';

import { getRandomArra } from "../../../../../common/utils";

import { RainWrapper, Rain, Drop } from "./style";

const WeatherRain = observer(
  ({ dropAmount, leftMin, leftMax, fallTimeMin, fallTimeMax, top }) => {
    const show = top > 60;

    return (
      <RainWrapper data-rain-wrapper show={show}>
        <Rain data-rain>
          {getRandomArra(
            dropAmount,
            leftMin,
            leftMax,
            fallTimeMin,
            fallTimeMax
          ).map((itemDrop, i) => (
            <Drop
              key={i}
              left={itemDrop.left}
              animationDuration={itemDrop.animationDuration / 10}
            />
          ))}
        </Rain>
      </RainWrapper>
    );
  }
);

export default WeatherRain;
