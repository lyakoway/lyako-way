import React, { FC } from "react";
import { StarWrapper } from "src/components/Window/Star/style";
import StarrySky from "src/components/Window/Star/StarrySky";
import ShootingStar from "src/components/Window/Star/ShootingStar";

interface CloudProps {
  climateControl?: string;
}

const Star: FC<CloudProps> = ({ climateControl }) => {
  return (
    <StarWrapper>
      <StarrySky />
      <ShootingStar />
    </StarWrapper>
  );
};

export default Star;
