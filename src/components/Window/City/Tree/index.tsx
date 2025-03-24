import React, { FC } from "react";
import {
  TreeWrapper,
  TreeTrunk,
  Leaf1,
  Leaf2,
  Leaf3,
  TreeBase,
} from "src/components/Window/City/Tree/style";

interface TreeProps {
  themeLight?: boolean;
  left: string;
  climateControl: string;
}

const Tree: FC<TreeProps> = ({ themeLight, left, climateControl }) => {
  return (
    <TreeWrapper $left={left}>
      <TreeTrunk $climateControl={climateControl}>
        <Leaf1 $climateControl={climateControl} />
        <Leaf2 $climateControl={climateControl} />
        <Leaf3 $climateControl={climateControl} />
      </TreeTrunk>
      <TreeBase />
    </TreeWrapper>
  );
};

export default Tree;
