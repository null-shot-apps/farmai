'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FertilizerRecommender() {
  const [formData, setFormData] = useState({
    cropType: '',
    soilType: '',
    farmSize: '',
    organicPreference: 'both',
    budget: ''
  });
  const [recommendation, setRecommendation] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate AI recommendation
    setTimeout(() => {
      setRecommendation({
        primary: {
          name: 'NPK 15-15-15',
          type: 'Chemical',
          dosage: '250 kg/hectare',
          timing: 'Apply 2 weeks after planting',
          cost: '$45/bag (50kg)',
          safety: 'Wear gloves and mask during application'
        },
        alternatives: [
          {
            name: 'Organic Compost',
            type: 'Organic',
            dosage: '5 tons/hectare',
            timing: 'Apply before planting',
            cost: '$30/ton',
            benefits: 'Improves soil structure, eco-friendly'
          },
          {
            name: 'Urea (46-0-0)',
            type: 'Chemical',
            dosage: '150 kg/hectare',
            timing: 'Split application: 50% at planting, 50% at flowering',
            cost: '$35/bag (50kg)',
            benefits: 'High nitrogen content for leafy growth'
          }
        ],
        schedule: [
          { week: 2, action: 'Apply base fertilizer (NPK)', amount: '100 kg/ha' },
          { week: 4, action: 'First top dressing', amount: '75 kg/ha' },
          { week: 8, action: 'Second top dressing', amount: '75 kg/ha' }
        ],
        warnings: [
          'Do not apply during heavy rain',
          'Keep away from water sources',
          'Store in cool, dry place',
          'Follow local environmental regulations'
        ]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">🌾</span>
              </div>
              <span className="text-xl font-bold text-gray-900">FARMAI</span>
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🧪 Fertilizer & Chemical Recommender</h1>
          <p className="text-gray-600">Get AI-powered fertilizer recommendations based on your soil and crop needs</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-6">Farm Details</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Crop Type
                </label>
                <select
                  value={formData.cropType}
                  onChange={(e) => setFormData({...formData, cropType: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                >
                  <option value="">Select crop</option>
                  <option value="maize">Maize/Corn</option>
                  <option value="rice">Rice</option>
                  <option value="wheat">Wheat</option>
                  <option value="tomato">Tomato</option>
                  <option value="potato">Potato</option>
                  <option value="beans">Beans</option>
                  <option value="cassava">Cassava</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Soil Type
                </label>
                <select
                  value={formData.soilType}
                  onChange={(e) => setFormData({...formData, soilType: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                >
                  <option value="">Select soil type</option>
                  <option value="clay">Clay</option>
                  <option value="sandy">Sandy</option>
                  <option value="loam">Loam</option>
                  <option value="silt">Silt</option>
                  <option value="peat">Peat</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Farm Size (hectares)
                </label>
                <input
                  type="number"
                  value={formData.farmSize}
                  onChange={(e) => setFormData({...formData, farmSize: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., 2.5"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preference
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="organic"
                      checked={formData.organicPreference === 'organic'}
                      onChange={(e) => setFormData({...formData, organicPreference: e.target.value})}
                      className="mr-2"
                    />
                    <span>Organic only</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="chemical"
                      checked={formData.organicPreference === 'chemical'}
                      onChange={(e) => setFormData({...formData, organicPreference: e.target.value})}
                      className="mr-2"
                    />
                    <span>Chemical only</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="both"
                      checked={formData.organicPreference === 'both'}
                      onChange={(e) => setFormData({...formData, organicPreference: e.target.value})}
                      className="mr-2"
                    />
                    <span>Both (show all options)</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget (USD)
                </label>
                <input
                  type="number"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., 500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Analyzing...' : 'Get Recommendation'}
              </button>
            </form>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {loading && (
              <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
                <div className="animate-spin text-6xl mb-4">🧪</div>
                <p className="text-gray-600">Analyzing soil and crop requirements...</p>
              </div>
            )}

            {recommendation && !loading && (
              <>
                {/* Primary Recommendation */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-sm border-2 border-green-200 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">⭐</span>
                    <h3 className="text-xl font-bold text-gray-900">Recommended</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">{recommendation.primary.name}</h4>
                      <span className="inline-block px-3 py-1 bg-green-600 text-white text-sm rounded-full mt-1">
                        {recommendation.primary.type}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Dosage</p>
                        <p className="font-semibold">{recommendation.primary.dosage}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Cost</p>
                        <p className="font-semibold">{recommendation.primary.cost}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-600 text-sm">Timing</p>
                      <p className="font-medium">{recommendation.primary.timing}</p>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <p className="text-sm font-medium text-yellow-800">⚠️ Safety: {recommendation.primary.safety}</p>
                    </div>
                  </div>
                </div>

                {/* Application Schedule */}
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">📅 Application Schedule</h3>
                  <div className="space-y-3">
                    {recommendation.schedule.map((item: any, idx: number) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                          W{item.week}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{item.action}</p>
                          <p className="text-sm text-gray-600">{item.amount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Alternative Options */}
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🔄 Alternative Options</h3>
                  <div className="space-y-4">
                    {recommendation.alternatives.map((alt: any, idx: number) => (
                      <div key={idx} className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{alt.name}</h4>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {alt.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{alt.benefits}</p>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="text-gray-500">Dosage:</span>
                            <span className="ml-1 font-medium">{alt.dosage}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Cost:</span>
                            <span className="ml-1 font-medium">{alt.cost}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Warnings */}
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-red-900 mb-4">⚠️ Important Warnings</h3>
                  <ul className="space-y-2">
                    {recommendation.warnings.map((warning: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-red-800">
                        <span className="text-red-600 mt-0.5">•</span>
                        <span>{warning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {!recommendation && !loading && (
              <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
                <div className="text-6xl mb-4">🧪</div>
                <p className="text-gray-600">Fill in your farm details to get personalized fertilizer recommendations</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

