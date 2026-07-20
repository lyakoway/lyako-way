import React from "react";

import { useSelectorTyped } from "src/store";
import ButtonLang from "src/ui/ButtonLang";
import ButtonHeart from "src/ui/ButtonHeart";
import ThemeDarkLight from "src/ui/ThemeDarkLight";

import {
  CONTACT_EMAIL,
  CONTACT_MESSENGERS,
  CONTACT_PHONES,
} from "src/common/constants/contacts";
import {
  MESSENGER_ICON,
  MailIcon,
  PhoneIcon,
  ChatIcon,
  PinIcon,
} from "src/common/icon/socialIcons";

import AvatarHead from "src/ui/AvatarHead";

import {
  SidebarWrapper,
  SidebarInfo,
  AvatarBox,
  InfoContent,
  Name,
  JobTitle,
  SidebarMore,
  Separator,
  ContactsList,
  ContactItem,
  ContactInfo,
  ContactTitle,
  RowIconBox,
  MessengerLinks,
  Controls,
  ControlItem,
} from "./style";

const Sidebar = () => {
  const {
    lang: { sidebar },
  } = useSelectorTyped(({ lang }) => lang);

  return (
    <SidebarWrapper>
      <SidebarInfo>
        <AvatarBox>
          <AvatarHead />
        </AvatarBox>

        <InfoContent>
          <Name title={sidebar.name}>{sidebar.name}</Name>
          <JobTitle>{sidebar.jobTitle}</JobTitle>
        </InfoContent>
      </SidebarInfo>

      <SidebarMore>
        <Separator />

        <ContactsList>
          <ContactItem>
            <RowIconBox>
              <PhoneIcon />
            </RowIconBox>
            <ContactInfo>
              <ContactTitle>{sidebar.phoneTitle}</ContactTitle>
              {CONTACT_PHONES.map((phone) => (
                <a key={phone.href} href={phone.href}>
                  {phone.label}
                </a>
              ))}
            </ContactInfo>
          </ContactItem>

          <ContactItem>
            <RowIconBox>
              <ChatIcon />
            </RowIconBox>
            <ContactInfo>
              <ContactTitle>{sidebar.messengersTitle}</ContactTitle>
              <MessengerLinks>
                <a
                  href={CONTACT_EMAIL.href}
                  title={CONTACT_EMAIL.label}
                  aria-label={sidebar.emailTitle}
                >
                  <MailIcon />
                </a>
                {CONTACT_MESSENGERS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    title={item.label}
                    aria-label={item.label}
                  >
                    {MESSENGER_ICON[item.label]}
                  </a>
                ))}
              </MessengerLinks>
            </ContactInfo>
          </ContactItem>

          <ContactItem>
            <RowIconBox>
              <PinIcon />
            </RowIconBox>
            <ContactInfo>
              <ContactTitle>{sidebar.locationTitle}</ContactTitle>
              <address>{sidebar.location}</address>
            </ContactInfo>
          </ContactItem>
        </ContactsList>

        <Separator />

        <Controls>
          <ControlItem>
            <ButtonHeart />
          </ControlItem>
          <ControlItem>
            <ThemeDarkLight />
          </ControlItem>
          <ControlItem>
            <ButtonLang />
          </ControlItem>
        </Controls>
      </SidebarMore>
    </SidebarWrapper>
  );
};

export default Sidebar;
