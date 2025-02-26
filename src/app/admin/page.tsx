"use client";

import { useState, useEffect } from "react";
import { Article } from "@/utils/articleUtils";
import { News } from "@/utils/newsUtils"; // Import News type
import Link from "next/link";

export default function AdminPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [newsItems, setNewsItems] = useState<News[]>([]); // News items state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [contentType, setContentType] = useState<"articles" | "news">(
    "articles"
  ); // Content type selector state

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      setError(null);
      try {
        let data;
        if (contentType === "articles") {
          const response = await fetch("/api/articles");
          if (!response.ok) throw new Error("記事の取得に失敗しました");
          data = await response.json();
          setArticles(data);
          setNewsItems([]); // Clear news items when articles are fetched
        } else {
          const response = await fetch("/api/news");
          if (!response.ok) throw new Error("ニュースの取得に失敗しました");
          data = await response.json();
          setNewsItems(data);
          setArticles([]); // Clear articles when news items are fetched
        }
      } catch (err: any) {
        setError(err.message || "データ読み込み中にエラーが発生しました。");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [contentType]);

  const handleDelete = async (slug: string) => {
    if (!confirm("このコンテンツを削除してもよろしいですか？")) {
      return;
    }

    try {
      let response;
      if (contentType === "articles") {
        response = await fetch(`/api/articles/${slug}`, {
          method: "DELETE",
        });
        if (!response.ok) throw new Error("記事の削除に失敗しました");
        setArticles(articles.filter((article) => article.slug !== slug)); // Update articles state
      } else {
        response = await fetch(`/api/news/${slug}`, {
          method: "DELETE",
        });
        if (!response.ok) throw new Error("ニュースの削除に失敗しました");
        setNewsItems(newsItems.filter((news) => news.slug !== slug)); // Update news items state
      }
    } catch (err: any) {
      setError(err.message || "コンテンツの削除中にエラーが発生しました。");
      console.error(err);
    }
  };

  const contentList = contentType === "articles" ? articles : newsItems; // Determine which list to use based on contentType
  const itemTypeLabel = contentType === "articles" ? "記事" : "ニュース"; // Label for content type

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
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">{itemTypeLabel}管理</h1>{" "}
            {/* Dynamic heading */}
            <div className="flex space-x-4">
              <Link
                href="/"
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
              >
                サイトに戻る
              </Link>
              <Link
                href={`/admin/new?type=${contentType}`}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                新規{itemTypeLabel}作成 {/* Dynamic new content link text */}
              </Link>
            </div>
          </div>

          {/* コンテンツタイプ選択 */}
          <div className="mb-4">
            <label
              htmlFor="contentType"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              コンテンツタイプを選択:
            </label>
            <select
              id="contentType"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-700 dark:text-white"
              value={contentType}
              onChange={(e) =>
                setContentType(e.target.value as "articles" | "news")
              }
            >
              <option value="articles">記事</option>
              <option value="news">ニュース</option>
            </select>
          </div>

          {contentList.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                {itemTypeLabel}がありません。新しい{itemTypeLabel}
                を作成してください。 {/* Dynamic no content message */}
              </p>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                    >
                      タイトル
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                    >
                      日付
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                    >
                      カテゴリ
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                    >
                      アクション
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {contentList.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {item.slug}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(item.date).toLocaleDateString("ja-JP")}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          {item.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <Link
                            href={`/${contentType}/${item.slug}`}
                            className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                            target="_blank"
                          >
                            表示
                          </Link>
                          <Link
                            href={`/admin/edit/${item.slug}?type=${contentType}`}
                            className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            編集
                          </Link>
                          <button
                            onClick={() => handleDelete(item.slug)}
                            className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                          >
                            削除
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
