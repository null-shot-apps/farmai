'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Supplier {
  id: string;
  name: string;
  category: string;
  products: string[];
  rating: number;
  reviews: number;
  location: string;
  verified: boolean;
  discount: string;
}

export default function Suppliers() {
  const [category, setCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const suppliers: Supplier[] = [
    {
      id: '1',
      name: 'AgriSeeds Pro',
      category: 'seeds',
      products: ['Hybrid Seeds', 'Organic Seeds', 'Vegetable Seeds'],
      rating: 4.8,
      reviews: 234,
      location: 'Regional Hub',
      verified: true,
      discount: '15% off bulk orders'
    },
    {
      id: '2',
      name: 'FertilizerDirect',
      category: 'fertilizers',
      products: ['NPK Fertilizers', 'Organic Compost', 'Micronutrients'],
      rating: 4.6,
      reviews: 189,
      location: 'Nationwide',
      verified: true,
      discount: '10% off first order'
    },
    {
      id: '3',
      name: 'PestControl Solutions',
      category: 'pesticides',
      products: ['Insecticides', 'Fungicides', 'Herbicides'],
      rating: 4.7,
      reviews: 156,
      location: 'Regional Hub',
      verified: true,
      discount: 'Free delivery over $100'
    },
    {
      id: '4',
      name: 'FarmEquip Store',
      category: 'equipment',
      products: ['Tractors', 'Irrigation Systems', 'Hand Tools'],
      rating: 4.9,
      reviews: 312,
      location: 'Multiple Locations',
      verified: true,
      discount: 'Financing available'
    },
    {
      id: '5',
      name: 'LivestockFeed Co',
      category: 'feed',
      products: ['Cattle Feed', 'Poultry Feed', 'Supplements'],
      rating: 4.5,
      reviews: 198,
      location: 'Regional Hub',
      verified: true,
      discount: '20% off subscriptions'
    },
    {
      id: '6',
      name: 'VetSupplies Plus',
      category: 'veterinary',
      products: ['Vaccines', 'Medicines', 'Supplements'],
      rating: 4.8,
      reviews: 267,
      location: 'Nationwide',
      verified: true,
      discount: 'Bulk discounts available'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Suppliers', icon: '🏪' },
    { id: 'seeds', name: 'Seeds', icon: '🌱' },
    { id: 'fertilizers', name: 'Fertilizers', icon: '🧪' },
    { id: 'pesticides', name: 'Pesticides', icon: '🛡️' },
    { id: 'equipment', name: 'Equipment', icon: '🚜' },
    { id: 'feed', name: 'Animal Feed', icon: '🌾' },
    { id: 'veterinary', name: 'Veterinary', icon: '💊' }
  ];

  const filteredSuppliers = suppliers.filter(supplier => {
    const matchesCategory = category === 'all' || supplier.category === category;
    const matchesSearch = supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         supplier.products.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
              ← Back
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">🏪 Input Suppliers</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search suppliers or products..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            />
            <button className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium">
              Search
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-all ${
                category === cat.id
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Suppliers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSuppliers.map((supplier) => (
            <div key={supplier.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{supplier.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium ml-1">{supplier.rating}</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{supplier.reviews} reviews</span>
                  </div>
                </div>
                {supplier.verified && (
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                    ✓ Verified
                  </span>
                )}
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-2">Products:</div>
                <div className="flex flex-wrap gap-2">
                  {supplier.products.map((product, idx) => (
                    <span key={idx} className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded">
                      {product}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4 pb-4 border-b">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="mr-2">📍</span>
                  {supplier.location}
                </div>
              </div>

              <div className="mb-4">
                <div className="px-3 py-2 bg-orange-50 text-orange-700 text-sm rounded-lg text-center font-medium">
                  🎁 {supplier.discount}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium">
                  View Products
                </button>
                <button className="px-4 py-2 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredSuppliers.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-600">No suppliers found. Try adjusting your filters.</p>
          </div>
        )}

        {/* Partnership Banner */}
        <div className="mt-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl p-8 text-white">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Become a Partner Supplier</h2>
            <p className="text-lg mb-6 text-white/90">
              Join our network of verified suppliers and reach millions of farmers across the globe. 
              Get access to bulk orders, guaranteed payments, and marketing support.
            </p>
            <button className="px-6 py-3 bg-white text-teal-600 rounded-lg font-semibold hover:bg-gray-100">
              Apply as Supplier
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

