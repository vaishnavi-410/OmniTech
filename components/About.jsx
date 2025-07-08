'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const About = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({ duration: 1200 });
    }
  }, []);

  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-between max-w-[1400px] mx-auto my-20 h-auto lg:h-[520px] bg-transparent rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden"
      data-aos="fade-up"
      id="about"
    >
      {/* Left Content */}
      <div className="flex-1 px-6 py-10 lg:px-16 z-10" data-aos="fade-right">
        <h2 className="text-[2.8rem] font-bold text-black dark:text-white mb-5 relative after:content-[''] after:w-[60px] after:h-1 after:bg-[#00b8d9] after:absolute after:left-0 after:-bottom-2 after:rounded">
          About Omnitech
        </h2>

        <p className="text-[1.1rem] leading-[1.7] text-black dark:text-white mb-6" data-aos="fade-up" data-aos-delay="200">
          Omnitech is a leading supplier of metallurgy products designed to meet the needs of modern industries.
          Our expert solutions cater to research, production, and quality control, ensuring unmatched reliability and performance.
        </p>

        <ul className="mb-6 space-y-3" data-aos="fade-up" data-aos-delay="300">
          {[
            "✅ Improves specimen preparation efficiency",
            "✅ Frees up operator time",
            "✅ Increased polishing quality",
            "✅ Ensures result consistency",
          ].map((item, index) => (
            <li
              key={index}
              className="text-black dark:text-white text-base font-normal pl-2 transition-transform duration-300 hover:translate-x-2 hover:scale-105 hover:text-[#00b8d9] list-none"
            >
              {item}
            </li>
          ))}
        </ul>

        <Link
          href="#learn-more"
          className="inline-block bg-[#0a1f44] dark:bg-white dark:text-black text-white py-3 px-7 rounded-full font-semibold no-underline transition-all duration-300 shadow-md hover:bg-[#00b8d9] dark:hover:bg-[#00b8d9] hover:-translate-y-1"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          Be Inspired by Omnitech
        </Link>
      </div>

      {/* Right Image Slide */}
      <div className="flex-1 relative w-full h-[300px] lg:h-full overflow-hidden" data-aos="fade-left">
        <div
          className="absolute w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-1 hover:brightness-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1470&q=80')",
            clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
            animation: 'slideIn 2s ease-out forwards',
            transform: 'translateX(100%)',
          }}
        ></div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @media (max-width: 992px) {
          .image-slide {
            clip-path: none !important;
            animation: slideInY 1.5s ease-out forwards !important;
            transform: translateY(100%) !important;
          }

          @keyframes slideInY {
            0% {
              transform: translateY(100%);
            }
            100% {
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </section>
  );
};

export default About;
