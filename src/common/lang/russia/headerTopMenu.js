import { ReactComponent as ResumeIcon } from "src/common/icon/ResumeIcon.svg";
import { ReactComponent as PortfolioIcon } from "src/common/icon/PortfolioIcon.svg";
import { ReactComponent as ServicesIcon } from "src/common/icon/ServicesIcon.svg";
import { ReactComponent as СooperationIcon } from "src/common/icon/СooperationIcon.svg";
import { ReactComponent as PersonIcon } from "src/common/icon/PersonIcon.svg";
import { ReactComponent as BlogIcon } from "src/common/icon/BlogLightIcon.svg";
import { ReactComponent as СontactsIcon } from "src/common/icon/СontactsIcon.svg";

import styled from "styled-components";

const LogoSign = styled.div`
  color: white;
  line-height: 30px;
  font-size: 16px;
  font-family: "Exo 2", sans-serif;
  font-weight: 800;
  white-space: nowrap;
`;

export const propsHeaderTopMenu = [
  {
    id: "0",
    label: "Дом",
    value: "",
    icon: <LogoSign style={{ pointerEvents: "none" }}>{`${"< / >"}`}</LogoSign>,
  },
  {
    id: "1",
    label: "Обо мне",
    value: "person",
    icon: <PersonIcon width={28} height={28} fill="#ffff" />,
  },
  {
    id: "2",
    label: "Резюме",
    value: "resume",
    icon: <ResumeIcon />,
  },
  {
    id: "3",
    label: "Услуги",
    value: "services",
    icon: <ServicesIcon />,
  },
  {
    id: "4",
    label: "Сотрудничество",
    value: "cooperation",
    icon: <СooperationIcon />,
  },
  {
    id: "5",
    label: "Портфолио",
    value: "portfolio",
    href: "portfolio",
    icon: <PortfolioIcon />,
  },
  {
    id: "6",
    label: "Блог",
    value: "blog",
    href: "blog",
    icon: <BlogIcon />,
  },
  {
    id: "7",
    label: "Контакты",
    value: "contacts",
    icon: <СontactsIcon />,
  },
];
