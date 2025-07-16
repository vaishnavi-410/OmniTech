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
    <>
      <section
        id="categories"
        className="relative w-full px-4 sm:px-6 py-20 sm:py-16 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?fm=jpg&q=80&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kdXN0cmlhbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Metal BG"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Floating Background Bubbles */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 backdrop-blur-sm shadow-lg animate-pulse"
            style={{
              width: [100, 120, 90, 110, 75, 95, 85, 80, 130, 60][i],
              height: [100, 120, 90, 110, 75, 95, 85, 80, 130, 60][i],
              left: [
                '10%', '70%', '50%', '80%', '25%',
                '15%', '60%', '35%', '85%', '40%'
              ][i],
              top: [
                '20%', '40%', '70%', '15%', '60%',
                '80%', '25%', '10%', '50%', '85%'
              ][i],
            }}
          />
        ))}

        {/* Title */}
        <h2
          className="relative z-10 text-center text-4xl sm:text-3xl font-extrabold uppercase tracking-wider bg-gradient-to-r from-sky-300 to-white bg-clip-text text-transparent"
          data-aos="zoom-in"
        >
          Product Categories
        </h2>
        <p
          className="relative z-10 mb-12 mt-2 text-center text-base sm:text-sm font-medium text-slate-300"
          data-aos="fade-up"
        >
          Explore our specialized range of metallurgy solutions
        </p>

        {/* Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-xl px-6 py-6 border border-sky-300 hover:scale-[1.04] hover:-translate-y-1 hover:shadow-2xl transition-transform duration-500 cursor-pointer mx-auto w-full max-w-xs"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => showAlert(item.name)}
            >
              <div className="flex h-[180px] w-full items-center justify-center rounded-lg bg-blue-100/60 shadow-inner border border-blue-200 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <p className="text-center text-lg font-bold text-blue-900 tracking-wide mt-3">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Little empty layout below */}
      <div className="w-full h-16 bg-transparent"></div>
    </>
  );
}
