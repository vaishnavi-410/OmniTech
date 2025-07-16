'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

export default function Products() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat bg-[url('https://www.pixelstalk.net/wp-content/uploads/images1/Free-Industrial-Images.jpg')] font-sans text-gray-800 dark:text-white">
      {/* Spacer */}
      <div className="h-[60px]"></div>

      {/* Header Box */}
      <div
        className="w-full bg-white/60 dark:bg-[#001f4d]/70 backdrop-blur-lg border border-white/40 dark:border-blue-500/30 shadow-2xl px-4 sm:px-6 lg:px-10 py-8 text-center"
        data-aos="fade-down"
        data-aos-duration="1200"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#001f4d] dark:text-blue-100 tracking-widest drop-shadow-md">
          OMNITECH MACHINES
        </h1>
        <p className="text-base sm:text-lg mt-3 text-[#263f5f] dark:text-blue-300 font-medium">
          Explore our specialized range of metallurgical machines
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-10 py-10 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="card bg-white dark:bg-slate-900 bg-opacity-90 w-full rounded-xl shadow-lg hover:shadow-2xl dark:shadow-blue-800 transition-transform duration-300 transform hover:scale-[1.03] flex flex-col overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[180px] object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-[#002147] dark:text-blue-200 mb-2">
                  {product.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-[#2b2b2b] dark:text-gray-300">
                  {product.description}
                </p>
              </div>
              <Link href="/products" className="mt-4 block">
                <button className="w-full px-4 py-2 bg-[#003d73] dark:bg-blue-700 text-white rounded hover:bg-[#005099] dark:hover:bg-blue-600 font-semibold transition-all">
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
    description:
      'Omnitech cut-off machines offer powerful benchtop and floor-standing models for precise sectioning...',
  },
  {
    title: 'Mounting Equipment',
    image:
      'https://www.bosch-pt.co.in/in/en/ocsmedia/461415-82/application-image/720x410/pro-steel-mounted-point-set-3090822.png',
    description:
      'Omnitech’s mounting presses ensure stable sample embedding. Available in hot and UV variants...',
  },
  {
    title: 'Grinders & Polishers',
    image: 'https://5.imimg.com/data5/KX/BS/MY-2398714/grinder-cum-polisher-500x500.jpg',
    description:
      'Our grinder-polisher units provide excellent surface finishing with variable speed control...',
  },
  {
    title: 'Consumables',
    image: 'https://padia.org/wp-content/uploads/2023/10/Industrial-Consumables-Sales.jpg',
    description:
      'Omnitech offers high-quality abrasives, polishing cloths, and diamond suspensions...',
  },
  {
    title: 'Hardness Testers',
    image:
      'https://analab.co.in/files/catalog/Final_Image_&_Catalogues/Tablet_Hardness_Tester/Compressed_Image/Portable-Tablet-Hardness-Tester-5-THCal10_KB.jpg',
    description:
      'Our machines support Rockwell, Vickers, Knoop, and Brinell testing methods...',
  },
  {
    title: 'Optical Analyzer',
    image:
      'https://cdn.tmi.yokogawa.com/1/9182/files/AQ6380_Optical_Spectrum_Analyzer_Yokogawa_Test_Measurement.png',
    description:
      'Inverse macroscopes from Omnitech deliver high-res imaging for welds and surface structures...',
  },
];
