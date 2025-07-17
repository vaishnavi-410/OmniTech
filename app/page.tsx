// app/page.jsx

import HomeSection from "@/components/HomeSection";
import About from "@/components/About";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Experience from "@/components/Experience";
import TrustedBrands from "@/components/TrustedBrands";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css';

export default function Home() {
  return (
    <>
      <HomeSection />
      <About />
      <Categories/>
      <Products />
      <Experience />
      <TrustedBrands />
    </>
  );
}
