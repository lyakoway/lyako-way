export const MEDIA_MOBILE = "(max-width: 480px)";

// gridMBreakpoint: '480px',
// gridTBreakpoint: '768px',
// gridDxsBreakpoint: '960px',
// gridDsBreakpoint: '1280px',
// gridDmBreakpoint: '1440px',
// gridDlBreakpoint: '1680px',
// gridDxlBreakpoint: '1920px',

// @media screen and (min-width: ${breakpoints.gridTBreakpoint}) {
//   max-width: 344px;
// }

// @mixin before1920 {
//   @media (max-width: 1919px) { @content; }
// }

// @mixin before1440 {
//   @media (max-width: 1439px) { @content; }
// }

// @mixin before1366 {
//   @media (max-width: 1365px) { @content; }
// }

// @mixin before1024 {
//   @media (max-width: 1023px) { @content; }
// }

// @mixin before960 {
//   @media (max-width: 959px) { @content; }
// }

// @mixin before768 {
//   @media (max-width: 767px) { @content; }
// }

// @mixin before480 {
//   @media (max-width: 479px) { @content; }
// }

// @mixin landscape-phones {
//   @media (min-width: 480px) and (max-width: 768px) and (orientation: landscape) { @content; }
// }

export const MOBILE_320 = "(max-width: 319px)";
export const MOBILE_480 = "(max-width: 479px)";
export const MOBILE_560 = "(max-width: 560px)";
export const MOBILE_660 = "(max-width: 659px)";
export const TABLET_768 = "(max-width: 767px)";
export const TABLET_959 = "(max-width: 958px)";
export const TABLET_1024 = "(max-width: 1023px)";
export const TABLET_1120 = "(max-width: 1119px)";
export const DESKTOP_1280 = "(max-width: 1279px)";
export const DESKTOP_1440 = "(max-width: 1439px)";
export const DESKTOP_1680 = "(max-width: 1679px)";
export const DESKTOP_1920 = "(max-width: 1919px)";

export const DEVICE_BREAKPOINTS = {
  mobile: "(min-width: 320px) and (max-width: 480px)",
  mobile_tablet: "(min-width: 480px) and (max-width: 768px)",
  mobile_tablet_wide: "(min-width: 768px) and (max-width: 959px)",
  tablet: "(min-width: 959px) and (max-width: 1024px)",
  tablet_desktop: "(min-width: 1024px) and (max-width: 1280px)",
  tablet_desktop_wide: "(min-width: 1280px) and (max-width: 1440px)",
  desktop: "(min-width: 1440px) and (max-width: 1680px)",
  desktop_wide: "(min-width: 1680px) and (max-width: 1920px)",
};

// @media ${MEDIA_MOBILE} {
//   width: 288px;
//   max-height: 84vh;
// }
