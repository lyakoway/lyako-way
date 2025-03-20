import React, { FC } from "react";
import {
  MailTruckWrapper,
  MailTruckLetter,
  Letter,
  MailTruckWheels,
  MailTruckDetails,
  Headlights,
} from "src/components/Window/City/MailTruck/style";

interface MailTruckProps {
  themeLight?: boolean;
}

const MailTruck: FC<MailTruckProps> = ({ themeLight }) => {
  return (
    <MailTruckWrapper>
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
