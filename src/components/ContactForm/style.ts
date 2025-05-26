import styled from "styled-components";
import { TABLET_959, MOBILE_660, MOBILE_560 } from "src/common/lib/media";

export const Form = styled.form`
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
  justify-content: space-between;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(100vh - 160px);
  padding: 20px;
  gap: 20px;

  background-color: #d4d4d559;

  /* Основная ширина полосы прокрутки. */
  &::-webkit-scrollbar {
    width: 16px;
  }

  /* Цвет дорожки, по которой двигается бегунок прокрутки. */
  &::-webkit-scrollbar-track {
    background: #464a5352;
    border-radius: 10px;
    background-clip: content-box;
    /* opacity: 0;
  background-color: transparent; */
  }

  /* Размер и цвет бегунка. */
  &::-webkit-scrollbar-thumb {
    background: #464a53;
    border: 6px solid #f1f1f1;
    border-radius: 10px;
  }
  /* Размер бегунка при наведении на него курсора. */
  &::-webkit-scrollbar-thumb:hover {
    border: 4px solid #ffff;
  }

  @media ${MOBILE_660} {
    max-height: calc(100vh - 220px);
    border-radius: 0;
  }
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 20px;

  border-top: 2px solid ${({ theme }) => theme.color.basic.borderModal};

  @media ${TABLET_959} {
    flex-direction: column-reverse;
  }

  @media ${MOBILE_660} {
    padding-top: 20px;
    padding-bottom: 220px;
  }
`;
