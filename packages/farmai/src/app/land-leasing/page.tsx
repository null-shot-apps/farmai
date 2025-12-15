'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LandLeasingPage() {
  const [listingType, setListingType] = useState<'browse' | 'list'>('browse');
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    minSize: '',
    maxSize: '',
    soilType: '',
    waterAccess: false,
  });

  const listings = [
    {
      id: 1,
      owner: 'John Kamau',
      location: 'Nakuru County',
      size: '5 acres',
      soilType: 'Loamy',
      waterAccess: true,
      price: '15,000 KES/season',
      available: true,
      image: '🌾',
    },
    {
      id: 2,
      owner: 'Mary Wanjiku',
      location: 'Kiambu County',
      size: '3 acres',
      soilType: 'Clay',
      waterAccess: true,
      price: '12,000 KES/season',
      available: true,
      image: '🌱',
    },
    {
      id: 3,
      owner: 'Peter Ochieng',
      location: 'Kisumu County',
      size: '10 acres',
      soilType: 'Sandy Loam',
      waterAccess: false,
      price: '20,000 KES/season',
      available: true,
      image: '🌿',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-green-600 hover:text-green-700">
                ← Back
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">🏞️ Land Lending & Leasing</h1>
                <p className="text-sm text-gray-600">Find or list land for farming</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toggle View */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex space-x-4">
            <button
              onClick={() => setListingType('browse')}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
                listingType === 'browse'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🔍 Browse Land
            </button>
            <button
              onClick={() => setListingType('list')}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
                listingType === 'list'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              📝 List My Land
            </button>
          </div>
        </div>

        {listingType === 'browse' ? (
          <>
            {/* Search Filters */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Search Filters</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={searchFilters.location}
                    onChange={(e) => setSearchFilters({ ...searchFilters, location: e.target.value })}
                    placeholder="Enter county or region"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Min Size (acres)
                  </label>
                  <input
                    type="number"
                    value={searchFilters.minSize}
                    onChange={(e) => setSearchFilters({ ...searchFilters, minSize: e.target.value })}
                    placeholder="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Soil Type
                  </label>
                  <select
                    value={searchFilters.soilType}
                    onChange={(e) => setSearchFilters({ ...searchFilters, soilType: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">All Types</option>
                    <option value="loamy">Loamy</option>
                    <option value="clay">Clay</option>
                    <option value="sandy">Sandy</option>
                    <option value="sandy-loam">Sandy Loam</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={searchFilters.waterAccess}
                    onChange={(e) => setSearchFilters({ ...searchFilters, waterAccess: e.target.checked })}
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700">Water Access Required</span>
                </label>
              </div>
            </div>

            {/* Listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((listing) => (
                <div key={listing.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="text-6xl mb-4 text-center">{listing.image}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{listing.location}</h3>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p>👤 Owner: {listing.owner}</p>
                      <p>📏 Size: {listing.size}</p>
                      <p>🌱 Soil: {listing.soilType}</p>
                      <p>💧 Water: {listing.waterAccess ? '✅ Available' : '❌ Not Available'}</p>
                      <p className="text-lg font-semibold text-green-600">💰 {listing.price}</p>
                    </div>
                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                      Contact Owner
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">List Your Land</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="County, region, or nearest town"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Land Size (acres) *
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="Enter size in acres"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Soil Type *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select soil type</option>
                    <option value="loamy">Loamy</option>
                    <option value="clay">Clay</option>
                    <option value="sandy">Sandy</option>
                    <option value="sandy-loam">Sandy Loam</option>
                    <option value="silt">Silt</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price per Season (KES) *
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="Enter price"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Water Access
                </label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="water" value="yes" className="text-green-600" />
                    <span>Yes - Water available on land</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="water" value="no" className="text-green-600" />
                    <span>No - No water access</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your land, access roads, nearby facilities, etc."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Information *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Your phone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                📝 Publish Listing
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

