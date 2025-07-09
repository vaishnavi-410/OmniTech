"use client";

import { useEffect } from "react";

const timelineData = [
  { year: "2000", text: "Company was founded with a small team and a big vision." },
  { year: "2005", text: "Opened our first manufacturing unit." },
  { year: "2010", text: "Expanded to international markets." },
  { year: "2015", text: "Launched sustainable product line." },
  { year: "2020", text: "Digitized operations with AI and IoT." },
  { year: "2025", text: "Celebrating 25 years of innovation and excellence." },
];

export default function Journey() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".animate").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          el.classList.add("in-view");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="our-journey" className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
      <div
        className="relative text-white bg-cover bg-fixed bg-center rounded-xl shadow-xl p-8"
        style={{ backgroundImage: "url('/images/1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl z-0"></div>
        <div className="relative z-10 space-y-6">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="animate transition-transform duration-300 transform hover:scale-105 backdrop-blur-md bg-white/10 border-l-4 border-cyan-400 p-4 rounded-md"
            >
              <span className="block text-cyan-400 font-bold text-lg mb-1">{item.year}</span>
              <p className="text-white">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
