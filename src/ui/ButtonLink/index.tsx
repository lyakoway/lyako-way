import styled from "styled-components";
import { FC, PropsWithChildren } from "react";

const ButtonLinkHref = styled.div`
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
`;

interface ButtonLinkProps {
  navMenuLink: string;
}

const ButtonLink: FC<PropsWithChildren<ButtonLinkProps>> = ({
  children,
  navMenuLink = "",
}) => {
  const hrefValue = `/${navMenuLink}/#portfolioHeader`;
  return (
    <ButtonLinkHref>
      <a href={hrefValue}>{children}</a>
    </ButtonLinkHref>
  );
};

export default ButtonLink;
