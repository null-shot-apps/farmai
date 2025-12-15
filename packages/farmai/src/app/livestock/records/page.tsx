'use client';

import { useState } from 'react';
import Link from 'next/link';

interface AnimalRecord {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: string;
  weight: string;
  healthStatus: 'healthy' | 'sick' | 'recovering';
  lastCheckup: string;
  vaccinations: string[];
  production: {
    milk?: string;
    eggs?: string;
    weight?: string;
  };
}

export default function LivestockRecords() {
  const [animals] = useState<AnimalRecord[]>([
    {
      id: '1',
      name: 'Bessie',
      species: 'Cattle',
      breed: 'Holstein',
      age: '3 years',
      weight: '650 kg',
      healthStatus: 'healthy',
      lastCheckup: '2024-12-01',
      vaccinations: ['FMD', 'Anthrax', 'Brucellosis'],
      production: { milk: '25 L/day' }
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState<AnimalRecord | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                ← Back
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">📊 Livestock Records</h1>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
            >
              + Add Animal
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-orange-600">{animals.length}</div>
            <div className="text-gray-600 text-sm">Total Animals</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-green-600">
              {animals.filter(a => a.healthStatus === 'healthy').length}
            </div>
            <div className="text-gray-600 text-sm">Healthy</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-yellow-600">
              {animals.filter(a => a.healthStatus === 'recovering').length}
            </div>
            <div className="text-gray-600 text-sm">Recovering</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-red-600">
              {animals.filter(a => a.healthStatus === 'sick').length}
            </div>
            <div className="text-gray-600 text-sm">Needs Attention</div>
          </div>
        </div>

        {/* Animals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.map((animal) => (
            <div
              key={animal.id}
              onClick={() => setSelectedAnimal(animal)}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{animal.name}</h3>
                  <p className="text-sm text-gray-600">{animal.species} • {animal.breed}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  animal.healthStatus === 'healthy' ? 'bg-green-100 text-green-700' :
                  animal.healthStatus === 'recovering' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {animal.healthStatus}
                </span>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Age:</span>
                  <span className="font-medium">{animal.age}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Weight:</span>
                  <span className="font-medium">{animal.weight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Checkup:</span>
                  <span className="font-medium">{animal.lastCheckup}</span>
                </div>
                {animal.production.milk && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Production:</span>
                    <span className="font-medium">{animal.production.milk}</span>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-4 border-t">
                <div className="text-xs text-gray-600 mb-2">Vaccinations:</div>
                <div className="flex flex-wrap gap-1">
                  {animal.vaccinations.map((vac, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                      {vac}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Animal Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-6">Add New Animal</h2>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Animal Name"
                    className="px-4 py-2 border rounded-lg"
                  />
                  <select className="px-4 py-2 border rounded-lg">
                    <option>Select Species</option>
                    <option>Cattle</option>
                    <option>Goat</option>
                    <option>Sheep</option>
                    <option>Poultry</option>
                    <option>Pig</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Breed"
                    className="px-4 py-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Age"
                    className="px-4 py-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Weight"
                    className="px-4 py-2 border rounded-lg"
                  />
                  <input
                    type="date"
                    placeholder="Purchase Date"
                    className="px-4 py-2 border rounded-lg"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                  >
                    Add Animal
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Animal Detail Modal */}
        {selectedAnimal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold">{selectedAnimal.name}</h2>
                  <p className="text-gray-600">{selectedAnimal.species} • {selectedAnimal.breed}</p>
                </div>
                <button
                  onClick={() => setSelectedAnimal(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Basic Information</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Age</div>
                      <div className="font-medium">{selectedAnimal.age}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Weight</div>
                      <div className="font-medium">{selectedAnimal.weight}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Health Status</div>
                      <div className="font-medium capitalize">{selectedAnimal.healthStatus}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Last Checkup</div>
                      <div className="font-medium">{selectedAnimal.lastCheckup}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Production Records</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    {selectedAnimal.production.milk && (
                      <div className="text-sm">
                        <span className="text-gray-600">Milk Production:</span>
                        <span className="font-medium ml-2">{selectedAnimal.production.milk}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Vaccination History</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedAnimal.vaccinations.map((vac, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm">
                        {vac}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Update Record
                  </button>
                  <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    Add Health Entry
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}


