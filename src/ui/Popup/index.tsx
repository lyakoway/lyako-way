import React, { useState, useEffect, FC, PropsWithChildren } from "react";
import { observer } from "mobx-react";
import { store } from "src/store";

import ButtonElement from "src/ui/ButtonElement";
import ButtonHeart from "src/ui/ButtonHeart";
import ThemeDarkLight from "src/ui/ThemeDarkLight";

import { getDayTime } from "src/common/utils";

import { PopupWrapper, ContentWrapper } from "./style";

interface IAccordionProps {
  positionValue?: string;
  handleClickPopup?: () => void;
  openedPopup?: boolean;
}

const Popup: FC<PropsWithChildren<IAccordionProps>> = observer(
  ({
    children,
    positionValue = "top right",
    handleClickPopup = () => {},
    openedPopup = false,
  }) => {
    const [openedTheme, setOpenedTheme] = useState(false);
    const [openedEnglish, setOpenedEnglish] = useState(false);
    const positionStyle = positionValue === "top right";

    const time = store.getTime();
    const dayTime = getDayTime(time).dayTime;
    useEffect(() => {
      setOpenedTheme(!dayTime);
    }, [dayTime]);

    const handleClickTheme = () => {
      setOpenedTheme(!openedTheme);
      store.setCheckedTheme(dayTime ? !openedTheme : openedTheme);
      store.setToggleTheme(!openedTheme);
    };

    return (
      <ContentWrapper>
        {children}
        {openedPopup && (
          <PopupWrapper
            $positionStyle={positionStyle}
            onClick={handleClickPopup}
          >
            <ButtonHeart positionStyle={positionStyle} />
            <ThemeDarkLight
              opened={openedTheme}
              handleClick={handleClickTheme}
              positionStyle={positionStyle}
            />
            <ButtonElement
              opened={openedEnglish}
              handleClick={() => setOpenedEnglish(!openedEnglish)}
              positionStyle={positionStyle}
            />
          </PopupWrapper>
        )}
      </ContentWrapper>
    );
  }
);

export default Popup;
