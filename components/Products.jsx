'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Products() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filterCards = (e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll(".card").forEach((card) => {
      const title = card.querySelector("h2").textContent.toLowerCase();
      card.style.display = title.includes(query) ? "block" : "none";
    });
  };

  return (
    <>
      <style jsx>{`
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(to bottom, #003d73 0%, #eaf1f9 100%), url('https://www.transparenttextures.com/patterns/graphy.png');
          background-size: cover;
          background-attachment: fixed;
          margin: 0;
          padding: 0;
        }

        .section-spacing {
          height: 60px;
        }

        .section-heading {
          text-align: center;
          padding: 30px 20px 10px;
        }

        .section-heading h1 {
  font-size: 36px;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
  color: #001f4d; /* Navy Blue */
  text-shadow: 0 2px 6px rgba(0, 31, 77, 0.4);
  letter-spacing: 1px;
}



        .section-heading p {
          font-size: 16px;
          margin-top: 10px;
          color:rgb(97, 138, 181); 
        }

        .sticky-header {
          position: sticky;
          top: 0;
          background-color: #003d73;
          padding: 20px 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .sticky-header input[type="text"] {
          width: 280px;
          padding: 10px 16px;
          border-radius: 8px;
          border: 1px solid #00f0ff;
          background: transparent;
          color: #ffffff;
          font-size: 14px;
          box-shadow: 0 0 10px #00f0ff;
          transition: all 0.3s ease;
        }

        .sticky-header input[type="text"]::placeholder {
          color: #b0eaff;
          opacity: 0.8;
        }

        .sticky-header input[type="text"]:focus {
          outline: none;
          box-shadow: 0 0 15px #00f0ff, 0 0 5px #00f0ff inset;
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 60px;
          padding: 40px;
          justify-content: center;
        }

        .card {
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 14px rgba(0, 38, 77, 0.12);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          width: 85%;
          margin: 0 auto;
        }

        .card:hover {
          transform: scale(1.03);
          box-shadow: 0 10px 20px rgba(0, 64, 128, 0.2);
        }

        .card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .card:hover img {
          transform: scale(1.05);
        }

        .card-content {
          padding: 16px;
          flex-grow: 1;
        }

        .card h2 {
          margin: 0 0 10px 0;
          font-size: 20px;
          color: #002147;
        }

        .card p {
          font-size: 14px;
          color: #2b2b2b;
          line-height: 1.6;
        }

        .card button {
          background-color: #003d73;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 4px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 15px;
          transition: background-color 0.3s ease;
        }

        .card button:hover {
          background-color: #005099;
        }

        @media (max-width: 1024px) {
          .grid-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Space from previous page */}
      <div className="section-spacing"></div>

      {/* Title Heading */}
      <div className="section-heading"data-aos="fade-down" data-aos-duration="1200">
        <h1>OMNITECH MACHINES</h1>
        <p>Explore our specialized range of metallurgical machines</p>
      </div>

      {/* Search Bar */}
      <div className="sticky-header">
        <input
          type="text"
          placeholder="Search products..."
          id="search-box"
          onChange={filterCards}
        />
      </div>

      {/* Product Cards */}
      <div className="grid-container" id="product-grid">
        {/* Card 1 */}
        <div className="card" data-aos="fade-up">
          <img src="https://www.shutterstock.com/image-photo/worker-cut-steel-off-wheel-600nw-2057277344.jpg" alt="Cut-Off Machine" />
          <div className="card-content">
            <h2>Cut-Off Machines</h2>
            <p>Omnitech cut-off machines offer powerful benchtop and floor-standing models for precise sectioning.
              Ideal for metallographic sample preparation, they support high-speed cutting with minimal deformation.
              Rugged design ensures long-term durability. Safety shields and coolant systems protect the operator.
              User-friendly controls make setup easy. Designed for both industrial and lab use.</p>
            <button>To the product range</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card" data-aos="fade-up" data-aos-delay="100">
          <img src="https://media.gettyimages.com/id/510162486/photo/production-line-of-plastic-industry.jpg?s=612x612&w=gi&k=20&c=XzPK17hdKEkMWGa7dOHHHbS-MMhMfbNUrgUI-PmbwRk=" alt="Mounting Equipment" />
          <div className="card-content">
            <h2>Mounting Equipment</h2>
            <p>Omnitech’s mounting presses ensure stable sample embedding.
              Available in hot and UV variants. Easy mold handling and adjustable temperature & pressure settings.
              Built for high throughput environments. Compatible with a variety of resins and sample sizes.
              Compact, durable body suitable for modern labs.</p>
            <button>To the product range</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card" data-aos="fade-up" data-aos-delay="200">
          <img src="https://5.imimg.com/data5/KX/BS/MY-2398714/grinder-cum-polisher-500x500.jpg" alt="Grinders & Polishers" />
          <div className="card-content">
            <h2>Grinders & Polishers</h2>
            <p>Our grinder-polisher units provide excellent surface finishing with variable speed control.
              Supports manual and automated operations. Durable stainless steel construction for industrial usage.
              Comes with magnetic disc system for fast media changes. Ensures scratch-free results every time.
              Ergonomically designed for operator comfort.</p>
            <button>To the product range</button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card" data-aos="fade-up" data-aos-delay="300">
          <img src="https://padia.org/wp-content/uploads/2023/10/Industrial-Consumables-Sales.jpg" alt="Consumables" />
          <div className="card-content">
            <h2>Consumables</h2>
            <p>Omnitech offers high-quality abrasives, polishing cloths, and diamond suspensions.
              All materials tested for consistent results. Available in various grit sizes and formats.
              Backed by our in-house quality certification. Improve surface clarity and uniformity.
              Packaged for easy storage and handling.</p>
            <button>To the product range</button>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card" data-aos="fade-up" data-aos-delay="400">
          <img src="https://struers-web-production-17090b-cd-us.azurewebsites.net/-/media/Struers-media-library/Products/Hardness-testing/Hardness-testing-accessories/HAT-accessories.png?h=500&w=1600&lm=20241023T043633Z&hash=9EE64DD8388C1BB743699E7A44E2FA2B" alt="Hardness Testers" />
          <div className="card-content">
            <h2>Hardness Testers</h2>
            <p>Our machines support Rockwell, Vickers, Knoop, and Brinell testing methods.
              High-resolution load control and automatic indentation detection.
              User-friendly touchscreen interface with built-in report generation.
              Suitable for metals, ceramics, and composites. Precision-aligned stage for accurate results.
              Ideal for R&D and QA departments.</p>
            <button>To the product range</button>
          </div>
        </div>

        {/* Card 6 */}
        <div className="card" data-aos="fade-up" data-aos-delay="500">
          <img src="https://cdn.tmi.yokogawa.com/1/9182/files/AQ6380_Optical_Spectrum_Analyzer_Yokogawa_Test_Measurement.png" alt="Optical Analyzer" />
          <div className="card-content">
            <h2>Optical Analyzer</h2>
            <p>Inverse macroscopes from Omnitech deliver high-res imaging for welds and surface structures.
              Fast scanning and digital zoom capabilities. Comes with software for automated image measurement.
              USB and HDMI outputs for easy integration. Compact build saves lab space.
              Delivers clarity even at low magnification levels.</p>
            <button>To the product range</button>
          </div>
        </div>
      </div>
    </>
  );
}
