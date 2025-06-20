import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";

import { useSelectorTyped } from "src/store";

import MenuBurger from "src/ui/MenuBurger";
import Popup from "src/ui/Popup";
import Ul from "src/ui/Ul";
import Li from "src/ui/Li";

import {
  Overlay,
  HeaderTopWrapper,
  HeaderMenu,
  Label,
  MenuWrapper,
  LinkMenu,
  LinkDiv,
  SettingWrapper,
  ContainerWrapper,
  ProfileWrapper,
} from "./style";

import { ReactComponent as SettingIcon } from "src/common/icon/icon-header/setting.svg";
import { ReactComponent as ProfileIcon } from "src/common/icon/icon-header/profile.svg";
import { HeaderTopMenuProps } from "src/common/types/lang";
import PagesSettings from "src/components/PagesSettings";

const HeaderMenuLi = (
  propsList: HeaderTopMenuProps[],
  setOpened: (value: boolean) => void,
  header: boolean,
  routeLink: any
) => {
  const propsListValue = propsList.slice(1);
  const routeLinkBlog = routeLink.startsWith("blog");
  const routeLinkPortfolio = routeLink.startsWith("portfolio");
  const arrPropsList =
    routeLinkBlog || routeLinkPortfolio
      ? propsListValue.slice(-3).filter((i) => !routeLink.startsWith(i.href))
      : propsListValue;

  const scrollToBottom = (id: string) => {
    const element = document?.getElementById(id);
    window.scrollTo(0, document.body?.scrollHeight - element?.scrollHeight);
  };

  return arrPropsList.map((item) => (
    <Li $header={header} key={item.id} onClick={() => setOpened(false)}>
      {!item.href && item.value !== "contacts" && (
        <LinkMenu href={`${"/#" + item.value}`}>
          {item.icon}
          <Label style={{ pointerEvents: "none" }}>{item.label}</Label>
        </LinkMenu>
      )}
      {item.href && (
        <a href={`${"/" + item.href}`}>
          <LinkDiv>
            {item.icon}
            <Label style={{ pointerEvents: "none" }}>{item.label}</Label>
          </LinkDiv>
        </a>
      )}
      {item.value === "contacts" && (
        <LinkDiv onClick={() => scrollToBottom(item.value)}>
          {item.icon}
          <Label style={{ pointerEvents: "none" }}>{item.label}</Label>
        </LinkDiv>
      )}
    </Li>
  ));
};

interface HeaderMobileProps {
  propsList: HeaderTopMenuProps[];
  header?: boolean;
}

const HeaderMobile: FC<PropsWithChildren<HeaderMobileProps>> = ({
  children,
  propsList = [],
  header = false,
}) => {
  const { routeLink } = useSelectorTyped(({ link }) => link);
  const [openedPopup, setOpenedPopup] = useState(false);
  const [opened, setOpened] = useState(false);

  const onBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOpened(false);
      setOpenedPopup(false);
    }
  };

  const handleClickPopup = useCallback(() => {
    setOpenedPopup(!openedPopup);
  }, [openedPopup, setOpenedPopup]);

  useEffect(() => {
    opened
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [opened]);

  return (
    <>
      <Overlay data-close-border $opened={opened} />
      <HeaderTopWrapper
        data-close-modal
        $header={header}
        onBlur={onBlur}
        tabIndex={1}
      >
        <MenuWrapper $header={header}>
          {children}
          <ContainerWrapper>
            <MenuBurger
              opened={opened}
              handleClick={() => setOpened(!opened)}
            />
            <Popup
              positionValue="bottom"
              openedPopup={openedPopup}
              content={<PagesSettings />}
              trigger={
                <ContainerWrapper onClick={handleClickPopup}>
                  <ProfileWrapper>
                    <ProfileIcon fill="white" />
                  </ProfileWrapper>
                  <SettingWrapper>
                    <SettingIcon fill="white" />
                  </SettingWrapper>
                </ContainerWrapper>
              }
            />
          </ContainerWrapper>
        </MenuWrapper>
        <HeaderMenu $opened={opened}>
          <Ul>{HeaderMenuLi(propsList, setOpened, header, routeLink)}</Ul>
        </HeaderMenu>
      </HeaderTopWrapper>
    </>
  );
};

export default HeaderMobile;
