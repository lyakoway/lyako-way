import { getRandomNumber } from "./getRandomNumber";

export const getRandomArra = (
  lengthArr: any,
  min: any,
  max: any,
  timeMin: any,
  timeMax: any
) =>
  Array(lengthArr)
    .fill()
    .map(() => {
      return {
        top: getRandomNumber(min, max),
        left: getRandomNumber(min, max),
        animationDuration: getRandomNumber(timeMin, timeMax) || null,
      };
    });
