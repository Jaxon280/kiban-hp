import { NextRequest, NextResponse } from "next/server";
import {
  createNews,
  News,
  generateNewNewsId,
  generateSlug,
} from "@/utils/newsUtils";

// ニュースを新規作成するAPI
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, category, excerpt, content } = body;

    if (!title || !category || !excerpt || !content) {
      return NextResponse.json(
        { error: "必須項目が不足しています" },
        { status: 400 }
      );
    }

    const newId = generateNewNewsId();
    const slug = generateSlug(title);
    const date = new Date().toISOString();

    const newNews: News = {
      id: newId,
      title,
      slug,
      date,
      category,
      excerpt,
      content,
    };

    createNews(newNews);

    return NextResponse.json({ success: true, news: newNews }, { status: 201 });
  } catch (error) {
    console.error("Error creating news:", error);
    return NextResponse.json(
      { error: "ニュースの作成に失敗しました" },
      { status: 500 }
    );
  }
}
