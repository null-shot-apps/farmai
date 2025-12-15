'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Vet {
  id: string;
  name: string;
  specialty: string;
  location: string;
  distance: string;
  available: boolean;
  rating: number;
  phone: string;
}

export default function EmergencyVet() {
  const [emergency, setEmergency] = useState('');
  const [animalType, setAnimalType] = useState('');
  const [location, setLocation] = useState('');
  const [callRequested, setCallRequested] = useState(false);

  const vets: Vet[] = [
    {
      id: '1',
      name: 'Dr. James Omondi',
      specialty: 'Large Animals',
      location: 'Nairobi',
      distance: '5 km',
      available: true,
      rating: 4.8,
      phone: '+254 700 123 456'
    },
    {
      id: '2',
      name: 'Dr. Sarah Mwangi',
      specialty: 'Poultry & Small Animals',
      location: 'Nakuru',
      distance: '12 km',
      available: true,
      rating: 4.9,
      phone: '+254 700 234 567'
    },
    {
      id: '3',
      name: 'Dr. Peter Kimani',
      specialty: 'Emergency Care',
      location: 'Kisumu',
      distance: '8 km',
      available: false,
      rating: 4.7,
      phone: '+254 700 345 678'
    }
  ];

  const handleEmergencyCall = () => {
    setCallRequested(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-green-600">
              🌾 FARMAI
            </Link>
            <nav className="flex gap-6">
              <Link href="/dashboard" className="text-gray-600 hover:text-green-600">
                Dashboard
              </Link>
              <Link href="/livestock" className="text-gray-600 hover:text-green-600">
                Livestock
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Emergency Banner */}
        <div className="bg-red-600 text-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">🚨 Emergency Vet Service</h1>
              <p className="text-lg opacity-90">24/7 veterinary support for your livestock</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-sm opacity-90">Always Available</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Emergency Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Report Emergency</h2>
              
              {!callRequested ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Animal Type *
                    </label>
                    <select
                      value={animalType}
                      onChange={(e) => setAnimalType(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select animal type</option>
                      <option value="cattle">Cattle</option>
                      <option value="goat">Goat</option>
                      <option value="sheep">Sheep</option>
                      <option value="poultry">Poultry</option>
                      <option value="pig">Pig</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Emergency Description *
                    </label>
                    <textarea
                      value={emergency}
                      onChange={(e) => setEmergency(e.target.value)}
                      rows={4}
                      placeholder="Describe the emergency situation..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Location *
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Enter your location"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <button
                    onClick={handleEmergencyCall}
                    disabled={!animalType || !emergency || !location}
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    🚨 Request Emergency Call
                  </button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Emergency Call Requested
                  </h3>
                  <p className="text-gray-600 mb-6">
                    A veterinarian will call you within 5 minutes
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-700">
                      <strong>Reference Number:</strong> EMG-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                    </p>
                  </div>
                  <button
                    onClick={() => setCallRequested(false)}
                    className="text-red-600 hover:text-red-700 font-medium"
                  >
                    Report Another Emergency
                  </button>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-4">
              <button className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-2">📞</div>
                <div className="font-semibold text-gray-900">Call Hotline</div>
                <div className="text-sm text-gray-600">1-800-VET-HELP</div>
              </button>
              <button className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-2">💬</div>
                <div className="font-semibold text-gray-900">Live Chat</div>
                <div className="text-sm text-gray-600">Chat with vet</div>
              </button>
              <button className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-2">📹</div>
                <div className="font-semibold text-gray-900">Video Call</div>
                <div className="text-sm text-gray-600">Visual diagnosis</div>
              </button>
            </div>
          </div>

          {/* Available Vets */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Available Vets Nearby</h3>
              <div className="space-y-4">
                {vets.map((vet) => (
                  <div
                    key={vet.id}
                    className={`border rounded-lg p-4 ${
                      vet.available ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-gray-900">{vet.name}</h4>
                        <p className="text-sm text-gray-600">{vet.specialty}</p>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          vet.available
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {vet.available ? '● Online' : '○ Offline'}
                      </span>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <span className="mr-2">📍</span>
                        <span>{vet.location} ({vet.distance})</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">⭐</span>
                        <span>{vet.rating} rating</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">📞</span>
                        <span>{vet.phone}</span>
                      </div>
                    </div>
                    {vet.available && (
                      <button className="w-full bg-green-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
                        Call Now
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Tips */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mt-6">
              <h3 className="font-bold text-gray-900 mb-3">⚠️ Emergency Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Keep animal calm and isolated</li>
                <li>• Note all symptoms and timing</li>
                <li>• Have animal ID ready</li>
                <li>• Prepare recent health records</li>
                <li>• Clear access for vet arrival</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

