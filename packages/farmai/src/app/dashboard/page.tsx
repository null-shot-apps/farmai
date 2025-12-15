'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [userType, setUserType] = useState<'farmer' | 'buyer' | 'admin'>('farmer');
  console.log(userType, setUserType);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">🌾</span>
              </div>
              <span className="text-xl font-bold text-gray-900">FARMAI</span>
            </Link>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <span className="text-xl">🔔</span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <span className="text-xl">👤</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Farmer John! 👋</h1>
          <p className="text-gray-600">Here&apos;s what&apos;s happening with your farm today</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon="🌾"
            label="Active Crops"
            value="5"
            change="+2 this season"
            positive
          />
          <StatCard
            icon="🐄"
            label="Livestock"
            value="24"
            change="3 calves born"
            positive
          />
          <StatCard
            icon="💰"
            label="Wallet Balance"
            value="$2,450"
            change="+$320 this week"
            positive
          />
          <StatCard
            icon="📈"
            label="Income Growth"
            value="42%"
            change="vs last year"
            positive
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Main Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Weather Alert */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl">⛈️</span>
                    <h3 className="text-xl font-bold">Weather Alert</h3>
                  </div>
                  <p className="text-blue-100">Heavy rain expected in 2 days</p>
                </div>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                  High Priority
                </span>
              </div>
              <p className="mb-4">Protect your tomato crops from excess moisture. Consider covering or drainage.</p>
              <button className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50">
                View Recommendations
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ActionButton
                  icon="🔬"
                  label="Diagnose Pest/Disease"
                  href="/crops/diagnosis"
                />
                <ActionButton
                  icon="🤖"
                  label="Get Crop Advice"
                  href="/crops/recommender"
                />
                <ActionButton
                  icon="🩺"
                  label="Check Livestock Health"
                  href="/livestock/diagnosis"
                />
                <ActionButton
                  icon="🛒"
                  label="Browse Marketplace"
                  href="/marketplace"
                />
                <ActionButton
                  icon="👥"
                  label="Farmer Social Network"
                  href="/social"
                />
                <ActionButton
                  icon="💬"
                  label="Messages"
                  href="/social/messages"
                />
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <ActivityItem
                  icon="✅"
                  title="Fertilizer recommendation completed"
                  time="2 hours ago"
                  color="green"
                />
                <ActivityItem
                  icon="📸"
                  title="Pest diagnosis: Aphids detected on tomatoes"
                  time="5 hours ago"
                  color="yellow"
                />
                <ActivityItem
                  icon="💉"
                  title="Vaccination reminder: Cattle deworming due"
                  time="1 day ago"
                  color="blue"
                />
                <ActivityItem
                  icon="💰"
                  title="Payment received: $450 from corn sale"
                  time="2 days ago"
                  color="green"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* AI Assistant */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl p-6 text-white">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-bold mb-2">AI Farm Assistant</h3>
              <p className="text-green-100 text-sm mb-4">
                Ask me anything about your crops, livestock, or farming practices
              </p>
              <button className="w-full px-4 py-2 bg-white text-green-600 rounded-lg font-medium hover:bg-green-50">
                Start Chat
              </button>
            </div>

            {/* Upcoming Tasks */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Tasks</h3>
              <div className="space-y-3">
                <TaskItem
                  title="Water tomato field"
                  time="Today, 6:00 AM"
                  priority="high"
                />
                <TaskItem
                  title="Apply fertilizer to corn"
                  time="Tomorrow, 8:00 AM"
                  priority="medium"
                />
                <TaskItem
                  title="Vet checkup for cattle"
                  time="In 3 days"
                  priority="medium"
                />
                <TaskItem
                  title="Harvest wheat crop"
                  time="In 5 days"
                  priority="high"
                />
              </div>
            </div>

            {/* Community Highlights */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Community</h3>
              <div className="space-y-3">
                <CommunityItem
                  title="New organic pest control method"
                  author="Maria K."
                  likes={45}
                />
                <CommunityItem
                  title="Best practices for drought season"
                  author="John D."
                  likes={32}
                />
                <CommunityItem
                  title="Cattle breeding tips"
                  author="Ahmed S."
                  likes={28}
                />
              </div>
              <Link href="/community">
                <button className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                  View All Discussions
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, change, positive }: {
  icon: string;
  label: string;
  value: string;
  change: string;
  positive: boolean;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl">{icon}</span>
        <span className={`text-xs font-medium ${positive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

function ActionButton({ icon, label, href }: { icon: string; label: string; href: string }) {
  return (
    <Link href={href}>
      <button className="w-full flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all">
        <span className="text-2xl">{icon}</span>
        <span className="font-medium text-gray-900">{label}</span>
      </button>
    </Link>
  );
}

function ActivityItem({ icon, title, time, color }: {
  icon: string;
  title: string;
  time: string;
  color: string;
}) {
  const colorClasses = {
    green: 'bg-green-100',
    yellow: 'bg-yellow-100',
    blue: 'bg-blue-100',
  };

  return (
    <div className="flex items-start gap-3">
      <div className={`w-8 h-8 ${colorClasses[color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center flex-shrink-0`}>
        <span className="text-sm">{icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  );
}

function TaskItem({ title, time, priority }: {
  title: string;
  time: string;
  priority: 'high' | 'medium' | 'low';
}) {
  const priorityColors = {
    high: 'bg-red-100 text-red-700',
    medium: 'bg-yellow-100 text-yellow-700',
    low: 'bg-green-100 text-green-700',
  };

  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
      <span className={`px-2 py-1 rounded text-xs font-medium ${priorityColors[priority]}`}>
        {priority}
      </span>
    </div>
  );
}

function CommunityItem({ title, author, likes }: {
  title: string;
  author: string;
  likes: number;
}) {
  return (
    <div className="p-3 bg-gray-50 rounded-lg">
      <p className="text-sm font-medium text-gray-900 mb-1">{title}</p>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>by {author}</span>
        <span>❤️ {likes}</span>
      </div>
    </div>
  );
}



