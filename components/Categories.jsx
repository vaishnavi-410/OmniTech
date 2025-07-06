'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Categories() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const showAlert = (name) => {
    alert("You clicked on " + name);
  };

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-40px) scale(1.1); opacity: 0.6; }
          100% { transform: translateY(0px) scale(1); opacity: 0.4; }
        }
      `}</style>

      <section
        id="categories"
        className="relative w-full overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#1e40af] px-5 py-20 sm:py-16"
      >
        {/* Floating Bubbles */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 shadow-[0_0_25px_rgba(255,255,255,0.3)] backdrop-blur-sm z-0 animate-[float_12s_ease-in-out_infinite]"
            style={{
              width: [100, 120, 90, 110, 75, 95, 85, 80, 130, 60][i],
              height: [100, 120, 90, 110, 75, 95, 85, 80, 130, 60][i],
              left: [
                "10%", "70%", "50%", "80%", "25%",
                "15%", "60%", "35%", "85%", "40%"
              ][i],
              top: [
                "20%", "40%", "70%", "15%", "60%",
                "80%", "25%", "10%", "50%", "85%"
              ][i],
              animationDelay: `${[0, 2, 4, 6, 8, 1, 3, 5, 7, 9][i]}s`,
            }}
          />
        ))}

        {/* Title */}
        <h2
          className="relative z-10 mb-2 text-center text-4xl sm:text-3xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-sky-300 to-white bg-clip-text text-transparent"
          data-aos="zoom-in"
        >
          Product Categories
        </h2>
        <p
          className="relative z-10 mb-12 text-center text-base sm:text-sm font-medium text-slate-300"
          data-aos="fade-up"
        >
          Explore our specialized range of metallurgy solutions
        </p>

        {/* Center-Aligned Scrollable Cards */}
        <div className="relative z-10 w-full overflow-x-auto pb-3 scroll-smooth">
          <div className="flex justify-center">
            <div className="flex gap-8 min-w-max px-1 py-4 scroll-snap-x">
              {[
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
              ].map((item, index) => (
                <div
                  key={index}
                  className="scroll-snap-start flex w-[240px] sm:w-[200px] flex-shrink-0 flex-col items-center rounded-2xl border-2 border-sky-400 bg-slate-50 px-5 sm:px-4 py-9 sm:py-7 transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.04] hover:shadow-[0_18px_30px_rgba(96,165,250,0.4)] cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  onClick={() => showAlert(item.name)}
                >
                  <div className="mb-5 flex h-[200px] sm:h-[160px] w-[200px] sm:w-[160px] items-center justify-center rounded-xl border border-blue-100 bg-blue-100/50 shadow-inner">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="max-h-[180px] sm:max-h-[140px] max-w-[180px] sm:max-w-[140px] object-contain"
                    />
                  </div>
                  <p className="text-center text-lg sm:text-base font-bold text-blue-900 tracking-wide">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
