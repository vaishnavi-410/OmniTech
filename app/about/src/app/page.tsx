'use client';

import Journey from "./components/Journey";
import Highlights from "./components/Highlights";
import Team from "./components/Team";
import Factories from "./components/Factories";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-[#fcfbfd] to-[#ebedee] text-[#2c3e50]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-10 text-center shadow-lg">
        <h1 className="text-4xl font-semibold">About Our Company</h1>
      </header>

      {/* Journey Timeline */}
      <Journey />

      {/* Vision / Mission / Values */}
      <Highlights />

      {/* Team Members */}
      <Team />

      {/* Factories */}
      <Factories />

      {/* Footer */}
      <footer className="bg-[#0f2027] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h3 className="text-[#f1c40f] mb-3 font-semibold">About Us</h3>
            <p>
              We are a future-forward company committed to sustainability,
              technology, and innovation. Celebrating 25 years of impact and
              excellence.
            </p>
          </div>
          <div>
            <h3 className="text-[#f1c40f] mb-3 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#our-journey" className="hover:underline">Our Journey</a></li>
              <li><a href="#our-team" className="hover:underline">Our Team</a></li>
              <li><a href="#our-factories" className="hover:underline">Factories</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#f1c40f] mb-3 font-semibold">Follow Us</h3>
            <ul className="space-y-1">
              <li><a href="https://metatech-industries-delxn.vercel.app/" target="_blank">🌐 Website</a></li>
              <li><a href="https://twitter.com/yourcompany" target="_blank">🐦 Twitter</a></li>
              <li><a href="https://facebook.com/yourcompany" target="_blank">📘 Facebook</a></li>
              <li><a href="https://instagram.com/yourcompany" target="_blank">📸 Instagram</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#f1c40f] mb-3 font-semibold">Get in Touch</h3>
            <p>Need help or want to collaborate?</p>
            <a
              href="/contact"
              className="inline-block mt-2 bg-cyan-300 text-black font-bold py-2 px-4 rounded hover:bg-cyan-400"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="text-center text-xs mt-6 border-t border-white/10 pt-4 text-gray-300">
          &copy; 2025 Omnitech Pvt. Ltd, All rights reserved.
        </div>
      </footer>
    </main>
  );
}
