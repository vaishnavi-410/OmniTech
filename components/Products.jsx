'use client';

import React, { useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

export default function Products() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filterCards = useCallback((e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll(".card").forEach((card) => {
      const title = card.querySelector("h2").textContent.toLowerCase();
      card.style.display = title.includes(query) ? "block" : "none";
    });
  }, []);

  return (
    <div className="bg-transparent font-sans text-gray-800 dark:text-white">
      <div className="h-[60px]"></div>

      <div className="text-center px-5 py-10" data-aos="fade-down" data-aos-duration="1200">
        <h1 className="text-[32px] sm:text-[36px] font-extrabold uppercase text-[#001f4d] dark:text-blue-200 tracking-wider drop-shadow-md">
          OMNITECH MACHINES
        </h1>
        <p className="text-[15px] sm:text-[16px] mt-3 text-[#618ab5] dark:text-blue-400">
          Explore our specialized range of metallurgical machines
        </p>
      </div>

      <div className="sticky top-0 z-50 bg-[#003d73]/80 dark:bg-[#001e3c]/90 px-4 sm:px-10 py-5 shadow-md flex justify-center items-center backdrop-blur-sm">
        <input
          type="text"
          placeholder="Search products..."
          onChange={filterCards}
          className="w-full max-w-[300px] px-4 py-2 text-sm text-white bg-transparent border border-[#00f0ff] rounded-lg placeholder-[#b0eaff] shadow-[0_0_10px_#00f0ff] focus:outline-none focus:shadow-[0_0_15px_#00f0ff,0_0_5px_#00f0ff_inset]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-[60px] p-5 sm:p-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="card bg-white dark:bg-slate-900 w-full max-w-[500px] mx-auto rounded-xl shadow-lg hover:shadow-2xl dark:shadow-blue-800 transition-transform duration-300 transform hover:scale-[1.03] flex flex-col overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[180px] object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-semibold text-[#002147] dark:text-blue-200 mb-2">
                {product.title}
              </h2>
              <p className="text-sm leading-relaxed text-[#2b2b2b] dark:text-gray-300">
                {product.description}
              </p>
              <Link href="/products">
                <button className="mt-4 px-4 py-2 bg-[#003d73] dark:bg-blue-700 text-white rounded hover:bg-[#005099] dark:hover:bg-blue-600 font-semibold transition-all">
                  To the product range
                </button>
              </Link>
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
    image: 'https://www.shutterstock.com/image-photo/worker-cut-steel-off-wheel-600nw-2057277344.jpg',
    description: 'Omnitech cut-off machines offer powerful benchtop and floor-standing models for precise sectioning...',
  },
  {
    title: 'Mounting Equipment',
    image: 'https://www.bosch-pt.co.in/in/en/ocsmedia/461415-82/application-image/720x410/pro-steel-mounted-point-set-3090822.png',
    description: 'Omnitech’s mounting presses ensure stable sample embedding. Available in hot and UV variants...',
  },
  {
    title: 'Grinders & Polishers',
    image: 'https://5.imimg.com/data5/KX/BS/MY-2398714/grinder-cum-polisher-500x500.jpg',
    description: 'Our grinder-polisher units provide excellent surface finishing with variable speed control...',
  },
  {
    title: 'Consumables',
    image: 'https://padia.org/wp-content/uploads/2023/10/Industrial-Consumables-Sales.jpg',
    description: 'Omnitech offers high-quality abrasives, polishing cloths, and diamond suspensions...',
  },
  {
    title: 'Hardness Testers',
    image: 'https://analab.co.in/files/catalog/Final_Image_&_Catalogues/Tablet_Hardness_Tester/Compressed_Image/Portable-Tablet-Hardness-Tester-5-THCal10_KB.jpg',
    description: 'Our machines support Rockwell, Vickers, Knoop, and Brinell testing methods...',
  },
  {
    title: 'Optical Analyzer',
    image: 'https://cdn.tmi.yokogawa.com/1/9182/files/AQ6380_Optical_Spectrum_Analyzer_Yokogawa_Test_Measurement.png',
    description: 'Inverse macroscopes from Omnitech deliver high-res imaging for welds and surface structures...',
  },
];
