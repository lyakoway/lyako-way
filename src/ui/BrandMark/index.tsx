import React from "react";

import { ReactComponent as LyakoMark } from "src/common/icon/logo/LyakoMark.svg";

import { Brand } from "./style";

type Props = {
  // Расшифровка названия: подсказка при наведении и подпись для скринридера.
  tagline?: string;
  className?: string;
};

// Название сайта строкой: LYAK⊙WAY. Текст помечен aria-hidden, а весь знак
// озвучивается одной подписью — иначе скринридер прочитает «lyak way».
const BrandMark = ({ tagline, className }: Props) => (
  <Brand
    className={className}
    role="img"
    aria-label={tagline ?? "lyakoway"}
    title={tagline}
  >
    <span aria-hidden="true">lyak</span>
    <LyakoMark aria-hidden="true" focusable="false" />
    <span aria-hidden="true">way</span>
  </Brand>
);

export default BrandMark;
