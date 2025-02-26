"use client";

import { useState, useEffect } from "react";
import { Article } from "@/utils/articleUtils";
import { News } from "@/utils/newsUtils";
import Link from "next/link";
import EditArticleForm from "./EditArticleForm";
import NewsEditForm from "./NewsEditForm"; // Import NewsEditForm

interface AdminEditPageProps {
  params: { slug: string };
  searchParams: { type: string };
}

export default function AdminEditPage({
  params,
  searchParams,
}: AdminEditPageProps) {
  const contentType = searchParams.type === "news" ? "news" : "articles";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [item, setItem] = useState<Article | News | null>(null);

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true);
      setError(null);
      try {
        let response;
        if (contentType === "articles") {
          response = await fetch(`/api/articles/${params.slug}`);
        } else {
          response = await fetch(`/api/news/${params.slug}`);
        }
        if (!response.ok) {
          throw new Error(
            `${
              contentType === "articles" ? "記事" : "ニュース"
            }が見つかりません`
          );
        }
        const data = await response.json();
        setItem(data);
      } catch (err: any) {
        setError(
          err.message ||
            `${
              contentType === "articles" ? "記事" : "ニュース"
            }の読み込みに失敗しました。`
        );
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [params.slug, contentType]);

  const renderForm = () => {
    if (contentType === "articles" && item) {
      return <EditArticleForm article={item as Article} />;
    } else if (contentType === "news" && item) {
      return <NewsEditForm newsItem={item as News} params={params} />; // Pass params to NewsEditForm
    }
    return null;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4">読み込み中...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">エラー</div>
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            再読み込み
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">
              {contentType === "articles" ? "記事" : "ニュース"}編集
            </h1>
            <Link
              href="/admin"
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              管理画面に戻る
            </Link>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              <p>{error}</p>
            </div>
          )}

          {renderForm()}
        </div>
      </div>
    </div>
  );
}
