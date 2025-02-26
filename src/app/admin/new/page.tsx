"use client";

// import { useSearchParams } from "next/navigation";
import Link from "next/link";
import NewArticleForm from "./NewArticleForm";
import NewNewsForm from "./NewNewsForm";

export default function AdminNewPage() {
  // const searchParams = useSearchParams();
  // const contentType =
  //   searchParams?.get("type") === "news" ? "news" : "articles";
  const contentType = "articles";

  const renderForm = () => {
    if (contentType === "articles") {
      return <NewArticleForm />;
    } else if (contentType === "news") {
      return <NewNewsForm />;
    } else {
      return <p>コンテンツタイプを選択してください</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">
              {contentType === "articles" ? "記事" : "ニュース"}新規作成
            </h1>
            <Link
              href="/admin"
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              管理画面に戻る
            </Link>
          </div>

          {/* Conditionally render error message based on searchParams */}
          {/* {!searchParams?.get("type") && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              <p>コンテンツタイプを選択してください</p>
            </div>
          )} */}

          {renderForm()}
        </div>
      </div>
    </div>
  );
}
