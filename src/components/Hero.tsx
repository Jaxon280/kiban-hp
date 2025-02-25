import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="japanese-text text-4xl md:text-6xl mb-6 text-gradient">
            次世代のビジネスソリューション
          </h1>
          <p className="japanese-text text-lg md:text-xl mb-8 text-primary/80">
            最先端のテクノロジーを活用し、ビジネスの成長と革新をサポートします。
            高速で信頼性の高いソリューションを提供し、お客様のビジネスを次のレベルへ。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="japanese-text px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all hover-lift shadow-lg shadow-primary/20"
            >
              お問い合わせ
            </Link>
            <Link
              href="#services"
              className="japanese-text px-8 py-4 glass-effect text-primary border border-primary/20 rounded-lg hover:bg-primary/5 transition-all hover-lift shadow-lg"
            >
              サービスを見る
            </Link>
          </div>
        </div>
      </div>

      {/* Abstract shapes for visual interest */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white dark:bg-black [clip-path:polygon(0_100%,100%_100%,0_0)]"></div>
    </section>
  );
}
