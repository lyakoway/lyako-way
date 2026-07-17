import React from "react";

import { useSelectorTyped } from "src/store";
import { ArticleTitle, Article } from "src/ui/Card";

import {
  ServiceSection,
  ServiceTitle,
  ServiceList,
  ServiceItem,
  ServiceIconBox,
  ServiceItemTitle,
  ServiceItemText,
} from "./style";

const Services = () => {
  const {
    lang: { propsHeaderTopMenu, propsAdvantages, advantagesText },
  } = useSelectorTyped(({ lang }) => lang);

  const title =
    propsHeaderTopMenu.find((item) => item.value === "services")?.label ?? "";

  return (
    <Article>
      <header>
        <ArticleTitle>{title}</ArticleTitle>
      </header>

      <ServiceSection>
        <ServiceTitle>{advantagesText}</ServiceTitle>

        <ServiceList>
          {propsAdvantages.map((item) => (
            <ServiceItem key={item.id}>
              <ServiceIconBox>{item.icon}</ServiceIconBox>
              <div>
                <ServiceItemTitle>{item.title}</ServiceItemTitle>
                <ServiceItemText>{item.label}</ServiceItemText>
              </div>
            </ServiceItem>
          ))}
        </ServiceList>
      </ServiceSection>
    </Article>
  );
};

export default Services;
