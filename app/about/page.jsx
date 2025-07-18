'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';

// Fallback image component
const FallbackImage = ({ src, alt, fallbackSrc = 'https://via.placeholder.com/300x200?text=Image+Not+Found', ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      {...props}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
};

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const timelineData = [
    { year: '2000', text: 'Company was founded with a small team and a big vision.', icon: '🚀' },
    { year: '2005', text: 'Opened our first manufacturing unit.', icon: '🏭' },
    { year: '2010', text: 'Expanded to international markets.', icon: '🌎' },
    { year: '2015', text: 'Launched sustainable product line.', icon: '♻️' },
    { year: '2020', text: 'Digitized operations with AI and IoT.', icon: '🤖' },
    { year: '2025', text: 'Celebrating 25 years of innovation and excellence.', icon: '🎉' },
  ];

  const highlights = [
    {
      title: 'Our Vision',
      text: 'To shape a smarter, sustainable future through innovation and responsible technology that improves everyday life.',
      bg: 'bg-gradient-to-tr from-cyan-50 to-cyan-100',
      icon: '👁️'
    },
    {
      title: 'Our Mission',
      text: 'To deliver impactful, reliable, and eco-conscious solutions while empowering communities and leading industry change.',
      bg: 'bg-gradient-to-tr from-pink-50 to-pink-100',
      icon: '🎯'
    },
    {
      title: 'Core Values',
      list: [
        '✔ Innovation & Excellence',
        '✔ Sustainability & Responsibility',
        '✔ Integrity & Transparency',
        '✔ Customer First Approach',
        '✔ Collaboration & Diversity',
      ],
      bg: 'bg-gradient-to-tr from-purple-50 to-purple-100',
      icon: '❤️'
    },
  ];

  const goals = [
    {
      title: 'Our Culture',
      text: 'We cultivate a people-first environment where creativity, respect, and collaboration thrive at every level of our organization.',
      bg: 'bg-gradient-to-tr from-yellow-50 to-yellow-100',
      icon: '👥'
    },
    {
      title: 'Sustainability Goals',
      text: 'We are committed to achieving carbon neutrality, zero-waste production, and full use of renewable energy by 2030.',
      bg: 'bg-gradient-to-tr from-green-50 to-green-100',
      icon: '🌱'
    },
    {
      title: 'Future Roadmap',
      text: 'Our vision for 2035 includes global expansion, AI-integrated operations, and pioneering benchmarks in green manufacturing.',
      bg: 'bg-gradient-to-tr from-blue-50 to-blue-100',
      icon: '🔮'
    },
  ];

  const team = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      desc: 'Visionary leader who started it all in 2000 with a mission to revolutionize technology.',
      img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop',
      social: ['linkedin', 'twitter']
    },
    {
      name: 'Jane Smith',
      role: 'COO',
      desc: 'Operations expert with 15+ years experience scaling manufacturing processes.',
      img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&auto=format&fit=crop',
      social: ['linkedin', 'github']
    },
    {
      name: 'Emily Johnson',
      role: 'CTO',
      desc: 'Tech innovator leading our R&D department to groundbreaking discoveries.',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop',
      social: ['linkedin', 'dribbble']
    },
    {
      name: 'Michael Chen',
      role: 'Head of Sustainability',
      desc: 'Environmental scientist driving our green initiatives and circular economy programs.',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop',
      social: ['linkedin', 'twitter']
    },
  ];

  const factories = [
    {
      name: 'New York Innovation Hub',
      desc: 'Our flagship facility specializing in smart manufacturing, robotics, and AI integration.',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop',
      stats: [
        { value: '50,000', label: 'Sq Ft' },
        { value: '200+', label: 'Employees' },
        { value: 'LEED', label: 'Certified' }
      ]
    },
    {
      name: 'Texas Solar Campus',
      desc: 'Largest solar-powered manufacturing facility in North America producing eco-friendly products.',
      img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&auto=format&fit=crop',
      stats: [
        { value: '120,000', label: 'Sq Ft' },
        { value: '500+', label: 'Employees' },
        { value: '100%', label: 'Renewable' }
      ]
    },
    {
      name: 'Berlin Tech Center',
      desc: 'Our European headquarters focusing on sustainable material research and development.',
      img: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&auto=format&fit=crop',
      stats: [
        { value: '75,000', label: 'Sq Ft' },
        { value: '300+', label: 'Employees' },
        { value: 'Zero', label: 'Waste' }
      ]
    },
  ];

  return (
    <main
      className={`transition-all duration-[1200ms] ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] text-[#1e293b] min-h-screen`}
    >
      {/* Hero Section */}
      <section className="relative text-center py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"
          >
            Innovating the Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          >
            For 25 years, we've been pushing boundaries to create sustainable technology solutions that matter.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            
          </motion.div>
        </div>
      </section>

      {/* Journey */}
      <section id="our-journey" className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey Through Time</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-cyan-300 -ml-0.5"></div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            ref={ref}
            className="space-y-12 md:space-y-0"
          >
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -ml-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 items-center justify-center text-white shadow-lg z-10">
                  {item.icon}
                </div>
                
                {/* Timeline content */}
                <div className={`md:w-5/12 p-6 rounded-xl shadow-lg ${index % 2 === 0 ? 'md:mr-8 bg-gradient-to-br from-blue-50 to-cyan-50' : 'md:ml-8 bg-gradient-to-br from-cyan-50 to-blue-50'}`}>
                  <div className="flex md:hidden mb-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 items-center justify-center text-white shadow-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-2">{item.year}</h3>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section id="company-highlights" className="py-20 bg-gradient-to-b from-[#eaf3fa] to-[#dcecf9]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision, Mission & Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-400 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`${item.bg} p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                {item.list ? (
                  <ul className="space-y-3">
                    {item.list.map((li, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 mt-1">✔</span>
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">{item.text}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {goals.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`${item.bg} p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section id="our-team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-400 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <FallbackImage
                    src={member.img}
                    alt={`Portrait of ${member.name}`}
                    fill
                    className="object-cover"
                    fallbackSrc="https://via.placeholder.com/200x200?text=Team+Member"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-amber-600 mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 mb-4">{member.desc}</p>
                <div className="flex justify-center space-x-3">
                  {member.social.map((platform, idx) => (
                    <button key={idx} className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-amber-100 transition-colors">
                      <span className="text-xs">{platform}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Factories */}
      <section id="our-factories" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Facilities</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {factories.map((factory, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative h-48 w-full">
                  <FallbackImage
                    src={factory.img}
                    alt={factory.name}
                    fill
                    className="object-cover"
                    fallbackSrc="https://via.placeholder.com/600x300?text=Factory+Image"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{factory.name}</h4>
                  <p className="text-gray-600 mb-4">{factory.desc}</p>
                  <div className="flex justify-between border-t pt-4">
                    {factory.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-xl font-bold text-blue-600">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-sm opacity-80">Years in Business</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <div className="text-sm opacity-80">Employees Worldwide</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-80">Countries Served</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-80">Customer Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}