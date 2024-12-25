import styled from "styled-components";

const Li = styled.li<{ $header?: boolean }>`
  display: inline-block;
  vertical-align: top;
  text-align: center;
  margin-bottom: 16px;

  & :hover {
    cursor: pointer;
  }

  position: relative;
  & :hover:before {
    position: absolute;
    content: "";
    width: calc(100% + (1px * 2));
    height: 2px;
    bottom: 0;
    background: #ff8560;
  }

  margin-bottom: 0;
  border-top: ${({ $header }) => ($header ? "none" : "2px solid #fff")};
  border-bottom: ${({ $header }) => ($header ? "2px solid #fff" : "none")};
  & :hover:before {
    display: none;
  }
`;

export default Li;
