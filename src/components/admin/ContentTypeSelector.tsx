"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface ContentTypeSelectorProps {
  contentType: "articles" | "news";
  setContentType: (type: "articles" | "news") => void;
}

const ContentTypeSelector: React.FC<ContentTypeSelectorProps> = ({
  contentType,
  setContentType,
}) => {
  return (
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
        onChange={(e) => setContentType(e.target.value as "articles" | "news")}
      >
        <option value="articles">記事</option>
        <option value="news">ニュース</option>
      </select>
    </div>
  );
};

export default ContentTypeSelector;
