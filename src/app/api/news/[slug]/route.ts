import { NextRequest, NextResponse } from "next/server";
import { getNewsBySlug, updateNews, deleteNews, News } from "@/utils/newsUtils";

// 特定のニュースを取得するAPI
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const news = getNewsBySlug(params.slug);

    if (!news) {
      return NextResponse.json(
        { error: "ニュースが見つかりません" },
        { status: 404 }
      );
    }

    return NextResponse.json(news);
  } catch (error) {
    console.error(`Error fetching news ${params.slug}:`, error);
    return NextResponse.json(
      { error: "ニュースの取得に失敗しました" },
      { status: 500 }
    );
  }
}

// ニュースを更新するAPI
export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const news = (await request.json()) as News;
    console.log("PUT /api/news/" + params.slug, "body:", news);

    // スラッグの整合性チェック
    if (params.slug !== news.slug) {
      return NextResponse.json(
        { error: "URLのスラッグとニュースのスラッグが一致しません" },
        { status: 400 }
      );
    }

    const existingNews = getNewsBySlug(params.slug);
    if (!existingNews) {
      return NextResponse.json(
        { error: "ニュースが見つかりません" },
        { status: 404 }
      );
    }

    updateNews(news);

    return NextResponse.json({ success: true, news });
  } catch (error) {
    console.error(`Error updating news ${params.slug}:`, error);
    return NextResponse.json(
      { error: "ニュースの更新に失敗しました" },
      { status: 500 }
    );
  }
}

// ニュースを削除するAPI
export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const news = getNewsBySlug(params.slug);

    if (!news) {
      return NextResponse.json(
        { error: "ニュースが見つかりません" },
        { status: 404 }
      );
    }

    deleteNews(params.slug);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Error deleting news ${params.slug}:`, error);
    return NextResponse.json(
      { error: "ニュースの削除に失敗しました" },
      { status: 500 }
    );
  }
}
