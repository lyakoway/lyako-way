import { GetServerSideProps } from "next";

import { SITE_URL } from "src/common/constants/site";
import { propsPortfolioListBlog } from "src/common/lang/russia/blog";
import { propsPortfolioList } from "src/common/lang/russia/portfolio";

// Карта сайта отдаётся страницей, а не статическим файлом: адреса статей и
// проектов лежат в языковых константах, поэтому новый пост попадает в карту
// сам, без ручного редактирования xml.
const STATIC_PATHS = [
  "/",
  "/profile",
  "/cv",
  "/services",
  "/portfolio",
  "/blog",
  "/contacts",
];

const buildSitemap = () => {
  const paths = [
    ...STATIC_PATHS,
    ...propsPortfolioListBlog.map((item) => `/blog/${item.hrefNameList}`),
    ...propsPortfolioList.map((item) => `/portfolio/${item.hrefNameList}`),
  ];

  const urls = paths
    .map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  // Отдаётся из кэша Vercel час, дальше пересобирается в фоне.
  res.setHeader(
    "Cache-Control",
    "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
  );
  res.write(buildSitemap());
  res.end();

  return { props: {} };
};

const SitemapPage = () => null;

export default SitemapPage;
