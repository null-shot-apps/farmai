'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function WalletPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'transactions' | 'rewards'>('overview');

  const transactions = [
    { id: 1, type: 'credit', description: 'Tomato sale to AgriMarket', amount: 2500, date: '2024-01-15', status: 'completed' },
    { id: 2, type: 'debit', description: 'Fertilizer purchase', amount: -450, date: '2024-01-14', status: 'completed' },
    { id: 3, type: 'credit', description: 'Reward points converted', amount: 50, date: '2024-01-13', status: 'completed' },
    { id: 4, type: 'debit', description: 'Pesticide purchase', amount: -120, date: '2024-01-12', status: 'completed' },
    { id: 5, type: 'credit', description: 'Maize sale', amount: 1800, date: '2024-01-10', status: 'completed' },
    { id: 6, type: 'pending', description: 'Coffee beans sale', amount: 3200, date: '2024-01-16', status: 'pending' },
  ];

  const rewards = [
    { id: 1, title: 'Daily Login Streak', points: 50, description: '7 days in a row', icon: '🔥' },
    { id: 2, title: 'AI Diagnosis Used', points: 20, description: 'Used pest diagnosis 5 times', icon: '🤖' },
    { id: 3, title: 'Community Helper', points: 100, description: 'Answered 10 forum questions', icon: '💬' },
    { id: 4, title: 'Marketplace Seller', points: 150, description: 'Completed 5 sales', icon: '🛒' },
    { id: 5, title: 'Knowledge Seeker', points: 30, description: 'Completed 3 training courses', icon: '📚' },
  ];

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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">💰 Wallet & Rewards</h1>
          <p className="text-gray-600">Manage your earnings, payments, and loyalty rewards</p>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm opacity-90">Available Balance</span>
              <span className="text-2xl">💵</span>
            </div>
            <div className="text-3xl font-bold mb-1">$4,280.50</div>
            <div className="text-sm opacity-90">+$320 this week</div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm opacity-90">Pending Payments</span>
              <span className="text-2xl">⏳</span>
            </div>
            <div className="text-3xl font-bold mb-1">$3,200.00</div>
            <div className="text-sm opacity-90">2 transactions</div>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm opacity-90">Reward Points</span>
              <span className="text-2xl">⭐</span>
            </div>
            <div className="text-3xl font-bold mb-1">1,250 pts</div>
            <div className="text-sm opacity-90">= $125 value</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 text-center">
            <div className="text-3xl mb-2">💸</div>
            <div className="font-medium text-gray-900">Withdraw</div>
          </button>
          <button className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 text-center">
            <div className="text-3xl mb-2">➕</div>
            <div className="font-medium text-gray-900">Add Money</div>
          </button>
          <button className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 text-center">
            <div className="text-3xl mb-2">🔄</div>
            <div className="font-medium text-gray-900">Transfer</div>
          </button>
          <button className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 text-center">
            <div className="text-3xl mb-2">📊</div>
            <div className="font-medium text-gray-900">Statement</div>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'overview'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'transactions'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            Transactions
          </button>
          <button
            onClick={() => setActiveTab('rewards')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'rewards'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            Rewards
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {transactions.slice(0, 5).map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'credit' ? 'bg-green-100' : transaction.type === 'debit' ? 'bg-red-100' : 'bg-yellow-100'
                    }`}>
                      {transaction.type === 'credit' ? '↓' : transaction.type === 'debit' ? '↑' : '⏳'}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{transaction.description}</div>
                      <div className="text-sm text-gray-500">{transaction.date}</div>
                    </div>
                  </div>
                  <div className={`font-bold ${
                    transaction.type === 'credit' ? 'text-green-600' : transaction.type === 'debit' ? 'text-red-600' : 'text-yellow-600'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'transactions' && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">All Transactions</h2>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'credit' ? 'bg-green-100' : transaction.type === 'debit' ? 'bg-red-100' : 'bg-yellow-100'
                    }`}>
                      {transaction.type === 'credit' ? '↓' : transaction.type === 'debit' ? '↑' : '⏳'}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{transaction.description}</div>
                      <div className="text-sm text-gray-500">{transaction.date}</div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        transaction.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {transaction.status}
                      </span>
                    </div>
                  </div>
                  <div className={`font-bold ${
                    transaction.type === 'credit' ? 'text-green-600' : transaction.type === 'debit' ? 'text-red-600' : 'text-yellow-600'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'rewards' && (
          <div>
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl shadow-lg p-6 text-white mb-6">
              <h2 className="text-2xl font-bold mb-2">Your Reward Points</h2>
              <div className="text-4xl font-bold mb-2">1,250 Points</div>
              <p className="text-sm opacity-90">Redeem 1,000 points = $100 cash</p>
              <button className="mt-4 bg-white text-orange-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Redeem Points
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rewards.map((reward) => (
                <div key={reward.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{reward.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{reward.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{reward.description}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow-500">⭐</span>
                        <span className="font-bold text-green-600">+{reward.points} points</span>
                      </div>
                    </div>
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

