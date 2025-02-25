export default function Services() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">サービス</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              お客様のビジネスニーズに合わせた最適なソリューションを提供します。
              高速で信頼性の高いテクノロジーを活用し、ビジネスの成長を加速させます。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Webアプリケーション開発
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                最新のフレームワークを活用した高速で信頼性の高いWebアプリケーションを開発します。
                Next.jsとReactによる最適化されたパフォーマンスを実現します。
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• 静的サイト生成 (SSG) による高速表示</li>
                <li>• レスポンシブデザイン</li>
                <li>• SEO最適化</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">モバイルアプリ開発</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                クロスプラットフォーム技術を活用し、iOS・Android両方に対応するアプリを効率的に開発します。
                ネイティブのような使い心地と高いパフォーマンスを実現します。
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• React Nativeによる効率的な開発</li>
                <li>• オフライン対応機能</li>
                <li>• プッシュ通知実装</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">API開発・システム連携</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                高速で安全なAPIを開発し、様々なシステムやサービスとの連携を実現します。
                データの流れを最適化し、ビジネスプロセスを効率化します。
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• RESTful APIの設計と実装</li>
                <li>• GraphQLによる柔軟なデータ取得</li>
                <li>• セキュアな認証システム</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">データ分析・可視化</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                ビジネスデータを収集・分析し、意思決定に役立つインサイトを提供します。
                直感的なダッシュボードで複雑なデータを分かりやすく可視化します。
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• リアルタイムデータ分析</li>
                <li>• カスタムダッシュボード開発</li>
                <li>• 予測分析と傾向把握</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">セキュリティ対策</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                最新のセキュリティ脅威に対応し、システムとデータを保護します。
                脆弱性診断からセキュリティ強化まで、包括的なサービスを提供します。
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• セキュリティ監査と脆弱性診断</li>
                <li>• セキュアなコーディング実践</li>
                <li>• データ暗号化と保護</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">技術コンサルティング</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                最適な技術選定から実装戦略まで、専門的な知見に基づいたアドバイスを提供します。
                ビジネス目標達成のための技術ロードマップを策定します。
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• 技術スタック選定</li>
                <li>• パフォーマンス最適化</li>
                <li>• スケーラビリティ設計</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
