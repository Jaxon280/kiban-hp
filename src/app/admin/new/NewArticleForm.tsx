"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Article } from "@/utils/articleUtils";
import Link from "next/link";

export default function NewArticleForm() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<
    Omit<Article, "id" | "slug" | "date" | "tags" | "author"> & {
      tags: string;
      author: string;
    }
  >({
    title: "",
    category: "",
    excerpt: "",
    content: "",
    tags: "",
    author: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      // タグを配列に変換
      const tagsArray = formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean);

      const articleData = {
        ...formData,
        tags: tagsArray,
        date: new Date().toISOString(),
      };

      const response = await fetch("/api/articles/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "記事の作成に失敗しました");
      }

      // 成功したら管理画面にリダイレクト
      router.push("/admin");
    } catch (err: unknown) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* タイトル */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            タイトル <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {/* 著者 */}
        <div>
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            著者 <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="author"
            name="author"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {/* カテゴリ */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            カテゴリ <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="category"
            name="category"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {/* タグ */}
        <div>
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            タグ（カンマ区切り）
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="例: Next.js, React, TypeScript"
          />
        </div>

        {/* 抜粋 */}
        <div>
          <label
            htmlFor="excerpt"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            抜粋
          </label>
          <textarea
            id="excerpt"
            name="excerpt"
            rows={3}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="(オプション) 記事の要約"
          ></textarea>
        </div>

        {/* 本文 */}
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            本文 <span className="text-red-600">*</span>
          </label>
          <textarea
            id="content"
            name="content"
            rows={15}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent dark:bg-gray-700 dark:text-white font-roboto"
            placeholder="Markdown形式で記事を書いてください"
            required
          ></textarea>
          <p className="text-xs text-gray-500 mt-1">
            Markdown形式で記事を書いてください。
          </p>
        </div>

        <div className="flex justify-end space-x-4">
          <Link
            href="/admin"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
          >
            キャンセル
          </Link>
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-3 bg-primary text-white rounded hover:bg-opacity-90 transition-colors disabled:opacity-50"
          >
            {saving ? "保存中..." : "作成する"}
          </button>
        </div>
      </form>
    </div>
  );
}
