'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, ChevronDown, Star, Download, Play, Zap, Award, TrendingUp, Eye, Brain, Cpu, Shield, Users, Code } from 'lucide-react';

const ImageAnalyzerPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [activeDemo, setActiveDemo] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Software', count: 124 },
    { id: 'medical', name: 'Medical Imaging', count: 32 },
    { id: 'ai', name: 'AI-Powered', count: 45 },
    { id: 'research', name: 'Research & Lab', count: 28 },
    { id: 'industrial', name: 'Industrial QC', count: 35 },
    { id: 'photography', name: 'Photography', count: 19 },
    { id: 'security', name: 'Security & Surveillance', count: 23 }
  ];

  const products = [
    {
      id: 1,
      name: 'VisionPro AI Suite',
      price: 1999,
      originalPrice: 2599,
      rating: 4.9,
      reviews: 342,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      badge: 'AI Powered',
      version: 'v3.2',
      features: ['Machine Learning', 'Real-time Processing', 'Cloud Integration', 'API Access'],
      category: 'ai',
      compatibility: ['Windows', 'Mac', 'Linux'],
      description: 'Advanced AI-powered image analysis with neural networks'
    },
    {
      id: 2,
      name: 'MedScope Analyzer',
      price: 3499,
      originalPrice: 4299,
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      badge: 'Medical Grade',
      version: 'v2.1',
      features: ['DICOM Support', 'FDA Approved', '3D Reconstruction', 'Measurement Tools'],
      category: 'medical',
      compatibility: ['Windows', 'Mac'],
      description: 'Professional medical imaging analysis for healthcare'
    },
    
    {
      id: 4,
      name: 'IndustrialVision QC',
      price: 2799,
      originalPrice: 3199,
      rating: 4.6,
      reviews: 198,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      badge: 'Industrial',
      version: 'v1.8',
      features: ['Defect Detection', 'Quality Control', 'Automated Reporting', 'Integration APIs'],
      category: 'industrial',
      compatibility: ['Windows', 'Linux'],
      description: 'Industrial quality control and defect detection system'
    },
    {
      id: 5,
      name: 'PhotoEnhance Studio',
      price: 299,
      originalPrice: 399,
      rating: 4.5,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      badge: 'Creative',
      version: 'v5.3',
      features: ['Noise Reduction', 'Color Correction', 'HDR Processing', 'Batch Tools'],
      category: 'photography',
      compatibility: ['Windows', 'Mac'],
      description: 'Professional photography enhancement and analysis'
    },
    {
      id: 6,
      name: 'SecureWatch Analytics',
      price: 1599,
      originalPrice: 1999,
      rating: 4.4,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      badge: 'Security',
      version: 'v2.7',
      features: ['Motion Detection', 'Face Recognition', 'Behavior Analysis', 'Alert System'],
      category: 'security',
      compatibility: ['Windows', 'Linux'],
      description: 'Advanced security and surveillance image analysis'
    },
    {
      id: 7,
      name: 'CloudVision Enterprise',
      price: 4999,
      originalPrice: 5999,
      rating: 4.9,
      reviews: 123,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      badge: 'Enterprise',
      version: 'v1.5',
      features: ['Cloud Processing', 'Multi-user Access', 'Advanced Analytics', 'Custom Models'],
      category: 'ai',
      compatibility: ['Web Based', 'API'],
      description: 'Enterprise-grade cloud-based image analysis platform'
    },
    {
      id: 8,
      name: 'NanoScope Imager',
      price: 1299,
      originalPrice: 1599,
      rating: 4.7,
      reviews: 176,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      badge: 'Scientific',
      version: 'v3.4',
      features: ['Microscopy Tools', 'Measurement Suite', 'Report Generation', 'Data Export'],
      category: 'research',
      compatibility: ['Windows', 'Mac', 'Linux'],
      description: 'Specialized microscopy and nano-scale image analysis'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'under-1000' && product.price < 1000) ||
      (priceRange === '1000-3000' && product.price >= 1000 && product.price < 3000) ||
      (priceRange === 'over-3000' && product.price >= 3000);
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const getBadgeColor = (badge) => {
    switch(badge) {
      case 'AI Powered': return 'bg-gradient-to-r from-purple-500 to-indigo-600';
      case 'Medical Grade': return 'bg-gradient-to-r from-red-500 to-pink-600';
      case 'Research': return 'bg-gradient-to-r from-blue-500 to-cyan-600';
      case 'Industrial': return 'bg-gradient-to-r from-orange-500 to-red-600';
      case 'Creative': return 'bg-gradient-to-r from-pink-500 to-purple-600';
      case 'Security': return 'bg-gradient-to-r from-gray-700 to-gray-900';
      case 'Enterprise': return 'bg-gradient-to-r from-green-500 to-teal-600';
      case 'Scientific': return 'bg-gradient-to-r from-indigo-500 to-purple-600';
      default: return 'bg-gray-500';
    }
  };

  const getCompatibilityIcon = (platform) => {
    switch(platform) {
      case 'Windows': return '🪟';
      case 'Mac': return '🍎';
      case 'Linux': return '🐧';
      case 'Web Based': return '🌐';
      case 'API': return '⚡';
      default: return '💻';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(48)].map((_, i) => (
              <div
                key={i}
                className="border border-white/10 animate-pulse"
                style={{
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className={`text-center transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Image Analyzer Software
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transform your image analysis workflow with cutting-edge software solutions. 
              From AI-powered recognition to medical imaging and industrial quality control.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                <span>AI-Powered Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Real-time Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                <span>API Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`bg-white rounded-3xl shadow-xl p-6 mb-8 backdrop-blur-sm bg-white/90 transform transition-all duration-700 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search image analysis software..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Category Filter */}
            <div className="relative">
              <select
                className="appearance-none bg-white/50 border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
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
                className="appearance-none bg-white/50 border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="all">All Prices</option>
                <option value="under-1000">Under $1,000</option>
                <option value="1000-3000">$1,000 - $3,000</option>
                <option value="over-3000">Over $3,000</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
            
            {/* Sort */}
            <div className="relative">
              <select
                className="appearance-none bg-white/50 border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popularity">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${index * 100 + 500}ms` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-semibold ${getBadgeColor(product.badge)}`}>
                  {product.badge}
                </div>
                <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-md text-xs">
                  {product.version}
                </div>
                
                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-4 transition-opacity duration-300 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex gap-2">
                    <button 
                      className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-medium hover:bg-white/30 transition-colors duration-200 flex items-center gap-2"
                      onClick={() => setActiveDemo(product.id)}
                    >
                      <Play className="w-4 h-4" />
                      Demo
                    </button>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-purple-700 transition-colors duration-200 flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Details
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>
                
                {/* Platform compatibility */}
                <div className="flex items-center gap-1 mb-3">
                  {product.compatibility.map((platform, i) => (
                    <span key={i} className="text-sm" title={platform}>
                      {getCompatibilityIcon(platform)}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.slice(0, 2).map((feature, i) => (
                    <span key={i} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                  {product.features.length > 2 && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      +{product.features.length - 2} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 flex items-center gap-2 text-sm">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 transform transition-all duration-700 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">124+</h3>
            <p className="text-gray-600">Software Solutions</p>
          </div>
          
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">50K+</h3>
            <p className="text-gray-600">Active Users</p>
          </div>
          
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">4.7/5</h3>
            <p className="text-gray-600">Average Rating</p>
          </div>
          
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">99.9%</h3>
            <p className="text-gray-600">Accuracy Rate</p>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className={`mt-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 text-white transform transition-all duration-700 delay-1200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Image Analysis Software?</h2>
            <p className="text-purple-100 text-lg">Industry-leading solutions trusted by professionals worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <Brain className="w-12 h-12 mx-auto mb-4 text-purple-200" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-purple-100">Advanced machine learning algorithms for accurate analysis</p>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <Zap className="w-12 h-12 mx-auto mb-4 text-purple-200" />
              <h3 className="text-xl font-semibold mb-2">Real-time Processing</h3>
              <p className="text-purple-100">Lightning-fast analysis with instant results</p>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <Shield className="w-12 h-12 mx-auto mb-4 text-purple-200" />
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-purple-100">Bank-grade security for sensitive data protection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAnalyzerPage;

