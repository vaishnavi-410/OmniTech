'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState('HOME');
  const [particles, setParticles] = useState([]);

useEffect(() => {
  const particleArray = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: `${8 + Math.random() * 4}s`,
    delay: `${Math.random() * 8}s`,
  }));
  setParticles(particleArray);
}, []);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }
        header {
         position: sticky;
         top: 0;
         z-index: 1000;
         background: #0a1f44; /* Or whatever background your header has */
      }


        body {
          background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
          color: #1a202c;
          overflow-x: hidden;
          position: relative;
          min-height: 100vh;
        }

        .bg-decoration {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
          overflow: hidden;
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.08;
          animation: float 6s ease-in-out infinite;
        }

        .bg-circle:nth-child(1) {
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, #1d4ed8, #1e40af);
          top: -150px;
          left: -150px;
          animation-delay: 0s;
        }

        .bg-circle:nth-child(2) {
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, #2563eb, #3b82f6);
          top: 20%;
          right: -100px;
          animation-delay: 2s;
        }

        .bg-circle:nth-child(3) {
          width: 150px;
          height: 150px;
          background: linear-gradient(45deg, #1e40af, #1d4ed8);
          bottom: 20%;
          left: 10%;
          animation-delay: 4s;
        }

        .bg-circle:nth-child(4) {
          width: 250px;
          height: 250px;
          background: linear-gradient(45deg, #0f172a, #1e3a8a);
          bottom: -125px;
          right: 20%;
          animation-delay: 1s;
        }

        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: particleFloat 8s linear infinite;
        }

        .particle:nth-child(odd) {
          animation-delay: -2s;
        }

        .particle:nth-child(even) {
          animation-delay: -4s;
        }

        header {
          position: relative;
          z-index: 100;
          animation: headerSlideIn 1.2s ease-out;
        }

        .top-bar {
          background: linear-gradient(90deg, rgba(30, 58, 138, 0.95), rgba(15, 23, 42, 0.95));
          backdrop-filter: blur(10px);
          padding: 12px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          color: white;
          font-weight: 500;
          animation: slideDown 0.8s ease-out;
          border-bottom: 1px solid rgba(59, 130, 246, 0.2);
        }

        .top-bar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.15), transparent);
          animation: shimmer 2s infinite;
        }

        .hotline {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .hotline::before {
          content: '📞';
          font-size: 16px;
          animation: pulse 2s infinite;
        }

        .main-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 30px;
          margin: 20px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          backdrop-filter: blur(20px);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(255, 255, 255, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
          animation: cardSlideUp 1.2s ease-out 0.3s both;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .main-header:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(255, 255, 255, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .main-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: slideShine 3s infinite;
        }

        .tagline {
          position: absolute;
          bottom: -35px;
          left: 35px;
          font-size: 14px;
          font-weight: 600;
          color: white;
          background: linear-gradient(135deg, #1d4ed8, #0f172a);
          padding: 10px 20px;
          border-radius: 25px;
          box-shadow: 0 8px 20px rgba(29, 78, 216, 0.4);
          animation: taglineSlideIn 1.5s ease-out 0.8s both;
          white-space: nowrap;
        }

        .tagline::before {
          content: '✨';
          margin-right: 8px;
        }

        .logo-area {
          display: flex;
          align-items: center;
          animation: logoZoomIn 1s ease-out 0.5s both;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .logo-area:hover {
          transform: scale(1.05);
        }

        .logo-area img {
          width: 80px;
          height: 80px;
          object-fit: contain;
          border-radius: 50%;
          box-shadow: 0 8px 20px rgba(29, 78, 216, 0.3);
          transition: all 0.3s ease;
        }

        .logo-area:hover img {
          transform: rotate(360deg);
          box-shadow: 0 12px 30px rgba(29, 78, 216, 0.5);
        }

        .logo-text {
          margin-left: 20px;
        }

        .logo-text h1 {
          background: linear-gradient(135deg, #1d4ed8, #0f172a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 32px;
          font-weight: 900;
          letter-spacing: -1px;
          margin-bottom: 2px;
        }

        .logo-text p {
          font-size: 14px;
          color: #475569;
          font-weight: 500;
          font-style: italic;
        }

        .middle-container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 25px;
        }

        .search-container {
          display: flex;
          border-radius: 50px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          background: white;
          animation: searchSlideIn 1s ease-out 0.7s both;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .search-container:focus-within {
          transform: scale(1.05);
          border-color: #1d4ed8;
          box-shadow: 0 12px 30px rgba(29, 78, 216, 0.3);
        }

        .search-container input {
          padding: 12px 20px;
          border: none;
          outline: none;
          font-size: 14px;
          width: 250px;
          background: transparent;
          color: #1a202c;
        }

        .search-container input::placeholder {
          color: #64748b;
        }

        .search-container button {
          padding: 12px 20px;
          background: linear-gradient(135deg, #1d4ed8, #0f172a);
          color: white;
          border: none;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .search-container button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .search-container button:hover::before {
          left: 100%;
        }

        .language-selector {
          display: flex;
          align-items: center;
          gap: 12px;
          animation: langSlideIn 1s ease-out 0.9s both;
        }

        .language-selector select {
          padding: 12px 16px;
          border-radius: 12px;
          border: 2px solid #e2e8f0;
          background: white;
          color: #1a202c;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
          outline: none;
        }

        .language-selector select:hover,
        .language-selector select:focus {
          border-color: #1d4ed8;
          box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.15);
        }

        .language-selector img {
          width: 28px;
          height: 20px;
          border-radius: 4px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        nav {
          background: linear-gradient(135deg, #0f172a, #1e293b);
          display: flex;
          align-items: center;
          padding: 18px 30px;
          margin: 0 20px;
          border-radius: 0 0 20px 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          color: white;
          font-size: 14px;
          font-weight: 600;
          animation: navSlideUp 1s ease-out 1.1s both;
          position: relative;
          overflow: hidden;
        }

        nav::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4), transparent);
        }

        .dropdown {
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #1d4ed8, #2563eb);
          padding: 12px 20px;
          border-radius: 25px;
          margin-right: 30px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(29, 78, 216, 0.4);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .dropdown::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .dropdown:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(29, 78, 216, 0.5);
        }

        .dropdown:hover::before {
          left: 100%;
        }

        .menu-item {
          margin-right: 30px;
          font-weight: 600;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
          padding: 8px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-size: 13px;
        }

        .menu-item::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #1d4ed8, #3b82f6);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .menu-item:hover,
        .menu-item.active {
          color: #60a5fa;
          transform: translateY(-1px);
        }

        .menu-item:hover::before,
        .menu-item.active::before {
          width: 100%;
        }

        /* Animations */
        @keyframes headerSlideIn {
          from { opacity: 0; transform: translateY(-100px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
          from { transform: translateY(-50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes cardSlideUp {
          from { transform: translateY(80px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes taglineSlideIn {
          from { transform: translateY(20px) scale(0.8); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }

        @keyframes logoZoomIn {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes searchSlideIn {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes langSlideIn {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes navSlideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes slideShine {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes particleFloat {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }

        @media (max-width: 768px) {
          .main-header {
            flex-direction: column;
            gap: 20px;
            padding: 25px 20px;
          }
          .middle-container {
            width: 100%;
            justify-content: center;
          }
          .search-container input {
            width: 200px;
          }
          nav {
            flex-wrap: wrap;
            gap: 15px;
          }
          .menu-item {
            margin-right: 15px;
            font-size: 12px;
          }
        }
      `}</style>

      {/* Background Decoration */}
      <div className="bg-decoration">
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
        
       <div className="floating-particles">
  {particles.map((p) => (
    <div
      key={p.id}
      className="particle"
      style={{
        left: p.left,
        animationDuration: p.duration,
        animationDelay: p.delay,
      }}
    />
  ))}
</div>
      </div>

      <header>
        <div className="top-bar">
          <div className="hotline">Hotline (+91) 44-2688 0737</div>
          <div style={{ fontSize: '12px', opacity: 0.9 }}>
            🌟 Premium Metallurgy Solutions | Trusted Since 1995
          </div>
        </div>

        <div className="main-header">
          <div className="logo-area">
            <img
              src="https://images-platform.99static.com/mx5CtlcMEwKY37aZGeZZFLaJn5w=/500x500/top/smart/99designs-contests-attachments/55/55214/attachment_55214390"
              alt="Omnitech Logo"
            />
            <div className="logo-text">
              <h1>Omnitech</h1>
              <p>Advanced Metallurgy Solutions</p>
            </div>
          </div>

          <div className="middle-container">
            <div className="search-container">
              <input type="text" placeholder="Search products, services..." />
              <button>🔍</button>
            </div>
            <div className="language-selector">
              <img src="https://flagcdn.com/w40/in.png" alt="India Flag" />
              <select>
                <option value="en">English</option>
                <option value="hi">हिन्दी (Hindi)</option>
                <option value="fr">Français (French)</option>
                <option value="de">Deutsch (German)</option>
                <option value="es">Español (Spanish)</option>
                <option value="jp">日本語 (Japanese)</option>
                <option value="th">ไทย (Thai)</option>
              </select>
            </div>
          </div>
          
          <div className="tagline">
            Empowering Innovation | Excellence in Metallurgy
          </div>
        </div>

        <nav>
          <div className="dropdown">☰ ALL PRODUCTS</div>
          {['HOME', 'ABOUT', 'PRODUCTS', 'SERVICES', 'TRAINING', 'CONTACT'].map((item) => {
            const path = item === 'HOME' ? '/' : `/${item.toLowerCase()}`;
            return (
              <Link href={path} key={item}>
                <span
                  className={`menu-item ${activeMenu === item ? 'active' : ''}`}
                  onClick={() => setActiveMenu(item)}
                >
                  {item}
                </span>
              </Link>
            );
          })}
        </nav>
      </header>
    </>
  );
}
