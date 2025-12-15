'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VaccinationPage() {
  const [selectedAnimal, setSelectedAnimal] = useState('cattle');

  const schedules = {
    cattle: [
      { vaccine: 'FMD (Foot & Mouth Disease)', age: '3 months', frequency: 'Every 6 months', status: 'due' },
      { vaccine: 'Anthrax', age: '6 months', frequency: 'Annual', status: 'upcoming' },
      { vaccine: 'Lumpy Skin Disease', age: '4 months', frequency: 'Annual', status: 'completed' },
      { vaccine: 'Brucellosis', age: '4-8 months', frequency: 'Once (heifers)', status: 'upcoming' },
    ],
    goats: [
      { vaccine: 'PPR (Peste des Petits)', age: '3 months', frequency: 'Annual', status: 'due' },
      { vaccine: 'Anthrax', age: '6 months', frequency: 'Annual', status: 'completed' },
      { vaccine: 'Enterotoxaemia', age: '2 months', frequency: 'Every 6 months', status: 'upcoming' },
    ],
    poultry: [
      { vaccine: 'Newcastle Disease', age: '1 day', frequency: 'Every 3 months', status: 'due' },
      { vaccine: 'Gumboro', age: '10-14 days', frequency: 'Once', status: 'completed' },
      { vaccine: 'Fowl Pox', age: '6 weeks', frequency: 'Annual', status: 'upcoming' },
      { vaccine: 'Infectious Bronchitis', age: '1 day', frequency: 'Every 6 months', status: 'completed' },
    ],
  };

  const upcomingReminders = [
    { animal: 'Cow #234', vaccine: 'FMD Booster', date: '2024-12-20', daysLeft: 5 },
    { animal: 'Goat Herd A', vaccine: 'PPR', date: '2024-12-25', daysLeft: 10 },
    { animal: 'Chickens Batch 3', vaccine: 'Newcastle', date: '2024-12-18', daysLeft: 3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-purple-600 hover:text-purple-700">
                ← Back
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">💉 Vaccination & Treatment Scheduler</h1>
                <p className="text-sm text-gray-600">Never miss a vaccination date</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Urgent Reminders */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="text-2xl">⚠️</span>
            </div>
            <div className="ml-3 flex-1">
              <h3 className="text-sm font-medium text-red-800">Urgent Vaccinations Due</h3>
              <div className="mt-2 space-y-2">
                {upcomingReminders.filter(r => r.daysLeft <= 5).map((reminder, idx) => (
                  <div key={idx} className="text-sm text-red-700 bg-white p-2 rounded">
                    <strong>{reminder.animal}</strong> - {reminder.vaccine} due in <strong>{reminder.daysLeft} days</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Schedule */}
          <div className="lg:col-span-2 space-y-6">
            {/* Animal Type Selector */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex space-x-4">
                <button
                  onClick={() => setSelectedAnimal('cattle')}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-colors ${
                    selectedAnimal === 'cattle'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  🐄 Cattle
                </button>
                <button
                  onClick={() => setSelectedAnimal('goats')}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-colors ${
                    selectedAnimal === 'goats'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  🐐 Goats
                </button>
                <button
                  onClick={() => setSelectedAnimal('poultry')}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-colors ${
                    selectedAnimal === 'poultry'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  🐔 Poultry
                </button>
              </div>
            </div>

            {/* Vaccination Schedule */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">
                Vaccination Schedule - {selectedAnimal.charAt(0).toUpperCase() + selectedAnimal.slice(1)}
              </h2>
              <div className="space-y-4">
                {schedules[selectedAnimal as keyof typeof schedules].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg border-2 ${
                      item.status === 'due'
                        ? 'border-red-300 bg-red-50'
                        : item.status === 'upcoming'
                        ? 'border-yellow-300 bg-yellow-50'
                        : 'border-green-300 bg-green-50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.vaccine}</h3>
                        <div className="mt-2 space-y-1 text-sm text-gray-600">
                          <p>📅 First dose: {item.age}</p>
                          <p>🔄 Frequency: {item.frequency}</p>
                        </div>
                      </div>
                      <div className="ml-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            item.status === 'due'
                              ? 'bg-red-100 text-red-800'
                              : item.status === 'upcoming'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-green-100 text-green-800'
                          }`}
                        >
                          {item.status === 'due' ? '⚠️ Due Now' : item.status === 'upcoming' ? '📅 Upcoming' : '✅ Done'}
                        </span>
                      </div>
                    </div>
                    {item.status === 'due' && (
                      <button className="mt-3 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                        Schedule Vaccination
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Calendar & Actions */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                  📅 Add Custom Schedule
                </button>
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  📱 Set SMS Reminders
                </button>
                <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                  📞 Call Vet
                </button>
                <button className="w-full bg-gray-600 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium">
                  📄 Download Schedule
                </button>
              </div>
            </div>

            {/* Upcoming This Month */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Upcoming This Month</h3>
              <div className="space-y-3">
                {upcomingReminders.map((reminder, idx) => (
                  <div key={idx} className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-sm font-medium text-gray-900">{reminder.animal}</p>
                    <p className="text-xs text-gray-600 mt-1">{reminder.vaccine}</p>
                    <p className="text-xs text-purple-600 font-medium mt-1">
                      {reminder.date} ({reminder.daysLeft} days)
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">This Year</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Completed</span>
                  <span className="text-lg font-bold text-green-600">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Upcoming</span>
                  <span className="text-lg font-bold text-yellow-600">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Overdue</span>
                  <span className="text-lg font-bold text-red-600">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

