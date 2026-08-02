import React, { FC } from "react";

import { Container, PageBtn, ArrowBtn, Dots } from "./style";

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

const Arrow = ({ dir }: { dir: "left" | "right" }) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
    <path
      d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Номера страниц с сокращением «…» при большом количестве (первая, последняя,
// текущая ± 1). Пока страниц ≤ 7 — показываем все.
const pageItems = (current: number, total: number): (number | "dots")[] => {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const items: (number | "dots")[] = [1];
  const left = Math.max(2, current - 1);
  const right = Math.min(total - 1, current + 1);

  if (left > 2) items.push("dots");
  for (let i = left; i <= right; i++) items.push(i);
  if (right < total - 1) items.push("dots");
  items.push(total);

  return items;
};

export const Pagination: FC<IPaginationProps> = ({
  currentPage,
  totalPages,
  onChange,
}) => {
  if (totalPages <= 1) return null;

  const go = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onChange(page);
  };

  return (
    <Container aria-label="Пагинация">
      <ArrowBtn
        type="button"
        onClick={() => go(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Назад"
      >
        <Arrow dir="left" />
      </ArrowBtn>

      {pageItems(currentPage, totalPages).map((item, i) =>
        item === "dots" ? (
          <Dots key={`dots-${i}`}>…</Dots>
        ) : (
          <PageBtn
            key={item}
            type="button"
            $active={item === currentPage}
            aria-current={item === currentPage ? "page" : undefined}
            onClick={() => go(item)}
          >
            {item}
          </PageBtn>
        )
      )}

      <ArrowBtn
        type="button"
        onClick={() => go(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Вперёд"
      >
        <Arrow dir="right" />
      </ArrowBtn>
    </Container>
  );
};

export default Pagination;
