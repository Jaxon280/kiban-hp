import { getAllArticles } from "@/utils/articleUtils";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // 最新の記事を3件取得
  const articles = getAllArticles().slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Blog articles={articles} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
