import Image from "next/image";
// import svgUrl, { ReactComponent as Logo } from '@/svg/logo.svg'

{
  /* <Image src={svgUrl} width={174} height={84} />
// or as a component
<Logo /> */
}
import { ReactComponent as PriceIcon } from "src/common/icon/advantages/PriceIcon.svg";
import { ReactComponent as ExperienceIcon } from "src/common/icon/advantages/ExperienceIcon.svg";
import { ReactComponent as TermIcon } from "src/common/icon/advantages/TermIcon.svg";
import { ReactComponent as TechnologiesIcon } from "src/common/icon/advantages/TechnologiesIcon.svg";
import { ReactComponent as LayoutIcon } from "src/common/icon/advantages/LayoutIcon.svg";
import { ReactComponent as SupportIcon } from "src/common/icon/advantages/SupportIcon.svg";

import { dataYear } from "src/common/constants";

export const advantagesText = "Advantages";

export const propsAdvantages = [
  {
    id: "1",
    title: "Current prices for creating a website",
    label:
      "I charge for my services as much as they really cost. Nothing extra. 100% processing of your money.",
    value: "Price",
    icon: <PriceIcon />,
  },
  {
    id: "2",
    title: `More than ${
      dataYear - 2017
    } years of experience as a web developer`,
    label:
      "This is my main activity, a large number of sites of varying degrees of complexity have been created - from a business card to an online store and various applications.",
    value: "Experience",
    icon: <ExperienceIcon />,
  },
  {
    id: "3",
    title: "The most optimal development time",
    label:
      "I offer you the creation of a website of any complexity in the shortest possible time, without loss of quality of work.",
    value: "Term",
    icon: <TermIcon />,
  },
  {
    id: "4",
    title: "Modern technology stack for development",
    label:
      "I use the most advanced web development technologies for each project for maximum efficiency and results",
    value: "Technologies",
    icon: <TechnologiesIcon />,
  },
  {
    id: "5",
    title: "Clean code, cross-browser compatibility and adaptive layout",
    label:
      "Development takes place according to all the rules of web standards. As well as adaptive layout, which allows you to view the site both on a computer and on mobile devices.",
    value: "Layout",
    icon: <LayoutIcon />,
  },
  {
    id: "6",
    title: "Maintenance and support of the site at any time",
    label:
      "I will quickly fix any problem on your site, I am always in touch, and I do not disappear anywhere! Communication via skype and phone.",
    value: "Support",
    icon: <SupportIcon />,
  },
];
