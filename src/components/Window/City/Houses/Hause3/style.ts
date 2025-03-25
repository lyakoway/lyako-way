import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  width: 72px;
  height: 80px;
  position: relative;
`;

export const Wrapper = styled.div<{ $climateControl: string }>`
  width: 72px;
  height: 80px;
  background-color: #ea8a85;
  border: 3px solid #c97c78;
  border-bottom: none;
  position: absolute;

  &:before {
    content: "";
    position: absolute;
    width: 16px;
    height: 24px;
    left: 25px;
    top: -31px;
    z-index: 101;
    border-top: 1px solid #bf5a5a;
    border-bottom: 2px solid #632e2e;
  }
  &:after {
    content: "";
    position: absolute;
    background: ${({ $climateControl }) =>
      $climateControl === "snowy"
        ? "linear-gradient(to bottom, #fff, #fff 50%, #fff 50%, #fff)"
        : "linear-gradient(to bottom, #b65951, #b65951 50%, #964a43 50%, #964a43)"};
    transition: background 4s ease;
    background-size: 100% 8px;
    width: 72px;
    height: 28px;
    left: -3px;
    top: -31px;
    clip-path: polygon(17.5% 0%, 82.5% 0%, 100% 100%, 0% 100%);
  }
`;

export const House3Chimney = styled.div`
  position: relative;
  background-color: #b3a6a6;
  width: 9px;
  height: 4px;
  border-bottom: 2px solid #c7baba;
  top: -35px;
  right: -45px;

  &:before {
    content: "";
    position: absolute;
    background-color: #eadadb;
    width: 12px;
    height: 3px;
    top: -3px;
    left: -1px;
    z-index: 102;
  }
`;

export const Smoke = styled.div`
  position: absolute;
  z-index: 101;
  width: 55px;
  height: 85px;
  top: -85px;
  left: -22px;
  pointer-events: none;
`;

const smokeL = keyframes`
    0% {
        transform: scale(0.2) translate(0, 0);
    }
    10% {
        opacity: 1;
        transform: scale(0.2) translate(0, -2px);
    }
    100% {
        opacity: 0;
        transform: scale(1) translate(-10px, -65px);
    }
`;

const smokeR = keyframes`
    0% {
        transform: scale(0.2) translate(0, 0);
    }
    10% {
        opacity: 1;
        transform: scale(0.2) translate(0, -2px);
    }
    100% {
        opacity: 0;
        transform: scale(1) translate(10px, -65px);
    }
`;

export const SmokeL = styled.span<{
  $animationDelay: number;
}>`
  display: block;
  position: absolute;
  bottom: -14px;
  left: 10px;
  height: 0;
  width: 0;
  border: 17px solid #fff;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0.2);

  ${({ $animationDelay }) =>
    css`
      animation: ${smokeL} 10s ${$animationDelay}s infinite;
    `}
`;

export const SmokeR = styled.span<{
  $animationDelay: number;
}>`
  display: block;
  position: absolute;
  bottom: -14px;
  left: 10px;
  height: 0;
  width: 0;
  border: 17px solid #fff;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0.2);

  ${({ $animationDelay }) =>
    css`
      animation: ${smokeR} 10s ${$animationDelay}s infinite;
    `}
`;

export const House3RoofWindow = styled.div<{
  $themeLight: boolean;
  $climateControl: string;
}>`
  border: 3px solid #d16465;
  position: absolute;
  top: -31px;
  z-index: 100;
  left: 25px;
  height: 24px;
  width: 16px;
  background-color: ${({ $themeLight }) =>
    $themeLight ? "#cce1ff" : "#FFE9AB"};
  ${({ $themeLight }) =>
    !$themeLight &&
    css`
      box-shadow: inset 0 0 5px 1px #3f6b91;
    `}
  transition: background 4s ease;

  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: -5px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: ${({ $climateControl }) =>
        $climateControl === "snowy" ? "#fff" : "#e86e6f"}
      7px solid;
  }

  &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 4px;
    bottom: -1px;
    left: -5px;
    background-color: #e86e6f;
    border-top: ${({ $climateControl }) =>
        $climateControl === "snowy" ? "#fff" : "#ff7a81"}
      1px solid;
  }
`;

const ani = keyframes`
  0% {
    height: 60%;
  }
  100% {
    height: 0;
  }
`;

const ani1 = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 60%;
  }
`;

export const House3WindowShades = styled.div<{ $themeLight: boolean }>`
  background: linear-gradient(
    to bottom,
    #d6e5fc,
    #d6e5fc 50%,
    #f0f6ff 50%,
    #f0f6ff
  );
  background-size: 100% 4px;
  width: 100%;
  height: 60%;
  border-bottom: 1px solid #72bcd4;
  ${({ $themeLight }) =>
    css`
      animation: ${$themeLight ? ani : ani1} 2s forwards;
    `};
`;

export const Houses3Windows = styled.div`
  margin-top: -2px;
`;
export const HousesWindowsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HousesWindows = styled.div<{
  $themeLight: boolean;
  $climateControl: string;
}>`
  width: 16px;
  position: relative;
  border: 3px solid #964a43;
  margin: 7px;
  height: 24px;
  background-color: ${({ $themeLight }) =>
    $themeLight ? "#b2c7e6" : "#FFE9AB"};
  ${({ $themeLight }) =>
    !$themeLight &&
    css`
      box-shadow: inset 0 0 5px 1px #3f6b91;
    `}
  transition: background 4s ease;

  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 4px;
    top: -7px;
    left: -5px;
    background-color: #b85a52;
    border-top: 1px solid #d4675e;
  }
  &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 4px;
    bottom: -1px;
    left: -5px;
    background-color: #b85a52;
    border-top: 1px solid
      ${({ $climateControl }) =>
        $climateControl === "snowy" ? "#fff" : "#d4675e"};
  }
`;

export const HousesDoor = styled.div`
  width: 22px;
  position: relative;
  top: 4px;
  margin: -5px 3px 3px 3px;
  background-color: #964a43;
  border: 3px solid #b65951;
  border-bottom: none;
  height: 33px;

  &:before {
    content: "";
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: #f9bd82;
    top: 50%;
    right: 2px;
  }
  &:after {
    content: "";
    position: absolute;
    width: 26px;
    height: 6px;
    bottom: -5px;
    left: -5px;
  }
`;
