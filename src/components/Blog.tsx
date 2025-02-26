import { Article } from "@/utils/articleUtils";
import Link from "next/link";

interface BlogProps {
  articles: Article[];
}

export default function Blog({ articles }: BlogProps) {
  return (
    <section id="blog" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal font-montserrat-semiBold tracking-wide">
            Latest Articles
          </h2>
          <h3 className="text-2xl md:text-3xl font-normal mt-2 mb-8">
            最新の記事
          </h3>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => {
            return (
              <div
                key={article.slug}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Link href={`/blog/${article.slug}`}>
                  <img
                    src="/placeholder-image.jpg" // プレースホルダー画像
                    alt={article.title}
                    className="w-full h-56 object-cover"
                  />
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="hover:text-primary transition-colors duration-200"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {article.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      {new Date(article.date).toLocaleDateString("ja-JP")}
                    </span>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="text-primary hover:text-secondary text-sm font-medium transition-colors duration-200"
                    >
                      続きを読む
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
