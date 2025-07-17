'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Experience() {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  // Observer for triggering animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start('visible');
            setIsVisible(true);
          } else {
            controls.start('hidden');
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const stats = [
    { icon: 'fa-thumbs-up', number: 55000, label: 'Installed Products' },
    { icon: 'fa-award', number: 45, label: 'Years of Experience' },
    { icon: 'fa-users', number: 150, label: 'Employees' },
    { icon: 'fa-globe', number: 40, label: 'Worldwide Partners' },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative bg-[#010e1a] py-28 overflow-hidden text-white"
      >
        {/* Floating Bubbles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 shadow-[0_0_25px_rgba(255,255,255,0.03)] backdrop-blur-sm z-0"
            style={{
              width: [70, 90, 75, 85, 60, 65, 80, 50][i],
              height: [70, 90, 75, 85, 60, 65, 80, 50][i],
              left: ["10%", "70%", "50%", "80%", "25%", "15%", "60%", "40%"][i],
              top: ["20%", "40%", "70%", "10%", "60%", "85%", "30%", "50%"][i],
              animation: 'float 15s ease-in-out infinite',
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}

        {/* Radial Background Glow */}
        <div className="absolute top-[-25%] left-[-15%] w-[150%] h-[180%] bg-[radial-gradient(circle_at_top_left,#1a3a5f,transparent)] z-0"></div>

        {/* Stats Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-8 sm:gap-10">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5, delay: index * 0.2 },
                },
              }}
              className="stat-box transform bg-white/5 backdrop-blur-xl border border-[#1f3c5d] rounded-3xl p-6 sm:p-8 text-center shadow-[0_6px_16px_rgba(0,0,0,0.15)] hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_14px_25px_rgba(0,0,0,0.25)] flex-1 min-w-[250px] max-w-[300px] sm:max-w-sm"
            >
              <div className="icon-circle w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] mx-auto mb-4 sm:mb-5 rounded-full bg-[radial-gradient(circle,#3c5e74,#1a293a)] flex items-center justify-center shadow-[0_4px_8px_rgba(255,255,255,0.2)] transition-transform hover:scale-105">
                <i className={`fas ${item.icon} text-[28px] sm:text-[34px] text-[#a5c9ff]`}></i>
              </div>
              <motion.div
                className="stat-number text-[26px] sm:text-[30px] font-extrabold mb-1 sm:mb-2 text-white tracking-wide"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
              >
                <CountUp target={item.number} />
              </motion.div>
              <div className="stat-label text-xs sm:text-sm text-[#a5c9ff] uppercase tracking-wider">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

// CountUp component
function CountUp({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    const incrementTime = 20;
    const step = Math.ceil(end / 100);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count.toLocaleString()}</>;
}
