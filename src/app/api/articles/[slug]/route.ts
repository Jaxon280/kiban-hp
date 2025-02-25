import { NextRequest, NextResponse } from "next/server";
import {
  getArticleBySlug,
  updateArticle,
  deleteArticle,
  Article,
} from "@/utils/articleUtils";

// 特定の記事を取得するAPI
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const article = getArticleBySlug((await params).slug);

    if (!article) {
      return NextResponse.json(
        { error: "記事が見つかりません" },
        { status: 404 }
      );
    }

    return NextResponse.json(article);
  } catch (error) {
    console.error(`Error fetching article ${(await params).slug}:`, error);
    return NextResponse.json(
      { error: "記事の取得に失敗しました" },
      { status: 500 }
    );
  }
}

// 記事を更新するAPI
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const article = (await request.json()) as Article;
    console.log("PUT /api/articles/" + (await params).slug, "body:", article);

    // スラッグの整合性チェック
    if ((await params).slug !== article.slug) {
      return NextResponse.json(
        { error: "URLのスラッグと記事のスラッグが一致しません" },
        { status: 400 }
      );
    }

    const existingArticle = getArticleBySlug((await params).slug);
    if (!existingArticle) {
      return NextResponse.json(
        { error: "記事が見つかりません" },
        { status: 404 }
      );
    }

    updateArticle(article);

    return NextResponse.json({ success: true, article });
  } catch (error) {
    console.error(`Error updating article ${(await params).slug}:`, error);
    return NextResponse.json(
      { error: "記事の更新に失敗しました" },
      { status: 500 }
    );
  }
}

// 記事を削除するAPI
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const article = getArticleBySlug((await params).slug);

    if (!article) {
      return NextResponse.json(
        { error: "記事が見つかりません" },
        { status: 404 }
      );
    }

    deleteArticle((await params).slug);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Error deleting article ${(await params).slug}:`, error);
    return NextResponse.json(
      { error: "記事の削除に失敗しました" },
      { status: 500 }
    );
  }
}
