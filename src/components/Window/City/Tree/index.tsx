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
}

const Tree: FC<TreeProps> = ({ themeLight, left }) => {
  return (
    <TreeWrapper left={left}>
      <TreeTrunk>
        <Leaf1 />
        <Leaf2 />
        <Leaf3 />
      </TreeTrunk>
      <TreeBase />
    </TreeWrapper>
  );
};

export default Tree;
