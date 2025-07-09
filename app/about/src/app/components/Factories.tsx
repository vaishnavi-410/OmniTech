import { useEffect } from "react";
import Image from "next/image";

const factories = [
  {
    name: "Factory 1 - New York",
    desc: "Specialized in smart manufacturing and robotics.",
    img: "/images/3.jpg",
  },
  {
    name: "Factory 2 - Texas",
    desc: "Largest solar-powered facility producing eco-friendly products.",
    img: "/images/2.jpg",
  },
];

export default function Factories() {
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
    <section id="our-factories" className="py-12 px-4 bg-gradient-to-r from-[#eef7f4] to-[#ddeee7]">
      <h2 className="text-3xl font-bold mb-10 text-center">Our Factories</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {factories.map((factory, index) => (
          <div
            key={index}
            className="animate bg-gradient-to-tr from-blue-50 to-blue-100 p-6 rounded-xl shadow-md w-full sm:w-[300px] transition-transform hover:scale-105"
          >
            <div className="mb-4">
              <Image
                src={factory.img}
                alt={factory.name}
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold mb-1">{factory.name}</h4>
            <p className="text-sm">{factory.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}