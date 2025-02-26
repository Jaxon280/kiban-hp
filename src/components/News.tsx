"use client";

import Link from "next/link";
import { News as NewsType } from "@/utils/newsUtils";
import Image from "next/image"; // Import Image component

interface NewsProps {
  newsItems: NewsType[];
}

export default function News({ newsItems }: NewsProps) {
  return (
    <section id="news" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal font-montserrat-semiBold tracking-wide">
            Latest News
          </h2>
          <h3 className="text-2xl md:text-3xl font-normal mt-2 mb-8">
            最新ニュース
          </h3>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((newsItem) => (
            <div
              key={newsItem.slug}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/news/${newsItem.slug}`}>
                <div className="aspect-video relative">
                  <Image // Use Image component
                    src="/placeholder-image.jpg"
                    alt={newsItem.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-lg"
                  />
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link
                    href={`/news/${newsItem.slug}`}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {newsItem.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {newsItem.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 dark:text-gray-400 text-xs">
                    {new Date(newsItem.date).toLocaleDateString("ja-JP")}
                  </span>
                  <Link
                    href={`/news/${newsItem.slug}`}
                    className="text-primary hover:text-secondary text-sm font-medium transition-colors duration-200"
                  >
                    続きを読む
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
