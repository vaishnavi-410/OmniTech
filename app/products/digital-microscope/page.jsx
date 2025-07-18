'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, ChevronDown, Star, ShoppingCart, Eye, Zap, Award, TrendingUp } from 'lucide-react';

const MicroscopePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Microscopes', count: 156 },
    { id: 'digital', name: 'Digital Microscopes', count: 89 },
    { id: 'usb', name: 'USB Microscopes', count: 45 },
    { id: 'portable', name: 'Portable', count: 32 },
    { id: 'professional', name: 'Professional', count: 28 },
    { id: 'stereo', name: 'Stereo Microscopes', count: 21 }
  ];

  const products = [
    {
      id: 1,
      name: 'ProScope Digital 4K',
      price: 899,
      originalPrice: 1299,
      rating: 4.8,
      reviews: 245,
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=300&h=300&fit=crop',
      badge: 'Best Seller',
      magnification: '10x-200x',
      features: ['4K Resolution', 'WiFi Connectivity', 'LED Illumination'],
      category: 'digital'
    },
    {
      id: 2,
      name: 'MicroVision USB Pro',
      price: 299,
      originalPrice: 399,
      rating: 4.6,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=300&h=300&fit=crop',
      badge: 'Hot Deal',
      magnification: '50x-500x',
      features: ['USB 3.0', 'Software Included', 'Adjustable Stand'],
      category: 'usb'
    },
    {
      id: 3,
      name: 'Portable MicroLab',
      price: 199,
      originalPrice: 249,
      rating: 4.5,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=300&h=300&fit=crop',
      badge: 'New',
      magnification: '20x-400x',
      features: ['Battery Powered', 'Compact Design', 'HD Display'],
      category: 'portable'
    },
    {
      id: 4,
      name: 'StereoMax 3D View',
      price: 1299,
      originalPrice: 1599,
      rating: 4.9,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop',
      badge: 'Premium',
      magnification: '5x-50x',
      features: ['3D Viewing', 'Dual LED', 'Precision Focus'],
      category: 'stereo'
    },
    
    {
      id: 6,
      name: 'EduScope Digital',
      price: 149,
      originalPrice: 199,
      rating: 4.4,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      badge: 'Educational',
      magnification: '40x-400x',
      features: ['Student Friendly', 'Easy Setup', 'Learning Software'],
      category: 'digital'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'under-500' && product.price < 500) ||
      (priceRange === '500-1000' && product.price >= 500 && product.price < 1000) ||
      (priceRange === 'over-1000' && product.price >= 1000);
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const getBadgeColor = (badge) => {
    switch(badge) {
      case 'Best Seller': return 'bg-gradient-to-r from-yellow-400 to-orange-500';
      case 'Hot Deal': return 'bg-gradient-to-r from-red-500 to-pink-500';
      case 'New': return 'bg-gradient-to-r from-green-400 to-blue-500';
      case 'Premium': return 'bg-gradient-to-r from-purple-500 to-indigo-600';
      case 'Professional': return 'bg-gradient-to-r from-gray-600 to-gray-800';
      case 'Educational': return 'bg-gradient-to-r from-blue-400 to-cyan-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className={`text-center transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Digital Microscopes
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover the microscopic world with our cutting-edge digital microscopes. 
              From educational to professional grade instruments.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>Ultra-High Resolution</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Fast Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Award Winning</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`bg-white rounded-2xl shadow-xl p-6 mb-8 transform transition-all duration-700 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search microscopes..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Category Filter */}
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name} ({cat.count})
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
            
            {/* Price Filter */}
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="all">All Prices</option>
                <option value="under-500">Under $500</option>
                <option value="500-1000">$500 - $1000</option>
                <option value="over-1000">Over $1000</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
            
            {/* Sort */}
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popularity">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform transition-all duration-500 hover:scale-105 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${index * 100 + 500}ms` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-semibold ${getBadgeColor(product.badge)}`}>
                  {product.badge}
                </div>
                
                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}`}>
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
                    Quick View
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-3">{product.magnification}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, i) => (
                    <span key={i} className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-700 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">156+</h3>
            <p className="text-gray-600">Digital Microscopes</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">4.8/5</h3>
            <p className="text-gray-600">Average Rating</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">1000+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroscopePage;



