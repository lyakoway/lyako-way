import React, { FC, useEffect, useState } from "react";
import { StarWrapper } from "src/components/Window/Star/style";

interface CloudProps {
  climateControl?: string;
}

const StarrySky: FC<CloudProps> = ({ climateControl }) => {
  return <StarWrapper></StarWrapper>;
};

export default StarrySky;
