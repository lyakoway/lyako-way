import React, { useEffect, useState } from "react";
import { RainWrapper, Drop } from "./style";

interface DropItem {
  left: number;
  animationDuration: number;
  height: number;
}

interface RainProps {
  intensity?: "light" | "medium" | "heavy";
}

const Rain: React.FC<RainProps> = ({ intensity = "medium" }) => {
  const [drops, setDrops] = useState<DropItem[]>([]);

  useEffect(() => {
    let dropAmount = 50; // default
    if (intensity === "light") dropAmount = 20;
    if (intensity === "heavy") dropAmount = 100;

    const newDrops = Array.from({ length: dropAmount }, () => ({
      left: Math.floor(Math.random() * window.innerWidth),
      animationDuration: Math.random() * (2 - 1) + 1, // 1–2s
      height: Math.random() * (30 - 15) + 15, // 15–30px
    }));

    setDrops(newDrops);
  }, [intensity]);

  return (
    <RainWrapper>
      {drops.map((drop, index) => (
        <Drop
          key={index}
          $animationDuration={drop.animationDuration}
          $height={drop.height}
        />
      ))}
    </RainWrapper>
  );
};

export default Rain;
