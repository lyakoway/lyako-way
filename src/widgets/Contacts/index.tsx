import React from "react";

import { useSelectorTyped } from "src/store";
import { Article, ArticleTitle } from "src/ui/Card";
import ContactForm from "src/components/ContactForm";
import {
  CONTACT_EMAIL,
  CONTACT_PROFILES,
  CONTACT_PHONES,
  CONTACT_MESSENGERS,
} from "src/common/constants/contacts";
import {
  PROFILE_ICON,
  GitHubIcon,
  MESSENGER_ICON,
  PhoneIcon,
  PinIcon,
} from "src/common/icon/socialIcons";

import {
  Intro,
  ContactBlock,
  RangeOnly,
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

const Contacts = () => {
  const {
    lang: { propsHeaderTopMenu, sidebar, contactsPage },
  } = useSelectorTyped(({ lang }) => lang);

  const title =
    propsHeaderTopMenu.find((item) => item.value === "contacts")?.label ?? "";

  return (
    <Article>
      <header>
        <ArticleTitle>{title}</ArticleTitle>
      </header>

      <Intro>{contactsPage.intro}</Intro>

      <ContactBlock>
        <SectionLabel>{contactsPage.profilesTitle}</SectionLabel>
        <Links>
          {CONTACT_PROFILES.map((item) => (
            <LinkItem
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              {PROFILE_ICON[item.label] ?? <GitHubIcon />}
              {item.label}
            </LinkItem>
          ))}
        </Links>
      </ContactBlock>

      <ContactBlock>
        <SectionLabel>{sidebar.emailTitle}</SectionLabel>
        <Links>
          <LinkItem href={CONTACT_EMAIL.href}>
            <MailIcon />
            {CONTACT_EMAIL.label}
          </LinkItem>
        </Links>
      </ContactBlock>

      {/* Тел/мессенджеры/локация — только в диапазоне 1024–1249px, где их
          нет в верхнем блоке-визитке. */}
      <RangeOnly>
        <ContactBlock>
          <SectionLabel>{sidebar.phoneTitle}</SectionLabel>
          <Links>
            {CONTACT_PHONES.map((phone) => (
              <LinkItem key={phone.href} href={phone.href}>
                <PhoneIcon />
                {phone.label}
              </LinkItem>
            ))}
          </Links>
        </ContactBlock>

        <ContactBlock>
          <SectionLabel>{sidebar.messengersTitle}</SectionLabel>
          <Links>
            {CONTACT_MESSENGERS.map((item) => (
              <LinkItem
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {MESSENGER_ICON[item.label]}
                {item.label}
              </LinkItem>
            ))}
          </Links>
        </ContactBlock>

        <ContactBlock>
          <SectionLabel>{sidebar.locationTitle}</SectionLabel>
          <InfoText>
            <PinIcon />
            {sidebar.location}
          </InfoText>
        </ContactBlock>
      </RangeOnly>

      <ContactBlock>
        <SectionLabel>{contactsPage.responseTitle}</SectionLabel>
        <InfoText>
          <ClockIcon />
          {contactsPage.responseTime}
        </InfoText>
      </ContactBlock>

      <FormCard>
        <ContactForm embedded />
      </FormCard>
    </Article>
  );
};

export default Contacts;
