'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function HomeSection() {
  const slidesRef = useRef(null);
  const progressRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

const slides = [
  {
    img: '/images/slider/slide1.jpg',
    title: 'Precision Machines',
    desc: 'High accuracy for advanced manufacturing with our state-of-the-art industrial equipment.',
    btn: 'Learn More',
    link: '/learn-more',
  },
  {
    img: '/images/slider/slide2.jpg',
    title: 'Automation Systems',
    desc: 'Streamlining processes for maximum efficiency with cutting-edge robotic solutions.',
    btn: 'Discover',
    link: '/discover',
  },
  {
    img: '/images/slider/slide3.jpg',
    title: 'Smart Factories',
    desc: 'Transforming production lines into intelligent Industry 4.0 systems with IoT integration.',
    btn: 'Explore',
    link: '/explore',
  },
  {
    img: '/images/slider/slide4.jpg',
    title: 'Eco-Friendly Solutions',
    desc: 'Building sustainable technologies for a greener industrial future.',
    btn: 'Get Started',
    link: '/get-started',
  },
];


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
    intervalRef.current = setInterval(() => goToSlide((currentIndex + 1) % slides.length), 5000);
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

  const togglePlayPause = () => {
    isPlaying ? stopAutoSlide() : startAutoSlide();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    if (isPlaying) startProgressBar();
  };

  const goToNext = () => goToSlide((currentIndex + 1) % slides.length);
  const goToPrev = () => goToSlide((currentIndex - 1 + slides.length) % slides.length);

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

  return (
    <div className="relative w-full h-screen max-h-[900px] min-h-[600px] overflow-hidden">
      {/* Arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 text-white text-xl rounded-full z-20 flex items-center justify-center hover:bg-white/20 transition"
        onClick={goToPrev}
      >
        &#8249;
      </button>

      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 text-white text-xl rounded-full z-20 flex items-center justify-center hover:bg-white/20 transition"
        onClick={goToNext}
      >
        &#8250;
      </button>

      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        ref={slidesRef}
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative flex-shrink-0 w-full h-full overflow-hidden">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700 ease-in-out"
            />

            <div className="absolute inset-0 z-10 bg-[#0a1f44aa] backdrop-blur-md clip-diagonal pointer-events-none" />

            <div
              className={`absolute right-4 left-4 sm:right-8 sm:left-auto bottom-10 sm:bottom-14 max-w-full sm:max-w-md md:max-w-lg p-6 sm:p-8 bg-[#0a1f44dd] text-white border-l-[5px] border-cyan-400 rounded-2xl z-20 backdrop-blur-xl shadow-lg transition-all duration-700 ease-in-out ${
                i === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{slide.title}</h1>
              <p className="text-sm sm:text-base md:text-lg mb-6">{slide.desc}</p>
              <Link href={slide.link}>
                <button className="px-5 py-2 sm:px-6 sm:py-2 text-sm sm:text-base text-white font-medium rounded-full bg-gradient-to-r from-cyan-600 to-cyan-400 hover:shadow-xl hover:-translate-y-1 transition">
                  {slide.btn}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === currentIndex ? 'w-7 bg-cyan-400 rounded-md' : 'bg-white/40'
            }`}
            onClick={() => goToSlide(i)}
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

      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(100% 0, 100% 100%, 50% 100%);
        }

        @media (max-width: 768px) {
          .clip-diagonal {
            clip-path: none;
          }
        }
      `}</style>
    </div>
  );
}
