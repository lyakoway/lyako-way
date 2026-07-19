import React, { useState } from "react";

import { useSelectorTyped } from "src/store";
import { IconBox } from "src/ui/Card";
import ButtonLang from "src/ui/ButtonLang";
import ButtonHeart from "src/ui/ButtonHeart";
import ThemeDarkLight from "src/ui/ThemeDarkLight";

import {
  CONTACT_EMAIL,
  CONTACT_MESSENGERS,
  CONTACT_PHONES,
} from "src/common/constants/contacts";
import { MESSENGER_ICON } from "src/common/icon/socialIcons";

import { ReactComponent as LaykoWayLightIcon } from "src/common/icon/logo/LaykoWayLightIcon.svg";
import { ReactComponent as EmailsIcon } from "src/common/icon/contacts/EmailsIcon.svg";
import { ReactComponent as PhonesIcon } from "src/common/icon/contacts/PhonesIcon.svg";
import { ReactComponent as CooperationIcon } from "src/common/icon/contacts/СooperationIcon.svg";
import { ReactComponent as ContactsIcon } from "src/common/icon/contacts/СontactsIcon.svg";

import {
  SidebarWrapper,
  SidebarInfo,
  AvatarBox,
  InfoContent,
  Name,
  JobTitle,
  MoreBtn,
  SidebarMore,
  Separator,
  ContactsList,
  ContactItem,
  ContactInfo,
  ContactTitle,
  MessengerLinks,
  Controls,
  ControlItem,
} from "./style";

const Sidebar = () => {
  const {
    lang: { sidebar },
  } = useSelectorTyped(({ lang }) => lang);
  const [active, setActive] = useState(false);

  return (
    <SidebarWrapper $active={active}>
      <SidebarInfo>
        <AvatarBox>
          <LaykoWayLightIcon />
        </AvatarBox>

        <InfoContent>
          <Name title={sidebar.name}>{sidebar.name}</Name>
          <JobTitle>{sidebar.jobTitle}</JobTitle>
        </InfoContent>

        <MoreBtn
          type="button"
          onClick={() => setActive((prev) => !prev)}
          aria-expanded={active}
        >
          <span>{active ? sidebar.hideContacts : sidebar.showContacts}</span>
          <ContactsIcon width={16} height={16} />
        </MoreBtn>
      </SidebarInfo>

      <SidebarMore $active={active}>
        <Separator />

        <ContactsList>
          <ContactItem>
            <IconBox>
              <EmailsIcon />
            </IconBox>
            <ContactInfo>
              <ContactTitle>{sidebar.emailTitle}</ContactTitle>
              <a href={CONTACT_EMAIL.href}>{CONTACT_EMAIL.label}</a>
            </ContactInfo>
          </ContactItem>

          <ContactItem>
            <IconBox>
              <PhonesIcon />
            </IconBox>
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
            <IconBox>
              <CooperationIcon />
            </IconBox>
            <ContactInfo>
              <ContactTitle>{sidebar.messengersTitle}</ContactTitle>
              <MessengerLinks>
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
            <IconBox>
              <ContactsIcon />
            </IconBox>
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
