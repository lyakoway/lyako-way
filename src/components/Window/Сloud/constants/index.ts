export interface IPropsClimateControl {
  id: string;
  cloudAmount: number;
  minRandomTopAndLeft: number;
  maxRandomTopAndLeft: number;
  timeMinRandomMovements: number;
  timeMaxRandomMovements: number;
  numberCloudLayers: number;
  minRandomTopAndLeftLocationCloudLayers: number;
  maxRandomTopAndLeftLocationCloudLayers: number;
  timeMinRandomCloudLayers: number;
  timeMaxRandomCloudLayers: number;
  amountRainClouds?: number;
  minRandomLeftRain?: number;
  maxRandomLeftRain?: number;
  timeMinRandomRain?: number;
  timeMaxRandomRain?: number;
}

export const propsClimateControl: IPropsClimateControl[] = [
  {
    id: "sunnyMoon",
    cloudAmount: 2,
    minRandomTopAndLeft: 10,
    maxRandomTopAndLeft: 120,
    timeMinRandomMovements: 26,
    timeMaxRandomMovements: 80,
    numberCloudLayers: 10,
    minRandomTopAndLeftLocationCloudLayers: 14,
    maxRandomTopAndLeftLocationCloudLayers: 40,
    timeMinRandomCloudLayers: 8,
    timeMaxRandomCloudLayers: 12,
  },
  {
    id: "cloudyWithSunMoon",
    cloudAmount: 4,
    minRandomTopAndLeft: 10,
    maxRandomTopAndLeft: 120,
    timeMinRandomMovements: 26,
    timeMaxRandomMovements: 80,
    numberCloudLayers: 10,
    minRandomTopAndLeftLocationCloudLayers: 14,
    maxRandomTopAndLeftLocationCloudLayers: 40,
    timeMinRandomCloudLayers: 8,
    timeMaxRandomCloudLayers: 12,
  },
  {
    id: "cloudy",
    cloudAmount: 4,
    minRandomTopAndLeft: 10,
    maxRandomTopAndLeft: 120,
    timeMinRandomMovements: 26,
    timeMaxRandomMovements: 80,
    numberCloudLayers: 10,
    minRandomTopAndLeftLocationCloudLayers: 14,
    maxRandomTopAndLeftLocationCloudLayers: 40,
    timeMinRandomCloudLayers: 8,
    timeMaxRandomCloudLayers: 12,
  },
  {
    id: "rainy",
    cloudAmount: 6,
    minRandomTopAndLeft: 30,
    maxRandomTopAndLeft: 120,
    timeMinRandomMovements: 26,
    timeMaxRandomMovements: 80,
    numberCloudLayers: 10,
    minRandomTopAndLeftLocationCloudLayers: 14,
    maxRandomTopAndLeftLocationCloudLayers: 40,
    timeMinRandomCloudLayers: 8,
    timeMaxRandomCloudLayers: 12,
    amountRainClouds: 20,
    minRandomLeftRain: 0,
    maxRandomLeftRain: 32,
    timeMinRandomRain: 10,
    timeMaxRandomRain: 20,
  },
  {
    id: "cloudyWithRainAndLightning",
    cloudAmount: 8,
    minRandomTopAndLeft: 50,
    maxRandomTopAndLeft: 120,
    timeMinRandomMovements: 26,
    timeMaxRandomMovements: 80,
    numberCloudLayers: 10,
    minRandomTopAndLeftLocationCloudLayers: 14,
    maxRandomTopAndLeftLocationCloudLayers: 40,
    timeMinRandomCloudLayers: 8,
    timeMaxRandomCloudLayers: 12,
    amountRainClouds: 20,
    minRandomLeftRain: 0,
    maxRandomLeftRain: 32,
    timeMinRandomRain: 10,
    timeMaxRandomRain: 20,
  },
  {
    id: "snowy",
    cloudAmount: 6,
    minRandomTopAndLeft: -80,
    maxRandomTopAndLeft: 120,
    timeMinRandomMovements: 26,
    timeMaxRandomMovements: 80,
    numberCloudLayers: 10,
    minRandomTopAndLeftLocationCloudLayers: 14,
    maxRandomTopAndLeftLocationCloudLayers: 40,
    timeMinRandomCloudLayers: 8,
    timeMaxRandomCloudLayers: 12,
    amountRainClouds: 20,
    minRandomLeftRain: 0,
    maxRandomLeftRain: 32,
    timeMinRandomRain: 10,
    timeMaxRandomRain: 20,
  },
];
