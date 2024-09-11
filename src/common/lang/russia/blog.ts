import JavaScript from "src/common/icon/icon-blog/JavaScript.png";
import React from "src/common/icon/icon-blog/React.png";
import NextJs from "src/common/icon/icon-blog/NextJs.png";
import TypeScript from "src/common/icon/icon-blog/TypeScript.png";
import ReactNative from "src/common/icon/icon-blog/ReactNative.jpeg";
import NodeJs from "src/common/icon/icon-blog/NodeJs.png";
import Redux from "src/common/icon/icon-blog/Redux.png";
import Git from "src/common/icon/icon-blog/Git.png";
import { BlogProps, PortfolioListBlogProps } from "src/common/types/lang";

export const blog: BlogProps = {
  title: "Мой блог",
  buttonText: "Открыть блог",
  blogTitle:
    "Площадка, c интересными новостями и примерами в мире It разработки",
  blogText:
    "Здесь можно узнать для себя что-то новое или повторить. Также здесь я для себя собрал что-то личное, для собственного развития, поделится какой-то личной информацией.",
  blogDataTime: "08.01.2020",
  portfolioNameList: "Заметки веб-разработчика",
  portfolioTextTitle: "Добро пожаловать на блог!",
  portfolioText:
    "Я наконец-то, решил сам для себя сделать площадку, чтобы делиться интересными новостями и примерами в мире front-end разработки",
  blogTitleTag: "Популярные теги",
  all: "Все",
  filter: "Фильтр заметок",
};

export const propsPortfolioListBlog: PortfolioListBlogProps[] = [
  {
    id: "1",
    hrefPortfolio: "https://react-t-shirt-shop.herokuapp.com/",
    portfolioNameList: "JavaScript",
    portfolioDataTime: "Январь 2021",
    icon: `${JavaScript}`,
    widthIcon: "200px",
    heightIcon: "200px",
    hrefNameList: "javaScript",
    technologies: ["JavaScript"],
    // github: 'https://github.com/Alexey25041991/react-t-shirt-shop.git',
    portfolioText:
      "Здесь хочу поделиться полезной информацией свянанной с JavaScript. Можно посмотреть полезные ссылки, примеры кода, что появилось нового. Так же порекомендую из своей практики что стоит изучить, а что не забывать и повторять.",
    textBlogHeader: "Заметки про JavaScript и как с ним работать.",
  },
  {
    id: "2",
    hrefPortfolio: "https://react-t-shirt-shop.herokuapp.com/",
    portfolioNameList: "TypeScript",
    portfolioDataTime: "Январь 2021",
    icon: `${TypeScript}`,
    widthIcon: "200px",
    heightIcon: "200px",
    hrefNameList: "typeScript",
    technologies: ["TypeScript"],
    // github: 'https://github.com/Alexey25041991/react-t-shirt-shop.git',
    portfolioText:
      "Здесь хочу поделиться полезной информацией свянанной с JavaScript. Можно посмотреть полезные ссылки, примеры кода, что появилось нового. Так же порекомендую из своей практики что стоит изучить, а что не забывать и повторять",
    textBlogHeader: "Заметки про JavaScript и как с ним работать.",
  },
  {
    id: "3",
    hrefPortfolio: "http://dlg-construction.ru/",
    portfolioNameList: "React",
    portfolioDataTime: "Январь 2021",
    icon: `${React}`,
    widthIcon: "160px",
    heightIcon: "160px",
    hrefNameList: "react",
    technologies: ["React"],
    portfolioText: `В портфолио представлены проекты, которые я 
    разработал в сотрудничестве с веб-студиями так и для частных клиентов, 
    а также несколько личных проектов.\nОсновная масса проектов содержит
    индивидуальные функции предназначенные для реализации особенностей
    работы веб-сайта.\nВ моем портфолио веб-разработчика указано название
    сайта, ссылка на сайт, цель сайта и описание выполненной работы.`,
    textBlogHeader: "Что такое Reac и с чем его едят",
  },
  {
    id: "4",
    hrefPortfolio: "https://topas-ts.ru",
    portfolioNameList: "Интернет магазин",
    portfolioDataTime: "Январь 2021",
    icon: `${NextJs}`,
    widthIcon: "160px",
    heightIcon: "160px",
    hrefNameList: "topas-ts",
    technologies: ["Next"],
    portfolioText: `В портфолио представлены проекты, которые я 
    разработал в сотрудничестве с веб-студиями так и для частных клиентов, 
    а также несколько личных проектов. Основная масса проектов содержит
    индивидуальные функции предназначенные для реализации особенностей
    работы веб-сайта.В моем портфолио веб-разработчика указано название
    сайта, ссылка на сайт, цель сайта и описание выполненной работы`,
    textBlogHeader: "Зазем нужен Next js",
  },
  {
    id: "5",
    hrefPortfolio: "https://react-t-shirt-shop.herokuapp.com/",
    portfolioNameList: "Интернет магазин",
    portfolioDataTime: "Январь 2021",
    icon: `${ReactNative}`,
    widthIcon: "200px",
    heightIcon: "140px",
    hrefNameList: "name4",
    technologies: ["ReactNative"],
    portfolioText: "Интернет магазин4",
    textBlogHeader: "ReactNative.js",
  },
  {
    id: "6",
    hrefPortfolio: "https://react-t-shirt-shop.herokuapp.com/",
    portfolioNameList: "Интернет магазин",
    portfolioDataTime: "Январь 2021",
    icon: `${NodeJs}`,
    widthIcon: "200px",
    heightIcon: "200px",
    hrefNameList: "name4",
    technologies: ["Node"],
    portfolioText: "Интернет магазин4",
    textBlogHeader: "Node.js",
  },
  {
    id: "7",
    hrefPortfolio: "https://react-t-shirt-shop.herokuapp.com/",
    portfolioNameList: "Интернет магазин",
    portfolioDataTime: "Январь 2021",
    icon: `${Redux}`,
    widthIcon: "200px",
    heightIcon: "200px",
    hrefNameList: "name5",
    technologies: ["Redux"],
    portfolioText: "Интернет магазин5",
    textBlogHeader: "Redux",
  },
  {
    id: "8",
    hrefPortfolio: "https://react-t-shirt-shop.herokuapp.com/",
    portfolioNameList: "Интернет магазин",
    portfolioDataTime: "Январь 2021",
    icon: `${Git}`,
    widthIcon: "160px",
    heightIcon: "160px",
    hrefNameList: "name5",
    technologies: ["Git"],
    portfolioText: "Интернет магазин5",
    textBlogHeader: "Git",
  },
];
