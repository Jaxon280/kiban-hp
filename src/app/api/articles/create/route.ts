import { NextRequest, NextResponse } from "next/server";
import {
  createArticle,
  generateNewArticleId,
  generateSlug,
  Article,
} from "@/utils/articleUtils";

// 新しい記事を作成するAPI
export async function POST(request: NextRequest) {
  try {
    const articleData = await request.json();

    // 必須フィールドの検証
    const requiredFields = ["title", "content", "author", "category"];
    for (const field of requiredFields) {
      if (!articleData[field]) {
        return NextResponse.json(
          { error: `${field}は必須です` },
          { status: 400 }
        );
      }
    }

    // 新しい記事オブジェクトの作成
    const newArticle: Article = {
      id: generateNewArticleId(),
      title: articleData.title,
      slug: articleData.slug || generateSlug(articleData.title),
      date: articleData.date || new Date().toISOString().split("T")[0],
      author: articleData.author,
      category: articleData.category,
      tags: articleData.tags || [],
      excerpt:
        articleData.excerpt || articleData.content.substring(0, 150) + "...",
      content: articleData.content,
    };

    // 記事の保存
    createArticle(newArticle);

    return NextResponse.json(
      {
        success: true,
        article: newArticle,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating article:", error);
    return NextResponse.json(
      { error: "記事の作成に失敗しました" },
      { status: 500 }
    );
  }
}
