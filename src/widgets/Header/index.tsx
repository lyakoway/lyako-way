import React from "react";

import { useSelectorTyped } from "src/store";

import { HeaderWrapper } from "./style";

import HeaderNav from "src/components/HeaderNav";
import HeaderSection from "src/components/HeaderSection";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) =>
    theme.color.background.primaryHeaderWrapper};
  opacity: 1;
`;

const Header = () => {
  const {
    lang: { propsHeaderTopMenu },
  } = useSelectorTyped(({ lang }) => lang);
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderNav propsList={propsHeaderTopMenu} />
        <HeaderSection />
      </HeaderWrapper>
    </Wrapper>
  );
};

export default Header;
