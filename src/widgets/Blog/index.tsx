import React, { useMemo, useState } from "react";

import { useSelectorTyped } from "src/store";
import { Article, ArticleTitle } from "src/ui/Card";
import { Reveal } from "src/ui/Reveal";
import RunBorder from "src/ui/RunBorder";
import { getReadMinutes } from "src/common/utils/getReadMinutes";
import { trackEvent } from "src/common/utils/trackAnalytics";
import { usePressAnimation } from "src/common/lib/usePressAnimation";
import { AnalyticsEvent } from "src/common/constants/analytics";

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

// Фильтр с анимацией закраски «до конца» при тапе (как кнопки проекта)
const PressableFilterChip: React.FC<{
  $active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ $active, onClick, children }) => {
  const press = usePressAnimation();
  return (
    <FilterChip
      $active={$active}
      $pressed={press.pressed}
      onClick={onClick}
      {...press.pressHandlers}
    >
      {children}
      <RunBorder radius={12} />
    </FilterChip>
  );
};

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

  const handleFilter = (value: string) => {
    setActive(value);
    trackEvent(AnalyticsEvent.BLOG_FILTER_CLICK, {
      filter: value === ALL ? "all" : value,
    });
  };

  return (
    <Article>
      <Reveal as="header">
        <ArticleTitle>{title}</ArticleTitle>
      </Reveal>

      <Reveal as={FilterBar} delay={90}>
        <PressableFilterChip $active={active === ALL} onClick={() => handleFilter(ALL)}>
          {blog.all}
        </PressableFilterChip>
        {tags.map((tag) => (
          <PressableFilterChip
            key={tag}
            $active={active === tag}
            onClick={() => handleFilter(tag)}
          >
            {tag}
          </PressableFilterChip>
        ))}
      </Reveal>

      <List>
        {shown.map((post, idx) => (
          <Reveal key={post.id} delay={idx * 90}>
            <Card
              href={`/blog/${post.hrefNameList}`}
              onClick={() =>
                trackEvent(AnalyticsEvent.BLOG_POST_OPEN, {
                  slug: post.hrefNameList,
                  name: post.portfolioNameList,
                  tags: post.technologies.join(", "),
                })
              }
            >
              <TagList>
                {post.technologies.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>

              <CardTitle>{post.portfolioNameList}</CardTitle>
              <CardExcerpt>{post.portfolioText}</CardExcerpt>

              <CardFoot>
                <CardDate>
                  {post.portfolioDataTime && (
                    <span>{post.portfolioDataTime}</span>
                  )}
                  <span>
                    {getReadMinutes(post)} {blog.readTimeUnit}
                  </span>
                </CardDate>
                <ReadMore>
                  {blog.readMore}
                  <ArrowGlyph />
                </ReadMore>
              </CardFoot>
            </Card>
          </Reveal>
        ))}
      </List>
    </Article>
  );
};

export default Blog;
