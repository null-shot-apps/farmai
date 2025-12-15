'use client';

import { useState } from 'react';
import Link from 'next/link';

interface GroupBuy {
  id: string;
  product: string;
  category: string;
  targetQuantity: number;
  currentQuantity: number;
  pricePerUnit: number;
  groupDiscount: number;
  deadline: string;
  participants: number;
  status: 'active' | 'closing-soon' | 'completed';
}

export default function Cooperative() {
  const [activeTab, setActiveTab] = useState<'browse' | 'my-groups' | 'create'>('browse');

  const groupBuys: GroupBuy[] = [
    {
      id: '1',
      product: 'NPK Fertilizer (50kg bags)',
      category: 'Fertilizers',
      targetQuantity: 100,
      currentQuantity: 78,
      pricePerUnit: 45,
      groupDiscount: 25,
      deadline: '2024-12-20',
      participants: 42,
      status: 'active'
    },
    {
      id: '2',
      product: 'Hybrid Maize Seeds (10kg)',
      category: 'Seeds',
      targetQuantity: 50,
      currentQuantity: 48,
      pricePerUnit: 120,
      groupDiscount: 20,
      deadline: '2024-12-18',
      participants: 28,
      status: 'closing-soon'
    },
    {
      id: '3',
      product: 'Drip Irrigation Kit',
      category: 'Equipment',
      targetQuantity: 20,
      currentQuantity: 15,
      pricePerUnit: 350,
      groupDiscount: 30,
      deadline: '2024-12-25',
      participants: 15,
      status: 'active'
    },
    {
      id: '4',
      product: 'Organic Pesticide (5L)',
      category: 'Pesticides',
      targetQuantity: 80,
      currentQuantity: 65,
      pricePerUnit: 35,
      groupDiscount: 18,
      deadline: '2024-12-22',
      participants: 35,
      status: 'active'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
              ← Back
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">🤝 Cooperative Buying</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Info Banner */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white mb-8">
          <h2 className="text-2xl font-bold mb-2">Save More Together!</h2>
          <p className="text-lg text-white/90">
            Join group purchases with other farmers to unlock bulk discounts of up to 30%. 
            The more farmers join, the better the price for everyone!
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('browse')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'browse'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Browse Groups
          </button>
          <button
            onClick={() => setActiveTab('my-groups')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'my-groups'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            My Groups
          </button>
          <button
            onClick={() => setActiveTab('create')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'create'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            + Create Group
          </button>
        </div>

        {/* Browse Groups Tab */}
        {activeTab === 'browse' && (
          <div className="space-y-6">
            {groupBuys.map((group) => (
              <div key={group.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{group.product}</h3>
                      {group.status === 'closing-soon' && (
                        <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                          ⏰ Closing Soon
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">{group.category}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-600">
                      ${group.pricePerUnit}
                    </div>
                    <div className="text-sm text-gray-600">per unit</div>
                    <div className="text-xs text-green-600 font-medium">
                      Save {group.groupDiscount}%
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">
                      {group.currentQuantity} / {group.targetQuantity} units
                    </span>
                    <span className="font-medium text-green-600">
                      {Math.round((group.currentQuantity / group.targetQuantity) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all"
                      style={{ width: `${(group.currentQuantity / group.targetQuantity) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-600">👥 Participants:</span>
                    <span className="font-medium">{group.participants}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-600">📅 Deadline:</span>
                    <span className="font-medium">{group.deadline}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-600">💰 Total Savings:</span>
                    <span className="font-medium text-green-600">
                      ${(group.pricePerUnit * group.groupDiscount / 100 * group.currentQuantity).toFixed(0)}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold">
                    Join Group
                  </button>
                  <button className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* My Groups Tab */}
        {activeTab === 'my-groups' && (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Active Groups</h3>
            <p className="text-gray-600 mb-6">
              You haven&apos;t joined any group purchases yet. Browse available groups to start saving!
            </p>
            <button
              onClick={() => setActiveTab('browse')}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold"
            >
              Browse Groups
            </button>
          </div>
        )}

        {/* Create Group Tab */}
        {activeTab === 'create' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Group Buy</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., NPK Fertilizer 50kg bags"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                  <option>Select category</option>
                  <option>Seeds</option>
                  <option>Fertilizers</option>
                  <option>Pesticides</option>
                  <option>Equipment</option>
                  <option>Animal Feed</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Quantity
                  </label>
                  <input
                    type="number"
                    placeholder="100"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Per Unit ($)
                  </label>
                  <input
                    type="number"
                    placeholder="45.00"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Group Discount (%)
                  </label>
                  <input
                    type="number"
                    placeholder="25"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deadline
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Provide details about the product, supplier, delivery terms, etc."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700"
              >
                Create Group Buy
              </button>
            </form>
          </div>
        )}

        {/* Benefits Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-bold text-lg mb-2">Save Up to 30%</h3>
            <p className="text-sm text-gray-600">
              Bulk purchasing power means better prices for everyone
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="font-bold text-lg mb-2">Community Trust</h3>
            <p className="text-sm text-gray-600">
              Buy with verified farmers and trusted suppliers
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="font-bold text-lg mb-2">Free Delivery</h3>
            <p className="text-sm text-gray-600">
              Most group orders qualify for free delivery
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

