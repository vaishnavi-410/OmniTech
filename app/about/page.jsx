'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);

    const handleScroll = () => {
      document.querySelectorAll('.animate').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          el.classList.add('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineData = [
    { year: '2000', text: 'Company was founded with a small team and a big vision.' },
    { year: '2005', text: 'Opened our first manufacturing unit.' },
    { year: '2010', text: 'Expanded to international markets.' },
    { year: '2015', text: 'Launched sustainable product line.' },
    { year: '2020', text: 'Digitized operations with AI and IoT.' },
    { year: '2025', text: 'Celebrating 25 years of innovation and excellence.' },
  ];

  const highlights = [
    {
      title: 'Our Vision',
      text: 'To shape a smarter, sustainable future through innovation and responsible technology that improves everyday life.',
      bg: 'bg-gradient-to-tr from-cyan-50 to-cyan-100',
    },
    {
      title: 'Our Mission',
      text: 'To deliver impactful, reliable, and eco-conscious solutions while empowering communities and leading industry change.',
      bg: 'bg-gradient-to-tr from-pink-50 to-pink-100',
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
    },
  ];

  const goals = [
    {
      title: 'Our Culture',
      text: 'We cultivate a people-first environment where creativity, respect, and collaboration thrive at every level of our organization.',
      bg: 'bg-gradient-to-tr from-yellow-50 to-yellow-100',
    },
    {
      title: 'Sustainability Goals',
      text: 'We are committed to achieving carbon neutrality, zero-waste production, and full use of renewable energy by 2030.',
      bg: 'bg-gradient-to-tr from-green-50 to-green-100',
    },
    {
      title: 'Future Roadmap',
      text: 'Our vision for 2035 includes global expansion, AI-integrated operations, and pioneering benchmarks in green manufacturing.',
      bg: 'bg-gradient-to-tr from-pink-50 to-pink-100',
    },
  ];

  const team = [
    {
      name: 'John Doe',
      role: 'Founder',
      desc: 'Visionary leader who started it all in 2000.',
      img: '/images/6.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'Co-Founder',
      desc: 'Expert in operations and growth strategy.',
      img: '/images/7.jpg',
    },
    {
      name: 'Emily Johnson',
      role: 'Secretary',
      desc: 'Backbone of our administrative success.',
      img: '/images/8.jpg',
    },
  ];

  const factories = [
    {
      name: 'Factory 1 - New York',
      desc: 'Specialized in smart manufacturing and robotics.',
      img: '/images/3.jpg',
    },
    {
      name: 'Factory 2 - Texas',
      desc: 'Largest solar-powered facility producing eco-friendly products.',
      img: '/images/2.jpg',
    },
  ];

  return (
    <main
      className={`transition-all duration-[1200ms] ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } bg-gradient-to-r from-[#fcfbfd] to-[#ebedee] text-[#2c3e50] min-h-screen`}
    >
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800">Welcome to Omnitech</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Discover our journey, values, team, and innovation centers that power our mission.
        </p>
      </section>

      {/* Journey */}
      <section id="our-journey" className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
        <div
          className="relative text-white bg-cover bg-fixed bg-center rounded-xl shadow-xl p-8"
          style={{ backgroundImage: "url('/images/1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl z-0"></div>
          <div className="relative z-10 space-y-6">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="animate transition-transform duration-300 transform hover:scale-105 backdrop-blur-md bg-white/10 border-l-4 border-cyan-400 p-4 rounded-md"
              >
                <span className="block text-cyan-400 font-bold text-lg mb-1">{item.year}</span>
                <p className="text-white">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="company-highlights" className="py-12 px-4 bg-gradient-to-b from-[#eaf3fa] to-[#dcecf9]">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Vision, Mission & More</h2>

        <div className="flex flex-wrap gap-6 justify-center">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`animate ${item.bg} p-6 rounded-xl shadow-md w-full sm:w-[300px] transition-transform hover:scale-105`}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              {item.list ? (
                <ul className="list-disc pl-5 text-sm text-left">
                  {item.list.map((li, idx) => (
                    <li key={idx}>{li}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm">{item.text}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-6 justify-center mt-10">
          {goals.map((item, index) => (
            <div
              key={index}
              className={`animate ${item.bg} p-6 rounded-xl shadow-md w-full sm:w-[300px] transition-transform hover:scale-105`}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="our-team" className="py-12 px-4 bg-gradient-to-b from-[#fefcfb] to-[#e7e7e7]">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="animate bg-gradient-to-tr from-yellow-50 to-yellow-100 p-6 rounded-xl shadow-md text-center w-full sm:w-[260px] transition-transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={member.img}
                  alt={`Portrait of ${member.name}`}
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-sm font-medium text-gray-600">{member.role}</p>
              <p className="text-sm mt-2">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Factories */}
      <section id="our-factories" className="py-12 px-4 bg-gradient-to-r from-[#eef7f4] to-[#ddeee7]">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Factories</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {factories.map((factory, index) => (
            <div
              key={index}
              className="animate bg-gradient-to-tr from-blue-50 to-blue-100 p-6 rounded-xl shadow-md w-full sm:w-[300px] transition-transform hover:scale-105"
            >
              <div className="mb-4">
                <Image
                  src={factory.img}
                  alt={factory.name}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold mb-1">{factory.name}</h4>
              <p className="text-sm">{factory.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded global CSS */}
      <style jsx global>{`
        :root {
          --background: #ffffff;
          --foreground: #171717;
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --background: #0a0a0a;
            --foreground: #ededed;
          }
        }

        body {
          background: var(--background);
          color: var(--foreground);
          font-family: Arial, Helvetica, sans-serif;
        }

        .animate {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s ease;
        }

        .animate.in-view {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </main>
  );
}
