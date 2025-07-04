// app/page.jsx

import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import About from "@/components/About";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Experience from "@/components/Experience";
import TrustedBrands from "@/components/TrustedBrands";
import Footer from "@/components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css';


export default function Home() {
  return (
    <>
      <Header />
      <HomeSection />
      <About />
      <Categories />
      <Products />
      <Experience />
      <TrustedBrands />
      <Footer />
    </>
  );
}
