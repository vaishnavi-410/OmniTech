"use client";

import { useEffect } from "react";
import Image from "next/image";

const team = [
  {
    name: "John Doe",
    role: "Founder",
    desc: "Visionary leader who started it all in 2000.",
    img: "/images/6.jpg",
  },
  {
    name: "Jane Smith",
    role: "Co-Founder",
    desc: "Expert in operations and growth strategy.",
    img: "/images/7.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Secretary",
    desc: "Backbone of our administrative success.",
    img: "/images/8.jpg",
  },
];

export default function Team() {
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
    <section id="our-team" className="py-12 px-4 bg-gradient-to-b from-[#fefcfb] to-[#e7e7e7]">
      <h2 className="text-3xl font-bold mb-10 text-center">Our Team</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="animate bg-gradient-to-tr from-yellow-50 to-yellow-100 p-6 rounded-xl shadow-md text-center w-full sm:w-[260px] transition-transform hover:scale-105"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={member.img}
                alt={`Portrait of ${member.name}`}
                width={120}
                height={120}
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
            <p className="text-sm font-medium text-gray-600">{member.role}</p>
            <p className="text-sm mt-2">{member.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
