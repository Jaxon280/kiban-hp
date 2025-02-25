import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed w-full glass-effect z-10 shadow-lg shadow-primary/5">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 hover-lift">
          <div className="heading text-2xl text-gradient">企業名</div>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link
            href="#about"
            className="japanese-text hover:text-secondary transition-all hover-lift"
          >
            会社概要
          </Link>
          <Link
            href="#services"
            className="japanese-text hover:text-secondary transition-all hover-lift"
          >
            サービス
          </Link>
          <Link
            href="#team"
            className="japanese-text hover:text-secondary transition-all hover-lift"
          >
            チーム
          </Link>
          <Link
            href="#contact"
            className="japanese-text hover:text-secondary transition-all hover-lift"
          >
            お問い合わせ
          </Link>
        </nav>

        <div className="md:hidden">
          {/* Mobile menu button */}
          <button className="p-2 hover:bg-primary/5 rounded-lg transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
