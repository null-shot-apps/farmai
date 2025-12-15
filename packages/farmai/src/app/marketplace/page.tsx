'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MarketplacePage() {
  const [activeTab, setActiveTab] = useState<'crops' | 'livestock' | 'inputs'>('crops');
  const [searchQuery, setSearchQuery] = useState('');

  const cropListings = [
    { id: 1, name: 'Organic Tomatoes', seller: 'John Farm', location: 'Kenya', price: '$2.50/kg', quantity: '500kg', image: '🍅' },
    { id: 2, name: 'Fresh Maize', seller: 'Green Valley', location: 'Uganda', price: '$1.20/kg', quantity: '2000kg', image: '🌽' },
    { id: 3, name: 'Premium Coffee Beans', seller: 'Highland Farms', location: 'Ethiopia', price: '$8.00/kg', quantity: '300kg', image: '☕' },
    { id: 4, name: 'Sweet Potatoes', seller: 'Sunrise Co-op', location: 'Tanzania', price: '$1.80/kg', quantity: '1000kg', image: '🍠' },
  ];

  const livestockListings = [
    { id: 1, name: 'Dairy Cow (Holstein)', seller: 'Mwangi Ranch', location: 'Kenya', price: '$1,200', age: '3 years', image: '🐄' },
    { id: 2, name: 'Goats (Boer)', seller: 'Savanna Livestock', location: 'Tanzania', price: '$150 each', age: '1.5 years', image: '🐐' },
    { id: 3, name: 'Chickens (Layers)', seller: 'Poultry Plus', location: 'Uganda', price: '$8 each', age: '6 months', image: '🐔' },
    { id: 4, name: 'Sheep (Dorper)', seller: 'Valley Herders', location: 'Rwanda', price: '$180 each', age: '2 years', image: '🐑' },
  ];

  const inputListings = [
    { id: 1, name: 'Organic Fertilizer NPK 10-10-10', seller: 'AgriSupply Co', location: 'Nairobi', price: '$45/50kg', stock: 'In Stock', image: '🌱' },
    { id: 2, name: 'Drip Irrigation Kit', seller: 'WaterTech', location: 'Kampala', price: '$250/set', stock: 'In Stock', image: '💧' },
    { id: 3, name: 'Pesticide (Organic)', seller: 'GreenChem', location: 'Dar es Salaam', price: '$30/5L', stock: 'Limited', image: '🧪' },
    { id: 4, name: 'Quality Seeds - Maize Hybrid', seller: 'SeedMasters', location: 'Kigali', price: '$15/kg', stock: 'In Stock', image: '🌾' },
  ];

  const getCurrentListings = () => {
    switch (activeTab) {
      case 'crops':
        return cropListings;
      case 'livestock':
        return livestockListings;
      case 'inputs':
        return inputListings;
      default:
        return cropListings;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <span className="text-2xl">🌾</span>
              <span className="text-xl font-bold text-green-700">FARMAI</span>
            </Link>
            <Link
              href="/dashboard"
              className="text-sm text-gray-600 hover:text-green-600 transition-colors"
            >
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🛒 Marketplace</h1>
          <p className="text-gray-600">Buy and sell crops, livestock, and farm inputs</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search products, sellers, or locations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex space-x-2 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('crops')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'crops'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            🌾 Crops
          </button>
          <button
            onClick={() => setActiveTab('livestock')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'livestock'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            🐄 Livestock
          </button>
          <button
            onClick={() => setActiveTab('inputs')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'inputs'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            🌱 Farm Inputs
          </button>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {getCurrentListings().map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="bg-gradient-to-br from-green-100 to-blue-100 h-48 flex items-center justify-center text-6xl">
                {listing.image}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{listing.name}</h3>
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <p>👤 {listing.seller}</p>
                  <p>📍 {listing.location}</p>
                  {activeTab === 'crops' && <p>📦 {(listing as any).quantity}</p>}
                  {activeTab === 'livestock' && <p>🎂 {(listing as any).age}</p>}
                  {activeTab === 'inputs' && <p>📊 {(listing as any).stock}</p>}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-600">{listing.price}</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                    Contact Seller
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sell Button */}
        <div className="fixed bottom-8 right-8">
          <button className="bg-blue-600 text-white px-6 py-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors font-medium flex items-center space-x-2">
            <span className="text-xl">+</span>
            <span>List Your Product</span>
          </button>
        </div>
      </div>
    </div>
  );
}

