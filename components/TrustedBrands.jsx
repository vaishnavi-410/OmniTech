"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const brandLogos = [
  "https://www.johncrane.com/media/t01ncbpm/logo-john-crane.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/56/Universit%C3%A4tsklinikum_M%C3%BCnster_Logo.svg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbESdGT6jHKu5AVDCEqNE9qo7aYZiRYBlxow&s",
  "https://cdn.iconscout.com/icon/free/png-256/free-siemens-logo-icon-285232.png",
  "https://car-brand-names.com/wp-content/uploads/2015/05/Infiniti-Logo-1989.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvpSZrE-HdsPeQ4MqKyauxOFUzzg-dzFVNYQ&s",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Logo_Hochformat_NUR_STAHLWERK.jpg/1200px-Logo_Hochformat_NUR_STAHLWERK.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_IGZXfhnwUw9Qi5iCV5MtMNqLsqsTLeOt6Q&s",
  "https://icon2.cleanpng.com/20180409/tzw/avb6y1nhb.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9T576-X_ai5e2tpMwV1ytdpQ0gC_4FzgtAQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--Qq37h6dMGDUxFhzLYZPXsK2Wbi1ulD4cg&s",
  "https://1000logos.net/wp-content/uploads/2020/06/Piaggio-Logo-1993.png",
];

export default function TrustedBrands() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative font-sans text-gray-800">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1697698532634-ea59b636ccea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00000088] to-[#000000aa] z-0" />

      <section className="relative z-10 py-20 px-4 text-center">
        <div
          className="bg-white/70 backdrop-blur-md rounded-2xl max-w-6xl mx-auto shadow-xl p-8 md:p-12 transition-all duration-300"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-6 leading-tight text-[#003366] drop-shadow-md">
            Global Brands Trust Our Expertise
          </h2>
          <p className="max-w-4xl mx-auto mb-10 text-lg md:text-xl text-gray-800 leading-relaxed drop-shadow-sm">
            From industry leaders to top universities and research institutions — our world-class equipment,
            unmatched service, and global presence make us a trusted partner across the globe.
          </p>

          {/* Logo carousel */}
          <div className="overflow-hidden relative w-full">
            <div className="marquee-track flex w-max gap-6">
              {[...brandLogos, ...brandLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2 sm:px-4 md:px-6 py-2"
                >
                  <div className="h-[100px] w-[180px] sm:h-[120px] sm:w-[200px] md:h-[130px] md:w-[220px] bg-white rounded-lg shadow-md flex items-center justify-center p-3 transition-transform transform hover:scale-105">
                    <img
                      src={logo}
                      alt={`Brand-${index}`}
                      className="h-full w-full object-contain transition-transform duration-300 ease-in-out"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "data:image/svg+xml;charset=UTF-8," +
                          encodeURIComponent(`
                            <svg xmlns='http://www.w3.org/2000/svg' width='200' height='130'>
                              <rect fill='#f8f8f8' width='200' height='130'/>
                              <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='14' fill='#999'>
                                No Image
                              </text>
                            </svg>
                          `);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Styles */}
      <style jsx>{`
        .marquee-track {
          animation: scroll-left 45s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .marquee-track img {
            max-height: 80px;
            max-width: 140px;
          }
        }
      `}</style>
    </div>
  );
}
