import type { ReactElement } from "react";
import styled from "styled-components";

import { ReactComponent as ResumeIcon } from "src/common/icon/resume/ResumeIcon.svg";
import { ReactComponent as PortfolioIcon } from "src/common/icon/portfolio/PortfolioIcon.svg";
import { ReactComponent as ServicesIcon } from "src/common/icon/services/ServicesIcon.svg";
import { ReactComponent as СooperationIcon } from "src/common/icon/contacts/СooperationIcon.svg";
import { ReactComponent as PersonIcon } from "src/common/icon/profile/PersonIcon.svg";
import { ReactComponent as BlogIcon } from "src/common/icon/blog/BlogLightIcon.svg";
import { ReactComponent as СontactsIcon } from "src/common/icon/contacts/СontactsIcon.svg";
import {
  AgentIcon,
  RagIcon,
  QualityIcon,
  IntegrationIcon,
  EndToEndIcon,
  OptimizationIcon,
} from "src/common/icon/advantages/serviceIcons";

// Иконки для языковых словарей живут ЗДЕСЬ, а не в словарях: словари
// попадают в Redux и сериализуются в __NEXT_DATA__ (SSR), где React-элементы
// ломаются (type/$$typeof не переживают JSON). В словаре — строковый ключ,
// здесь — готовый элемент. RU и EN используют одни и те же ключи.

const LogoSign = styled.div`
  color: white;
  line-height: 30px;
  font-size: 16px;
  font-family: "Exo 2", sans-serif;
  font-weight: 800;
  white-space: nowrap;
`;

export type MenuIconName =
  | "logoSign"
  | "person"
  | "resume"
  | "services"
  | "cooperation"
  | "portfolio"
  | "blog"
  | "contacts";

export const MENU_ICONS: Record<MenuIconName, ReactElement> = {
  logoSign: (
    <LogoSign style={{ pointerEvents: "none" }}>{`${"< / >"}`}</LogoSign>
  ),
  person: <PersonIcon width={28} height={28} fill="#ffff" />,
  resume: <ResumeIcon />,
  services: <ServicesIcon />,
  cooperation: <СooperationIcon />,
  portfolio: <PortfolioIcon />,
  blog: <BlogIcon />,
  contacts: <СontactsIcon />,
};

export type AdvantageIconName =
  | "agent"
  | "rag"
  | "quality"
  | "integration"
  | "endToEnd"
  | "optimization";

export const ADVANTAGE_ICONS: Record<AdvantageIconName, ReactElement> = {
  agent: <AgentIcon />,
  rag: <RagIcon />,
  quality: <QualityIcon />,
  integration: <IntegrationIcon />,
  endToEnd: <EndToEndIcon />,
  optimization: <OptimizationIcon />,
};
