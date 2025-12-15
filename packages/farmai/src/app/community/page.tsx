'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CommunityPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'crops' | 'livestock' | 'market'>('all');

  const discussions = [
    {
      id: 1,
      category: 'crops',
      title: 'Best practices for organic tomato farming in rainy season',
      author: 'John Mwangi',
      location: 'Kenya',
      replies: 24,
      likes: 45,
      time: '2 hours ago',
      excerpt: 'I\'ve been growing tomatoes for 5 years and want to share what works...',
      tags: ['tomatoes', 'organic', 'rainy-season'],
    },
    {
      id: 2,
      category: 'livestock',
      title: 'Dairy cow showing signs of mastitis - need urgent advice',
      author: 'Sarah Ouma',
      location: 'Uganda',
      replies: 12,
      likes: 18,
      time: '4 hours ago',
      excerpt: 'My Holstein cow has swollen udder and reduced milk production...',
      tags: ['dairy', 'health', 'urgent'],
    },
    {
      id: 3,
      category: 'market',
      title: 'Coffee prices rising - good time to sell?',
      author: 'David Bekele',
      location: 'Ethiopia',
      replies: 31,
      likes: 67,
      time: '1 day ago',
      excerpt: 'International coffee prices are up 15% this month. Should we hold or sell?',
      tags: ['coffee', 'prices', 'market-trends'],
    },
    {
      id: 4,
      category: 'crops',
      title: 'Maize pest control without chemicals',
      author: 'Grace Mutua',
      location: 'Tanzania',
      replies: 19,
      likes: 52,
      time: '1 day ago',
      excerpt: 'Looking for natural pest control methods that work for maize...',
      tags: ['maize', 'pest-control', 'organic'],
    },
    {
      id: 5,
      category: 'livestock',
      title: 'Starting a poultry farm - what breed is best?',
      author: 'Peter Kamau',
      location: 'Kenya',
      replies: 28,
      likes: 41,
      time: '2 days ago',
      excerpt: 'I have 1 acre and want to start with 100 chickens. Which breed for eggs?',
      tags: ['poultry', 'beginners', 'breeds'],
    },
    {
      id: 6,
      category: 'crops',
      title: 'Drip irrigation setup guide for small farms',
      author: 'Moses Wanjala',
      location: 'Kenya',
      replies: 15,
      likes: 38,
      time: '3 days ago',
      excerpt: 'Complete guide on setting up affordable drip irrigation...',
      tags: ['irrigation', 'water', 'technology'],
    },
  ];

  const filteredDiscussions = activeCategory === 'all'
    ? discussions
    : discussions.filter(d => d.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'crops': return '🌾';
      case 'livestock': return '🐄';
      case 'market': return '💰';
      default: return '💬';
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">💬 Community Forum</h1>
          <p className="text-gray-600">Connect with farmers worldwide, share knowledge, and get expert advice</p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            All Topics
          </button>
          <button
            onClick={() => setActiveCategory('crops')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeCategory === 'crops'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            🌾 Crops
          </button>
          <button
            onClick={() => setActiveCategory('livestock')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeCategory === 'livestock'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            🐄 Livestock
          </button>
          <button
            onClick={() => setActiveCategory('market')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeCategory === 'market'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            💰 Market & Prices
          </button>
        </div>

        {/* Discussions List */}
        <div className="space-y-4">
          {filteredDiscussions.map((discussion) => (
            <div
              key={discussion.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{getCategoryIcon(discussion.category)}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-green-600 cursor-pointer">
                    {discussion.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{discussion.excerpt}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {discussion.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span>👤 {discussion.author}</span>
                      <span>📍 {discussion.location}</span>
                      <span>🕒 {discussion.time}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <span>💬</span>
                        <span>{discussion.replies}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <span>👍</span>
                        <span>{discussion.likes}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New Discussion Button */}
        <div className="fixed bottom-8 right-8">
          <button className="bg-blue-600 text-white px-6 py-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors font-medium flex items-center space-x-2">
            <span className="text-xl">+</span>
            <span>Start Discussion</span>
          </button>
        </div>
      </div>
    </div>
  );
}

