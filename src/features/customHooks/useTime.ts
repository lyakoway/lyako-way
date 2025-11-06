import { useEffect, useState } from "react";

export const useTime = (timeout = 1) => {
  const [timeData, setTimeData] = useState(() => {
    const now = new Date();
    return {
      hour: now.getHours(),
      min: now.getMinutes(),
      sec: now.getSeconds(),
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTimeData({
        hour: now.getHours(),
        min: now.getMinutes(),
        sec: now.getSeconds(),
      });
    }, timeout * 1000);

    return () => clearInterval(timer);
  }, [timeout]);

  return [timeData.hour, timeData.min, timeData.sec] as const;
};
