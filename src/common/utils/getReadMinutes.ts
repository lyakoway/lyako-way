import { PortfolioListBlogProps } from "src/common/types/lang";

// Оценка времени чтения заметки: ~180 слов/мин, минимум 1 минута.
export const getReadMinutes = (post: PortfolioListBlogProps): number => {
  const text = [post.textBlogHeader, ...(post.body ?? [post.portfolioText])]
    .filter(Boolean)
    .join(" ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 180));
};
