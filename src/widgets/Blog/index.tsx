import React, { useMemo, useState } from "react";
import Link from "next/link";

import { useSelectorTyped } from "src/store";
import { Article, ArticleTitle } from "src/ui/Card";

import {
  FilterBar,
  FilterChip,
  List,
  Card,
  TagList,
  Tag,
  CardTitle,
  CardExcerpt,
  CardFoot,
  CardDate,
  ReadMore,
} from "./style";

const ALL = "__all__";

const ArrowGlyph = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Blog = () => {
  const {
    lang: { propsHeaderTopMenu, propsPortfolioListBlog, blog },
  } = useSelectorTyped(({ lang }) => lang);

  const title =
    propsHeaderTopMenu.find((item) => item.value === "blog")?.label ?? "";

  // Уникальные теги из всех заметок — опции фильтра.
  const tags = useMemo(
    () =>
      Array.from(
        new Set(propsPortfolioListBlog.flatMap((p) => p.technologies))
      ),
    [propsPortfolioListBlog]
  );

  const [active, setActive] = useState<string>(ALL);

  const shown =
    active === ALL
      ? propsPortfolioListBlog
      : propsPortfolioListBlog.filter((p) => p.technologies.includes(active));

  return (
    <Article>
      <header>
        <ArticleTitle>{title}</ArticleTitle>
      </header>

      <FilterBar>
        <FilterChip $active={active === ALL} onClick={() => setActive(ALL)}>
          {blog.all}
        </FilterChip>
        {tags.map((tag) => (
          <FilterChip
            key={tag}
            $active={active === tag}
            onClick={() => setActive(tag)}
          >
            {tag}
          </FilterChip>
        ))}
      </FilterBar>

      <List>
        {shown.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.hrefNameList}`}
            passHref
            legacyBehavior
          >
            <Card>
              <TagList>
                {post.technologies.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>

              <CardTitle>{post.portfolioNameList}</CardTitle>
              <CardExcerpt>{post.portfolioText}</CardExcerpt>

              <CardFoot>
                {post.portfolioDataTime && (
                  <CardDate>{post.portfolioDataTime}</CardDate>
                )}
                <ReadMore>
                  {blog.readMore}
                  <ArrowGlyph />
                </ReadMore>
              </CardFoot>
            </Card>
          </Link>
        ))}
      </List>
    </Article>
  );
};

export default Blog;
