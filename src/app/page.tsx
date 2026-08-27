import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import LogoMarquee from "@/components/LogoMarquee";
import WhyOnGrid from "@/components/WhyOnGrid";
import Industries from "@/components/Industries";
import Verifications from "@/components/Verifications";
import Compliance from "@/components/Compliance";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <LogoMarquee />
        <WhyOnGrid />
        <Industries />
        <Verifications />
        <Compliance />
        <Products />
      </main>
      <Footer />
    </>
  );
}
