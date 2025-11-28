import { propsAdvantages, advantagesText } from "./advantages";
import { propsHeaderTopMenu } from "./headerTopMenu";
import { headerHouse } from "./headerHouse";
import { toast } from "./toast";
import { personal } from "./personal";
import { resume } from "./resume";
import { cooperation } from "./cooperation";
import { service } from "./service";
import { portfolioHeader } from "./portfolioHeader";
import { propsPortfolioList, portfolio } from "./portfolio";
import { propsPortfolioListBlog, blog } from "./blog";
import { order } from "./order";
import { footer } from "./footer";
import { modal } from "./modal";
import { contactForm } from "./contactForm";
import { portfolioListBlog } from "src/common/lang/english/portfolioListBlog";
import { portfolioDevelopment } from "src/common/lang/english/portfolioDevelopment";
import { LanguageProps } from "src/common/types/lang";
import { climateLang } from "src/common/lang/english/climateLang";
import { alertHeart } from "src/common/lang/english/alertHeart";

export const ENGLISH_LANGUAGE: LanguageProps = {
  propsPortfolioListBlog,
  portfolioDevelopment,
  propsPortfolioList,
  propsHeaderTopMenu,
  portfolioListBlog,
  propsAdvantages,
  portfolioHeader,
  advantagesText,
  contactForm,
  cooperation,
  headerHouse,
  portfolio,
  personal,
  service,
  climateLang,
  alertHeart,
  resume,
  footer,
  toast,
  order,
  modal,
  blog,
  name: "english",
};
