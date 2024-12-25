import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import WeatherIcon from "../WeatherIcon";
import { useDispatchTyped } from "src/store";
import { closeModal, setClimateControl } from "src/slices";

// import ModalAnimation from "../ModalAnimation";

import {
  ContentWrapper,
  Overlay,
  Header,
  HeaderText,
  IconClose,
  Content,
  ContentRadio,
  ContentAnimation,
  Footer,
  ModalComponent,
  ModalSectionWrapper,
  ModalSection,
  ContentText,
  WeatherIconWrapper,
} from "./style";

import "./style.css";

import { getwindowInnerWidth } from "src/common/utils/getwindowInnerWidth";

import { ReactComponent as CloseOutline } from "src/common/icon/CloseOutline.svg";
import { ReactComponent as FooterMailIcon } from "src/common/icon/contacts/MailDarkIcon.svg";

import { CLIMATE_CONTROL } from "./constants";

const ModalClimateControl = ({
  opened = false,
  onRequestClose,
  theme,
                               climateControl,
}) => {
  // const [isClimateControl, setIsClimateControl] = useState("sunnyMoon");
  const dispatch = useDispatchTyped();

  useEffect(() => {
    if (opened) {
      dispatch(closeModal());
    }
  }, [opened]);

  // useEffect(() => {
  //   store.setClimateControl(isClimateControl);
  // }, [isClimateControl]);

  const handleClose = (e) => {
    e.stopPropagation();
    onRequestClose && onRequestClose();
  };

  const handleOverlayClick = (e) => {
    if (
      opened &&
      e.target.closest("[data-close-border]") &&
      !e.target.closest("[data-close-modal]")
    ) {
      handleClose(e);
    }
  };

  useEffect(() => {
    const positionValueWidth = getwindowInnerWidth() < 659;
    if (positionValueWidth) {
      if (opened) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
  }, [opened]);

  return (
    opened && (
      <Overlay data-close-border $opened={opened} onClick={handleOverlayClick}>
        <ModalComponent data-close-modal>
          <Header>
            <FooterMailIcon
              width={24}
              height={24}
              fill={theme === "light" ? "#2b3037" : "#fff"}
            />
            <HeaderText>Погодные условия</HeaderText>
          </Header>
          <IconClose onClick={handleClose}>
            <CloseOutline width={24} height={24} />
          </IconClose>
          <ModalSectionWrapper>
            <ModalSection>
              {CLIMATE_CONTROL.map((item) => (
                <WeatherIconWrapper
                  active={item === climateControl}
                  key={item}
                  onClick={() => dispatch(setClimateControl(item))}
                >
                  <WeatherIcon climateControl={item} theme={theme} />
                </WeatherIconWrapper>
              ))}
            </ModalSection>
          </ModalSectionWrapper>
        </ModalComponent>
      </Overlay>
    )
  );
};

export default ModalClimateControl;
