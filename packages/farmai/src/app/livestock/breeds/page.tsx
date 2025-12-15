'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BreedRecommender() {
  const [formData, setFormData] = useState({
    species: '',
    purpose: '',
    climate: '',
    experience: '',
    budget: '',
    landSize: ''
  });

  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate AI recommendations
    const mockRecommendations = [
      {
        breed: 'Holstein Friesian',
        score: 95,
        purpose: 'Dairy',
        avgProduction: '25-30 L/day',
        climate: 'Temperate',
        investment: 'High',
        pros: ['Highest milk production', 'Well-documented genetics', 'Global availability'],
        cons: ['Requires quality feed', 'Heat sensitive', 'Higher maintenance'],
        image: '🐄'
      },
      {
        breed: 'Jersey',
        score: 88,
        purpose: 'Dairy',
        avgProduction: '18-22 L/day',
        climate: 'Adaptable',
        investment: 'Medium',
        pros: ['High butterfat content', 'Efficient feed conversion', 'Gentle temperament'],
        cons: ['Lower volume production', 'Smaller size', 'Requires good management'],
        image: '🐮'
      },
      {
        breed: 'Sahiwal',
        score: 82,
        purpose: 'Dual Purpose',
        avgProduction: '12-16 L/day',
        climate: 'Tropical',
        investment: 'Medium',
        pros: ['Heat tolerant', 'Disease resistant', 'Low maintenance'],
        cons: ['Lower production than exotic breeds', 'Slower growth', 'Limited availability'],
        image: '🐄'
      }
    ];

    setRecommendations(mockRecommendations);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
              ← Back
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">🐮 Breed Recommender</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {!showResults ? (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Find the Perfect Breed
              </h2>
              <p className="text-gray-600">
                Answer a few questions and get AI-powered breed recommendations tailored to your needs
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Livestock Species
                </label>
                <select
                  value={formData.species}
                  onChange={(e) => setFormData({...formData, species: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select species</option>
                  <option value="cattle">Cattle</option>
                  <option value="goat">Goat</option>
                  <option value="sheep">Sheep</option>
                  <option value="poultry">Poultry</option>
                  <option value="pig">Pig</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Purpose
                </label>
                <select
                  value={formData.purpose}
                  onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select purpose</option>
                  <option value="dairy">Dairy/Milk Production</option>
                  <option value="meat">Meat Production</option>
                  <option value="dual">Dual Purpose (Milk & Meat)</option>
                  <option value="breeding">Breeding</option>
                  <option value="eggs">Egg Production</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Climate Zone
                </label>
                <select
                  value={formData.climate}
                  onChange={(e) => setFormData({...formData, climate: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select climate</option>
                  <option value="tropical">Tropical (Hot & Humid)</option>
                  <option value="temperate">Temperate (Moderate)</option>
                  <option value="arid">Arid (Hot & Dry)</option>
                  <option value="cold">Cold (Low Temperature)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select experience</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Investment Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select budget</option>
                  <option value="low">Low (Under $1,000)</option>
                  <option value="medium">Medium ($1,000 - $5,000)</option>
                  <option value="high">High (Over $5,000)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Available Land Size
                </label>
                <input
                  type="text"
                  value={formData.landSize}
                  onChange={(e) => setFormData({...formData, landSize: e.target.value})}
                  placeholder="e.g., 2 acres, 1 hectare"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Get Breed Recommendations
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Recommended Breeds for You
                </h2>
                <button
                  onClick={() => setShowResults(false)}
                  className="px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg"
                >
                  ← New Search
                </button>
              </div>
              <p className="text-gray-600">
                Based on your requirements: {formData.species} for {formData.purpose} in {formData.climate} climate
              </p>
            </div>

            {recommendations.map((rec, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-6xl">{rec.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{rec.breed}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-purple-600">{rec.score}%</span>
                        <span className="text-sm text-gray-600">Match</span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-xs text-gray-600">Purpose</div>
                        <div className="font-medium">{rec.purpose}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600">Production</div>
                        <div className="font-medium">{rec.avgProduction}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600">Climate</div>
                        <div className="font-medium">{rec.climate}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600">Investment</div>
                        <div className="font-medium">{rec.investment}</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">✓ Advantages</h4>
                        <ul className="space-y-1 text-sm">
                          {rec.pros.map((pro: string, i: number) => (
                            <li key={i} className="text-gray-700">• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-2">⚠ Considerations</h4>
                        <ul className="space-y-1 text-sm">
                          {rec.cons.map((con: string, i: number) => (
                            <li key={i} className="text-gray-700">• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-3">
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                        Learn More
                      </button>
                      <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50">
                        Find Suppliers
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

