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
    <div className="bg-transparent font-sans text-gray-800">
      {/* Spacer */}
      <div className="h-[60px]"></div>

      {/* Heading */}
      <div
        className="text-center px-5 py-10"
        data-aos="fade-down"
        data-aos-duration="1200"
      >
        <h1 className="text-[36px] font-extrabold uppercase text-[#001f4d] tracking-wider drop-shadow-md">
          OMNITECH MACHINES
        </h1>
        <p className="text-[16px] mt-3 text-[#618ab5]">
          Explore our specialized range of metallurgical machines
        </p>
      </div>

      {/* Search Bar */}
      <div className="sticky top-0 z-50 bg-[#003d73]/80 px-10 py-5 shadow-md flex justify-center items-center backdrop-blur-sm">
        <input
          type="text"
          placeholder="Search products..."
          onChange={filterCards}
          className="w-[280px] px-4 py-2 text-sm text-white bg-transparent border border-[#00f0ff] rounded-lg placeholder-[#b0eaff] shadow-[0_0_10px_#00f0ff] focus:outline-none focus:shadow-[0_0_15px_#00f0ff,0_0_5px_#00f0ff_inset]"
        />
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] p-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="card bg-white w-[85%] mx-auto rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-[1.03] flex flex-col overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[180px] object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-semibold text-[#002147] mb-2">
                {product.title}
              </h2>
              <p className="text-sm leading-relaxed text-[#2b2b2b]">
                {product.description}
              </p>
              <button className="mt-4 px-4 py-2 bg-[#003d73] text-white rounded hover:bg-[#005099] font-semibold">
                To the product range
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Products Data
const products = [
  {
    title: 'Cut-Off Machines',
    image:
      'https://www.shutterstock.com/image-photo/worker-cut-steel-off-wheel-600nw-2057277344.jpg',
    description:
      'Omnitech cut-off machines offer powerful benchtop and floor-standing models for precise sectioning. Ideal for metallographic sample preparation, they support high-speed cutting with minimal deformation. Rugged design ensures long-term durability. Safety shields and coolant systems protect the operator. User-friendly controls make setup easy. Designed for both industrial and lab use.',
  },
  {
    title: 'Mounting Equipment',
    image:
      'https://media.gettyimages.com/id/510162486/photo/production-line-of-plastic-industry.jpg?s=612x612&w=gi&k=20&c=XzPK17hdKEkMWGa7dOHHHbS-MMhMfbNUrgUI-PmbwRk=',
    description:
      'Omnitech’s mounting presses ensure stable sample embedding. Available in hot and UV variants. Easy mold handling and adjustable temperature & pressure settings. Built for high throughput environments. Compatible with a variety of resins and sample sizes. Compact, durable body suitable for modern labs.',
  },
  {
    title: 'Grinders & Polishers',
    image:
      'https://5.imimg.com/data5/KX/BS/MY-2398714/grinder-cum-polisher-500x500.jpg',
    description:
      'Our grinder-polisher units provide excellent surface finishing with variable speed control. Supports manual and automated operations. Durable stainless steel construction for industrial usage. Comes with magnetic disc system for fast media changes. Ensures scratch-free results every time. Ergonomically designed for operator comfort.',
  },
  {
    title: 'Consumables',
    image:
      'https://padia.org/wp-content/uploads/2023/10/Industrial-Consumables-Sales.jpg',
    description:
      'Omnitech offers high-quality abrasives, polishing cloths, and diamond suspensions. All materials tested for consistent results. Available in various grit sizes and formats. Backed by our in-house quality certification. Improve surface clarity and uniformity. Packaged for easy storage and handling.',
  },
  {
    title: 'Hardness Testers',
    image:
      'https://struers-web-production-17090b-cd-us.azurewebsites.net/-/media/Struers-media-library/Products/Hardness-testing/Hardness-testing-accessories/HAT-accessories.png?h=500&w=1600&lm=20241023T043633Z&hash=9EE64DD8388C1BB743699E7A44E2FA2B',
    description:
      'Our machines support Rockwell, Vickers, Knoop, and Brinell testing methods. High-resolution load control and automatic indentation detection. User-friendly touchscreen interface with built-in report generation. Suitable for metals, ceramics, and composites. Precision-aligned stage for accurate results. Ideal for R&D and QA departments.',
  },
  {
    title: 'Optical Analyzer',
    image:
      'https://cdn.tmi.yokogawa.com/1/9182/files/AQ6380_Optical_Spectrum_Analyzer_Yokogawa_Test_Measurement.png',
    description:
      'Inverse macroscopes from Omnitech deliver high-res imaging for welds and surface structures. Fast scanning and digital zoom capabilities. Comes with software for automated image measurement. USB and HDMI outputs for easy integration. Compact build saves lab space. Delivers clarity even at low magnification levels.',
  },
];
