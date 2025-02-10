import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) =>
    theme.color.background.primaryHeaderWrapper};
  transition: background-color 4s ease;
`;
