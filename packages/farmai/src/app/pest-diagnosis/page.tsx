'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PestDiagnosis() {
  const [diagnosisMethod, setDiagnosisMethod] = useState<'image' | 'text' | 'voice'>('image');
  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLoading(true);
      setTimeout(() => {
        setDiagnosis({
          pest: 'Fall Armyworm',
          confidence: 94,
          severity: 'High',
          treatments: [
            { name: 'Neem Oil Spray', type: 'Organic', effectiveness: '85%' },
            { name: 'Bacillus thuringiensis', type: 'Biological', effectiveness: '92%' },
            { name: 'Chlorpyrifos', type: 'Chemical', effectiveness: '95%' },
          ],
          prevention: [
            'Regular field monitoring',
            'Crop rotation',
            'Remove infected plants',
            'Use pheromone traps',
          ],
        });
        setLoading(false);
      }, 2000);
    }
  };

  const handleTextDiagnosis = () => {
    setLoading(true);
    setTimeout(() => {
      setDiagnosis({
        pest: 'Aphids Infestation',
        confidence: 88,
        severity: 'Medium',
        treatments: [
          { name: 'Insecticidal Soap', type: 'Organic', effectiveness: '80%' },
          { name: 'Ladybugs Release', type: 'Biological', effectiveness: '75%' },
          { name: 'Imidacloprid', type: 'Chemical', effectiveness: '90%' },
        ],
        prevention: [
          'Encourage beneficial insects',
          'Use reflective mulches',
          'Regular water spraying',
          'Remove weeds',
        ],
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/dashboard" className="text-red-600 hover:text-red-700 mb-6 inline-block">
          ← Back to Dashboard
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🐛</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Pest & Disease Diagnosis</h1>
              <p className="text-gray-600">AI-powered identification and treatment recommendations</p>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setDiagnosisMethod('image')}
              className={`flex-1 py-3 rounded-lg font-semibold transition ${
                diagnosisMethod === 'image'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              📸 Image Upload
            </button>
            <button
              onClick={() => setDiagnosisMethod('text')}
              className={`flex-1 py-3 rounded-lg font-semibold transition ${
                diagnosisMethod === 'text'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              ✍️ Text Symptoms
            </button>
            <button
              onClick={() => setDiagnosisMethod('voice')}
              className={`flex-1 py-3 rounded-lg font-semibold transition ${
                diagnosisMethod === 'voice'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🎤 Voice Input
            </button>
          </div>

          {diagnosisMethod === 'image' && (
            <div className="mb-8">
              <label className="block w-full">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-red-500 transition cursor-pointer">
                  <span className="text-6xl mb-4 block">📷</span>
                  <p className="text-lg font-semibold text-gray-700 mb-2">Upload Crop Image</p>
                  <p className="text-sm text-gray-500">Click to select or drag and drop</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
              </label>
            </div>
          )}

          {diagnosisMethod === 'text' && (
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Describe the symptoms you observe
              </label>
              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                rows={6}
                placeholder="Example: Yellow spots on leaves, holes in leaves, wilting plants..."
              />
              <button
                onClick={handleTextDiagnosis}
                disabled={!symptoms || loading}
                className="mt-4 w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition disabled:bg-gray-400"
              >
                {loading ? 'Analyzing...' : 'Diagnose Problem'}
              </button>
            </div>
          )}

          {diagnosisMethod === 'voice' && (
            <div className="mb-8">
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-12 text-center">
                <span className="text-6xl mb-4 block">🎤</span>
                <p className="text-lg font-semibold text-gray-700 mb-2">Voice Input</p>
                <p className="text-sm text-gray-600 mb-6">Speak in your local language</p>
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
                  Start Recording
                </button>
              </div>
            </div>
          )}

          {loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">AI is analyzing...</p>
            </div>
          )}

          {diagnosis && !loading && (
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{diagnosis.pest}</h3>
                    <p className="text-gray-600">Detected with {diagnosis.confidence}% confidence</p>
                  </div>
                  <span className={`px-4 py-2 rounded-full font-semibold ${
                    diagnosis.severity === 'High' ? 'bg-red-100 text-red-800' :
                    diagnosis.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {diagnosis.severity} Severity
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Recommended Treatments</h4>
                <div className="space-y-3">
                  {diagnosis.treatments.map((treatment: any, index: number) => (
                    <div key={index} className="bg-white border border-gray-200 p-4 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-bold text-gray-800">{treatment.name}</h5>
                          <p className="text-sm text-gray-600">{treatment.type}</p>
                        </div>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {treatment.effectiveness} effective
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Prevention Tips</h4>
                <ul className="space-y-2">
                  {diagnosis.prevention.map((tip: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>⚠️ Safety Note:</strong> Always follow label instructions when using chemicals. 
                  Consider organic options first for environmental safety.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

