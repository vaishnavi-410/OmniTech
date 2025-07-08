'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const backToTop = document.getElementById('backToTop');
    const handleScroll = () => {
      backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-r from-[#0a1d3c] to-[#112c56] text-white px-6 py-16 overflow-hidden" data-aos="fade-up">
      {/* Floating shapes */}
      <div className="absolute top-[20%] left-[5%] w-24 h-24 bg-[#00aced] opacity-10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-bounce"></div>
      <div className="absolute bottom-[10%] right-[8%] w-20 h-20 bg-[#1e90ff] opacity-10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-bounce"></div>
      <div className="absolute top-[-12] right-[-12] w-52 h-52 bg-[#00aced1a] rounded-full animate-ping"></div>
      <div className="absolute bottom-[-20] left-[-20] w-72 h-72 bg-[#1e90ff0d] rounded-full animate-ping"></div>
      <div className="absolute top-[40%] right-[15%] w-28 h-28 bg-[#00aced0d] rounded-full animate-spin"></div>
      <div className="absolute bottom-[25%] left-[15%] w-16 h-16 bg-[#1e90ff12] rotate-45 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div data-aos="fade-right">
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#00aced] inline-block">Contact Information</h3>
          <ul className="space-y-2 mt-4 text-sm">
            <li className="before:content-['🏢'] before:mr-2">OmniTech HQ</li>
            <li className="before:content-['📍'] before:mr-2">123 Innovation Road, Pune, MH 411041</li>
            <li className="before:content-['📞'] before:mr-2">+91 98765 43210</li>
            <li className="before:content-['✉'] before:mr-2">support@omnitech.com</li>
          </ul>
        </div>

        <div data-aos="fade-up">
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#00aced] inline-block">Helpful Links</h3>
          <ul className="space-y-2 mt-4 text-sm">
            {['About', 'Products', 'Services', 'Training', 'Contact'].map(link => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="text-gray-300 hover:text-[#00aced] transition duration-300 ease-in-out"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div data-aos="fade-left">
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#00aced] inline-block">Legal</h3>
          <ul className="space-y-2 mt-4 text-sm">
            {['Terms of Service', 'Privacy Policy', 'Return Policy', 'Warranty', 'Cookie Notice'].map(link => (
              <li key={link}>
                <a href={`/${link.toLowerCase().replace(/ /g, '-')}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#00aced] transition duration-300 ease-in-out">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div data-aos="fade-up">
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#00aced] inline-block">Connect With Us</h3>
          <div className="flex gap-3 mt-4 flex-wrap">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-[#00aced] transition hover:scale-110 shadow">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-[#00aced] transition hover:scale-110 shadow">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-[#00aced] transition hover:scale-110 shadow">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-[#00aced] transition hover:scale-110 shadow">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-[#00aced] transition hover:scale-110 shadow">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <a href="/calendar-contest" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm text-[#00aced] hover:text-white transition">Learn More</a>

          <div className="mt-6">
            <h4 className="text-sm font-medium mb-2">Subscribe to Our Newsletter</h4>
            <form action="https://docs.google.com/forms/d/e/1FAIpQLSfq_UcND-test-url/viewform" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-2">
              <input type="email" placeholder="Enter your email" required className="p-2 rounded-full w-full bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00aced]" />
              <button type="submit" className="bg-gradient-to-r from-[#00aced] to-[#1e90ff] text-white px-4 py-2 rounded-full hover:from-[#0084b4] hover:to-[#0066cc] transition">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-white/10 text-sm text-gray-300 text-center relative z-10 flex flex-col md:flex-row justify-center items-center gap-4">
        <a href="https://wa.me/919876543210?text=Hi%20OmniTech%20Team!%20I%20have%20a%20question." target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition animate-pulse">
          <i className="fab fa-whatsapp"></i>
        </a>
        <p>&copy; 2025 OmniTech. All rights reserved. | Pune, India | +91 98765 43210</p>
      </div>

      <button id="backToTop" onClick={scrollTop} className="hidden fixed bottom-6 right-4 z-50 p-3 bg-gradient-to-r from-[#00aced] to-[#1e90ff] text-white rounded-full shadow-lg hover:scale-110 transition">
        <i className="fas fa-arrow-up"></i>
      </button>
    </footer>
  );
}
