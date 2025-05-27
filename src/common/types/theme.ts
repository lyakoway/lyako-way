export interface ThemeColor {
  basic: {
    primary: string;
    secondary: string;
    tertiary: string;
    hover: string;
    press: string;
    disable: string;
    primaryLight: string;
    borderModal: string;
  };
  background: {
    primaryHeaderWrapper: string;
    primaryPageWrapper: string;
    button: string;
    modal: string;
    buttonTeg: string;
    primary: string;
    secondary: string;
    tertiary: string;
    tertiaryHover: string;
    card: string;
    cardHover: string;
    surfaceDanger: string;
    surfaceWarn: string;
    surfaceSuccess: string;
    inversion: string;
    shadow: string;
  };
  text: {
    primary: string;
    primaryText: string;
    secondary: string;
    tertiary: string;
    inversion: string;
    staticWhite: string;
    staticBlack: string;
    data: string;
    negative: string;
  };
  status: {
    warn: string;
    hoverWarn: string;
    pressWarn: string;
    success: string;
    hoverSuccess: string;
    pressSuccess: string;
    danger: string;
    hoverDanger: string;
    pressDanger: string;
  };
  special: {
    blue: string;
    softBlue: string;
    lightBlue: string;
    softLightBlue: string;
    turquoise: string;
    softTurquoise: string;
    green: string;
    softGreen: string;
    yellow: string;
    softYellow: string;
    red: string;
    softRed: string;
    magenta: string;
    softMagenta: string;
    purple: string;
    softPurple: string;
    violet: string;
    softViolet: string;
  };
}

export interface ThemeShadow {
  ClickableActive: string;
  ClickableDefault: string;
  ClickableHover: string;
  NonClickable: string;
}

export interface Theme {
  color: ThemeColor;
  shadow: ThemeShadow;
  name: "light" | "dark";
}

export interface Time {
  hour: number;
  min: number;
  sec: number;
}
