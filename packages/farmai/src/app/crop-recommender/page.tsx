'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CropRecommender() {
  const [formData, setFormData] = useState({
    location: '',
    soilType: '',
    season: '',
    farmSize: '',
  });
  const [recommendations, setRecommendations] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setRecommendations({
        topCrops: [
          { name: 'Maize', yield: '4.5 tons/ha', profit: '$1,200', confidence: 92 },
          { name: 'Beans', yield: '2.1 tons/ha', profit: '$980', confidence: 88 },
          { name: 'Tomatoes', yield: '15 tons/ha', profit: '$2,500', confidence: 85 },
        ],
        marketDemand: 'High',
        riskLevel: 'Low',
        waterRequirement: 'Moderate',
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/dashboard" className="text-green-600 hover:text-green-700 mb-6 inline-block">
          ← Back to Dashboard
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🌾</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">AI Crop Recommender</h1>
              <p className="text-gray-600">Get personalized crop suggestions based on your farm conditions</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your location"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Soil Type</label>
                <select
                  value={formData.soilType}
                  onChange={(e) => setFormData({ ...formData, soilType: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                >
                  <option value="">Select soil type</option>
                  <option value="clay">Clay</option>
                  <option value="loam">Loam</option>
                  <option value="sandy">Sandy</option>
                  <option value="silt">Silt</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Season</label>
                <select
                  value={formData.season}
                  onChange={(e) => setFormData({ ...formData, season: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                >
                  <option value="">Select season</option>
                  <option value="spring">Spring</option>
                  <option value="summer">Summer</option>
                  <option value="fall">Fall</option>
                  <option value="winter">Winter</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Farm Size (hectares)</label>
                <input
                  type="number"
                  value={formData.farmSize}
                  onChange={(e) => setFormData({ ...formData, farmSize: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter farm size"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition disabled:bg-gray-400"
            >
              {loading ? 'Analyzing...' : 'Get AI Recommendations'}
            </button>
          </form>

          {recommendations && (
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Recommended Crops</h3>
                <div className="space-y-4">
                  {recommendations.topCrops.map((crop: any, index: number) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-gray-800">{crop.name}</h4>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {crop.confidence}% Match
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Expected Yield:</span>
                          <p className="font-semibold text-gray-800">{crop.yield}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Estimated Profit:</span>
                          <p className="font-semibold text-green-600">{crop.profit}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Market Demand</p>
                  <p className="text-xl font-bold text-blue-600">{recommendations.marketDemand}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Risk Level</p>
                  <p className="text-xl font-bold text-yellow-600">{recommendations.riskLevel}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Water Need</p>
                  <p className="text-xl font-bold text-purple-600">{recommendations.waterRequirement}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

