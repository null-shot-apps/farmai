'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LivestockFeed() {
  const [animalType, setAnimalType] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [purpose, setPurpose] = useState('');
  const [feedPlan, setFeedPlan] = useState<any>(null);

  const handleGeneratePlan = () => {
    setFeedPlan({
      dailyIntake: '12 kg',
      feedComposition: [
        { ingredient: 'Hay/Grass', amount: '6 kg', percentage: 50 },
        { ingredient: 'Concentrate Feed', amount: '3 kg', percentage: 25 },
        { ingredient: 'Protein Supplement', amount: '2 kg', percentage: 17 },
        { ingredient: 'Minerals & Vitamins', amount: '1 kg', percentage: 8 },
      ],
      costPerDay: '$4.50',
      costPerMonth: '$135',
      nutritionGoals: {
        protein: '16%',
        energy: '2800 kcal',
        fiber: '18%',
      },
      feedingSchedule: [
        { time: '6:00 AM', feed: 'Hay + Concentrate', amount: '4 kg' },
        { time: '12:00 PM', feed: 'Grass/Grazing', amount: '4 kg' },
        { time: '6:00 PM', feed: 'Hay + Protein Supplement', amount: '4 kg' },
      ],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/dashboard" className="text-amber-600 hover:text-amber-700 mb-6 inline-block">
          ← Back to Dashboard
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🌾</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Feed & Nutrition Planner</h1>
              <p className="text-gray-600">Optimized feeding plans for maximum productivity</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Animal Type</label>
              <select
                value={animalType}
                onChange={(e) => setAnimalType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Select animal</option>
                <option value="cattle">Cattle</option>
                <option value="dairy">Dairy Cow</option>
                <option value="goat">Goat</option>
                <option value="sheep">Sheep</option>
                <option value="pig">Pig</option>
                <option value="chicken">Chicken</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
              <select
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Select age group</option>
                <option value="calf">Calf/Young</option>
                <option value="growing">Growing</option>
                <option value="adult">Adult</option>
                <option value="breeding">Breeding</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                placeholder="Enter weight"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Purpose</label>
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Select purpose</option>
                <option value="meat">Meat Production</option>
                <option value="milk">Milk Production</option>
                <option value="breeding">Breeding</option>
                <option value="work">Work Animal</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleGeneratePlan}
            disabled={!animalType || !age || !weight || !purpose}
            className="w-full bg-amber-600 text-white py-4 rounded-lg font-semibold hover:bg-amber-700 transition disabled:bg-gray-400"
          >
            Generate Feeding Plan
          </button>

          {feedPlan && (
            <div className="mt-8 space-y-6">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Daily Feed Requirements</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Total Daily Intake</p>
                    <p className="text-2xl font-bold text-amber-600">{feedPlan.dailyIntake}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Cost Per Day</p>
                    <p className="text-2xl font-bold text-green-600">{feedPlan.costPerDay}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Monthly Cost</p>
                    <p className="text-2xl font-bold text-blue-600">{feedPlan.costPerMonth}</p>
                  </div>
                </div>

                <h4 className="font-bold text-gray-800 mb-3">Feed Composition</h4>
                <div className="space-y-3">
                  {feedPlan.feedComposition.map((item: any, index: number) => (
                    <div key={index} className="bg-white p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-800">{item.ingredient}</span>
                        <span className="text-amber-600 font-bold">{item.amount}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-amber-500 h-2 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">{item.percentage}% of total</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-4">Feeding Schedule</h4>
                <div className="space-y-3">
                  {feedPlan.feedingSchedule.map((schedule: any, index: number) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                      <div className="w-20 text-center">
                        <span className="font-bold text-amber-600">{schedule.time}</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">{schedule.feed}</p>
                        <p className="text-sm text-gray-600">{schedule.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-4">Nutrition Goals</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Protein</p>
                    <p className="text-xl font-bold text-blue-600">{feedPlan.nutritionGoals.protein}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Energy</p>
                    <p className="text-xl font-bold text-blue-600">{feedPlan.nutritionGoals.energy}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Fiber</p>
                    <p className="text-xl font-bold text-blue-600">{feedPlan.nutritionGoals.fiber}</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>💡 Tip:</strong> Adjust feeding amounts based on animal condition, weather, and activity level. 
                  Consult a veterinarian for specific health concerns.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

