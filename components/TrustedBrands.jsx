"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const brandLogos = [
  "https://www.johncrane.com/media/t01ncbpm/logo-john-crane.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/56/Universit%C3%A4tsklinikum_M%C3%BCnster_Logo.svg",
  "https://brandlogos.net/wp-content/uploads/2022/04/honda_motor-logo-brandlogos.net_.png",
  "https://cdn.iconscout.com/icon/free/png-256/free-siemens-logo-icon-285232.png",
  "https://car-brand-names.com/wp-content/uploads/2015/05/Infiniti-Logo-1989.png",
  "https://logowik.com/content/uploads/images/yutaka1144.jpg",
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
    <div
      className="font-sans text-gray-800 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1697698532634-ea59b636ccea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <section className="bg-white/60 py-16 px-4 text-center" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-semibold uppercase text-[#182c6c] mb-4">
          Global brands that place their trust in our equipment and services
        </h2>
        <p className="max-w-4xl mx-auto mb-10 text-base leading-relaxed">
          We are proud of the strong partnerships that we have built with
          leading industrial brands, prestigious universities, and respected
          research establishments. They demand a supplier with global reach,
          world-class equipment, and in-depth knowledge that they can rely on.
        </p>

        <div className="overflow-hidden relative w-full">
          <div className="marquee-track flex w-max">
            {[...brandLogos, ...brandLogos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 px-6 md:px-10">
                <img
                  src={logo}
                  alt={`Brand-${index}`}
                  className="max-h-24 md:max-h-28 max-w-[200px] object-contain grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCROLL ANIMATION INSIDE COMPONENT */}
      <style jsx>{`
        .marquee-track {
          animation: scroll-left 25s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
