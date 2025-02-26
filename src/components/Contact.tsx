"use client";

import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal font-montserrat-semiBold tracking-wide">
            Contact Us
          </h2>
          <h3 className="text-2xl md:text-3xl font-normal mt-2 mb-8">
            お問い合わせ
          </h3>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
          <form>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                会社名
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded"
                placeholder="株式会社〇〇"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                お名前
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded"
                placeholder="山田 太郎"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                メールアドレス
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                電話番号
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded"
                placeholder="03-1234-5678"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                お問い合わせ内容
                <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded"
                rows={6}
                placeholder="お問い合わせ内容をご記入ください"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-white rounded hover:bg-opacity-90 transition-colors"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
