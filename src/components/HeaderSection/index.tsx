import React, { useState, useRef, useEffect, useCallback } from "react";
import { useDispatchTyped, useSelectorTyped } from "src/store";

import {
  HeaderSectionWrapper,
  HeaderContactWrapper,
  HeaderSectionFon,
  HeaderSectionGetsite,
  HeaderSectionContacts,
  HeaderSectionConteiner,
  HeaderSectionLabel,
  Phones,
  PhonesConteiner,
  PhonesNumber,
  PhonesText,
  PhonesTextDivide,
  PhonesTextWrapper,
  Emails,
  ContactsText,
  Skype,
  IconComp,
  IconMap,
  IconBook,
  IconPicture,
  SettingWrapper,
  SettingIconWrapper,
} from "./style";

import { Modal } from "src/ui/Modal";
import Clock from "src/components/Clock";
import Window from "src/components/Window";

import { useClickOutside } from "src/features/customHooks";

import { ReactComponent as RocketGetsiteIcon } from "src/common/icon/rocket/RocketIcon.svg";
import { ReactComponent as PhonesIcon } from "src/common/icon/contacts/PhonesIcon.svg";
import { ReactComponent as EmailsIcon } from "src/common/icon/contacts/EmailsIcon.svg";
import { ReactComponent as SkypeIcon } from "src/common/icon/contacts/SkypeHeaderIcon.svg";
import { ReactComponent as SettingIcon } from "src/common/icon/icon-header/setting.svg";

import Button from "src/ui/Button";
import Popup from "src/ui/Popup";
// import Toast from "../../common/Toast";

import { getMobile } from "src/common/utils";

import { getwindowInnerWidth } from "src/common/utils/getwindowInnerWidth";
import { showModal } from "src/reducers";
import ContactForm from "src/components/ContactForm";

const HeaderSection = () => {
  const {
    theme: { name },
  } = useSelectorTyped(({ theme }) => theme);
  const {
    lang: { headerHouse, toast, modal },
  } = useSelectorTyped(({ lang }) => lang);
  const [openedPopup, setOpenedPopup] = useState(false);
  const [opened, setOpened] = useState(false);
  const [positionValue, setPositionValue] = useState("top");
  const popupRef = useRef<HTMLDivElement>(null);
  const themeLight = name === "light";

  const dispatch = useDispatchTyped();

  useClickOutside(popupRef, () => {
    if (openedPopup) {
      setOpenedPopup(false);
    }
  });

  // const openToastValue = store.getOpenToast();
  // const checkedTheme = store.getCheckedTheme();

  const handleClickPopup = () => {
    setOpenedPopup(!openedPopup);
    const positionValueWidth = getwindowInnerWidth() > 959;
    setPositionValue(positionValueWidth ? "top" : "right");
  };

  const textToast = getMobile() ? toast.mobileText : toast.desktopText;

  const notify = () => {
    // if (quantity) {
    //   toastNotify({ title: 'Корзина оформлена', type: 'success' });
    // }
    setOpened(false);
  };

  const handleClickModal = useCallback(() => {
    dispatch(
      showModal({
        content: <ContactForm />,
      })
    );
  }, [dispatch]);

  return (
    <HeaderSectionWrapper>
      {/* <Toast
        openToastValue={openToastValue}
        severity="info"
        text={textToast}
        timer={10000}
      /> */}
      <HeaderSectionFon>
        <IconComp $themeLight={themeLight}>
          <SettingWrapper>
            <Popup
              positionValue={positionValue}
              openedPopup={openedPopup}
              popupRef={popupRef}
            >
              <SettingIconWrapper
                onClick={handleClickPopup}
                $openedPopup={openedPopup}
              >
                <SettingIcon fill="white" />
              </SettingIconWrapper>
            </Popup>
          </SettingWrapper>
        </IconComp>
        <IconMap $themeLight={themeLight} />
        <Window themeLight={themeLight} />
        <Clock />
        <IconBook $themeLight={themeLight} />
        <IconPicture $themeLight={themeLight} />
      </HeaderSectionFon>

      <HeaderContactWrapper>
        <HeaderSectionGetsite>
          <HeaderSectionConteiner>
            <Button
              title={headerHouse.buttonText}
              toOrderHeader
              handleClick={handleClickModal}
            >
              <RocketGetsiteIcon />
            </Button>
            {/*<Modal*/}
            {/*  titleText={modal.title}*/}
            {/*  buttonText={modal.buttonText}*/}
            {/*  openedModal={opened}*/}
            {/*  onCloseModal={() => setOpened(false)}*/}
            {/*  onApply={notify}*/}
            {/*>*/}
            {/*  111*/}
            {/*</Modal>*/}
            <HeaderSectionLabel>
              {headerHouse.buttonTextAddition}
            </HeaderSectionLabel>
          </HeaderSectionConteiner>
        </HeaderSectionGetsite>

        <HeaderSectionContacts>
          <HeaderSectionConteiner>
            <Phones>
              <PhonesIcon />
              <PhonesConteiner>
                <PhonesNumber href="tel:+79998121975">
                  +7 (999) 812-19-75
                </PhonesNumber>
                <PhonesNumber href="tel:+79772700930">
                  +7 (977) 270-09-30
                </PhonesNumber>
              </PhonesConteiner>
            </Phones>
            <PhonesTextWrapper>
              <PhonesText href="https://t.me/amazurenk">Telegram</PhonesText>
              <PhonesTextDivide>/</PhonesTextDivide>
              <PhonesText href="https://api.whatsapp.com/send?phone=79772700930">
                Whatsapp
              </PhonesText>
            </PhonesTextWrapper>
            <HeaderSectionLabel>{headerHouse.callText}</HeaderSectionLabel>
            <Emails>
              <EmailsIcon />
              <ContactsText href="mailto:mazurenko-alexey@mail.ru">
                mazurenko-alexey@mail.ru
              </ContactsText>
            </Emails>
            <Skype>
              <SkypeIcon />
              <ContactsText href="skype:aleks10_0?chat">aleks10_0</ContactsText>
            </Skype>
          </HeaderSectionConteiner>
        </HeaderSectionContacts>
      </HeaderContactWrapper>
    </HeaderSectionWrapper>
  );
};

export default HeaderSection;
