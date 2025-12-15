'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SocialPage() {
  const [activeTab, setActiveTab] = useState('feed');
  const [postText, setPostText] = useState('');

  const posts = [
    {
      id: 1,
      author: 'John Kamau',
      location: 'Nakuru, Kenya',
      avatar: '👨‍🌾',
      time: '2 hours ago',
      content: 'Just harvested 50 bags of maize! Thanks to the AI crop recommendations from FARMAI. My yield increased by 40% this season! 🌽🎉',
      image: '🌾',
      likes: 234,
      comments: 45,
      shares: 12,
      tags: ['#maize', '#harvest', '#success']
    },
    {
      id: 2,
      author: 'Amina Hassan',
      location: 'Kano, Nigeria',
      avatar: '👩‍🌾',
      time: '5 hours ago',
      content: 'My dairy cows are producing 30% more milk after following the nutrition plan. Looking to connect with other dairy farmers!',
      image: '🐄',
      likes: 189,
      comments: 32,
      shares: 8,
      tags: ['#dairy', '#livestock', '#nutrition']
    },
    {
      id: 3,
      author: 'David Omondi',
      location: 'Kisumu, Kenya',
      avatar: '👨‍🌾',
      time: '1 day ago',
      content: 'Started a cooperative buying group in my village. We saved 25% on fertilizer costs! Who wants to join? 💪',
      image: '🤝',
      likes: 312,
      comments: 67,
      shares: 45,
      tags: ['#cooperative', '#savings', '#community']
    },
    {
      id: 4,
      author: 'Grace Mwangi',
      location: 'Eldoret, Kenya',
      avatar: '👩‍🌾',
      time: '2 days ago',
      content: 'Tomato farming update: Used the pest diagnosis tool and saved my entire crop from blight! Thank you FARMAI! 🍅',
      image: '🍅',
      likes: 445,
      comments: 89,
      shares: 34,
      tags: ['#tomatoes', '#pestcontrol', '#success']
    }
  ];

  const trendingTopics = [
    { tag: '#maize', posts: 1234 },
    { tag: '#dairy', posts: 892 },
    { tag: '#organic', posts: 756 },
    { tag: '#irrigation', posts: 645 },
    { tag: '#cooperative', posts: 534 }
  ];

  const suggestedFarmers = [
    { name: 'Peter Njoroge', location: 'Meru, Kenya', followers: 2340, specialty: 'Coffee Farming' },
    { name: 'Sarah Okafor', location: 'Lagos, Nigeria', followers: 1890, specialty: 'Poultry' },
    { name: 'James Mutua', location: 'Machakos, Kenya', followers: 1567, specialty: 'Horticulture' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="text-2xl font-bold text-green-600">
              🌾 FARMAI Social
            </Link>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                🔔 <span className="text-xs bg-red-500 text-white rounded-full px-1">5</span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                💬 <span className="text-xs bg-blue-500 text-white rounded-full px-1">3</span>
              </button>
              <Link href="/social/profile" className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg">
                <span className="text-2xl">👨‍🌾</span>
                <span className="font-medium">My Profile</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow p-4 sticky top-24">
              <h3 className="font-bold text-lg mb-4">Navigation</h3>
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('feed')}
                  className={`w-full text-left px-4 py-2 rounded-lg ${activeTab === 'feed' ? 'bg-green-50 text-green-600' : 'hover:bg-gray-50'}`}
                >
                  🏠 Feed
                </button>
                <Link href="/social/profile" className="block px-4 py-2 rounded-lg hover:bg-gray-50">
                  👤 My Profile
                </Link>
                <Link href="/social/groups" className="block px-4 py-2 rounded-lg hover:bg-gray-50">
                  👥 Groups
                </Link>
                <Link href="/social/events" className="block px-4 py-2 rounded-lg hover:bg-gray-50">
                  📅 Events
                </Link>
                <Link href="/social/messages" className="block px-4 py-2 rounded-lg hover:bg-gray-50">
                  💬 Messages
                </Link>
                <Link href="/social/marketplace" className="block px-4 py-2 rounded-lg hover:bg-gray-50">
                  🛒 Marketplace
                </Link>
              </nav>

              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold mb-3">Trending Topics</h4>
                <div className="space-y-2">
                  {trendingTopics.map((topic, idx) => (
                    <button key={idx} className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50">
                      <div className="font-medium text-green-600">{topic.tag}</div>
                      <div className="text-xs text-gray-500">{topic.posts} posts</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-6">
            {/* Create Post */}
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <div className="flex gap-3">
                <span className="text-3xl">👨‍🌾</span>
                <div className="flex-1">
                  <textarea
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                    placeholder="Share your farming success, ask questions, or connect with other farmers..."
                    className="w-full border rounded-lg p-3 mb-3 min-h-[100px]"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                        📷 Photo
                      </button>
                      <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                        📹 Video
                      </button>
                      <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                        📍 Location
                      </button>
                    </div>
                    <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts Feed */}
            <div className="space-y-6">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow">
                  {/* Post Header */}
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{post.avatar}</span>
                      <div>
                        <div className="font-bold">{post.author}</div>
                        <div className="text-sm text-gray-500">{post.location} • {post.time}</div>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">⋯</button>
                  </div>

                  {/* Post Content */}
                  <div className="px-4 pb-3">
                    <p className="text-gray-800 mb-2">{post.content}</p>
                    <div className="flex gap-2">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="text-green-600 text-sm">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Post Image */}
                  <div className="bg-gray-100 h-64 flex items-center justify-center text-6xl">
                    {post.image}
                  </div>

                  {/* Post Actions */}
                  <div className="p-4 border-t">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span>👍 {post.likes} likes</span>
                      <span>{post.comments} comments • {post.shares} shares</span>
                    </div>
                    <div className="flex items-center justify-around border-t pt-3">
                      <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-lg">
                        👍 Like
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-lg">
                        💬 Comment
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-lg">
                        🔄 Share
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow p-4 sticky top-24">
              <h3 className="font-bold text-lg mb-4">Suggested Farmers</h3>
              <div className="space-y-4">
                {suggestedFarmers.map((farmer, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-2xl">👨‍🌾</span>
                    <div className="flex-1">
                      <div className="font-semibold">{farmer.name}</div>
                      <div className="text-xs text-gray-500">{farmer.location}</div>
                      <div className="text-xs text-gray-500">{farmer.followers} followers</div>
                      <div className="text-xs text-green-600 mt-1">{farmer.specialty}</div>
                      <button className="mt-2 px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700">
                        Follow
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold mb-3">Active Groups</h4>
                <div className="space-y-3">
                  <Link href="/social/groups/maize-farmers" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <div className="font-medium">🌽 Maize Farmers Kenya</div>
                    <div className="text-xs text-gray-500">12,340 members</div>
                  </Link>
                  <Link href="/social/groups/dairy-farmers" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <div className="font-medium">🐄 Dairy Farmers Network</div>
                    <div className="text-xs text-gray-500">8,920 members</div>
                  </Link>
                  <Link href="/social/groups/organic-farming" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <div className="font-medium">🌱 Organic Farming</div>
                    <div className="text-xs text-gray-500">6,450 members</div>
                  </Link>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold mb-3">Upcoming Events</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-medium">Agri-Tech Expo 2024</div>
                    <div className="text-xs text-gray-600">📅 March 15, 2024</div>
                    <div className="text-xs text-gray-600">📍 Nairobi, Kenya</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium">Dairy Farming Workshop</div>
                    <div className="text-xs text-gray-600">📅 March 20, 2024</div>
                    <div className="text-xs text-gray-600">📍 Nakuru, Kenya</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

