'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GroupsPage() {
  const [activeTab, setActiveTab] = useState('discover');

  const myGroups = [
    { id: 1, name: 'Maize Farmers Kenya', members: 12340, posts: 234, icon: '🌽', joined: true },
    { id: 2, name: 'Dairy Farmers Network', members: 8920, posts: 189, icon: '🐄', joined: true },
    { id: 3, name: 'Organic Farming', members: 6450, posts: 156, icon: '🌱', joined: true }
  ];

  const suggestedGroups = [
    { id: 4, name: 'Poultry Farmers Association', members: 5670, posts: 145, icon: '🐔', joined: false },
    { id: 5, name: 'Coffee Growers Community', members: 4320, posts: 123, icon: '☕', joined: false },
    { id: 6, name: 'Vegetable Farming Tips', members: 7890, posts: 267, icon: '🥬', joined: false },
    { id: 7, name: 'Livestock Health & Care', members: 3450, posts: 98, icon: '🐑', joined: false },
    { id: 8, name: 'Smart Irrigation Systems', members: 2890, posts: 76, icon: '💧', joined: false },
    { id: 9, name: 'Greenhouse Farming', members: 4560, posts: 134, icon: '🏡', joined: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/social" className="text-green-600 hover:text-green-700">
              ← Back to Feed
            </Link>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              + Create Group
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">👥 Farmer Groups</h1>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('discover')}
              className={`flex-1 px-6 py-4 font-medium ${
                activeTab === 'discover'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              🔍 Discover Groups
            </button>
            <button
              onClick={() => setActiveTab('my-groups')}
              className={`flex-1 px-6 py-4 font-medium ${
                activeTab === 'my-groups'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              📂 My Groups ({myGroups.length})
            </button>
          </div>
        </div>

        {/* My Groups */}
        {activeTab === 'my-groups' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myGroups.map((group) => (
              <Link
                key={group.id}
                href={`/social/groups/${group.id}`}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="text-6xl mb-4 text-center">{group.icon}</div>
                  <h3 className="font-bold text-lg mb-2 text-center">{group.name}</h3>
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-4">
                    <span>👥 {group.members.toLocaleString()}</span>
                    <span>📝 {group.posts} posts/day</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                      View Group
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      ⋯
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Discover Groups */}
        {activeTab === 'discover' && (
          <div>
            {/* Search */}
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <input
                type="text"
                placeholder="Search for groups..."
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-4">Browse by Category</h3>
              <div className="flex flex-wrap gap-3">
                {['All', 'Crops', 'Livestock', 'Organic', 'Technology', 'Market', 'Community'].map((cat) => (
                  <button
                    key={cat}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-green-50 hover:border-green-600"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Suggested Groups */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestedGroups.map((group) => (
                <div key={group.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="text-6xl mb-4 text-center">{group.icon}</div>
                    <h3 className="font-bold text-lg mb-2 text-center">{group.name}</h3>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-4">
                      <span>👥 {group.members.toLocaleString()}</span>
                      <span>📝 {group.posts} posts/day</span>
                    </div>
                    <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                      + Join Group
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

