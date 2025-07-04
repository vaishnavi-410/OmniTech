'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
<Link href="/about" className="cta-button" data-aos="zoom-in" data-aos-delay="500">
  Be Inspired by Omnitech
</Link>

const About = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({ duration: 1200 });
    }
  }, []);

  return (
    <section className="content-section" data-aos="fade-up" id="about">
      <div className="content-left" data-aos="fade-right">
        <h2>About Omnitech</h2>
        <p data-aos="fade-up" data-aos-delay="200">
          Omnitech is a leading supplier of metallurgy products designed to meet the needs of modern industries.
          Our expert solutions cater to research, production, and quality control, ensuring unmatched reliability and performance.
        </p>
        <ul data-aos="fade-up" data-aos-delay="300">
          <li>✅ Improves specimen preparation efficiency</li>
          <li>✅ Frees up operator time</li>
          <li>✅ Increased polishing quality</li>
          <li>✅ Ensures result consistency</li>
        </ul>
        <a href="#learn-more" className="cta-button" data-aos="zoom-in" data-aos-delay="500">
          Be Inspired by Omnitech
        </a>
      </div>

      <div className="content-right" data-aos="fade-left">
        <div className="image-slide"></div>
      </div>

      <style jsx>{`
        :root {
          --navy: #0a1f44;
          --blue-accent: #00b8d9;
          --white: #ffffff;
          --gray: #7f8c8d;
        }

        .content-section {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1400px;
          margin: 80px auto;
          height: 520px;
          background-color: var(--white);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
        }

        .content-left {
          flex: 1;
          padding: 60px;
          z-index: 2;
        }

        .content-left h2 {
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 20px;
          position: relative;
        }

        .content-left h2::after {
          content: '';
          width: 60px;
          height: 4px;
          background-color: var(--blue-accent);
          position: absolute;
          left: 0;
          bottom: -10px;
          border-radius: 2px;
        }

        .content-left p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--gray);
          margin-bottom: 25px;
        }

        .content-left ul {
          padding-left: 0;
          margin-bottom: 30px;
        }

        .content-left ul li {
          list-style: none;
          margin-bottom: 12px;
          font-size: 1rem;
          color: var(--gray);
          font-weight: 400;
          transition: all 0.3s ease;
          padding-left: 10px;
        }

        .content-left ul li:hover {
          transform: translateX(10px) scale(1.05);
          color: var(--blue-accent);
        }

        .cta-button {
          display: inline-block;
          background: var(--navy);
          color: var(--white);
          padding: 12px 28px;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(10, 31, 68, 0.2);
        }

        .cta-button:hover {
          background: var(--blue-accent);
          transform: translateY(-3px);
        }

        .content-right {
          flex: 1;
          position: relative;
          height: 100%;
          overflow: hidden;
        }

        .image-slide {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1470&q=80');
          background-size: cover;
          background-position: center;
          clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
          transform: translateX(100%);
          animation: slideIn 2s ease-out forwards;
          transition: transform 0.4s ease, filter 0.4s ease;
        }

        .image-slide:hover {
          transform: scale(1.03) rotate(1deg);
          filter: brightness(1.1);
        }

        @keyframes slideIn {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @media (max-width: 992px) {
          .content-section {
            flex-direction: column;
            height: auto;
          }

          .content-left {
            padding: 40px 30px;
          }

          .content-right {
            height: 300px;
            width: 100%;
          }

          .image-slide {
            clip-path: none;
            transform: translateY(100%);
            animation: slideInY 1.5s ease-out forwards;
          }

          @keyframes slideInY {
            0% {
              transform: translateY(100%);
            }
            100% {
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </section>
  );
};

export default About;
