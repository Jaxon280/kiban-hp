import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "企業名 | 次世代のビジネスソリューション",
  description:
    "最先端のテクノロジーを活用し、ビジネスの成長と革新をサポートします。高速で信頼性の高いソリューションを提供し、お客様のビジネスを次のレベルへ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* SF Pro Display is not available on Google Fonts, so we'll use a similar font */}
        <link
          href="https://fonts.cdnfonts.com/css/sf-pro-display"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans-jp antialiased">{children}</body>
    </html>
  );
}
