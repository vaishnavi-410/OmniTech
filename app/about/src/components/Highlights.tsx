"use client";

import { useEffect } from "react";

const highlights = [
  {
    title: "Our Vision",
    text: "To shape a smarter, sustainable future through innovation and responsible technology that improves everyday life.",
    bg: "bg-gradient-to-tr from-cyan-50 to-cyan-100",
  },
  {
    title: "Our Mission",
    text: "To deliver impactful, reliable, and eco-conscious solutions while empowering communities and leading industry change.",
    bg: "bg-gradient-to-tr from-pink-50 to-pink-100",
  },
  {
    title: "Core Values",
    list: [
      "✔ Innovation & Excellence",
      "✔ Sustainability & Responsibility",
      "✔ Integrity & Transparency",
      "✔ Customer First Approach",
      "✔ Collaboration & Diversity",
    ],
    bg: "bg-gradient-to-tr from-purple-50 to-purple-100",
  },
];

const goals = [
  {
    title: "Our Culture",
    text: "We cultivate a people-first environment where creativity, respect, and collaboration thrive at every level of our organization.",
    bg: "bg-gradient-to-tr from-yellow-50 to-yellow-100",
  },
  {
    title: "Sustainability Goals",
    text: "We are committed to achieving carbon neutrality, zero-waste production, and full use of renewable energy by 2030.",
    bg: "bg-gradient-to-tr from-green-50 to-green-100",
  },
  {
    title: "Future Roadmap",
    text: "Our vision for 2035 includes global expansion, AI-integrated operations, and pioneering benchmarks in green manufacturing.",
    bg: "bg-gradient-to-tr from-pink-50 to-pink-100",
  },
];

export default function Highlights() {
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
    <section id="company-highlights" className="py-12 px-4 bg-gradient-to-b from-[#eaf3fa] to-[#dcecf9]">
      <h2 className="text-3xl font-bold mb-10 text-center">Our Vision, Mission & More</h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {highlights.map((item, index) => (
          <div
            key={index}
            className={`animate ${item.bg} p-6 rounded-xl shadow-md w-full sm:w-[300px] transition-transform hover:scale-105`}
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            {item.list ? (
              <ul className="list-disc pl-5 text-sm text-left">
                {item.list.map((li, idx) => (
                  <li key={idx}>{li}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm">{item.text}</p>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-6 justify-center mt-10">
        {goals.map((item, index) => (
          <div
            key={index}
            className={`animate ${item.bg} p-6 rounded-xl shadow-md w-full sm:w-[300px] transition-transform hover:scale-105`}
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
