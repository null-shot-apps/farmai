'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function WeatherPage() {
  const [location, setLocation] = useState('');
  const [forecast, setForecast] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleGetForecast = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setForecast({
        location: location || 'Your Location',
        current: {
          temp: 28,
          condition: 'Partly Cloudy',
          humidity: 65,
          windSpeed: 12,
          rainfall: 0
        },
        alerts: [
          {
            id: 1,
            type: 'warning',
            title: 'Heavy Rainfall Expected',
            message: 'Heavy rainfall expected in next 48 hours. Protect young crops.',
            severity: 'high',
            time: '2 hours ago'
          }
        ],
        forecast: [
          { day: 'Today', temp: '24°-32°', condition: 'Partly Cloudy', rain: '10%' },
          { day: 'Tomorrow', temp: '23°-30°', condition: 'Rainy', rain: '80%' },
          { day: 'Wed', temp: '22°-28°', condition: 'Heavy Rain', rain: '90%' },
          { day: 'Thu', temp: '23°-29°', condition: 'Cloudy', rain: '40%' },
          { day: 'Fri', temp: '24°-31°', condition: 'Sunny', rain: '5%' },
          { day: 'Sat', temp: '25°-32°', condition: 'Sunny', rain: '0%' },
          { day: 'Sun', temp: '26°-33°', condition: 'Hot & Sunny', rain: '0%' }
        ],
        cropAdvice: [
          'Delay fertilizer application until after expected rainfall',
          'Ensure proper drainage in low-lying fields',
          'Harvest mature crops before heavy rain arrives',
          'Apply fungicide preventively for disease control'
        ]
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Weather & Climate</h1>
                <p className="text-sm text-gray-600">Hyperlocal forecasts & alerts</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">🌍 Global</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Location Input */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                📍 Your Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter city, region, or use GPS"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={handleGetForecast}
                disabled={loading}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 font-medium transition-colors"
              >
                {loading ? 'Loading...' : 'Get Forecast'}
              </button>
            </div>
          </div>
        </div>

        {forecast && (
          <>
            {/* Active Alerts */}
            {forecast.alerts.length > 0 && (
              <div className="mb-6 space-y-3">
                {forecast.alerts.map((alert: any) => (
                  <div
                    key={alert.id}
                    className={`rounded-xl p-4 border-l-4 ${
                      alert.severity === 'high'
                        ? 'bg-red-50 border-red-500'
                        : alert.severity === 'medium'
                        ? 'bg-yellow-50 border-yellow-500'
                        : 'bg-blue-50 border-blue-500'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-2xl">⚠️</span>
                          <h3 className="font-bold text-gray-900">{alert.title}</h3>
                        </div>
                        <p className="text-gray-700 mb-2">{alert.message}</p>
                        <span className="text-xs text-gray-500">{alert.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Current Weather */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 mb-6 text-white">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-1">{forecast.location}</h2>
                  <p className="text-blue-100">Current Conditions</p>
                </div>
                <div className="text-6xl">☁️</div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold">{forecast.current.temp}°C</div>
                  <div className="text-sm text-blue-100">Temperature</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold">{forecast.current.humidity}%</div>
                  <div className="text-sm text-blue-100">Humidity</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold">{forecast.current.windSpeed} km/h</div>
                  <div className="text-sm text-blue-100">Wind Speed</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold">{forecast.current.rainfall} mm</div>
                  <div className="text-sm text-blue-100">Rainfall</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-lg font-bold">{forecast.current.condition}</div>
                  <div className="text-sm text-blue-100">Condition</div>
                </div>
              </div>
            </div>

            {/* 7-Day Forecast */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📅 7-Day Forecast</h3>
              <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
                {forecast.forecast.map((day: any, index: number) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 border border-gray-200 text-center hover:shadow-md transition-shadow"
                  >
                    <div className="font-bold text-gray-900 mb-2">{day.day}</div>
                    <div className="text-3xl mb-2">
                      {day.condition.includes('Rain') ? '🌧️' : day.condition.includes('Cloud') ? '☁️' : '☀️'}
                    </div>
                    <div className="text-sm font-medium text-gray-700 mb-1">{day.temp}</div>
                    <div className="text-xs text-gray-500">{day.condition}</div>
                    <div className="text-xs text-blue-600 font-medium mt-2">💧 {day.rain}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Crop-Specific Advice */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🌾 Weather-Based Crop Advice</h3>
              <div className="space-y-3">
                {forecast.cropAdvice.map((advice: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <span className="text-green-600 font-bold">✓</span>
                    <p className="text-gray-700 flex-1">{advice}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {!forecast && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <div className="text-6xl mb-4">🌤️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Get Your Weather Forecast</h3>
            <p className="text-gray-600">Enter your location to receive hyperlocal weather forecasts and crop-specific alerts</p>
          </div>
        )}
      </main>
    </div>
  );
}

