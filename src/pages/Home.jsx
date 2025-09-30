import React, { useState } from 'react';
import { Search, Car, Home, Package, Star, MapPin, Phone, Mail, ChevronRight, TrendingUp, Users, Shield, Award } from 'lucide-react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer'

const MarketplaceHomepage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Package, count: '50K+' },
    { id: 'vehicles', name: 'Vehicles', icon: Car, count: '15K+' },
    { id: 'properties', name: 'Properties', icon: Home, count: '25K+' },
    { id: 'products', name: 'Products', icon: Package, count: '35K+' }
  ];

  const featuredListings = [
    {
      id: 1,
      title: 'Luxury BMW X5 2023',
      price: '$45,000',
      category: 'vehicles',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=250&fit=crop',
      location: 'New York',
      rating: 4.8,
      seller: 'AutoMax Dealers'
    },
    {
      id: 2,
      title: 'Modern 3BR Apartment',
      price: '$2,500/month',
      category: 'properties',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop',
      location: 'Manhattan',
      rating: 4.9,
      seller: 'Prime Properties'
    },
    {
      id: 3,
      title: 'iPhone 15 Pro Max',
      price: '$1,199',
      category: 'products',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=250&fit=crop',
      location: 'California',
      rating: 4.7,
      seller: 'TechStore Inc'
    },
    {
      id: 4,
      title: 'Tesla Model 3 2024',
      price: '$38,000',
      category: 'vehicles',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=250&fit=crop',
      location: 'Los Angeles',
      rating: 4.9,
      seller: 'EV Motors'
    },
    {
      id: 5,
      title: 'MacBook Pro M3',
      price: '$2,499',
      category: 'products',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=250&fit=crop',
      location: 'Seattle',
      rating: 4.8,
      seller: 'TechHub Store'
    },
    {
      id: 6,
      title: 'Gaming Desktop PC',
      price: '$1,899',
      category: 'products',
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=250&fit=crop',
      location: 'Texas',
      rating: 4.6,
      seller: 'GameZone'
    },
    {
      id: 7,
      title: 'Wireless Headphones',
      price: '$299',
      category: 'products',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=250&fit=crop',
      location: 'Miami',
      rating: 4.5,
      seller: 'AudioMax'
    },
    {
      id: 8,
      title: 'Honda Civic 2023',
      price: '$28,000',
      category: 'vehicles',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop',
      location: 'Chicago',
      rating: 4.7,
      seller: 'City Motors'
    },
    {
      id: 9,
      title: 'Ford Truck F-150',
      price: '$52,000',
      category: 'vehicles',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=250&fit=crop',
      location: 'Dallas',
      rating: 4.8,
      seller: 'Truck Center'
    },
    {
      id: 10,
      title: 'Downtown Condo',
      price: '$3,200/month',
      category: 'properties',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop',
      location: 'San Francisco',
      rating: 4.9,
      seller: 'Urban Living'
    },
    {
      id: 11,
      title: 'Family House 4BR',
      price: '$450,000',
      category: 'properties',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=250&fit=crop',
      location: 'Austin',
      rating: 4.7,
      seller: 'Home Realty'
    },
    {
      id: 12,
      title: 'Studio Apartment',
      price: '$1,800/month',
      category: 'properties',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=250&fit=crop',
      location: 'Boston',
      rating: 4.5,
      seller: 'Metro Properties'
    }
  ];

  const stats = [
    { icon: Users, label: 'Active Users', value: '2M+' },
    { icon: TrendingUp, label: 'Transactions', value: '500K+' },
    { icon: Shield, label: 'Verified Sellers', value: '10K+' },
    { icon: Award, label: 'Customer Rating', value: '4.8/5' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar/>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find Everything You Need
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-purple-100 max-w-3xl mx-auto">
              Discover amazing products, dream properties, and perfect vehicles all in one place
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-2 max-w-4xl mx-auto shadow-2xl">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
                <div className="flex-1 relative w-full">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <select className="px-3 py-4 rounded-xl text-gray-800 cursor-pointer bg-gray-50 border-0 focus:outline-none focus:ring-2 focus:ring-purple-500 min-w-[150px]">
                  <option>All Categories</option>
                  <option>Vehicles</option>
                  <option>Properties</option>
                  <option>Products</option>
                </select>
                <button className="bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                  Search Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our diverse marketplace with thousands of listings across multiple categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group cursor-pointer bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-200"
                onClick={() => setActiveCategory(category.id)}
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
                  <p className="text-3xl font-bold bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] bg-clip-text text-transparent mb-4">
                    {category.count}
                  </p>
                  <div className="flex items-center justify-center text-purple-600 group-hover:text-purple-800 transition-colors">
                    <span className="font-medium">Explore</span>
                    <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the latest electronics, fashion, and everyday essentials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredListings.filter(item => item.category === 'products').map((listing) => (
              <div key={listing.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Product
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                    {listing.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] bg-clip-text text-transparent">
                      {listing.price}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{listing.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {listing.location}
                  </div>
                  
                  <div className="text-sm text-gray-500 mb-4">
                    by {listing.seller}
                  </div>
                  
                  <button className="cursor-pointer w-full bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="cursor-pointer bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Vehicles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find your dream car, bike, or any vehicle from verified dealers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredListings.filter(item => item.category === 'vehicles').map((listing) => (
              <div key={listing.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Vehicle
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                    {listing.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] bg-clip-text text-transparent">
                      {listing.price}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{listing.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {listing.location}
                  </div>
                  
                  <div className="text-sm text-gray-500 mb-4">
                    by {listing.seller}
                  </div>
                  
                  <button className="cursor-pointer w-full bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="cursor-pointer bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
              View All Vehicles
            </button>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Properties</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore homes, apartments, and commercial properties for rent or sale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredListings.filter(item => item.category === 'properties').map((listing) => (
              <div key={listing.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Property
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                    {listing.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] bg-clip-text text-transparent">
                      {listing.price}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{listing.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {listing.location}
                  </div>
                  
                  <div className="text-sm text-gray-500 mb-4">
                    by {listing.seller}
                  </div>
                  
                  <button className=" cursor-pointer w-full bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className=" cursor-pointer bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
              View All Properties
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Selling?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-purple-100">
            Join thousands of successful sellers and reach millions of buyers across the globe
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white cursor-pointer text-purple-600 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Post Your Ad
            </button>
            <button className=" cursor-pointer border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default MarketplaceHomepage;