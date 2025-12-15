'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LivestockHealth() {
  const [animalType, setAnimalType] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleDiagnosis = () => {
    setLoading(true);
    setTimeout(() => {
      setDiagnosis({
        disease: 'Foot and Mouth Disease',
        confidence: 91,
        severity: 'High',
        symptoms: ['Fever', 'Blisters on mouth and feet', 'Excessive salivation', 'Lameness'],
        treatments: [
          { name: 'Immediate Isolation', priority: 'Critical', duration: '14 days' },
          { name: 'Supportive Care', priority: 'High', duration: 'Ongoing' },
          { name: 'Antibiotic Treatment', priority: 'Medium', duration: '7 days' },
        ],
        prevention: [
          'Vaccination program',
          'Quarantine new animals',
          'Disinfect equipment',
          'Control animal movement',
        ],
        vetRequired: true,
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/dashboard" className="text-purple-600 hover:text-purple-700 mb-6 inline-block">
          ← Back to Dashboard
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🐄</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">AI Livestock Health Diagnosis</h1>
              <p className="text-gray-600">Early disease detection and treatment recommendations</p>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Animal Type</label>
              <select
                value={animalType}
                onChange={(e) => setAnimalType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select animal type</option>
                <option value="cattle">Cattle</option>
                <option value="goat">Goat</option>
                <option value="sheep">Sheep</option>
                <option value="pig">Pig</option>
                <option value="chicken">Chicken</option>
                <option value="duck">Duck</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Symptoms Observed
              </label>
              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                rows={6}
                placeholder="Describe symptoms: fever, loss of appetite, unusual behavior, physical signs..."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <label className="block">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-500 transition cursor-pointer">
                  <span className="text-4xl mb-2 block">📷</span>
                  <p className="text-sm font-semibold text-gray-700">Upload Photo</p>
                  <input type="file" accept="image/*" className="hidden" />
                </div>
              </label>

              <label className="block">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-500 transition cursor-pointer">
                  <span className="text-4xl mb-2 block">🎤</span>
                  <p className="text-sm font-semibold text-gray-700">Voice Description</p>
                  <input type="file" accept="audio/*" className="hidden" />
                </div>
              </label>
            </div>

            <button
              onClick={handleDiagnosis}
              disabled={!animalType || !symptoms || loading}
              className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition disabled:bg-gray-400"
            >
              {loading ? 'Analyzing...' : 'Get AI Diagnosis'}
            </button>
          </div>

          {loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">AI is analyzing health data...</p>
            </div>
          )}

          {diagnosis && !loading && (
            <div className="space-y-6">
              {diagnosis.vetRequired && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                  <p className="font-bold text-red-800">⚠️ Veterinary Attention Required</p>
                  <p className="text-sm text-red-700">This condition requires immediate professional care</p>
                  <Link
                    href="/emergency-vet"
                    className="inline-block mt-2 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700"
                  >
                    Contact Emergency Vet
                  </Link>
                </div>
              )}

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{diagnosis.disease}</h3>
                    <p className="text-gray-600">Detected with {diagnosis.confidence}% confidence</p>
                  </div>
                  <span className={`px-4 py-2 rounded-full font-semibold ${
                    diagnosis.severity === 'High' ? 'bg-red-100 text-red-800' :
                    diagnosis.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {diagnosis.severity} Risk
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">Common Symptoms:</h4>
                  <div className="flex flex-wrap gap-2">
                    {diagnosis.symptoms.map((symptom: string, index: number) => (
                      <span key={index} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Treatment Plan</h4>
                <div className="space-y-3">
                  {diagnosis.treatments.map((treatment: any, index: number) => (
                    <div key={index} className="bg-white border border-gray-200 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-bold text-gray-800">{treatment.name}</h5>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          treatment.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                          treatment.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {treatment.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">Duration: {treatment.duration}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Prevention Measures</h4>
                <ul className="space-y-2">
                  {diagnosis.prevention.map((measure: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-gray-700">{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <button className="bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700">
                  Save to Records
                </button>
                <button className="bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300">
                  Schedule Vet Visit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

