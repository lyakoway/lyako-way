import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) =>
    theme.color.background.primaryHeaderWrapper};
`;
