"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-100 dark:bg-gray-800 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">MySite</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">ホーム</Link>
          </li>
          <li>
            <Link href="/about">会社概要</Link>
          </li>
          <li>
            <Link href="/blog">ブログ</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
