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
  openedPopup?: boolean;
  popupRef?: any;
}

type Position = "top" | "bottom" | "right";

interface PositionDataItem {
  positionStyle: boolean;
  topStyle: string;
  leftStyle: string;
  leftArrowStyle: string;
  topArrowStyle: string;
  rotateArrowStyle: string;
}

type PositionDataItems = Record<Position, PositionDataItem>;

const positionDataPopup: PositionDataItems = {
  top: {
    positionStyle: true,
    topStyle: "-8.6rem",
    leftStyle: "-146px",
    leftArrowStyle: "170px",
    topArrowStyle: "4em",
    rotateArrowStyle: "225deg",
  },
  bottom: {
    positionStyle: true,
    topStyle: "-0.3rem",
    leftStyle: "0",
    leftArrowStyle: "50%",
    topArrowStyle: "-0.32em",
    rotateArrowStyle: "45deg",
  },
  right: {
    positionStyle: false,
    topStyle: "-4rem",
    leftStyle: "56px",
    leftArrowStyle: "0",
    topArrowStyle: "20px",
    rotateArrowStyle: "315deg",
  },
};

const Popup: FC<PropsWithChildren<IAccordionProps>> = observer(
  ({ children, positionValue = "top", openedPopup = false, popupRef }) => {
    const [openedTheme, setOpenedTheme] = useState(false);
    const [openedEnglish, setOpenedEnglish] = useState(false);

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

    const {
      positionStyle,
      topStyle,
      leftStyle,
      leftArrowStyle,
      topArrowStyle,
      rotateArrowStyle,
    } = positionDataPopup[positionValue];

    return (
      <ContentWrapper ref={popupRef}>
        {children}
        {openedPopup && (
          <PopupWrapper
            $positionStyle={positionStyle}
            $topStyle={topStyle}
            $leftStyle={leftStyle}
            $topArrowStyle={topArrowStyle}
            $leftArrowStyle={leftArrowStyle}
            $rotateArrowStyle={rotateArrowStyle}
          >
            <ButtonHeart />
            <ThemeDarkLight
              opened={openedTheme}
              handleClick={handleClickTheme}
            />
            <ButtonElement
              opened={openedEnglish}
              handleClick={() => setOpenedEnglish(!openedEnglish)}
            />
          </PopupWrapper>
        )}
      </ContentWrapper>
    );
  }
);

export default Popup;
