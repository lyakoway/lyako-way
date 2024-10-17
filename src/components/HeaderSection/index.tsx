import React, { useState, useRef, useEffect } from "react";
import { observer } from "mobx-react";

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
  IconWindow,
  IconBook,
  IconPicture,
  IconDay,
  IconSun,
  SettingWrapper,
  SettingIconWrapper,
  WindowWrapper,
} from "./style";

import { Modal } from "src/ui/Modal";
import Clock from "src/components/Clock";
import Window from "src/components/Window";

import { useClickOutside } from "src/features/customHooks/useClickOutside";

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
import { useIsomorphicLayoutEffect } from "src/features/customHooks/useIsomorphicLayoutEffect";
import { store } from "src/store";

const HeaderSection = observer(() => {
  const [openedPopup, setOpenedPopup] = useState(false);
  const [opened, setOpened] = useState(false);
  const [positionValue, setPositionValue] = useState("top");
  const popupRef = useRef<HTMLDivElement>(null);

  useClickOutside(popupRef, () => {
    if (openedPopup) {
      setOpenedPopup(false);
    }
  });

  const { headerHouse, toast } = store.getToggleLang();
  const openToastValue = store.getOpenToast();
  const { name } = store.getToggleTheme();
  const { modal } = store.getToggleLang();
  const time = store.getTime();
  const checkedTheme = store.getCheckedTheme();

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

  // useIsomorphicLayoutEffect(() => {
  //   const portfolioTextData = Array.from(
  //     document?.querySelectorAll<HTMLElement>("[data-parallax]")
  //   );
  //   const parallax = (e: { clientX: number; clientY: number }) => {
  //     const speedDay = portfolioTextData[0]?.getAttribute("data-parallax");
  //     const biasXDay = (e.clientX * Number(speedDay)) / 1000;
  //     portfolioTextData[0].style.backgroundPosition = `${-biasXDay}px 12px`;
  //     const speedSun = portfolioTextData[1].getAttribute("data-parallax");
  //     const biasXSun = (e.clientX * Number(speedSun)) / 1000;
  //     const biasYSun = (e.clientY * Number(speedSun)) / 1000;
  //     portfolioTextData[1].style.transform = `translateX(${-biasXSun}px) translateY(${-biasYSun}px)`;
  //   };
  //   document.addEventListener("mousemove", parallax);
  //   return () => {
  //     document.removeEventListener("mousemove", parallax);
  //   };
  // });

  return (
    <HeaderSectionWrapper>
      {/* <Toast
        openToastValue={openToastValue}
        severity="info"
        text={textToast}
        timer={10000}
      /> */}
      <HeaderSectionFon>
        <IconComp theme={name}>
          <SettingWrapper>
            <Popup
              positionValue={positionValue}
              openedPopup={openedPopup}
              popupRef={popupRef}
            >
              <SettingIconWrapper onClick={handleClickPopup}>
                <SettingIcon fill="white" />
              </SettingIconWrapper>
            </Popup>
          </SettingWrapper>
        </IconComp>
        <IconMap theme={name} />
        <Window theme={name} time={time} checkedTheme={checkedTheme} />
        <Clock />
        {/* <WindowWrapper>
          <IconWindow theme={name} />
          <IconDay theme={name} data-parallax="80" />
          <IconSun theme={name} data-parallax="20" />
        </WindowWrapper> */}
        <IconBook theme={name} />
        <IconPicture theme={name} />
      </HeaderSectionFon>

      <HeaderContactWrapper>
        <HeaderSectionGetsite>
          <HeaderSectionConteiner>
            <Button
              title={headerHouse.buttonText}
              toOrderHeader
              handleClick={() => setOpened(!opened)}
            >
              <RocketGetsiteIcon />
            </Button>
            <Modal
              titleText={modal.title}
              buttonText={modal.buttonText}
              openedModal={opened}
              onCloseModal={() => setOpened(false)}
              onApply={notify}
            >
              111
            </Modal>
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
});

export default HeaderSection;
