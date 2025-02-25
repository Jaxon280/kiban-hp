import Image from "next/image";

export default function Team() {
  const teamMembers = [
    {
      name: "山田 太郎",
      role: "CEO / 創業者",
      bio: "10年以上のソフトウェア開発経験を持ち、複数のテック企業でリーダーシップを発揮。ビジョンと戦略の策定を担当。",
      imagePath: "/placeholder-person.jpg",
    },
    {
      name: "佐藤 花子",
      role: "CTO",
      bio: "フルスタック開発のエキスパート。最新技術のリサーチと導入を主導し、技術チームを統括。",
      imagePath: "/placeholder-person.jpg",
    },
    {
      name: "鈴木 一郎",
      role: "デザインディレクター",
      bio: "ユーザー体験とインターフェースデザインのスペシャリスト。使いやすさと美しさを兼ね備えたデザインを追求。",
      imagePath: "/placeholder-person.jpg",
    },
    {
      name: "高橋 誠",
      role: "プロジェクトマネージャー",
      bio: "複雑なプロジェクトを効率的に管理し、クライアントとの信頼関係構築に長けている。",
      imagePath: "/placeholder-person.jpg",
    },
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">チーム</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              私たちは、情熱と専門知識を持ったプロフェッショナルのチームです。
              お客様のビジネス成功のために、それぞれの専門分野で最高のパフォーマンスを発揮します。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <div className="aspect-square relative bg-gray-200 dark:bg-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
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
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">一緒に働きませんか？</h3>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              私たちは常に優秀な人材を探しています。革新的なプロジェクトに取り組み、
              スキルを磨きながらキャリアを成長させたい方は、ぜひご連絡ください。
            </p>
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg inline-block"
            >
              採用情報を見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
