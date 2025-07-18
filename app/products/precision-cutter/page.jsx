'use client';

import React, { useState } from 'react';

const PrecisionCutterPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [cartAnimations, setCartAnimations] = useState({});

  const products = [
    
    {
      id: 2,
      category: 'professional',
      title: 'PrecisionPro Elite',
      description: 'Professional-grade cutter with ergonomic design and ceramic blades',
      price: '$189.99',
      image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=800&h=600&fit=crop',
      features: ['Ceramic Blades', 'Ergonomic', 'Anti-Slip Grip']
    },
    {
      id: 3,
      category: 'craft',
      title: 'CraftMaster Deluxe',
      description: 'Perfect for detailed craft work and hobby projects with precision control',
      price: '$79.99',
      image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=800&h=600&fit=crop',
      features: ['Lightweight', 'Comfort Grip', 'Replaceable Blades']
    },
    {
      id: 4,
      category: 'industrial',
      title: 'UltraCut Pro Max',
      description: 'Maximum precision cutting tool with laser-guided accuracy and diamond-edge technology',
      price: '$449.99',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop',
      features: ['Laser-Guided', 'Diamond Edge', 'Professional Grade']
    },
    {
      id: 5,
      category: 'professional',
      title: 'SharpEdge Professional',
      description: 'Versatile professional cutter with adjustable blade depth and measuring guide',
      price: '$159.99',
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=600&fit=crop',
      features: ['Adjustable Depth', 'Measuring Guide', 'Durable Steel']
    },
    {
      id: 6,
      category: 'craft',
      title: 'MiniCraft Precision',
      description: 'Compact precision cutter for delicate craft and model work',
      price: '$49.99',
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=600&fit=crop',
      features: ['Compact Size', 'Fine Tip', 'Rotating Blade']
    }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  const handleAddToCart = (productId) => {
    setCartAnimations(prev => ({ ...prev, [productId]: true }));
    setTimeout(() => {
      setCartAnimations(prev => ({ ...prev, [productId]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1920&h=1080&fit=crop")'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        
        {/* Hero Section with Banner Image */}
        <div className="relative rounded-xl overflow-hidden mb-16 h-96">
          <img
            src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1600&h=600&fit=crop"
            alt="Precision Cutting Tools"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-900/30 flex items-center justify-center">
            <div className="text-center px-8">
              <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
                Precision Cutters
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Professional cutting tools engineered for accuracy and performance
              </p>
            </div>
          </div>
        </div>

        

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'industrial', 'professional', 'craft'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg transform -translate-y-1'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg hover:-translate-y-1 border border-gray-200'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-slide-up border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="h-64 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {product.category.toUpperCase()}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  {product.price}
                </div>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    cartAnimations[product.id]
                      ? 'bg-green-600 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg transform hover:-translate-y-1'
                  }`}
                >
                  {cartAnimations[product.id] ? 'Added to Cart!' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Section with Image */}
        <div className="bg-gray-50 rounded-xl p-8 md:p-12 mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop" 
              alt="Satisfied customer" 
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div>
            <div className="text-blue-600 font-medium mb-2">TESTIMONIAL</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"These cutters transformed our workshop efficiency"</h3>
            <p className="text-gray-600 mb-6">
              "The precision and durability of these tools is unmatched. We've reduced material waste by 30% since switching to this brand."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop" 
                  alt="John Smith" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold">John Smith</div>
                <div className="text-gray-500 text-sm">Workshop Manager, MetalCraft Inc.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: '50K+', label: 'Happy Customers', icon: '👥' },
            { number: '99.9%', label: 'Precision Accuracy', icon: '🎯' },
            { number: '24/7', label: 'Customer Support', icon: '🛟' },
            { number: '5★', label: 'Average Rating', icon: '⭐' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* How It Works Section with Images */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How Our Cutters Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-48 mb-4 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop" 
                  alt="Step 1" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Precision Engineering</h3>
              <p className="text-gray-600">Each cutter is crafted with aerospace-grade materials for maximum durability</p>
            </div>
            <div className="text-center">
              <div className="h-48 mb-4 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop" 
                  alt="Step 2" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Quality Testing</h3>
              <p className="text-gray-600">Every tool undergoes rigorous quality control before shipping</p>
            </div>
            <div className="text-center">
              <div className="h-48 mb-4 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1503602642458-232111445657?w=600&h=400&fit=crop" 
                  alt="Step 3" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Perfect Results</h3>
              <p className="text-gray-600">Achieve clean, precise cuts every time with minimal effort</p>
            </div>
          </div>
        </div>

        {/* Newsletter Section with Background Image */}
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=400&fit=crop"
            alt="Subscribe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70 flex items-center justify-center p-8">
            <div className="text-center max-w-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Our Latest Tools</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
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
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default PrecisionCutterPage;