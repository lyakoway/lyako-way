import React from "react";
import Head from "next/head";
import Link from "next/link";

import { useSelectorTyped } from "src/store";
import { Article, ArticleTitle } from "src/ui/Card";

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

const BlogPost = ({ slug }: { slug: string }) => {
  const {
    lang: { propsPortfolioListBlog, blog },
  } = useSelectorTyped(({ lang }) => lang);

  const post = propsPortfolioListBlog.find(
    (item) => item.hrefNameList === slug
  );

  const title = post?.portfolioNameList ?? blog.title;

  const paragraphs = post?.body?.length
    ? post.body
    : post
    ? post.portfolioText.split("\n").filter(Boolean)
    : [];

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

      <header>
        <ArticleTitle>{title}</ArticleTitle>
      </header>

      {!post ? (
        <NotFound>
          <Link href="/blog">{blog.title}</Link>
        </NotFound>
      ) : (
        <>
          {post.textBlogHeader && <Lead>{post.textBlogHeader}</Lead>}

          <Meta>
            {post.portfolioDataTime && (
              <MetaDate>{post.portfolioDataTime}</MetaDate>
            )}
            <TagList>
              {post.technologies.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </Meta>

          <Body>
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Body>
        </>
      )}
    </Article>
  );
};

export default BlogPost;
