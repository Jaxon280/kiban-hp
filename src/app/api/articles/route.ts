import { NextResponse } from "next/server";
import { getAllArticles } from "@/utils/articleUtils";

// 全ての記事を取得するAPI
export async function GET() {
  try {
    const articles = getAllArticles();
    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json(
      { error: "記事の取得に失敗しました" },
      { status: 500 }
    );
  }
}
