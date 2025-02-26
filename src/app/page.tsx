// import { getAllArticles } from "@/utils/articleUtils";
// import { getAllNews } from "@/utils/newsUtils";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import About from "@/components/About";
import Services from "@/components/Services";
// import Team from "@/components/Team";
// import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
// import News from "@/components/News";
import CompanyOverview from "@/components/page/CompanyOverview"; // CompanyOverview componentを追加

export default function Home() {
  // const articles = getAllArticles().slice(0, 3);
  // const newsItems = getAllNews().slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        {/* <Team /> */}
        <CompanyOverview />
        <Contact />
        {/* <News newsItems={newsItems} />
        <Blog articles={articles} /> */}
      </main>
      <Footer />
    </>
  );
}
