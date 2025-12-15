'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('posts');

  const userStats = {
    posts: 145,
    followers: 2340,
    following: 890,
    likes: 12450
  };

  const userPosts = [
    { id: 1, content: 'Just harvested 50 bags of maize!', likes: 234, comments: 45, image: '🌾' },
    { id: 2, content: 'My dairy cows are producing 30% more milk', likes: 189, comments: 32, image: '🐄' },
    { id: 3, content: 'Started a cooperative buying group', likes: 312, comments: 67, image: '🤝' }
  ];

  const achievements = [
    { icon: '🏆', title: 'Top Contributor', desc: 'Most helpful posts this month' },
    { icon: '⭐', title: 'Expert Farmer', desc: '5+ years experience' },
    { icon: '🌟', title: 'Community Leader', desc: '1000+ followers' },
    { icon: '💚', title: 'Early Adopter', desc: 'Joined in 2024' }
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
              Edit Profile
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow mb-6">
          {/* Cover Photo */}
          <div className="h-48 bg-gradient-to-r from-green-400 to-green-600 rounded-t-lg"></div>
          
          {/* Profile Info */}
          <div className="px-6 pb-6">
            <div className="flex items-end justify-between -mt-16 mb-4">
              <div className="flex items-end gap-4">
                <div className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center text-6xl">
                  👨‍🌾
                </div>
                <div className="mb-2">
                  <h1 className="text-2xl font-bold">John Kamau</h1>
                  <p className="text-gray-600">📍 Nakuru, Kenya</p>
                  <p className="text-sm text-gray-500">Maize & Dairy Farmer • Member since Jan 2024</p>
                </div>
              </div>
              <div className="flex gap-2 mb-2">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Follow
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Message
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 py-4 border-t border-b">
              <div className="text-center">
                <div className="text-2xl font-bold">{userStats.posts}</div>
                <div className="text-sm text-gray-600">Posts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{userStats.followers}</div>
                <div className="text-sm text-gray-600">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{userStats.following}</div>
                <div className="text-sm text-gray-600">Following</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{userStats.likes}</div>
                <div className="text-sm text-gray-600">Likes</div>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-4">
              <h3 className="font-semibold mb-2">About</h3>
              <p className="text-gray-700">
                Passionate farmer with 10+ years experience in maize and dairy farming. 
                Love sharing knowledge and learning from the community. 
                Always looking for innovative farming techniques! 🌾🐄
              </p>
            </div>

            {/* Farming Details */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-sm text-gray-600 mb-2">Specialization</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Maize</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Dairy</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Organic</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-600 mb-2">Farm Size</h4>
                <p className="text-gray-700">15 acres</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="font-bold text-lg mb-4">🏆 Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <div className="font-semibold text-sm">{achievement.title}</div>
                <div className="text-xs text-gray-500 mt-1">{achievement.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow">
          <div className="border-b">
            <div className="flex">
              <button
                onClick={() => setActiveTab('posts')}
                className={`flex-1 px-6 py-4 font-medium ${
                  activeTab === 'posts'
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                📝 Posts
              </button>
              <button
                onClick={() => setActiveTab('photos')}
                className={`flex-1 px-6 py-4 font-medium ${
                  activeTab === 'photos'
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                📷 Photos
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`flex-1 px-6 py-4 font-medium ${
                  activeTab === 'videos'
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                📹 Videos
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'posts' && (
              <div className="space-y-6">
                {userPosts.map((post) => (
                  <div key={post.id} className="border-b pb-6 last:border-b-0">
                    <p className="text-gray-800 mb-3">{post.content}</p>
                    <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center text-6xl mb-3">
                      {post.image}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>👍 {post.likes} likes</span>
                      <span>💬 {post.comments} comments</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'photos' && (
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-4xl">
                    🌾
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'videos' && (
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-4xl">
                    ▶️
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

