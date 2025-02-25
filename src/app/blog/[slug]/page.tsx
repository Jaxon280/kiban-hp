import {
  getArticleBySlug,
  getAllArticleSlugs,
  convertMarkdownToHtml,
} from "@/utils/articleUtils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPost from "./BlogPost";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const article = getArticleBySlug((await params).slug);

  if (!article) {
    return {
      title: "記事が見つかりません",
      description: "お探しの記事は見つかりませんでした。",
    };
  }

  return {
    title: `${article.title} | 企業名`,
    description: article.excerpt,
  };
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const article = getArticleBySlug((await params).slug);

  if (!article) {
    notFound();
  }

  const contentHtml = await convertMarkdownToHtml(article.content);

  return <BlogPost article={article} contentHtml={contentHtml} />;
}
