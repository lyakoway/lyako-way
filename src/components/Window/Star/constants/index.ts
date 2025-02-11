export interface IPropsClimateControl {
  id: string;
  starAmount?: number;
  minRandomTopAndLeft: number;
  maxRandomTopAndLeft: number;
  timeMinRandomAnimationDelay: number;
  timeMaxRandomAnimationDelay: number;
}

export const propsStar: IPropsClimateControl = {
  id: "Star1",
  starAmount: 3,
  minRandomTopAndLeft: 10,
  maxRandomTopAndLeft: 60,
  timeMinRandomAnimationDelay: 6,
  timeMaxRandomAnimationDelay: 11,
};
