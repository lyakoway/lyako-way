import React, { useRef, useState } from "react";

import { useSelectorTyped } from "src/store";
import { useClickOutside, useMediaQuery } from "src/features/customHooks";
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
import { Reveal } from "src/ui/Reveal";
import { ReactComponent as SettingIcon } from "src/common/icon/icon-header/setting.svg";

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
  ContactsGroup,
  ContactItem,
  ContactInfo,
  ContactTitle,
  RowIconBox,
  MessengerLinks,
  SettingsBox,
  SettingsTitle,
  SettingsCorner,
  GearButton,
  SettingsPopup,
  Controls,
  ControlItem,
} from "./style";

const Sidebar = () => {
  const {
    lang: { sidebar },
  } = useSelectorTyped(({ lang }) => lang);

  // <1250px — сайдбар в стеке: кнопки (лайк/тема/язык) прячем под шестерёнку
  // в правом верхнем углу блока аватар+имя (попап по клику). ≥1250px —
  // сайдбар слева, кнопки показаны статично под заголовком «Настройки».
  const compact = useMediaQuery("(max-width: 1249px)");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const cornerRef = useRef<HTMLDivElement>(null);
  useClickOutside(cornerRef, () => setSettingsOpen(false));

  return (
    <SidebarWrapper>
      <Reveal as={SidebarInfo}>
        <AvatarBox>
          <AvatarHead />
        </AvatarBox>

        <InfoContent>
          <Name title={sidebar.name}>{sidebar.name}</Name>
          <JobTitle>{sidebar.jobTitle}</JobTitle>
        </InfoContent>

        {compact && (
          <SettingsCorner ref={cornerRef}>
            <GearButton
              type="button"
              onClick={() => setSettingsOpen((prev) => !prev)}
              aria-expanded={settingsOpen}
              aria-label={sidebar.settings}
            >
              <SettingIcon />
            </GearButton>

            {settingsOpen && (
              <SettingsPopup>
                <ControlItem>
                  <ButtonLang />
                </ControlItem>
                <ControlItem>
                  <ThemeDarkLight />
                </ControlItem>
                <ControlItem>
                  <ButtonHeart />
                </ControlItem>
              </SettingsPopup>
            )}
          </SettingsCorner>
        )}
      </Reveal>

      <SidebarMore>
        <ContactsGroup>
          <Separator />

          <ContactsList>
            <Reveal as={ContactItem}>
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
            </Reveal>

            <Reveal as={ContactItem} delay={90}>
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
            </Reveal>

            <Reveal as={ContactItem} delay={180}>
              <RowIconBox>
                <PinIcon />
              </RowIconBox>
              <ContactInfo>
                <ContactTitle>{sidebar.locationTitle}</ContactTitle>
                <address>{sidebar.location}</address>
              </ContactInfo>
            </Reveal>
          </ContactsList>
        </ContactsGroup>

        {!compact && (
          <>
            <Separator />

            <Reveal as={SettingsBox} delay={120}>
              <SettingsTitle>
                {sidebar.settings}
                <SettingIcon />
              </SettingsTitle>
              <Controls>
                <ControlItem>
                  <ButtonLang />
                </ControlItem>
                <ControlItem>
                  <ThemeDarkLight />
                </ControlItem>
                <ControlItem>
                  <ButtonHeart />
                </ControlItem>
              </Controls>
            </Reveal>
          </>
        )}
      </SidebarMore>
    </SidebarWrapper>
  );
};

export default Sidebar;
