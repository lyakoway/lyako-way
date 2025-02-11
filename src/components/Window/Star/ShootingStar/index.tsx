import React, { FC, useEffect, useState } from "react";
import {
  SkyContainer,
  Star,
} from "src/components/Window/Star/ShootingStar/style";

interface CloudProps {
  climateControl?: string;
}

const ShootingStar: FC<CloudProps> = ({ climateControl }) => {
  return (
    <SkyContainer>
      <Star />
    </SkyContainer>
  );
};

export default ShootingStar;
