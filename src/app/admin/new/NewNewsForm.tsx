"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { News } from "@/utils/newsUtils";
import Link from "next/link";

export default function NewNewsForm() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<News, "id" | "slug" | "date">>({
    title: "",
    category: "",
    excerpt: "",
    content: "",
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
    setError(null);

    try {
      const response = await fetch("/api/news/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "ニュースの作成に失敗しました");
      }

      // 成功したら管理画面にリダイレクト
      router.push("/admin");
    } catch (err: any) {
      setError(err.message || "ニュースの作成中にエラーが発生しました");
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
            placeholder="(オプション) ニュースの要約"
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
            placeholder="Markdown形式でニュース本文を記述してください"
            required
          ></textarea>
          <p className="text-xs text-gray-500 mt-1">
            Markdown形式でニュースを書いてください。
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
