'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, Zap, Eye, Settings, BarChart3, Play, Pause, TrendingUp, Award, Shield, Factory, Wrench, FlaskConical } from 'lucide-react';

export default function SpectrometerPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [currentElement, setCurrentElement] = useState('Fe');
  const [concentration, setConcentration] = useState(85.2);
  const [temperature, setTemperature] = useState(1850);

  const elements = ['Fe', 'C', 'Mn', 'Si', 'P', 'S', 'Cr', 'Ni', 'Mo', 'Cu'];

  useEffect(() => {
    let interval;
    if (isScanning) {
      interval = setInterval(() => {
        setCurrentElement(elements[Math.floor(Math.random() * elements.length)]);
        setConcentration(prev => {
          const newVal = prev + (Math.random() - 0.5) * 5;
          return Math.max(0, Math.min(100, newVal));
        });
        setTemperature(prev => {
          const newVal = prev + (Math.random() - 0.5) * 100;
          return Math.max(1500, Math.min(2000, newVal));
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isScanning]);

  const specs = [
    { label: 'Detection Range', value: 'Li to U', icon: Zap },
    { label: 'Precision', value: '±0.01%', icon: Eye },
    { label: 'Analysis Time', value: '< 30 seconds', icon: BarChart3 },
    { label: 'Temperature Range', value: '1200-2000°C', icon: Settings },
  ];

  const applications = [
    { 
      title: 'Steel Production', 
      description: 'Real-time monitoring of steel composition during melting and refining processes',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    { 
      title: 'Quality Control', 
      description: 'Precise elemental analysis for incoming materials and finished products',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    { 
      title: 'Scrap Analysis', 
      description: 'Rapid identification and sorting of metal scrap for recycling optimization',
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  const metalGrades = [
    { grade: 'Carbon Steel', fe: 98.5, c: 0.8, mn: 0.5, si: 0.2 },
    { grade: 'Stainless 304', fe: 70.0, cr: 18.0, ni: 8.0, c: 0.08 },
    { grade: 'Aluminum 6061', al: 97.9, mg: 1.0, si: 0.6, cu: 0.3 },
    { grade: 'Brass C260', cu: 70.0, zn: 30.0, pb: 0.05, fe: 0.05 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50">
      {/* Hero Section */}
      <section 
        className="relative py-20 px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.85)), url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <FlaskConical className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Omni Tech
                  </span>
                </div>
                <h1 className="text-6xl font-bold leading-tight text-gray-900">
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
                    Metallurgy
                  </span>
                  <br />
                  <span className="text-gray-800">Spectrometer</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Advanced elemental analysis for steel production, quality control, and metal recycling. Real-time composition monitoring with laboratory-grade precision.
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
                  <span className="text-lg font-semibold">Start Analysis</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  View Demo
                </button>
              </div>
            </div>

            {/* Live Metal Analysis Display */}
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-800">Live Metal Analysis</h3>
                    <button
                      onClick={() => setIsScanning(!isScanning)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 text-white ${
                        isScanning ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                      }`}
                    >
                      {isScanning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      <span>{isScanning ? 'Stop' : 'Start'}</span>
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Current Element</span>
                      <span className="text-blue-600 font-mono text-2xl font-bold">{currentElement}</span>
                    </div>
                    
                    <div className="h-32 bg-gradient-to-r from-blue-100 via-indigo-100 to-sky-100 rounded-lg relative overflow-hidden border border-gray-200">
                      <div 
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-500 rounded-lg transition-all duration-300"
                        style={{ width: `${concentration}%` }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-700 font-semibold">{concentration.toFixed(1)}%</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                        <div className="text-gray-600 text-sm">Temperature</div>
                        <div className="text-gray-800 font-semibold">{temperature}°C</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                        <div className="text-gray-600 text-sm">Status</div>
                        <div className="text-green-600 font-semibold">Analyzing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Metallurgy Spectrometer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">±0.01%</div>
                <div className="text-sm opacity-90">Precision</div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-800">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Industrial Grade
                </span>
                <br />
                Metal Analysis
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Built for the demanding environment of steel mills, foundries, and metal processing facilities. Our spectrometer delivers accurate elemental composition analysis in real-time.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specs.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                        <spec.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{spec.label}</h3>
                        <p className="text-blue-600 font-mono font-bold">{spec.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metal Grade Analysis */}
      <section className="py-20 px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Metal Grade Identification
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instantly identify and verify metal grades with comprehensive elemental analysis for quality assurance and material certification.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metalGrades.map((grade, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-800">{grade.grade}</h3>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(grade).slice(1).map(([element, percentage]) => (
                      <div key={element} className="flex justify-between items-center">
                        <span className="text-gray-600 uppercase text-sm font-medium">{element}</span>
                        <span className="text-blue-600 font-bold">{percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Industrial Applications
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From steel production to scrap recycling, our spectrometer provides the accuracy and reliability needed for critical metallurgical processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="aspect-[4/3] relative">
                  <img 
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                      <app.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{app.title}</h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section 
        className="py-20 px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-800">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Performance Metrics
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Proven reliability in the harshest industrial environments. Our spectrometer delivers consistent, accurate results for critical metallurgical applications.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/90 backdrop-blur-xl rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.8%</div>
                  <div className="text-gray-600">Uptime Reliability</div>
                </div>
                <div className="bg-white/90 backdrop-blur-xl rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">2000+</div>
                  <div className="text-gray-600">Analyses per Day</div>
                </div>
                <div className="bg-white/90 backdrop-blur-xl rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-sky-600 mb-2">±0.01%</div>
                  <div className="text-gray-600">Precision Range</div>
                </div>
                <div className="bg-white/90 backdrop-blur-xl rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-blue-600 mb-2">30s</div>
                  <div className="text-gray-600">Analysis Time</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Steel Manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>
  );
}