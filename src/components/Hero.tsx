"use client";

import React from "react";

export default function Hero() {
  return (
    <section
      className="min-h-[700px] bg-cover bg-center filter grayscale relative" // min-h-[700px] に修正
      style={{ backgroundImage: "url('/hero-background.jpg')" }} // 背景画像を変更
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      {/*bg-black opacity-60 のオーバーレイを追加*/}
      <div className="container mx-auto h-full flex flex-col justify-center items-center relative px-4">
        {" "}
        {/* relative を追加 */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mt-32">
          Building the foundations of innovation for the next era
        </h1>
        <p className="mt-8 text-xl text-white">
          {" "}
          革新と品質へのコミットメントを通じて、お客様に信頼性の高いソリューションを提供し、
          最先端技術の活用と継続的な改善を通じて、高速で効率的な開発を追求します。
        </p>
      </div>
    </section>
  );
}
