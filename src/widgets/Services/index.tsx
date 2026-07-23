import React from "react";

import { useSelectorTyped } from "src/store";
import { ArticleTitle, Article } from "src/ui/Card";
import { Reveal } from "src/ui/Reveal";
import ContactForm from "src/components/ContactForm";

import {
  ServiceSection,
  ServiceTitle,
  ServiceList,
  ServiceItem,
  ServiceIconBox,
  ServiceItemTitle,
  ServiceItemText,
  ServiceFormSection,
  ServiceFormCard,
} from "./style";

const Services = () => {
  const {
    lang: { propsHeaderTopMenu, propsAdvantages, advantagesText },
  } = useSelectorTyped(({ lang }) => lang);

  const title =
    propsHeaderTopMenu.find((item) => item.value === "services")?.label ?? "";

  return (
    <Article>
      <Reveal as="header">
        <ArticleTitle>{title}</ArticleTitle>
      </Reveal>

      <ServiceSection>
        <Reveal as={ServiceTitle}>{advantagesText}</Reveal>

        <ServiceList>
          {propsAdvantages.map((item, i) => (
            <Reveal as={ServiceItem} key={item.id} delay={i * 90}>
              <ServiceIconBox>{item.icon}</ServiceIconBox>
              <div>
                <ServiceItemTitle>{item.title}</ServiceItemTitle>
                <ServiceItemText>{item.label}</ServiceItemText>
              </div>
            </Reveal>
          ))}
        </ServiceList>
      </ServiceSection>

      <Reveal as={ServiceFormSection} delay={120}>
        <ServiceFormCard>
          <ContactForm embedded withService />
        </ServiceFormCard>
      </Reveal>
    </Article>
  );
};

export default Services;
