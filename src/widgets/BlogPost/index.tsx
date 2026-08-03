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
  SearchRow,
  SearchField,
  Placeholder,
  ClearBtn,
  MatchCount,
  NavBtn,
  Mark,
} from "./style";

// Экранируем спецсимволы для RegExp (поисковый запрос — произвольный текст).
const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Подсветка совпадений в абзаце. Ключ каждого совпадения — page-para-occ,
// чтобы отметить активное (текущее) и проскроллить к нему.
const Highlighted: React.FC<{
  text: string;
  pageIdx: number;
  paraIdx: number;
  query: string;
  activeKey?: string;
}> = ({ text, pageIdx, paraIdx, query, activeKey }) => {
  const q = query.trim();
  if (!q) return <>{text}</>;

  const parts = text.split(new RegExp(`(${escapeRe(q)})`, "gi"));
  let occ = -1;

  return (
    <>
      {parts.map((part, i) => {
        // Нечётные индексы — совпадения (захваченная группа в split).
        if (i % 2 === 1) {
          occ += 1;
          const key = `${pageIdx}-${paraIdx}-${occ}`;
          return (
            <Mark key={i} data-match-key={key} data-active={key === activeKey}>
              {part}
            </Mark>
          );
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
};
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

  // Запоминаем открытую страницу поста в localStorage (по slug), чтобы при
  // повторном открытии этой заметки вернуться на неё же.
  const storageKey = `blogPage:${slug}`;
  const persistPage = (p: number) => {
    if (typeof window !== "undefined" && slug) {
      window.localStorage.setItem(storageKey, String(p));
    }
  };

  // Восстанавливаем сохранённую страницу (клэмпим к числу страниц), иначе — 1.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = parseInt(window.localStorage.getItem(storageKey) || "", 10);
    setPage(saved >= 1 && saved <= totalPages ? saved : 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, totalPages]);

  const bodyRef = useRef<HTMLDivElement>(null);

  const pageParagraphs = pages[Math.min(page, totalPages) - 1] ?? [];

  // Смена страницы: запоминаем и прокручиваем к началу текста (с учётом
  // фиксированного навбара), чтобы новая страница читалась сразу сверху.
  const handlePageChange = (next: number) => {
    setPage(next);
    persistPage(next);
    requestAnimationFrame(() => {
      const el = bodyRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    });
  };

  /* ——— Поиск по всем страницам поста ——— */
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [activeMatch, setActiveMatch] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const clearSearch = () => {
    setQuery("");
    searchInputRef.current?.focus();
  };

  // Плоский список совпадений по всем страницам: page (1-based) + ключ.
  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [] as { page: number; key: string }[];
    const list: { page: number; key: string }[] = [];
    pages.forEach((paras, pageIdx) => {
      paras.forEach((para, paraIdx) => {
        const lower = para.toLowerCase();
        let from = 0;
        let occ = 0;
        let idx = lower.indexOf(q, from);
        while (idx !== -1) {
          list.push({ page: pageIdx + 1, key: `${pageIdx}-${paraIdx}-${occ}` });
          occ += 1;
          from = idx + q.length;
          idx = lower.indexOf(q, from);
        }
      });
    });
    return list;
  }, [query, pages]);

  const activeKey = matches[activeMatch]?.key;

  // Новый запрос — на первое совпадение и его страницу. Сброс поиска при смене
  // поста (slug).
  useEffect(() => setQuery(""), [slug]);
  useEffect(() => {
    setActiveMatch(0);
    if (matches.length) {
      setPage(matches[0].page);
      persistPage(matches[0].page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  // Прокрутка к активному совпадению после отрисовки страницы.
  useEffect(() => {
    if (!matches.length) return;
    requestAnimationFrame(() => {
      bodyRef.current
        ?.querySelector('[data-active="true"]')
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeMatch, page, matches.length]);

  const gotoMatch = (next: number) => {
    if (!matches.length) return;
    const idx = (next + matches.length) % matches.length;
    setActiveMatch(idx);
    setPage(matches[idx].page);
    persistPage(matches[idx].page);
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

          <SearchRow>
            <SearchField $focused={focused} $filled={Boolean(query)}>
              <svg viewBox="0 0 24 24" aria-hidden focusable="false">
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="m20 20-3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    gotoMatch(activeMatch + (e.shiftKey ? -1 : 1));
                  }
                  if (e.key === "Escape") clearSearch();
                }}
                aria-label={blog.searchPlaceholder}
              />
              {/* Плейсхолдер отдельным текстом — попадает в эффект распыления
                  при смене языка (см. Placeholder / disperseTextSwap). */}
              {!query && <Placeholder>{blog.searchPlaceholder}</Placeholder>}

              {query && (
                <ClearBtn
                  type="button"
                  onClick={clearSearch}
                  aria-label="Очистить"
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M6 6l12 12M18 6 6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </ClearBtn>
              )}
            </SearchField>

            {query.trim() && (
              <>
                <MatchCount>
                  {matches.length ? `${activeMatch + 1} / ${matches.length}` : "0"}
                </MatchCount>
                <NavBtn
                  type="button"
                  onClick={() => gotoMatch(activeMatch - 1)}
                  disabled={!matches.length}
                  aria-label="Предыдущее совпадение"
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M15 6l-6 6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </NavBtn>
                <NavBtn
                  type="button"
                  onClick={() => gotoMatch(activeMatch + 1)}
                  disabled={!matches.length}
                  aria-label="Следующее совпадение"
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </NavBtn>
              </>
            )}
          </SearchRow>

          <Body ref={bodyRef}>
            {pageParagraphs.map((p, i) => (
              <Reveal as="p" key={`${page}-${i}`} delay={i * 80}>
                <Highlighted
                  text={p}
                  pageIdx={page - 1}
                  paraIdx={i}
                  query={query}
                  activeKey={activeKey}
                />
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
