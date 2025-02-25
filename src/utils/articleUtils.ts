import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

// 記事データの型定義
export interface Article {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
}

// 記事ディレクトリのパス
const articlesDirectory = path.join(process.cwd(), "src/data/articles");

// 全ての記事のスラッグを取得
export function getAllArticleSlugs(): string[] {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames.map((fileName) => {
    return fileName.replace(/\.json$/, "");
  });
}

// 全ての記事データを取得
export function getAllArticles(): Article[] {
  const slugs = getAllArticleSlugs();
  const articles = slugs.map((slug) => getArticleBySlug(slug));

  // 日付の新しい順にソート
  return articles
    .sort((a, b) => {
      if (!a || !b) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .filter((article): article is Article => article !== null);
}

// スラッグから特定の記事を取得
export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.json`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    return JSON.parse(fileContents) as Article;
  } catch (error) {
    console.error(`Error reading article with slug ${slug}:`, error);
    return null;
  }
}

// マークダウンをHTMLに変換
export async function convertMarkdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// 新しい記事を作成
export function createArticle(article: Article): void {
  const fullPath = path.join(articlesDirectory, `${article.slug}.json`);
  fs.writeFileSync(fullPath, JSON.stringify(article, null, 2), "utf8");
}

// 記事を更新
export function updateArticle(article: Article): void {
  createArticle(article); // 同じファイルに書き込むので、createと同じ処理
}

// 記事を削除
export function deleteArticle(slug: string): void {
  const fullPath = path.join(articlesDirectory, `${slug}.json`);
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
  }
}

// 新しい記事IDを生成
export function generateNewArticleId(): string {
  const articles = getAllArticles();
  const ids = articles.map((article) => parseInt(article.id));
  const maxId = Math.max(...ids, 0);
  return (maxId + 1).toString();
}

// スラッグを生成（タイトルから）
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-");
}
