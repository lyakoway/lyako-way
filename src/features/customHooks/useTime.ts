import { useEffect, useState } from "react";

export const useTime = (timeout = 1) => {
  let day = new Date();
  const hour = day.getHours();
  const min = day.getMinutes();
  const sec = day.getSeconds();

  const [timeData, useTimeData] = useState({
    hour,
    min,
    sec,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const time = {
        hour,
        min,
        sec,
      };
      useTimeData(time);
    }, timeout * 1000);

    return () => clearInterval(timer);
  }, [hour, min, sec]);

  return [timeData?.hour, timeData?.min, timeData?.sec];
};
