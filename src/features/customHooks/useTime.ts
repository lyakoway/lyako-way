import { useEffect } from "react";
import { useDispatchTyped } from "src/store";
import { setTime } from "src/reducers";

export const useTime = () => {
  const dispatch = useDispatchTyped();

  useEffect(() => {
    const timer = setInterval(() => {
      let day = new Date();
      const hour = day.getHours();
      const min = day.getMinutes();
      const sec = day.getSeconds();
      const time = {
        hour,
        min,
        sec,
      };
      dispatch(setTime(time));
    }, 1000);

    return () => clearInterval(timer);
  }, []);
};
