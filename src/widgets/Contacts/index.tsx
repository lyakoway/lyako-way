import React from "react";

import { useSelectorTyped } from "src/store";
import { Article, ArticleTitle } from "src/ui/Card";
import ContactForm from "src/components/ContactForm";
import {
  CONTACT_EMAIL,
  CONTACT_PROFILES,
} from "src/common/constants/contacts";
import { PROFILE_ICON, GitHubIcon } from "src/common/icon/socialIcons";

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

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
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

      <ContactBlock>
        <SectionLabel>{contactsPage.locationTitle}</SectionLabel>
        <InfoText>
          <PinIcon />
          {contactsPage.location}
        </InfoText>
      </ContactBlock>

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
