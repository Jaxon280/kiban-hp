import { NextRequest, NextResponse } from "next/server";
import { getNewsBySlug, updateNews, deleteNews, News } from "@/utils/newsUtils";

// 特定のニュースを取得するAPI
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const news = getNewsBySlug((await params).slug);

    if (!news) {
      return NextResponse.json(
        { error: "ニュースが見つかりません" },
        { status: 404 }
      );
    }

    return NextResponse.json(news);
  } catch (error) {
    console.error(`Error fetching news ${(await params).slug}:`, error);
    return NextResponse.json(
      { error: "ニュースの取得に失敗しました" },
      { status: 500 }
    );
  }
}

// ニュースを更新するAPI
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug;
  try {
    const news = (await request.json()) as News;
    console.log("PUT /api/news/" + slug, "body:", news);

    // スラッグの整合性チェック
    if (slug !== news.slug) {
      return NextResponse.json(
        { error: "URLのスラッグとニュースのスラッグが一致しません" },
        { status: 400 }
      );
    }

    const existingNews = getNewsBySlug(slug);
    if (!existingNews) {
      return NextResponse.json(
        { error: "ニュースが見つかりません" },
        { status: 404 }
      );
    }

    updateNews(news);

    return NextResponse.json({ success: true, news });
  } catch (error) {
    console.error(`Error updating news ${slug}:`, error);
    return NextResponse.json(
      { error: "ニュースの更新に失敗しました" },
      { status: 500 }
    );
  }
}

// ニュースを削除するAPI
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug;
  try {
    const news = getNewsBySlug(slug);

    if (!news) {
      return NextResponse.json(
        { error: "ニュースが見つかりません" },
        { status: 404 }
      );
    }

    deleteNews(slug);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Error deleting news ${slug}:`, error);
    return NextResponse.json(
      { error: "ニュースの削除に失敗しました" },
      { status: 500 }
    );
  }
}
