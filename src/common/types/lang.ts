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

export interface ContactFormProps {
  title: string;
  buttonText: string;
  fullName: string;
  placeholderName: string;
  phone: string;
  placeholderPhone: string;
  mail: string;
  placeholderMail: string;
  message: string;
  placeholderMessage: string;
  services: string;
  services1: string;
  services2: string;
  services3: string;
  services4: string;
  services5: string;
  formDescriptionName: string;
  formDescriptionEmail: string;
  formDescriptionPhone: string;
  errorDescriptionName: string;
  errorDescriptionPhoneLength: string;
  errorDescriptionPhoneOperator: string;
  errorDescriptionEmailLength: string;
  errorDescriptionEmailValidate: string;
  customValidityName: string;
  customValidityPhone: string;
  customValidityEmail: string;
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
  textHeart: string;
  messageText: string;
  textError: string;
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

export interface ClimateProps {
  title: string;
  placeholder: string;
  buttonText: string;
  titleSelectWeather: string;
  titleToast: string;
  temperatureFeeling: string;
  humidity: string;
  wind: string;
  pressure: string;
  pressureValue: string;
  speed: string;
}

export interface LanguageProps {
  propsPortfolioListBlog: PortfolioListBlogProps[];
  portfolioDevelopment: ListBlogProps[];
  propsPortfolioList: PortfolioListProps[];
  propsHeaderTopMenu: HeaderTopMenuProps[];
  portfolioListBlog: ListBlogProps[];
  propsAdvantages: AdvantagesProps[];
  portfolioHeader: PortfolioHeaderProps;
  advantagesText: string;
  contactForm: ContactFormProps;
  cooperation: CooperationProps;
  headerHouse: HeaderHouseProps;
  portfolio: PortfolioProps;
  personal: PersonalProps;
  service: ServiceProps;
  climateLang: ClimateProps;
  resume: ResumeProps;
  footer: FooterProps;
  toast: ToastProps;
  order: OrderProps;
  modal: ModalProps;
  blog: BlogProps;
  name: "russia" | "english";
}
