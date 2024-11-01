import { ReactComponent as PriceIcon } from "src/common/icon/advantages/PriceIcon.svg";
import { ReactComponent as ExperienceIcon } from "src/common/icon/advantages/ExperienceIcon.svg";
import { ReactComponent as TermIcon } from "src/common/icon/advantages/TermIcon.svg";
import { ReactComponent as TechnologiesIcon } from "src/common/icon/advantages/TechnologiesIcon.svg";
import { ReactComponent as LayoutIcon } from "src/common/icon/advantages/LayoutIcon.svg";
import { ReactComponent as SupportIcon } from "src/common/icon/advantages/SupportIcon.svg";

import { dataYear } from "src/common/constants";
import { AdvantagesProps } from "src/common/types/lang";

export const advantagesText = "Преимущества";

export const propsAdvantages: AdvantagesProps[] = [
  {
    id: "1",
    title: "Актуальные цены на создание веб-сайт",
    label:
      "Я беру за мои услуги столько, сколько они действительно стоят. Ничего лишнего. 100% отработка ваших денег.",
    value: "Price",
    icon: <PriceIcon />,
  },
  {
    id: "2",
    title: `Более ${dataYear - 2017} лет опыта web разработчиком`,
    label:
      "Это моя основная деятельность, создано большое количество сайтов разной степени сложности - от визитки до интернет-магазина и различных приложений.",
    value: "Experience",
    icon: <ExperienceIcon />,
  },
  {
    id: "3",
    title: "Самые оптимальные сроки разработки",
    label:
      "Предлагаю вам создание сайта любой сложности в самые сжатые сроки, без потери качества выполнения работы.",
    value: "Term",
    icon: <TermIcon />,
  },
  {
    id: "4",
    title: "Современный стек технологий по разработке",
    label:
      "Использую самые передовые технологии web разработки под каждый проект для наибольшой эффективности и результата",
    value: "Technologies",
    icon: <TechnologiesIcon />,
  },
  {
    id: "5",
    title: "Чистый код, кроссбраузерность и адаптивная верстка",
    label:
      "Разработка происходит по всем правилам веб-стандартов. А так же адаптивая верстка, которая позволяет просматривать сайт как на компьютере так и на моб.устройствах.",
    value: "Layout",
    icon: <LayoutIcon />,
  },
  {
    id: "6",
    title: "Обслуживание и поддержка сайта в любое время",
    label:
      "Быстро устраню любую проблему на вашем сайте, я всегда на связи, и никуда не пропадаю! Связь как по скайпу так и по телефону.",
    value: "Support",
    icon: <SupportIcon />,
  },
];
