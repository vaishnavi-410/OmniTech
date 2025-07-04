'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function Experience() {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const counters = sectionRef.current.querySelectorAll('.stat-number');
    const statBoxes = sectionRef.current.querySelectorAll('.stat-box');

    const animateCounter = (counter) => {
      const target = +counter.getAttribute('data-target');
      const increment = target / 200;
      const updateCount = () => {
        const current = +counter.innerText.replace(/,/g, '');
        if (current < target) {
          counter.innerText = Math.ceil(current + increment).toLocaleString();
          setTimeout(updateCount, 15);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };
      updateCount();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            counters.forEach((counter) => animateCounter(counter));
            statBoxes.forEach((box, index) => {
              setTimeout(() => {
                box.classList.add('visible');
              }, index * 150); // staggered animation
            });
            setAnimated(true);
            observer.unobserve(sectionRef.current);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(sectionRef.current);
  }, [animated]);

  return (
    <>
      <style jsx>{`
        .stats-section {
          position: relative;
          background: linear-gradient(135deg, #001f3f, #003d73);
          padding: 100px 0;
          color: #ffffff;
          overflow: hidden;
        }

        .stats-section::before {
          content: '';
          position: absolute;
          top: -20%;
          left: -10%;
          width: 130%;
          height: 160%;
          background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.05), transparent 70%);
          z-index: 0;
        }

        .stats-container {
          max-width: 1200px;
          margin: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 40px;
          padding: 0 30px;
          z-index: 1;
          position: relative;
        }

        .stat-box {
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 40px 25px;
          flex: 1 1 240px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          transform: translateY(50px);
          opacity: 0;
          transition: all 0.6s ease;
        }

        .stat-box.visible {
          transform: translateY(0);
          opacity: 1;
        }

        .stat-box:hover {
          transform: translateY(-12px) scale(1.05);
          box-shadow: 0 25px 45px rgba(0, 0, 0, 0.4);
        }

        .icon-circle {
          width: 110px;
          height: 110px;
          margin: 0 auto 20px;
          border-radius: 50%;
          background: radial-gradient(circle, #ffffff, #cbe6ff);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 12px rgba(255, 255, 255, 0.2);
          transition: transform 0.3s ease;
        }

        .stat-box:hover .icon-circle {
          transform: scale(1.1);
        }

        .icon-circle i {
          font-size: 44px;
          color: #003d73;
        }

        .stat-number {
          font-size: 34px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 10px;
        }

        .stat-label {
          font-size: 14px;
          color: #e1f3ff;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .stats-container {
            flex-direction: column;
            gap: 30px;
          }
          .stat-box {
            max-width: 320px;
            width: 100%;
          }
        }
      `}</style>

      <section className="stats-section" ref={sectionRef}>
        <div className="stats-container">
          <div className="stat-box">
            <div className="icon-circle">
              <i className="fas fa-thumbs-up"></i>
            </div>
            <div className="stat-number" data-target="55000">0</div>
            <div className="stat-label">Installed Products</div>
          </div>

          <div className="stat-box">
            <div className="icon-circle">
              <i className="fas fa-award"></i>
            </div>
            <div className="stat-number" data-target="45">0</div>
            <div className="stat-label">Years of Experience</div>
          </div>

          <div className="stat-box">
            <div className="icon-circle">
              <i className="fas fa-users"></i>
            </div>
            <div className="stat-number" data-target="150">0</div>
            <div className="stat-label">Employees</div>
          </div>

          <div className="stat-box">
            <div className="icon-circle">
              <i className="fas fa-globe"></i>
            </div>
            <div className="stat-number" data-target="40">0</div>
            <div className="stat-label">Worldwide Partners</div>
          </div>
        </div>
      </section>
    </>
  );
}
