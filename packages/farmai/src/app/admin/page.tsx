'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState('7d');

  const stats = {
    totalFarmers: 125840,
    activeFarmers: 98234,
    totalTransactions: 45678,
    totalRevenue: '$2.4M',
    avgIncome: '+42%',
    platformUsage: '87%'
  };

  const regionalData = [
    { region: 'East Africa', farmers: 45000, growth: '+15%', revenue: '$890K' },
    { region: 'West Africa', farmers: 38000, growth: '+22%', revenue: '$720K' },
    { region: 'Southern Africa', farmers: 28000, growth: '+18%', revenue: '$560K' },
    { region: 'North Africa', farmers: 14840, growth: '+12%', revenue: '$230K' }
  ];

  const topCrops = [
    { crop: 'Maize', farmers: 45000, area: '120K ha', yield: '+12%' },
    { crop: 'Rice', farmers: 32000, area: '85K ha', yield: '+8%' },
    { crop: 'Wheat', farmers: 28000, area: '75K ha', yield: '+15%' },
    { crop: 'Cassava', farmers: 20840, area: '60K ha', yield: '+10%' }
  ];

  const aiUsage = [
    { feature: 'Crop Recommender', uses: 45678, satisfaction: 4.8 },
    { feature: 'Pest Diagnosis', uses: 38234, satisfaction: 4.7 },
    { feature: 'Weather Alerts', uses: 52341, satisfaction: 4.9 },
    { feature: 'Livestock Health', uses: 28456, satisfaction: 4.6 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-green-600">
              🌾 FARMAI Admin
            </Link>
            <nav className="flex gap-6">
              <Link href="/dashboard" className="text-gray-600 hover:text-green-600">
                User View
              </Link>
              <button className="text-gray-600 hover:text-green-600">
                Logout
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              📊 Analytics Dashboard
            </h1>
            <p className="text-gray-600">
              Platform insights and performance metrics
            </p>
          </div>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
            <option value="1y">Last Year</option>
          </select>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">👥</div>
              <span className="text-green-600 text-sm font-semibold">+12% ↑</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stats.totalFarmers.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Total Farmers</div>
            <div className="mt-2 text-xs text-gray-500">
              {stats.activeFarmers.toLocaleString()} active this month
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">💰</div>
              <span className="text-green-600 text-sm font-semibold">+18% ↑</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stats.totalRevenue}
            </div>
            <div className="text-sm text-gray-600">Total Revenue</div>
            <div className="mt-2 text-xs text-gray-500">
              {stats.totalTransactions.toLocaleString()} transactions
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">📈</div>
              <span className="text-green-600 text-sm font-semibold">{stats.avgIncome}</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stats.avgIncome}
            </div>
            <div className="text-sm text-gray-600">Avg Income Increase</div>
            <div className="mt-2 text-xs text-gray-500">
              Compared to pre-platform baseline
            </div>
          </div>
        </div>

        {/* Regional Performance */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🌍 Regional Performance</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Region</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Farmers</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Growth</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {regionalData.map((region, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{region.region}</td>
                    <td className="py-3 px-4 text-gray-600">{region.farmers.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <span className="text-green-600 font-semibold">{region.growth}</span>
                    </td>
                    <td className="py-3 px-4 font-semibold text-gray-900">{region.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Top Crops */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🌾 Top Crops</h2>
            <div className="space-y-4">
              {topCrops.map((crop, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-bold text-gray-900">{crop.crop}</div>
                    <div className="text-sm text-gray-600">
                      {crop.farmers.toLocaleString()} farmers • {crop.area}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-600 font-semibold">{crop.yield}</div>
                    <div className="text-xs text-gray-500">Yield increase</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Feature Usage */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🤖 AI Feature Usage</h2>
            <div className="space-y-4">
              {aiUsage.map((feature, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-gray-900">{feature.feature}</div>
                    <div className="flex items-center text-sm">
                      <span className="text-yellow-500 mr-1">⭐</span>
                      <span className="font-semibold">{feature.satisfaction}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {feature.uses.toLocaleString()} uses this month
                  </div>
                  <div className="mt-2 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 rounded-full h-2"
                      style={{ width: `${(feature.satisfaction / 5) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4">
          <button className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow text-center">
            <div className="text-4xl mb-3">📊</div>
            <div className="font-semibold text-gray-900">Export Reports</div>
          </button>
          <button className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow text-center">
            <div className="text-4xl mb-3">👥</div>
            <div className="font-semibold text-gray-900">Manage Users</div>
          </button>
          <button className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow text-center">
            <div className="text-4xl mb-3">⚙️</div>
            <div className="font-semibold text-gray-900">Platform Settings</div>
          </button>
          <button className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow text-center">
            <div className="text-4xl mb-3">🔔</div>
            <div className="font-semibold text-gray-900">Send Alerts</div>
          </button>
        </div>
      </main>
    </div>
  );
}

