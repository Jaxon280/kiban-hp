import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

// ニュースデータの型定義
export interface News {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
}

// ニュースディレクトリのパス
const newsDirectory = path.join(process.cwd(), "src/data/news");

// 全てのニュースのスラッグを取得
export function getAllNewsSlugs(): string[] {
  const fileNames = fs.readdirSync(newsDirectory);
  return fileNames.map((fileName) => {
    return fileName.replace(/\.json$/, "");
  });
}

// 全てのニュースデータを取得
export function getAllNews(): News[] {
  const slugs = getAllNewsSlugs();
  const news = slugs.map((slug) => getNewsBySlug(slug));

  // 日付の新しい順にソート
  return news
    .sort((a, b) => {
      if (!a || !b) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .filter((newsItem): newsItem is News => newsItem !== null);
}

// スラッグから特定のニュースを取得
export function getNewsBySlug(slug: string): News | null {
  try {
    const fullPath = path.join(newsDirectory, `${slug}.json`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    return JSON.parse(fileContents) as News;
  } catch (error) {
    console.error(`Error reading news with slug ${slug}:`, error);
    return null;
  }
}

// マークダウンをHTMLに変換
export async function convertMarkdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// 新しいニュースを作成
export function createNews(news: News): void {
  const fullPath = path.join(newsDirectory, `${news.slug}.json`);
  fs.writeFileSync(fullPath, JSON.stringify(news, null, 2), "utf8");
}

// ニュースを更新
export function updateNews(news: News): void {
  createNews(news); // 同じファイルに書き込むので、createと同じ処理
}

// ニュースを削除
export function deleteNews(slug: string): void {
  const fullPath = path.join(newsDirectory, `${slug}.json`);
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
  }
}

// 新しいニュースIDを生成
export function generateNewNewsId(): string {
  const news = getAllNews();
  const ids = news.map((newsItem) => parseInt(newsItem.id));
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
