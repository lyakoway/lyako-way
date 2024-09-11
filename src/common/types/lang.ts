import PortfolioImgUrl1 from "src/common/icon/icon-blog/PortfolioImgUrl.png";

export interface HeaderTopMenuProps {
  id: string;
  label: string;
  value: string;
  href?: string;
  icon: string | JSX.Element;
}

export interface AdvantagesProps {
  id: string;
  title: string;
  label: string;
  value: string;
  icon: string | JSX.Element;
}

export interface BlogProps {
  title: string;
  buttonText: string;
  blogTitle: string;
  blogText: string;
  blogDataTime: string;
  portfolioNameList: string;
  portfolioTextTitle: string;
  portfolioText: string;
  blogTitleTag: string;
  all: string;
  filter: string;
}

export interface PortfolioListBlogProps {
  id: string;
  hrefPortfolio: string;
  portfolioNameList: string;
  portfolioDataTime: string;
  icon: string;
  widthIcon: string;
  heightIcon: string;
  hrefNameList: string;
  technologies: string[];
  github?: string;
  portfolioText: string;
  textBlogHeader: string;
}

export interface CooperationProps {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}

export interface FooterProps {
  text: string;
  buttonText: string;
  clock: string;
  telephone: string;
  headHunter: string;
}

export interface HeaderHouseProps {
  buttonText: string;
  buttonTextAddition: string;
  callText: string;
}

export interface ModalProps {
  title: string;
  buttonText: string;
  fullName: string;
  fullNameLabel: string;
  phone: string;
  phoneLabel: string;
  services: string;
  servicesNull: string;
  services1: string;
  services2: string;
  services3: string;
  services4: string;
  services5: string;
  services6: string;
  services7: string;
  services8: string;
  mail: string;
  mailLabel: string;
  time: string;
  timeValue1: string;
  timeValue2: string;
  timeValue3: string;
  exercise: string;
  exerciseValue2: string;
  exerciseValue1: string;
  money: string;
  cooperation: string;
  text: string;
  textLabel: string;
}

export interface OrderProps {
  text: string;
  buttonText: string;
  orderItems: string[];
}

export interface PersonalProps {
  title: string;
  titleText: string;
  text1: string;
  text2: string;
  text3: string;
}

export interface PortfolioProps {
  title: string;
  buttonText: string;
  portfolioNameList: string;
  portfolioTextTitle: string;
  portfolioText: string;
  all: string;
  filter: string;
}

export interface PortfolioListProps {
  id: string;
  hrefPortfolio: string;
  portfolioNameList: string;
  portfolioDataTime: string;
  icon: string;
  widthIcon: string;
  heightIcon: string;
  hrefNameList: string;
  technologies: string[];
  github?: string;
  portfolioText: string;
}

export interface PortfolioHeaderProps {
  home: string;
  textPortfolio: string;
  textNotes: string;
  textValueBlog: string;
  date: string;
  technology: string;
  linkGithub: string;
  link: string;
}

export interface ResumeProps {
  title: string;
  headerStatus: string;
  status: string;
  headerFIO: string;
  FIO: string;
  headerSpecialization: string;
  specialization: string;
  headerSkills: string;
  headerWorkExperience: string;
  workExperience: string;
  headerEducation: string;
  education1: string;
  education2: string;
  headerQuality: string;
  quality: string;
}

export interface ServiceProps {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}

export interface ToastProps {
  desktopText: string;
  mobileText: string;
  messageText: string;
}

export interface ListBlogSecondProps {
  id: string;
  portfolioButtonText: string;
  value: string;
}

export interface ListBlogProps {
  id: string;
  portfolioButtonText: string;
  value: string | ListBlogSecondProps[];
}

// export type LanguageProps = Record<
//   | keyof HeaderTopMenuProps
//   | keyof AdvantagesProps
//   | keyof BlogProps
//   | keyof PortfolioListBlogProps
//   | keyof FooterProps
//   | keyof HeaderHouseProps
//   | keyof ModalProps
//   | keyof OrderProps
//   | keyof PersonalProps
//   | keyof PortfolioProps
//   | keyof PortfolioListProps
//   | keyof PortfolioHeaderProps
//   | keyof ResumeProps
//   | keyof ServiceProps
//   | keyof ToastProps,
//   string | null
// >;
