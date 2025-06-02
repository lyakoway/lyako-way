import styled, { css, keyframes } from "styled-components";
import { MOBILE_560 } from "src/common/lib/media";

const weatherIconBorder = keyframes`
  from {
    border-color: #ffff;
  }
  50% {
    border-color: #2185d0;
  }
  to {
    border-color: #ffff;
  }
`;

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  border-bottom: 2px solid ${({ theme }) => theme.color.basic.borderModal};

  padding: 20px 50px 20px 20px;

  @media ${MOBILE_560} {
    flex-direction: column;
    font-size: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  margin: 20px;
  justify-content: space-between;
`;

export const WeatherIconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  z-index: 1000;
  bottom: 0;
  left: 0;
  border: solid 4px #ffff;
  cursor: pointer;
  background: linear-gradient(to bottom, #57c1eb 0%, #246fa8 100%);
  border-radius: 50%;
  ${({ $active }) =>
    $active &&
    css`
      animation: ${weatherIconBorder} 10s linear infinite;
    `}
`;
