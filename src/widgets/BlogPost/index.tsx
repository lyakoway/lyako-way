import React, { useEffect, useMemo, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { useSelectorTyped } from "src/store";
import { Article, ArticleTitle } from "src/ui/Card";
import { Reveal } from "src/ui/Reveal";
import { Pagination } from "src/ui/Pagination";
import { getReadMinutes } from "src/common/utils/getReadMinutes";

import {
  Breadcrumb,
  Crumb,
  Sep,
  Lead,
  Meta,
  MetaDate,
  TagList,
  Tag,
  Body,
  NotFound,
} from "./style";
// WIP-плашка — тот же вид, что на странице проекта в Портфолио.
import { WipTag } from "src/widgets/PortfolioProject/style";

const BlogPost = ({ slug }: { slug: string }) => {
  const {
    lang: { propsPortfolioListBlog, blog, portfolio },
  } = useSelectorTyped(({ lang }) => lang);

  const post = propsPortfolioListBlog.find(
    (item) => item.hrefNameList === slug,
  );

  const title = post?.portfolioNameList ?? blog.title;

  const paragraphs = useMemo(
    () =>
      post?.body?.length
        ? post.body
        : post
          ? post.portfolioText.split("\n").filter(Boolean)
          : [],
    [post],
  );

  // Пагинация тела поста. Делим не по числу абзацев (высота скачет), а по
  // бюджету символов на страницу — так страницы примерно одинаковой высоты
  // (~1.5–2 экрана), а короткие посты остаются одностраничными.
  const CHARS_PER_PAGE = 2800;
  const SINGLE_MAX = 3600; // до этого объёма — одна страница, не дробим

  const pages = useMemo<string[][]>(() => {
    const total = paragraphs.reduce((n, p) => n + p.length, 0);
    if (total <= SINGLE_MAX) return [paragraphs];

    const result: string[][] = [];
    let current: string[] = [];
    let len = 0;
    for (const p of paragraphs) {
      if (current.length && len + p.length > CHARS_PER_PAGE) {
        result.push(current);
        current = [];
        len = 0;
      }
      current.push(p);
      len += p.length;
    }
    if (current.length) result.push(current);
    return result;
  }, [paragraphs]);

  const totalPages = pages.length;
  const [page, setPage] = useState(1);

  // Сброс на первую страницу при переходе к другому посту.
  useEffect(() => setPage(1), [slug]);

  const bodyRef = useRef<HTMLDivElement>(null);

  const pageParagraphs = pages[Math.min(page, totalPages) - 1] ?? [];

  // Смена страницы: прокручиваем к началу текста (с учётом фиксированного
  // навбара), чтобы новая страница читалась сразу сверху.
  const handlePageChange = (next: number) => {
    setPage(next);
    requestAnimationFrame(() => {
      const el = bodyRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    });
  };

  return (
    <Article>
      <Head>
        <title>{`${title} · ${blog.title} — LYAKOWAY`}</title>
      </Head>

      <Breadcrumb>
        <Link href="/blog">{blog.title}</Link>
        <Sep>/</Sep>
        <Crumb>{title}</Crumb>
      </Breadcrumb>

      <Reveal as="header">
        <ArticleTitle>{title}</ArticleTitle>
      </Reveal>

      {!post ? (
        <NotFound>
          <Link href="/blog">{blog.title}</Link>
        </NotFound>
      ) : (
        <>
          <WipTag>{portfolio.wip}</WipTag>

          {post.textBlogHeader && (
            <Reveal as={Lead}>{post.textBlogHeader}</Reveal>
          )}

          <Reveal as={Meta} delay={80}>
            {post.portfolioDataTime && (
              <MetaDate>{post.portfolioDataTime}</MetaDate>
            )}
            <MetaDate>
              {getReadMinutes(post)} {blog.readTimeUnit}
            </MetaDate>
            <TagList>
              {post.technologies.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </Reveal>

          <Body ref={bodyRef}>
            {pageParagraphs.map((p, i) => (
              <Reveal as="p" key={`${page}-${i}`} delay={i * 80}>
                {p}
              </Reveal>
            ))}
          </Body>

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onChange={handlePageChange}
          />
        </>
      )}
    </Article>
  );
};

export default BlogPost;
