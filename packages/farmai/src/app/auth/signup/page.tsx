'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: 'farmer',
    country: '',
    language: 'en'
  });

  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual signup logic
    console.log('Signup data:', formData);
    alert('Account created successfully! Redirecting to dashboard...');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-600 mb-2">🌾 FARMAI</h1>
          <p className="text-gray-600">Create Your Account</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          <div className={`flex-1 text-center ${step >= 1 ? 'text-green-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${step >= 1 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
              1
            </div>
            <p className="text-xs">Basic Info</p>
          </div>
          <div className={`flex-1 text-center ${step >= 2 ? 'text-green-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${step >= 2 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
              2
            </div>
            <p className="text-xs">Account Type</p>
          </div>
          <div className={`flex-1 text-center ${step >= 3 ? 'text-green-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${step >= 3 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
              3
            </div>
            <p className="text-xs">Security</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="+1234567890"
                />
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2: Account Type */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  I am a *
                </label>
                <select
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="farmer">🌾 Farmer (Crops)</option>
                  <option value="livestock">🐄 Livestock Owner</option>
                  <option value="both">🌾🐄 Both Crops & Livestock</option>
                  <option value="buyer">🛒 Buyer/Trader</option>
                  <option value="supplier">📦 Input Supplier</option>
                  <option value="vet">🩺 Veterinarian</option>
                  <option value="advisor">👨‍🌾 Agricultural Advisor</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select your country</option>
                  <option value="NG">🇳🇬 Nigeria</option>
                  <option value="KE">🇰🇪 Kenya</option>
                  <option value="GH">🇬🇭 Ghana</option>
                  <option value="TZ">🇹🇿 Tanzania</option>
                  <option value="UG">🇺🇬 Uganda</option>
                  <option value="ZA">🇿🇦 South Africa</option>
                  <option value="IN">🇮🇳 India</option>
                  <option value="BR">🇧🇷 Brazil</option>
                  <option value="US">🇺🇸 United States</option>
                  <option value="OTHER">🌍 Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Language *
                </label>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="en">English</option>
                  <option value="sw">Swahili</option>
                  <option value="ha">Hausa</option>
                  <option value="yo">Yoruba</option>
                  <option value="ig">Igbo</option>
                  <option value="am">Amharic</option>
                  <option value="fr">French</option>
                  <option value="pt">Portuguese</option>
                  <option value="es">Spanish</option>
                  <option value="hi">Hindi</option>
                </select>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Security */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={8}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Minimum 8 characters"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Re-enter password"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>🔒 Your data is secure</strong><br />
                  We use end-to-end encryption to protect your information.
                </p>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  required
                  className="mt-1 mr-2"
                />
                <label className="text-sm text-gray-600">
                  I agree to the <Link href="/terms" className="text-green-600 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-green-600 hover:underline">Privacy Policy</Link>
                </label>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Create Account
                </button>
              </div>
            </div>
          )}
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-green-600 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

