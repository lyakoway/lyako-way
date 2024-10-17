import { getRandomNumber } from "./getRandomNumber";

export const getRandomArra = (
  lengthArr: number,
  min: number,
  max: number,
  timeMin: number,
  timeMax: number
) =>
  Array(lengthArr)
    .fill(null)
    .map(() => {
      return {
        top: getRandomNumber(min, max),
        left: getRandomNumber(min, max),
        animationDuration: getRandomNumber(timeMin, timeMax) || null,
      };
    });
