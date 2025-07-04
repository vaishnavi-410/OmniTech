'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function HomeSection() {
  const slidesRef = useRef(null);
  const progressRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  const slides = [
    {
      img: 'https://www.etasis.com.tr/en/wp-content/uploads/2023/08/1-1024x576-1.jpg',
      title: 'Precision Machines',
      desc: 'High accuracy for advanced manufacturing with our state-of-the-art industrial equipment.',
      btn: 'Learn More',
    },
    {
      img: 'https://interlakemecalux.cdnwm.com/blog/img/robotic-arms-functions.1.1.jpg',
      title: 'Automation Systems',
      desc: 'Streamlining processes for maximum efficiency with cutting-edge robotic solutions.',
      btn: 'Discover',
    },
    {
      img: 'https://cdn.prod.website-files.com/6602a4b67bdde9cb5f763066/67ac650a7de69f504720bcf3_shutterstock_team-3-1120x630.jpeg',
      title: 'Smart Factories',
      desc: 'Transforming production lines into intelligent Industry 4.0 systems with IoT integration.',
      btn: 'Explore',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661877153361-ef5e3b108237?q=80&w=1170&auto=format&fit=crop',
      title: 'Eco-Friendly Solutions',
      desc: 'Building sustainable technologies for a greener industrial future.',
      btn: 'Get Started',
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
    <>
      <style jsx>{`
        :root {
          --navy-blue: #0a1f44;
          --highlight: #00b8d9;
          --light-blue: #00909e;
          --white: #ffffff;
        }

        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          max-height: 900px;
          min-height: 600px;
          overflow: hidden;
        }

        .slides {
          display: flex;
          height: 100%;
          transform: translateX(-${currentIndex * 100}%);
          transition: transform 0.8s ease-in-out;
        }

        .slide {
          position: relative;
          flex: 0 0 100%;
          height: 100%;
        }

        .slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        

        .slide::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 31, 68, 0.4);
          clip-path: polygon(100% 0, 100% 100%, 50% 100%);
          backdrop-filter: blur(3px);
          z-index: 1;
        }

        .content-box {
          position: absolute;
          right: 8%;
          bottom: 14%;
          max-width: 480px;
          padding: 2rem;
          background: rgba(10, 31, 68, 0.85);
          backdrop-filter: blur(12px);
          color: #ffffff;
          border-left: 5px solid var(--highlight);
          border-radius: 16px;
          z-index: 2;
          transform: translateY(30px);
          opacity: 0;
          transition: all 0.8s ease 0.3s;
        }

        .slide.active .content-box {
          transform: translateY(0);
          opacity: 1;
        }

        .content-box h1 {
          margin-bottom: 1rem;
          font-size: 2.2rem;
          font-weight: bold;
          color: #ffffff;
        }

        .content-box p {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          color: #ffffff;
        }

        .content-box button {
          padding: 0.8rem 2rem;
          font-size: 1rem;
          background: linear-gradient(135deg, var(--light-blue), var(--highlight));
          border: none;
          color: #ffffff;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .content-box button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 176, 217, 0.3);
        }

        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          font-size: 1.5rem;
          border-radius: 50%;
          cursor: pointer;
          z-index: 10;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .arrow.left { left: 30px; }
        .arrow.right { right: 30px; }

        .indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 10;
        }

        .dot {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          cursor: pointer;
        }

        .dot.active {
          width: 28px;
          background: var(--highlight);
          border-radius: 6px;
        }

        .progress-bar-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.15);
        }

        .progress-bar {
          width: 0%;
          height: 100%;
          background: linear-gradient(to right, var(--light-blue), var(--highlight));
        }

        @media (max-width: 768px) {
          .content-box {
            right: 5%;
            bottom: 10%;
            max-width: 90%;
            padding: 1.5rem;
          }
          .arrow {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }
        }
      `}</style>

      <div className="hero">
        <button className="arrow left" onClick={goToPrev}>&#8249;</button>
        <button className="arrow right" onClick={goToNext}>&#8250;</button>

        <div className="slides" ref={slidesRef}>
          {slides.map((slide, i) => (
            <div className={`slide ${i === currentIndex ? 'active' : ''}`} key={i}>
              <img src={slide.img} alt={slide.title} />
              <div className="content-box">
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>
                <button>{slide.btn}</button>
              </div>
            </div>
          ))}
        </div>

        <div className="indicator">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar" ref={progressRef}></div>
        </div>
      </div>
    </>
  );
}
