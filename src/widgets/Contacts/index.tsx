import React from "react";

import { useSelectorTyped } from "src/store";
import { Article, ArticleTitle } from "src/ui/Card";
import { Reveal } from "src/ui/Reveal";
import ContactForm from "src/components/ContactForm";
import RunBorder from "src/ui/RunBorder";
import {
  CONTACT_EMAIL,
  CONTACT_PHONES,
  CONTACT_MESSENGERS,
} from "src/common/constants/contacts";
import {
  MESSENGER_ICON,
  PhoneIcon,
  PinIcon,
} from "src/common/icon/socialIcons";
import { trackEvent } from "src/common/utils/trackAnalytics";
import { usePressAnimation } from "src/common/lib/usePressAnimation";
import { AnalyticsEvent } from "src/common/constants/analytics";

import {
  Intro,
  ContactBlock,
  SectionLabel,
  Links,
  LinkItem,
  InfoText,
  FormCard,
} from "./style";

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="m4 7 8 6 8-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 7v5l3 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Ссылка-контакт с анимацией нажатия (как кнопки проекта): закраска
// доигрывает до конца при коротком тапе, при удержании — держится,
// плюс продавливание scale(0.94).
const PressableLinkItem: React.FC<{
  href: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}> = ({ href, onClick, target, rel, children }) => {
  const press = usePressAnimation();
  return (
    <LinkItem
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      $pressed={press.pressed}
      {...press.pressHandlers}
    >
      {children}
    </LinkItem>
  );
};

const Contacts = () => {
  const {
    lang: { propsHeaderTopMenu, sidebar, contactsPage },
  } = useSelectorTyped(({ lang }) => lang);

  const title =
    propsHeaderTopMenu.find((item) => item.value === "contacts")?.label ?? "";

  return (
    <Article>
      <Reveal as="header">
        <ArticleTitle>{title}</ArticleTitle>
      </Reveal>

      <Reveal as={Intro} delay={90}>
        {contactsPage.intro}
      </Reveal>


      <Reveal as={ContactBlock} delay={180}>
        <SectionLabel>{sidebar.phoneTitle}</SectionLabel>
        <Links>
          {CONTACT_PHONES.map((phone) => (
            <PressableLinkItem
              key={phone.href}
              href={phone.href}
              onClick={() =>
                trackEvent(AnalyticsEvent.CONTACT_CLICK, {
                  channel: "phone",
                  placement: "contacts_page",
                })
              }
            >
              <PhoneIcon />
              {phone.label}
              <RunBorder radius={12} />
            </PressableLinkItem>
          ))}
        </Links>
      </Reveal>

      <Reveal as={ContactBlock} delay={210}>
        <SectionLabel>{sidebar.emailTitle}</SectionLabel>
        <Links>
          <PressableLinkItem
            href={CONTACT_EMAIL.href}
            onClick={() =>
              trackEvent(AnalyticsEvent.CONTACT_CLICK, {
                channel: "email",
                placement: "contacts_page",
              })
            }
          >
            <MailIcon />
            {CONTACT_EMAIL.label}
            <RunBorder radius={12} />
          </PressableLinkItem>
        </Links>
      </Reveal>

      <Reveal as={ContactBlock} delay={240}>
        <SectionLabel>{sidebar.messengersTitle}</SectionLabel>
        <Links>
          {CONTACT_MESSENGERS.map((item) => (
            <PressableLinkItem
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() =>
                trackEvent(AnalyticsEvent.CONTACT_CLICK, {
                  channel: item.label.toLowerCase(),
                  placement: "contacts_page",
                })
              }
            >
              {MESSENGER_ICON[item.label]}
              {item.label}
              <RunBorder radius={12} />
            </PressableLinkItem>
          ))}
        </Links>
      </Reveal>

      <Reveal as={ContactBlock} delay={270}>
        <SectionLabel>{sidebar.locationTitle}</SectionLabel>
        <InfoText>
          <PinIcon />
          {sidebar.location}
        </InfoText>
      </Reveal>

      <Reveal as={ContactBlock}>
        <SectionLabel>{contactsPage.responseTitle}</SectionLabel>
        <InfoText>
          <ClockIcon />
          {contactsPage.responseTime}
        </InfoText>
      </Reveal>

      <Reveal as={FormCard} delay={80}>
        <ContactForm embedded />
      </Reveal>
    </Article>
  );
};

export default Contacts;
