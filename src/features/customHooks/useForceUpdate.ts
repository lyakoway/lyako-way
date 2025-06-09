import { useEffect, useState } from "react";

export const useForceUpdate = (triggerUpdate: string): number => {
  const [trigger, setTrigger] = useState(0);

  // Обновление компонента при изменении climateControl
  useEffect(() => {
    setTrigger((prev) => prev + 1);
  }, [triggerUpdate]); // Следим за нужным параметром

  return trigger;
};
