'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomeSection() {
  const slidesRef = useRef(null);
  const progressRef = useRef(null);
  const intervalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      img: '/images/slider/slide1.png',
      title: 'Precision Machines',
      desc: 'High accuracy for advanced manufacturing with our state-of-the-art industrial equipment.',
    },
    {
      img: '/images/slider/slide2.png',
      title: 'Automation Systems',
      desc: 'Streamlining processes for maximum efficiency with cutting-edge robotic solutions.',
    },
    {
      img: '/images/slider/slide3.jpg',
      title: 'Smart Factories',
      desc: 'Transforming production lines into intelligent Industry 4.0 systems with IoT integration.',
    },
    {
      img: '/images/slider/slide4.png',
      title: 'Eco-Friendly Solutions',
      desc: 'Building sustainable technologies for a greener industrial future.',
    },
  ];

  const goToSlide = (index) => {
    setCurrentIndex(index);
    if (isPlaying) startProgressBar();
  };

  const goToNext = () => goToSlide((currentIndex + 1) % slides.length);
  const goToPrev = () => goToSlide((currentIndex - 1 + slides.length) % slides.length);

  const togglePlayPause = () => {
    isPlaying ? stopAutoSlide() : startAutoSlide();
  };

  const startProgressBar = () => {
    if (progressRef.current) {
      progressRef.current.style.transition = 'none';
      progressRef.current.style.width = '0%';
      setTimeout(() => {
        progressRef.current.style.transition = 'width 5s linear';
        progressRef.current.style.width = '100%';
      }, 50);
    }
  };

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(goToNext, 5000);
    setIsPlaying(true);
    startProgressBar();
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
    setIsPlaying(false);
    if (progressRef.current) {
      progressRef.current.style.transition = 'none';
      progressRef.current.style.width = '0%';
    }
  };

  useEffect(() => {
    startAutoSlide();

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrev();
      else if (e.key === 'ArrowRight') goToNext();
      else if (e.key === ' ') togglePlayPause();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      clearInterval(intervalRef.current);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
    const handleScroll = () => AOS.refresh();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen max-h-[900px] min-h-[600px] overflow-hidden" data-aos="fade-up">
      {/* Arrows */}
      <button
        onClick={goToPrev}
        className="absolute z-20 top-1/2 left-4 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 text-white text-xl rounded-full flex items-center justify-center hover:bg-white/20 transition"
      >
        &#8249;
      </button>
      <button
        onClick={goToNext}
        className="absolute z-20 top-1/2 right-4 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 text-white text-xl rounded-full flex items-center justify-center hover:bg-white/20 transition"
      >
        &#8250;
      </button>

      {/* Slides */}
      <div
        ref={slidesRef}
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full flex-shrink-0 h-full group">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: index === currentIndex ? 1 : 0, y: index === currentIndex ? 0 : 30 }}
              transition={{ duration: 0.6 }}
              className={`absolute bottom-10 sm:bottom-14 left-4 sm:left-auto sm:right-8 z-20 bg-gradient-to-br from-[#0a1f44ee] to-[#0d2c5add] text-white border-l-4 border-cyan-400 p-6 sm:p-8 rounded-2xl shadow-lg max-w-full sm:max-w-md md:max-w-lg backdrop-blur-xl transform transition duration-500 ease-in-out group-hover:scale-105 hover:shadow-2xl ${
                index === currentIndex ? '' : 'pointer-events-none'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <SparklesIcon className="h-6 w-6 text-cyan-400" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{slide.title}</h1>
              </div>
              <p className="text-sm sm:text-base md:text-lg">{slide.desc}</p>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer transition-all duration-300 ${
              index === currentIndex
                ? 'w-7 h-3 rounded-md bg-cyan-400'
                : 'w-3 h-3 rounded-full bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400"
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
}
