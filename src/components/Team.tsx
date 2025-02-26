"use client";

import React from "react";
import Image from "next/image";

export default function Team() {
  const teamMembers = [
    {
      name: "山田 太郎",
      role: "CEO / Founder",
      bio: "10年以上のソフトウェア開発経験を持ち、複数のテック企業でリーダーシップを発揮。ビジョンと戦略の策定を担当。",
      imagePath: "/yamada-taro.jpg",
    },
    {
      name: "佐藤 花子",
      role: "CTO",
      bio: "フルスタック開発のエキスパート。最新技術のリサーチと導入を主導し、技術チームを統括。",
      imagePath: "/sato-hanako.jpg",
    },
    {
      name: "鈴木 一郎",
      role: "Design Director",
      bio: "ユーザー体験とインターフェースデザインのスペシャリスト。使いやすさと美しさを兼ね備えたデザインを追求。",
      imagePath: "/suzuki-ichiro.jpg",
    },
    {
      name: "高橋 健太",
      role: "Project Manager",
      bio: "複雑なプロジェクトを効率的に管理し、クライアントとの信頼関係構築に長けている。",
      imagePath: "/takahashi-kenta.jpg",
    },
  ];

  return (
    <section id="team" className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal font-montserrat-semiBold tracking-wide">
            Our Team
          </h2>
          <h3 className="text-2xl md:text-3xl font-normal mt-2 mb-8">チーム</h3>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => {
            // 修正: map 関数の括弧を修正
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <div className="aspect-square relative bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={member.imagePath}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
