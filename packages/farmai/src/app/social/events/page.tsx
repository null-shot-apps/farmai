'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Agri-Tech Expo 2024',
      date: 'March 15, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Nairobi, Kenya',
      attendees: 450,
      type: 'Conference',
      icon: '🎪',
      description: 'Largest agricultural technology exhibition in East Africa'
    },
    {
      id: 2,
      title: 'Dairy Farming Workshop',
      date: 'March 20, 2024',
      time: '10:00 AM - 3:00 PM',
      location: 'Nakuru, Kenya',
      attendees: 120,
      type: 'Workshop',
      icon: '🐄',
      description: 'Learn modern dairy farming techniques and best practices'
    },
    {
      id: 3,
      title: 'Organic Farming Meetup',
      date: 'March 25, 2024',
      time: '2:00 PM - 6:00 PM',
      location: 'Eldoret, Kenya',
      attendees: 85,
      type: 'Meetup',
      icon: '🌱',
      description: 'Connect with organic farmers and share experiences'
    },
    {
      id: 4,
      title: 'Maize Harvest Festival',
      date: 'April 5, 2024',
      time: '8:00 AM - 8:00 PM',
      location: 'Kitale, Kenya',
      attendees: 320,
      type: 'Festival',
      icon: '🌽',
      description: 'Celebrate the maize harvest season with fellow farmers'
    },
    {
      id: 5,
      title: 'Smart Irrigation Training',
      date: 'April 10, 2024',
      time: '9:00 AM - 4:00 PM',
      location: 'Mombasa, Kenya',
      attendees: 95,
      type: 'Training',
      icon: '💧',
      description: 'Hands-on training on modern irrigation systems'
    }
  ];

  const pastEvents = [
    {
      id: 6,
      title: 'Coffee Growers Summit',
      date: 'February 20, 2024',
      attendees: 280,
      type: 'Summit',
      icon: '☕'
    },
    {
      id: 7,
      title: 'Poultry Farming Seminar',
      date: 'February 15, 2024',
      attendees: 150,
      type: 'Seminar',
      icon: '🐔'
    }
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
              + Create Event
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">📅 Farming Events</h1>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`flex-1 px-6 py-4 font-medium ${
                activeTab === 'upcoming'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              📆 Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('my-events')}
              className={`flex-1 px-6 py-4 font-medium ${
                activeTab === 'my-events'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              ✓ My Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`flex-1 px-6 py-4 font-medium ${
                activeTab === 'past'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              📜 Past Events
            </button>
          </div>
        </div>

        {/* Upcoming Events */}
        {activeTab === 'upcoming' && (
          <div>
            {/* Filters */}
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <div className="flex flex-wrap gap-3">
                <select className="px-4 py-2 border rounded-lg">
                  <option>All Locations</option>
                  <option>Nairobi</option>
                  <option>Nakuru</option>
                  <option>Eldoret</option>
                  <option>Mombasa</option>
                </select>
                <select className="px-4 py-2 border rounded-lg">
                  <option>All Types</option>
                  <option>Conference</option>
                  <option>Workshop</option>
                  <option>Meetup</option>
                  <option>Training</option>
                  <option>Festival</option>
                </select>
                <select className="px-4 py-2 border rounded-lg">
                  <option>All Categories</option>
                  <option>Crops</option>
                  <option>Livestock</option>
                  <option>Technology</option>
                  <option>Market</option>
                </select>
              </div>
            </div>

            {/* Events List */}
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex gap-6">
                      {/* Date Badge */}
                      <div className="flex-shrink-0 w-20 h-20 bg-green-100 rounded-lg flex flex-col items-center justify-center">
                        <div className="text-2xl font-bold text-green-600">
                          {event.date.split(' ')[1].replace(',', '')}
                        </div>
                        <div className="text-xs text-green-600 uppercase">
                          {event.date.split(' ')[0]}
                        </div>
                      </div>

                      {/* Event Details */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-2xl">{event.icon}</span>
                              <h3 className="text-xl font-bold">{event.title}</h3>
                            </div>
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                              {event.type}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-3">{event.description}</p>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                          <span>🕐 {event.time}</span>
                          <span>📍 {event.location}</span>
                          <span>👥 {event.attendees} attending</span>
                        </div>

                        <div className="flex gap-3">
                          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                            Attend Event
                          </button>
                          <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            Learn More
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            🔄 Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* My Events */}
        {activeTab === 'my-events' && (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-xl font-bold mb-2">No Events Yet</h3>
            <p className="text-gray-600 mb-6">
              You haven&apos;t registered for any events. Browse upcoming events to get started!
            </p>
            <button
              onClick={() => setActiveTab('upcoming')}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Browse Events
            </button>
          </div>
        )}

        {/* Past Events */}
        {activeTab === 'past' && (
          <div className="space-y-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow p-6 opacity-75">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{event.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{event.title}</h3>
                    <div className="flex gap-4 text-sm text-gray-600 mt-1">
                      <span>📅 {event.date}</span>
                      <span>👥 {event.attendees} attended</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {event.type}
                      </span>
                    </div>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

