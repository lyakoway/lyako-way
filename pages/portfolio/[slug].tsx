import { useRouter } from "next/router";

import PortfolioProject from "src/widgets/PortfolioProject";

export default function PortfolioProjectPage() {
  const { query } = useRouter();
  const slug = typeof query.slug === "string" ? query.slug : "";

  return <PortfolioProject slug={slug} />;
}
