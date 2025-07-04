'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Categories() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const showAlert = (name) => {
    alert("You clicked on " + name);
  };

  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }

        html, body {
          overflow-x: hidden;
        }

        .categories-wrapper {
          position: relative;
          background: linear-gradient(135deg, #0f172a, #1e40af);
          padding: 60px 20px;
          overflow: hidden;
          width: 100%;
        }

        .bubble {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(5px);
          animation: float 12s ease-in-out infinite;
          z-index: 0;
        }

        .bubble:nth-child(1) { width: 100px; height: 100px; left: 10%; top: 20%; animation-delay: 0s; }
        .bubble:nth-child(2) { width: 120px; height: 120px; left: 70%; top: 40%; animation-delay: 2s; }
        .bubble:nth-child(3) { width: 90px; height: 90px; left: 50%; top: 70%; animation-delay: 4s; }
        .bubble:nth-child(4) { width: 110px; height: 110px; left: 80%; top: 15%; animation-delay: 6s; }
        .bubble:nth-child(5) { width: 75px; height: 75px; left: 25%; top: 60%; animation-delay: 8s; }
        .bubble:nth-child(6) { width: 95px; height: 95px; left: 15%; top: 80%; animation-delay: 1s; }
        .bubble:nth-child(7) { width: 85px; height: 85px; left: 60%; top: 25%; animation-delay: 3s; }
        .bubble:nth-child(8) { width: 80px; height: 80px; left: 35%; top: 10%; animation-delay: 5s; }
        .bubble:nth-child(9) { width: 130px; height: 130px; left: 85%; top: 50%; animation-delay: 7s; }
        .bubble:nth-child(10) { width: 60px; height: 60px; left: 40%; top: 85%; animation-delay: 9s; }

        @keyframes float {
          0% { transform: translateY(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-40px) scale(1.1); opacity: 0.6; }
          100% { transform: translateY(0px) scale(1); opacity: 0.4; }
        }

        .categories-title {
          text-align: center;
          font-size: 36px;
          font-weight: 900;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
          background: linear-gradient(to right, #7dd3fc, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          z-index: 1;
        }

        .categories-subtitle {
          text-align: center;
          font-size: 16px;
          font-weight: 500;
          color: #cbd5e1;
          margin-bottom: 45px;
          position: relative;
          z-index: 1;
        }

        .categories-scroll {
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          padding-bottom: 10px;
          position: relative;
          z-index: 1;
        }

        .categories-section {
          display: flex;
          gap: 30px;
          padding: 20px 0;
          min-width: max-content;
        }

        .category-card {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 2px solid #60a5fa;
          border-radius: 20px;
          padding: 35px 20px;
          width: 240px;
          height: 280px;
          background: #f8fafc;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          cursor: pointer;
          scroll-snap-align: start;
          z-index: 1;
        }

        .category-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 18px 30px rgba(96, 165, 250, 0.4);
        }

        .category-card .icon {
          width: 200px;
          height: 200px;
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1.5px solid #d3e2f2;
          border-radius: 14px;
          background: #eff6ff;
        }

        .category-card img {
          max-width: 180px;
          max-height: 180px;
          object-fit: contain;
        }

        .category-card p {
          font-size: 17px;
          font-weight: 700;
          color: #1e3a8a;
          text-align: center;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .category-card {
            width: 200px;
            padding: 25px 15px;
          }

          .category-card .icon {
            width: 160px;
            height: 160px;
          }

          .category-card img {
            max-width: 140px;
            max-height: 140px;
          }

          .categories-title {
            font-size: 28px;
          }

          .categories-subtitle {
            font-size: 14px;
          }
        }
      `}</style>

      <section className="categories-wrapper" id="categories">
        {/* Background Bubbles */}
        {[...Array(10)].map((_, i) => <div key={i} className="bubble" />)}

        {/* Title */}
        <h2 className="categories-title" data-aos="zoom-in">Product Categories</h2>
        <p className="categories-subtitle" data-aos="fade-up">
          Explore our specialized range of metallurgy solutions
        </p>

        {/* Cards */}
        <div className="categories-scroll">
          <div className="categories-section">
            {[
              { name: 'Cutting', img: 'https://media.istockphoto.com/id/177007701/photo/laser-cutting-of-metal-sheet-with-sparks.jpg?s=612x612&w=0&k=20&c=oYWr7odGnFBClfVgtV442EL-rGLwaIVW1p2nJSsLji8=' },
              { name: 'Mounting', img: 'https://images.unsplash.com/photo-1691828715713-4f3eaf16f857?w=600' },
              { name: 'Grinding', img: 'https://img.freepik.com/free-photo/view-worker-grinding-piece-metal_268835-4092.jpg' },
              { name: 'Polishing', img: 'https://img.freepik.com/free-photo/tiler-working-renovation-apartment_23-2149278570.jpg' },
              { name: 'Microscopes', img: 'https://img.freepik.com/free-photo/scientist-analyzes-bacterium-with-high-scale-magnification-generated-by-ai_188544-27928.jpg' },
              { name: 'Hardness Tester', img: 'https://img.freepik.com/premium-photo/worker-uses-touch-control-panel-scene-skilled-worker-uses-electronic-control-panel-modern_1096515-29369.jpg' }
            ].map((item, index) => (
              <div
                key={index}
                className="category-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => showAlert(item.name)}
              >
                <div className="icon">
                  <img src={item.img} alt={item.name} />
                </div>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
