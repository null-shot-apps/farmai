'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [userType] = useState<'farmer' | 'buyer' | 'admin'>('farmer');

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
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Farmer!</h1>
          <p className="text-green-100">Here's what's happening with your farm today</p>
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
            value="23"
            change="3 need vaccination"
            warning
          />
          <StatCard
            icon="💰"
            label="Wallet Balance"
            value="$1,245"
            change="+$340 this month"
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
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI Recommendations */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">🤖 AI Recommendations</h2>
              <div className="space-y-4">
                <RecommendationCard
                  title="Optimal Planting Time"
                  description="Based on weather patterns, plant maize in the next 5-7 days for best yield"
                  priority="high"
                  action="View Details"
                />
                <RecommendationCard
                  title="Pest Alert"
                  description="Fall armyworm detected in your region. Apply preventive treatment"
                  priority="urgent"
                  action="Get Treatment Plan"
                />
                <RecommendationCard
                  title="Market Opportunity"
                  description="Tomato prices up 25% - good time to harvest and sell"
                  priority="medium"
                  action="View Marketplace"
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <ActionButton icon="📸" label="Diagnose Crop" link="/crops/diagnosis" />
                <ActionButton icon="🌤️" label="Check Weather" link="/crops/weather" />
                <ActionButton icon="🛒" label="Browse Market" link="/marketplace" />
                <ActionButton icon="💉" label="Schedule Vaccination" link="/livestock/vaccination" />
                <ActionButton icon="📚" label="Learn New Skills" link="/crops/training" />
                <ActionButton icon="💬" label="Ask Community" link="/community" />
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-3">
                <ActivityItem
                  icon="✅"
                  text="Completed pest diagnosis for Field A"
                  time="2 hours ago"
                />
                <ActivityItem
                  icon="💰"
                  text="Received payment of $450 from marketplace sale"
                  time="5 hours ago"
                />
                <ActivityItem
                  icon="📚"
                  text="Completed 'Organic Farming Basics' course"
                  time="1 day ago"
                />
                <ActivityItem
                  icon="🐄"
                  text="Updated health records for 3 cattle"
                  time="2 days ago"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Weather Widget */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">🌤️ Today's Weather</h3>
              <div className="text-center mb-4">
                <div className="text-5xl mb-2">☀️</div>
                <div className="text-3xl font-bold text-gray-900">28°C</div>
                <div className="text-sm text-gray-600">Sunny, Light Wind</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Humidity</span>
                  <span className="font-medium">65%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rainfall</span>
                  <span className="font-medium">0mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">UV Index</span>
                  <span className="font-medium">High</span>
                </div>
              </div>
              <Link href="/crops/weather" className="block mt-4 text-center text-sm text-green-600 font-medium hover:text-green-700">
                7-Day Forecast →
              </Link>
            </div>

            {/* Upcoming Tasks */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">📅 Upcoming Tasks</h3>
              <div className="space-y-3">
                <TaskItem
                  task="Vaccinate cattle herd"
                  date="Tomorrow"
                  urgent
                />
                <TaskItem
                  task="Apply fertilizer to Field B"
                  date="In 3 days"
                />
                <TaskItem
                  task="Harvest tomatoes"
                  date="In 5 days"
                />
                <TaskItem
                  task="Community meeting"
                  date="Next week"
                />
              </div>
            </div>

            {/* Community Highlights */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">💬 Community</h3>
              <div className="space-y-3 text-sm">
                <div className="pb-3 border-b">
                  <p className="text-gray-900 font-medium mb-1">New pest control method shared</p>
                  <p className="text-gray-600 text-xs">by Expert John • 234 views</p>
                </div>
                <div className="pb-3 border-b">
                  <p className="text-gray-900 font-medium mb-1">Q: Best time to plant cassava?</p>
                  <p className="text-gray-600 text-xs">12 answers • Active now</p>
                </div>
                <div>
                  <p className="text-gray-900 font-medium mb-1">Success story: 60% yield increase</p>
                  <p className="text-gray-600 text-xs">by Mary K. • 1.2k views</p>
                </div>
              </div>
              <Link href="/community" className="block mt-4 text-center text-sm text-green-600 font-medium hover:text-green-700">
                Visit Community →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, change, positive, warning }: any) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl">{icon}</span>
        <span className={`text-xs font-medium ${warning ? 'text-orange-600' : positive ? 'text-green-600' : 'text-gray-600'}`}>
          {change}
        </span>
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

function RecommendationCard({ title, description, priority, action }: any) {
  const colors = {
    urgent: 'border-red-200 bg-red-50',
    high: 'border-orange-200 bg-orange-50',
    medium: 'border-blue-200 bg-blue-50',
  };

  return (
    <div className={`border-l-4 rounded-lg p-4 ${colors[priority as keyof typeof colors]}`}>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-700 mb-3">{description}</p>
      <button className="text-sm font-medium text-green-600 hover:text-green-700">
        {action} →
      </button>
    </div>
  );
}

function ActionButton({ icon, label, link }: any) {
  return (
    <Link href={link}>
      <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
        <span className="text-3xl mb-2">{icon}</span>
        <span className="text-sm font-medium text-gray-700 text-center">{label}</span>
      </div>
    </Link>
  );
}

function ActivityItem({ icon, text, time }: any) {
  return (
    <div className="flex items-start gap-3 pb-3 border-b last:border-0">
      <span className="text-xl">{icon}</span>
      <div className="flex-1">
        <p className="text-sm text-gray-900">{text}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );
}

function TaskItem({ task, date, urgent }: any) {
  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
      <input type="checkbox" className="w-4 h-4 text-green-600" />
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{task}</p>
        <p className={`text-xs ${urgent ? 'text-red-600' : 'text-gray-600'}`}>{date}</p>
      </div>
    </div>
  );
}

