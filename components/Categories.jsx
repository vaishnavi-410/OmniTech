'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Categories() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const showAlert = (name) => {
    alert("You clicked on " + name);
  };

  const cards = [
    {
      name: 'Cutting',
      img: 'https://media.istockphoto.com/id/177007701/photo/laser-cutting-of-metal-sheet-with-sparks.jpg?s=612x612&w=0&k=20&c=oYWr7odGnFBClfVgtV442EL-rGLwaIVW1p2nJSsLji8=',
    },
    {
      name: 'Mounting',
      img: 'https://images.unsplash.com/photo-1691828715713-4f3eaf16f857?w=600',
    },
    {
      name: 'Grinding',
      img: 'https://img.freepik.com/free-photo/view-worker-grinding-piece-metal_268835-4092.jpg',
    },
    {
      name: 'Polishing',
      img: 'https://img.freepik.com/free-photo/tiler-working-renovation-apartment_23-2149278570.jpg',
    },
    {
      name: 'Microscopes',
      img: 'https://img.freepik.com/free-photo/scientist-analyzes-bacterium-with-high-scale-magnification-generated-by-ai_188544-27928.jpg',
    },
    {
      name: 'Hardness Tester',
      img: 'https://img.freepik.com/premium-photo/worker-uses-touch-control-panel-scene-skilled-worker-uses-electronic-control-panel-modern_1096515-29369.jpg',
    },
    {
      name: 'Spectrometer',
      img: 'https://5.imimg.com/data5/SELLER/Default/2021/8/ZM/FU/JI/37738903/spectrometer-500x500.jpg',
    },
    {
      name: 'Sample Dryer',
      img: 'https://image.made-in-china.com/202f0j00tDgqSHpyqrzU/Rapidly-Air-Flow-Metallurgical-Sample-Drier.webp',
    },
  ];

  return (
    <section
      id="categories"
      className="relative w-full px-4 sm:px-6 py-12 overflow-hidden bg-transparent"
    >
      {/* Title */}
      <div
        className="relative z-10 backdrop-blur-xl bg-blue-900/70 w-full py-6 rounded-xl shadow-xl animate__animated animate__fadeInDown"
        data-aos="zoom-in"
      >
        <h2 className="text-center text-4xl sm:text-3xl font-extrabold uppercase tracking-wider text-white">
          Product Categories
        </h2>
        <p
          className="mt-2 text-center text-base sm:text-sm font-medium text-blue-100"
          data-aos="fade-up"
        >
          Explore our specialized range of metallurgy solutions
        </p>
      </div>

      {/* Cards Grid */}
      <div
        className="relative z-10 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        data-aos="fade-up"
      >
        {cards.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col items-center bg-white/90 rounded-xl px-6 py-6 border border-blue-200 hover:scale-[1.05] hover:-translate-y-1 transition-transform duration-500 ease-in-out shadow-lg hover:shadow-blue-500/40 cursor-pointer mx-auto w-full max-w-xs backdrop-blur-md"
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
            onClick={() => showAlert(item.name)}
          >
            <div className="relative h-[180px] w-full rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,128,0.3)] border border-blue-200">
              <img
                src={item.img}
                alt={item.name}
                className="h-full w-full object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <p className="text-center text-lg font-bold text-blue-900 tracking-wide mt-4 group-hover:opacity-100 opacity-90 transition-opacity duration-300">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
