import React, { FC, useEffect } from "react";
import {
  MailTruckWrapper,
  MailTruckLetter,
  Letter,
  MailTruckWheels,
  MailTruckDetails,
  Headlights,
} from "src/components/Window/City/MailTruck/style";
import { useSelectorTyped } from "src/store";

interface MailTruckProps {
  themeLight?: boolean;
  climateControl: string;
}

const MailTruck: FC<MailTruckProps> = ({ themeLight, climateControl }) => {
  const { likes } = useSelectorTyped(({ likes }) => likes);
  const { dataForm } = useSelectorTyped(({ form }) => form);

  useEffect(() => {
    const animatedElement = document.getElementById("animation-reset");
    const clonedElement = animatedElement.cloneNode(true);
    animatedElement.parentNode.replaceChild(clonedElement, animatedElement);
  }, [themeLight, climateControl, likes, dataForm]);

  return (
    <MailTruckWrapper id="animation-reset">
      <MailTruckLetter>
        <Letter />
      </MailTruckLetter>
      <MailTruckWheels />
      <MailTruckDetails>
        <Headlights />
      </MailTruckDetails>
    </MailTruckWrapper>
  );
};

export default MailTruck;
