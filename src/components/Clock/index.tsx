import React, { useState, useEffect } from "react";
import { useSelectorTyped } from "src/store";

import { ClockWrapper, Hour, Min, Sec } from "./style";

const Clock = () => {
  const {
    time: { hour, min, sec },
  } = useSelectorTyped(({ theme }) => theme);
  const [hourClock, setHourClock] = useState(0);
  const [minClock, setMinClock] = useState(0);
  const [secClock, setSecClock] = useState(0);
  const deg = 6;

  useEffect(() => {
    setHourClock(hour * 30 + minClock / 12);
    setMinClock(min * deg);
    setSecClock(sec * deg);
  }, [hour, min, sec]);

  return (
    <ClockWrapper>
      <Hour style={{ transform: `rotateZ(${hourClock}deg)` }} id="hr" />
      <Min style={{ transform: `rotateZ(${minClock}deg)` }} id="mn" />
      <Sec style={{ transform: `rotateZ(${secClock}deg)` }} id="sc" />
    </ClockWrapper>
  );
};

export default Clock;
