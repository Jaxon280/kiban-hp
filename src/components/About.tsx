export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">会社概要</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">私たちのビジョン</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                当社は、テクノロジーの力でビジネスと社会に革新をもたらすことを目指しています。
                高速で効率的なソリューションを提供し、お客様のビジネス成長を加速させることが私たちの使命です。
              </p>

              <h3 className="text-2xl font-semibold mb-4">私たちの強み</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    最先端技術の活用と継続的な革新
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    高速かつ信頼性の高いパフォーマンス
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    お客様のニーズに合わせたカスタマイズソリューション
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-90"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                <h3 className="text-2xl font-bold mb-4">2015年の創業以来</h3>
                <div className="grid grid-cols-2 gap-8 w-full max-w-md">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">100+</div>
                    <div className="text-sm">クライアント</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">250+</div>
                    <div className="text-sm">プロジェクト</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">30+</div>
                    <div className="text-sm">専門家</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">5+</div>
                    <div className="text-sm">受賞歴</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
