"use client";
import React, { useState, useEffect } from 'react';
import { Search, Filter, Star, Zap, Settings, Eye, ShoppingCart, Grid, List, Sparkles } from 'lucide-react';

export default function PolishingWheelCategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredWheel, setHoveredWheel] = useState(null);
  const [sparkles, setSparkles] = useState([]);

  // Generate background sparkles
  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 3,
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 5000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { id: 'all', name: 'All Wheels', count: 24 },
    { id: 'buffing', name: 'Buffing Wheels', count: 8 },
    { id: 'grinding', name: 'Grinding Wheels', count: 6 },
    { id: 'cutting', name: 'Cutting Wheels', count: 5 },
    { id: 'diamond', name: 'Diamond Wheels', count: 5 },
  ];

  const polishingWheels = [
    {
      id: 1,
      name: 'Premium Buffing Wheel',
      category: 'buffing',
      price: 89.99,
      rating: 4.8,
      image: '/api/placeholder/300/300',
      diameter: '6 inch',
      material: 'Cotton',
      speed: '3600 RPM',
      description: 'High-quality cotton buffing wheel for metal polishing',
      features: ['Lint-free', 'Durable', 'Professional Grade'],
      colors: ['from-blue-500', 'to-purple-600']
    },
    {
      id: 2,
      name: 'Diamond Cutting Wheel',
      category: 'diamond',
      price: 159.99,
      rating: 4.9,
      image: '/api/placeholder/300/300',
      diameter: '4 inch',
      material: 'Diamond',
      speed: '12000 RPM',
      description: 'Industrial-grade diamond wheel for precision cutting',
      features: ['Long-lasting', 'Precision Cut', 'Heat Resistant'],
      colors: ['from-emerald-500', 'to-teal-600']
    },
    {
      id: 3,
      name: 'Grinding Wheel Pro',
      category: 'grinding',
      price: 124.99,
      rating: 4.7,
      image: '/api/placeholder/300/300',
      diameter: '8 inch',
      material: 'Aluminum Oxide',
      speed: '4500 RPM',
      description: 'Heavy-duty grinding wheel for tough materials',
      features: ['Heavy Duty', 'Balanced', 'Long Life'],
      colors: ['from-orange-500', 'to-red-600']
    },
    {
      id: 4,
      name: 'Sisal Buffing Wheel',
      category: 'buffing',
      price: 64.99,
      rating: 4.6,
      image: '/api/placeholder/300/300',
      diameter: '6 inch',
      material: 'Sisal',
      speed: '3600 RPM',
      description: 'Natural sisal fibers for initial polishing stages',
      features: ['Natural Fibers', 'Eco-friendly', 'Aggressive Cut'],
      colors: ['from-green-500', 'to-lime-600']
    },
    {
      id: 5,
      name: 'Felt Polishing Wheel',
      category: 'buffing',
      price: 45.99,
      rating: 4.5,
      image: '/api/placeholder/300/300',
      diameter: '4 inch',
      material: 'Felt',
      speed: '2800 RPM',
      description: 'Soft felt wheel for final finishing touches',
      features: ['Soft Finish', 'Mirror Polish', 'Gentle Action'],
      colors: ['from-pink-500', 'to-rose-600']
    },
    {
      id: 6,
      name: 'Ceramic Grinding Wheel',
      category: 'grinding',
      price: 189.99,
      rating: 4.8,
      image: '/api/placeholder/300/300',
      diameter: '10 inch',
      material: 'Ceramic',
      speed: '5000 RPM',
      description: 'Advanced ceramic wheel for precision grinding',
      features: ['Self-sharpening', 'Cool Running', 'Precision'],
      colors: ['from-purple-500', 'to-indigo-600']
    },
  ];

  const filteredWheels = polishingWheels.filter(wheel => {
    const matchesCategory = selectedCategory === 'all' || wheel.category === selectedCategory;
    const matchesSearch = wheel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         wheel.material.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const PolishingWheelCard = ({ wheel, index }) => (
    <div
      className={`group relative bg-gradient-to-br ${wheel.colors[0]} ${wheel.colors[1]} rounded-2xl p-1 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHoveredWheel(wheel.id)}
      onMouseLeave={() => setHoveredWheel(null)}
    >
      <div className="bg-white rounded-xl p-6 h-full relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50 to-transparent opacity-50"></div>
        
        {/* Wheel Visualization */}
        <div className="relative mb-6 flex justify-center">
          <div className="relative w-32 h-32">
            {/* Outer Glow */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${wheel.colors[0]} ${wheel.colors[1]} opacity-20 blur-lg ${hoveredWheel === wheel.id ? 'animate-pulse' : ''}`}></div>
            
            {/* Main Wheel */}
            <div className={`relative w-full h-full rounded-full bg-gradient-to-br from-gray-300 to-gray-500 border-2 border-gray-400 shadow-inner ${hoveredWheel === wheel.id ? 'animate-spin' : ''} transition-transform duration-1000`}>
              {/* Wheel Texture */}
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-full bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-60"
                  style={{
                    left: '50%',
                    transformOrigin: 'center',
                    transform: `translateX(-50%) rotate(${i * 22.5}deg)`,
                  }}
                />
              ))}
              
              {/* Center Hub */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-inner flex items-center justify-center">
                <Settings className="text-gray-200 w-4 h-4" />
              </div>
            </div>
            
            {/* Sparks Effect */}
            {hoveredWheel === wheel.id && (
              <div className="absolute inset-0">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-500 rounded-full animate-ping"
                    style={{
                      left: `${50 + 40 * Math.cos((i * Math.PI) / 3)}%`,
                      top: `${50 + 40 * Math.sin((i * Math.PI) / 3)}%`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            {wheel.name}
          </h3>
          
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(wheel.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                />
              ))}
              <span className="text-gray-600 ml-2 text-sm">({wheel.rating})</span>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Diameter:</span>
              <span className="text-gray-800 font-medium">{wheel.diameter}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Material:</span>
              <span className="text-gray-800 font-medium">{wheel.material}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Max Speed:</span>
              <span className="text-gray-800 font-medium">{wheel.speed}</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-4">{wheel.description}</p>

          {/* Features */}
          <div className="flex flex-wrap gap-1 mb-4">
            {wheel.features.map((feature, i) => (
              <span
                key={i}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full border border-gray-200"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Price and Actions */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-800">${wheel.price}</span>
            <div className="flex space-x-2">
              <button className="p-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg transition-colors duration-200">
                <Eye className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md">
                <ShoppingCart className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute animate-pulse"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: '3s',
            }}
          >
            <Sparkles size={sparkle.size * 6} className="text-blue-300 opacity-20" />
          </div>
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-4">
            Polishing Wheels Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium range of polishing wheels designed for every application
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search wheels by name or material..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm"
            />
          </div>

          {/* View Mode Toggle */}
          <div className="flex bg-white rounded-xl p-1 border border-gray-300 shadow-sm">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'grid' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'list' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg sticky top-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Categories
              </h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-sm opacity-75">({category.count})</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedCategory === 'all' ? 'All Wheels' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <span className="text-gray-600">
                {filteredWheels.length} products found
              </span>
            </div>

            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredWheels.map((wheel, index) => (
                <div
                  key={wheel.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <PolishingWheelCard wheel={wheel} index={index} />
                </div>
              ))}
            </div>

            {filteredWheels.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg">No wheels found matching your criteria.</div>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 shadow-md"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
}