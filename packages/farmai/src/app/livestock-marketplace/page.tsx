'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Listing {
  id: string;
  type: string;
  breed: string;
  age: string;
  price: string;
  location: string;
  seller: string;
  healthCert: boolean;
  image: string;
}

export default function LivestockMarketplace() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const listings: Listing[] = [
    {
      id: '1',
      type: 'Cattle',
      breed: 'Holstein Friesian',
      age: '2 years',
      price: '$1,200',
      location: 'Kenya',
      seller: 'John Kamau',
      healthCert: true,
      image: '🐄'
    },
    {
      id: '2',
      type: 'Goat',
      breed: 'Boer',
      age: '1 year',
      price: '$180',
      location: 'Uganda',
      seller: 'Mary Nakato',
      healthCert: true,
      image: '🐐'
    },
    {
      id: '3',
      type: 'Poultry',
      breed: 'Rhode Island Red',
      age: '6 months',
      price: '$8/bird',
      location: 'Tanzania',
      seller: 'Ahmed Hassan',
      healthCert: true,
      image: '🐔'
    },
    {
      id: '4',
      type: 'Sheep',
      breed: 'Dorper',
      age: '18 months',
      price: '$220',
      location: 'Kenya',
      seller: 'Grace Wanjiru',
      healthCert: true,
      image: '�양'
    }
  ];

  const filteredListings = listings.filter(listing => {
    const matchesFilter = filter === 'all' || listing.type.toLowerCase() === filter;
    const matchesSearch = listing.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-green-600">
              🌾 FARMAI
            </Link>
            <nav className="flex gap-6">
              <Link href="/dashboard" className="text-gray-600 hover:text-green-600">
                Dashboard
              </Link>
              <Link href="/livestock" className="text-gray-600 hover:text-green-600">
                Livestock
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🐄 Livestock Marketplace
          </h1>
          <p className="text-gray-600">
            Buy and sell quality livestock with verified health certifications
          </p>
        </div>

        {/* Search & Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Livestock
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by breed or type..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Type
              </label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="cattle">Cattle</option>
                <option value="goat">Goats</option>
                <option value="sheep">Sheep</option>
                <option value="poultry">Poultry</option>
              </select>
            </div>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredListings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 flex items-center justify-center">
                <span className="text-6xl">{listing.image}</span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{listing.breed}</h3>
                    <p className="text-sm text-gray-600">{listing.type}</p>
                  </div>
                  {listing.healthCert && (
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                      ✓ Certified
                    </span>
                  )}
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">📅</span>
                    <span>Age: {listing.age}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">📍</span>
                    <span>{listing.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">👤</span>
                    <span>{listing.seller}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-2xl font-bold text-green-600">{listing.price}</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Contact Seller
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sell Your Livestock CTA */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Sell Your Livestock?</h2>
          <p className="text-lg mb-6 opacity-90">
            List your animals on FARMAI Marketplace and reach thousands of verified buyers
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Create Listing
          </button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-4xl mb-3">✓</div>
            <h3 className="font-bold text-gray-900 mb-2">Verified Sellers</h3>
            <p className="text-sm text-gray-600">
              All sellers are verified with identity and location confirmation
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-4xl mb-3">🏥</div>
            <h3 className="font-bold text-gray-900 mb-2">Health Certified</h3>
            <p className="text-sm text-gray-600">
              Livestock comes with veterinary health certificates
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="font-bold text-gray-900 mb-2">Secure Payments</h3>
            <p className="text-sm text-gray-600">
              Protected transactions through FARMAI Wallet system
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

