'use client';

import Journey from "./components/Journey";
import Highlights from "./components/Highlights";
import Team from "./components/Team";
import Factories from "./components/Factories";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <main
      className={`transition-all duration-[1200ms] ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } bg-gradient-to-r from-[#fcfbfd] to-[#ebedee] text-[#2c3e50] min-h-screen`}
    >
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800">
          Welcome to Omnitech
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Discover our journey, values, team, and innovation centers that power our mission.
        </p>
      </section>

      <Journey />
      <Highlights />
      <Team />
      <Factories />
    </main>
  );
}
