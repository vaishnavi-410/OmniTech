// app/page.jsx
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Experience from "@/components/Experience";
import TrustedBrands from "@/components/TrustedBrands";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HomeSection />
      <Categories />
      <Products />
      <Experience />
      <TrustedBrands />
      <Footer />
    </>
  );
}
