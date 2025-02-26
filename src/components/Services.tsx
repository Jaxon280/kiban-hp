"use client";

import React from "react";

const services = [
  {
    title: "ロボットアームの受託開発",
    englishTitle: "Customized Robot Arm Development",
    description: "どの現場にも入れられるロボットアームを受託開発",
    image: "/robot.jpg",
  },
  {
    title: "材料科学向けAI受託開発",
    englishTitle: "AI for Material Science",
    description: "材料開発を加速する生成AIの開発・導入を支援",
    image: "/mi.jpg",
  },
  {
    title: "ラボオートメーション受託開発",
    englishTitle: "Laboratory Automation",
    description: "研究室の自動化をハードウェア制御とロボットで実現",
    image: "/labauto.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal font-montserrat-semiBold tracking-wide">
            Our Services
          </h2>
          <h3 className="text-2xl md:text-3xl font-normal mt-2 mb-8">
            事業内容
          </h3>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {" "}
          {/* lg:grid-cols-4 を lg:grid-cols-3 に変更 */}
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow p-8 flex flex-col h-full" // flex flex-col h-full を追加
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded-xl mb-4" // h-40 を h-64 に変更
              />
              <div className="flex-grow">
                {" "}
                {/* flex-grow を追加 */}
                <h3 className="text-xl font-normal mb-2">{service.title}</h3>
                <h4 className="text-lg font-montserrat-semiBold tracking-wide text-gray-600 mb-4">
                  {service.englishTitle}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
