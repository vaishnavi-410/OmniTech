'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import DesktopMenu from './DesktopMenu';
import MobMenu from './MobMenu';
import { Menus } from '@/utils/menus';

export function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#000080] via-[#000099] to-[#0000CD] text-gray-100 h-16 sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
        {/* Desktop Menu aligned to the left */}
        <ul className="relative hidden lg:flex items-center gap-6">
          {Menus.map((menu, i) => (
            <DesktopMenu key={i} menu={menu} />
          ))}
        </ul>

        {/* Right: Sign In button and Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className="bg-[#CBD5E1] text-[#000080] px-3 py-1.5 rounded-xl hover:bg-white transition text-sm">
            Sign In
          </button>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobMenu Menus={Menus} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function Header() {
  const [activeMenu, setActiveMenu] = useState('HOME');
  const [particles, setParticles] = useState([]);
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const particleArray = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${8 + Math.random() * 4}s`,
      delay: `${Math.random() * 8}s`,
    }));
    setParticles(particleArray);
  }, []);

  return (
    <>
      {/* Particle Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute w-[300px] h-[300px] bg-gradient-to-br from-blue-700 to-blue-900 rounded-full top-[-150px] left-[-150px] opacity-10 animate-float"></div>
        <div className="absolute w-[200px] h-[200px] bg-gradient-to-br from-blue-600 to-blue-400 rounded-full top-[20%] right-[-100px] opacity-10 animate-float delay-[2s]"></div>
        <div className="absolute w-[150px] h-[150px] bg-gradient-to-br from-blue-900 to-blue-700 rounded-full bottom-[20%] left-[10%] opacity-10 animate-float delay-[4s]"></div>
        <div className="absolute w-[250px] h-[250px] bg-gradient-to-br from-gray-900 to-blue-800 rounded-full bottom-[-125px] right-[20%] opacity-10 animate-float delay-[1s]"></div>

        <div className="absolute w-full h-full pointer-events-none">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute w-1 h-1 rounded-full animate-particleFloat bg-slate-300 dark:bg-white opacity-60 dark:opacity-30"
              style={{
                left: p.left,
                animationDuration: p.duration,
                animationDelay: p.delay,
              }}
            />
          ))}
        </div>
      </div>

      {/* Top Info Bar + Logo Section */}
      <div className="relative z-[40] bg-transparent backdrop-blur-md">
        <div className="bg-gradient-to-r from-blue-800/90 to-gray-900/90 px-4 py-2 flex flex-col md:flex-row md:justify-between items-center text-white text-sm font-medium border-b border-blue-500/20 gap-2 text-center">
          <div className="flex items-center gap-2 before:content-['📞'] before:animate-pulse">
            Hotline (+91) 44-2688 0737
          </div>
          <div className="text-xs opacity-90">
            🌟 Premium Metallurgy Solutions | Trusted Since 1995
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-6 relative gap-6">
          <div className="flex items-center gap-4 cursor-pointer transition-transform hover:scale-105">
            <img
              src="https://images-platform.99static.com/mx5CtlcMEwKY37aZGeZZFLaJn5w=/500x500/top/smart/99designs-contests-attachments/55/55214/attachment_55214390"
              alt="Omnitech Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full shadow-lg hover:rotate-[360deg] transition-transform duration-700"
            />
            <div>
              <h1 className="text-xl md:text-3xl font-black bg-gradient-to-r from-blue-700 to-gray-900 text-transparent bg-clip-text dark:from-white dark:to-slate-300">
                Omnitech
              </h1>
              <p className="text-xs md:text-sm text-black dark:text-white italic font-medium">
                Advanced Metallurgy Solutions
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center overflow-hidden rounded-full border-2 border-transparent bg-transparent shadow-md focus-within:scale-105 focus-within:border-blue-600 transition-all">
              <input
                type="text"
                placeholder="Search products, services..."
                className="py-2 px-4 w-[200px] md:w-[250px] outline-none text-sm text-black dark:text-white placeholder-slate-400 bg-transparent"
              />
              <button className="py-2 px-4 bg-gradient-to-br from-blue-700 to-gray-900 text-white text-base">🔍</button>
            </div>
            <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className="w-7 h-5 rounded shadow" />
          </div>

          <div className="absolute -bottom-6 left-6 bg-gradient-to-r from-blue-700 to-gray-900 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap before:content-['✨'] before:mr-2 max-w-full overflow-x-auto">
            Empowering Innovation | Excellence in Metallurgy
          </div>
        </div>
      </div>

      {/* Sticky Navbar */}
      <Navbar />

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-particleFloat {
          animation: particleFloat 8s linear infinite;
        }
      `}</style>
    </>
  );
}
