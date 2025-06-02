import React, { FC, ReactElement } from "react";

import { PopupWrapper, ContentWrapper } from "./style";

interface IAccordionProps {
  positionValue?: string;
  openedPopup?: boolean;
  popupRef?: any;
  content?: ReactElement | null;
  trigger?: ReactElement | null;
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

const Popup: FC<IAccordionProps> = ({
  positionValue = "top",
  openedPopup = false,
  popupRef,
  content = null,
  trigger = null,
}) => {
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
      {trigger}
      {openedPopup && content && (
        <PopupWrapper
          $positionStyle={positionStyle}
          $topStyle={topStyle}
          $leftStyle={leftStyle}
          $topArrowStyle={topArrowStyle}
          $leftArrowStyle={leftArrowStyle}
          $rotateArrowStyle={rotateArrowStyle}
        >
          {content}
        </PopupWrapper>
      )}
    </ContentWrapper>
  );
};

export default Popup;
