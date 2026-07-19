import { useRouter } from "next/router";

import BlogPost from "src/widgets/BlogPost";

export default function BlogPostPage() {
  const { query } = useRouter();
  const slug = typeof query.slug === "string" ? query.slug : "";

  return <BlogPost slug={slug} />;
}
