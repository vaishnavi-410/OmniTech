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
                box.classList.add('opacity-100', 'translate-y-0', 'scale-100');
              }, index * 150);
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
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-[#001f3f] to-[#003d73] py-24 overflow-hidden text-white"
    >
      {/* Soft background radial glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[130%] h-[160%] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_70%)] z-0"></div>

      {/* Stats Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-10">
        {[
          { icon: 'fa-thumbs-up', number: 55000, label: 'Installed Products' },
          { icon: 'fa-award', number: 45, label: 'Years of Experience' },
          { icon: 'fa-users', number: 150, label: 'Employees' },
          { icon: 'fa-globe', number: 40, label: 'Worldwide Partners' },
        ].map((item, i) => (
          <div
            key={i}
            className="stat-box transform translate-y-12 scale-95 opacity-0 transition-all duration-700 ease-in-out bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:-translate-y-3 hover:scale-105 hover:shadow-[0_30px_50px_rgba(0,0,0,0.4)] flex-1 min-w-[240px] max-w-sm"
          >
            <div className="icon-circle w-[110px] h-[110px] mx-auto mb-6 rounded-full bg-[radial-gradient(circle,#ffffff,#cbe6ff)] flex items-center justify-center shadow-[0_6px_12px_rgba(255,255,255,0.2)] transition-transform hover:scale-110">
              <i className={`fas ${item.icon} text-[44px] text-[#003d73]`}></i>
            </div>
            <div
              className="stat-number text-[36px] font-extrabold mb-2 text-white tracking-wide"
              data-target={item.number}
            >
              0
            </div>
            <div className="stat-label text-sm text-[#d8f0ff] uppercase tracking-wider">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
