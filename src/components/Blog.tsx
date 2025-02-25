import Link from "next/link";
import { Article } from "@/utils/articleUtils";

interface BlogProps {
  articles: Article[];
}

export default function Blog({ articles }: BlogProps) {
  return (
    <section id="blog" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ブログ</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              最新の技術トレンドや当社の取り組みについての情報を発信しています。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(article.date).toLocaleDateString("ja-JP", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {article.author}
                    </div>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      続きを読む →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg inline-block"
            >
              全ての記事を見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
