'use client';
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const particleCount = 20;
    const container = document.querySelector('.particles-container');

    if (container) {
      container.innerHTML = '';

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${8 + Math.random() * 4}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(particle);
      }
    }
  }, []);

  return (
    <section className="about-section">
      <div className="particles-container"></div>

      <div className="about-content">
        <h2>About Omnitech</h2>
        <p>
          Omnitech offers advanced technology solutions for material testing, machine automation, and engineering innovations. We deliver high-performance systems tailored to industrial standards.
        </p>
      </div>

      <style jsx>{`
        .about-section {
          position: relative;
          padding: 80px 20px;
          background-color: #f2f6ff;
          overflow: hidden;
          text-align: center;
        }

        .about-content {
          max-width: 800px;
          margin: auto;
          z-index: 2;
          position: relative;
        }

        .about-content h2 {
          font-size: 2.5rem;
          color: #0a0a23;
          margin-bottom: 15px;
        }

        .about-content p {
          font-size: 1.2rem;
          color: #333;
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 8px;
          height: 8px;
          background-color: rgba(10, 10, 35, 0.3);
          border-radius: 50%;
          animation: float 12s linear infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
