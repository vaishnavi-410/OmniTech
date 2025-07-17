"use client";

import { useRef, useState, useEffect } from "react";
import styles from "./automation.module.css";

export default function ProductPage() {
  const galleryImages = ["/auto.jpg", "/AUTO1.jpg", "/AUTO2.jpg", "/AUTO3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const specRef = useRef(null);
  const benefitsRef = useRef(null);

  const [leftInView, setLeftInView] = useState(false);
  const [rightInView, setRightInView] = useState(false);
  const [specInView, setSpecInView] = useState(false);
  const [benefitsInView, setBenefitsInView] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerSpec = new IntersectionObserver(
      ([entry]) => setSpecInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const observerBenefits = new IntersectionObserver(
      ([entry]) => setBenefitsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (specRef.current) observerSpec.observe(specRef.current);
    if (benefitsRef.current) observerBenefits.observe(benefitsRef.current);
    return () => {
      if (specRef.current) observerSpec.unobserve(specRef.current);
      if (benefitsRef.current) observerBenefits.unobserve(benefitsRef.current);
    };
  }, []);

  useEffect(() => {
    const observerLeft = new IntersectionObserver(
      ([entry]) => setLeftInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const observerRight = new IntersectionObserver(
      ([entry]) => setRightInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (leftCardRef.current) observerLeft.observe(leftCardRef.current);
    if (rightCardRef.current) observerRight.observe(rightCardRef.current);
    return () => {
      if (leftCardRef.current) observerLeft.unobserve(leftCardRef.current);
      if (rightCardRef.current) observerRight.unobserve(rightCardRef.current);
    };
  }, []);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <div className={`${styles.bannerWrapper} ${styles.animateFadeIn}`}>
          <img
            src="/banner.jpg"
            alt="Banner"
            className={styles.bannerImage}
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              height: `${180 + scrollY * 0.3}px`,
              transition: "transform 0.1s ease-out, height 0.1s ease-out",
            }}
            
          />
      

          <div className={styles.bannerOverlay}></div>
          <div className={styles.headerText}>
            <h1>AUTOCUT</h1>
            <p>PRECISION CUTTING</p>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.infoCard}>
          <div className={styles.imageSection}>
            <button className={styles.arrow} onClick={handlePrev}>
              &lt;
            </button>
            <img
              src={galleryImages[currentIndex]}
              alt="AutoCut Machine"
              className={styles.galleryImage}
            />
            
            <button className={styles.arrow} onClick={handleNext}>
              &gt;
            </button>
          </div>
          <div className={styles.textSection}>
            <h2>AutoCut Precision Cutting</h2>
            <p>
              The AutoCut is a high-precision automatic cutting machine designed for metallographic and
              materialographic sample preparation. It features motorized XYZ motions and automatic serial
              cutting for efficient and accurate sectioning.
            </p>
            <h3>AutoCut Key Benefits</h3>
            <ul>
              <li>Motorized XYZ motions for precise positioning</li>
              <li>Automatic serial cutting for high throughput</li>
              <li>T‑slotted bed with swiveling option for flexible setups</li>
              <li>Laser marking for accurate cut alignment</li>
              <li>Smart cutting feed for optimized performance</li>
              <li>Variable speed control (200 to 4000 rpm)</li>
            </ul>
          </div>
        </section>

        <section className={styles.bottomGrid}>
          <div className={styles.featureBox}>
            <h2>Additional Features</h2>
            <ul>
              <li>Compact design for efficient use of lab space</li>
              <li>User-friendly interface with programmable settings</li>
              <li>Robust construction for long-term durability</li>
            </ul>
            <div className={styles.downloadBrochure}>
              <a href="/autocut-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download 
              >
                <button className={styles.brochureButton}>📥 Download Brochure</button>
              </a>
            </div>
          </div>

          <div className={`${styles.accessoryBox} ${styles.animateFadeIn}`}>
            <h2>Consumables & Accessories</h2>
            <div className={styles.productRow}>
              <div
                ref={leftCardRef}
                className={`${styles.productCard} ${leftInView ? styles.slideInLeft : styles.hidden}`}
              >
                <img src="/cutting-wheel.jpg" alt="Cutting Wheel" />
                <h3>Cutting Wheels</h3>
                <p>250mm and 300mm abrasive wheels</p>
                <button>View Details</button>
              </div>

              <div
                ref={rightCardRef}
                className={`${styles.productCard} ${rightInView ? styles.slideInRight : styles.hidden}`}
              >
                <img src="/cutting-fluid.jpg" alt="Cutting Fluid" />
                <h3>Cutting Fluid</h3>
                <p>For precision cutting</p>
                <button>View Details</button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.specCardSection} ref={specRef}>
          <div className={`${styles.specCard} ${specInView ? styles.animatePopUp : ""}`}>
            <table className={styles.specModernTable}>
              <thead>
                <tr>
                  <th>Specification</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cutting Speed</td>
                  <td>500 mm/s</td>
                </tr>
                <tr>
                  <td>Cutting Accuracy</td>
                  <td>±0.1 mm</td>
                </tr>
                <tr>
                  <td>Material Compatibility</td>
                  <td>Steel, Aluminum, Plastic, Wood</td>
                </tr>
                <tr>
                  <td>Control System</td>
                  <td>PLC with Touchscreen Interface</td>
                </tr>
                <tr>
                  <td>Power Consumption</td>
                  <td>2.5 kW</td>
                </tr>
                <tr>
                  <td>Dimensions</td>
                  <td>1200 x 800 x 1500 mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.benefitsSection} ref={benefitsRef}>
          <h2 className={styles.benefitsHeading}>Features & Benefits</h2>
          <div className={`${styles.benefitGrid} ${benefitsInView ? styles.animatePopUp : ""}`}>
            <div className={styles.benefitCard}>
              <h3>Precision Cutting</h3>
              <p>
                Achieve consistent, accurate cuts with advanced laser guidance, reducing material waste.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3>User-Friendly Interface</h3>
              <p>
                Touchscreen interface allows easy operation, setup, and monitoring for operators.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Energy Efficient</h3>
              <p>
                Low power consumption while maintaining high output efficiency reduces operational costs.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
