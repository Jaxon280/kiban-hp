import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-16 bg-black p-8 rounded-lg shadow-md">
          {/* bg-black を追加 */}
          <div className="flex justify-center items-baseline gap-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-normal font-montserrat-semiBold tracking-wide text-white">
              {" "}
              {/* text-white を追加 */}
              Company
            </h2>
          </div>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          {/* Company Info Section */}
          <div className="mt-12 text-center text-white">
            株式会社〇〇
            <br />
            所在地：〇〇県〇〇市〇〇町〇〇番地
            <br />
            電話番号：000-000-0000
            <br />
            代表取締役：〇〇 〇〇
          </div>
        </div>

        <div className="mb-24 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
          {/* Our Vision Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-normal text-center leading-10">
              <span className="font-montserrat-semiBold tracking-wide">
                Our Vision
              </span>
              <span className="ml-4 text-2xl">/&nbsp;私たちのビジョン</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mt-8 mb-12 text-center">
              当社は、テクノロジーの力でビジネスと社会に革新をもたらすことを目指しています。
              高速で効率的なソリューションを提供し、お客様のビジネス成長を加速させることが私たちの使命です。
            </p>
          </div>
          {/* Our Strengths Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-normal text-center">
              <span className="font-montserrat-semiBold tracking-wide">
                Our Strengths
              </span>
              <span className="ml-4 text-2xl">/&nbsp;私たちの強み</span>
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <svg
                  className="w-8 h-8 text-primary mr-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300 text-lg">
                  最先端技術の活用と継続的な革新
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-8 h-8 text-primary mr-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300 text-lg">
                  高速かつ信頼性の高いパフォーマンス
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-8 h-8 text-primary mr-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300 text-lg">
                  お客様のニーズに合わせたカスタマイズソリューション
                </span>
              </li>
            </ul>
          </div>
          -{" "}
          <div className="mt-12 text-center text-white">
            - 株式会社〇〇 - <br />
            - 所在地：〇〇県〇〇市〇〇町〇〇番地 - <br />
            - 電話番号：000-000-0000 - <br />- 代表取締役：〇〇 〇〇 -{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
