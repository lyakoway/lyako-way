import { getRandomNumber } from "./getRandomNumber";

export const getRandomArra = (lengthArr, min, max, timeMin, timeMax) =>
  Array(lengthArr)
    .fill()
    .map(() => {
      return {
        top: getRandomNumber(min, max),
        left: getRandomNumber(min, max),
        animationDuration: getRandomNumber(timeMin, timeMax) || null,
      };
    });
