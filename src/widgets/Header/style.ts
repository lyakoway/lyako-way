import styled from "styled-components";
import { bgTransition } from "src/common/utils/bgTransition";

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) =>
    theme.color.background.primaryHeaderWrapper};
  ${bgTransition}
`;
