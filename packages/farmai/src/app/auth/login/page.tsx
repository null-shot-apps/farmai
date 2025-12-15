'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic
    console.log('Login data:', formData);
    alert('Login successful! Redirecting to dashboard...');
    window.location.href = '/dashboard';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-600 mb-2">🌾 FARMAI</h1>
          <p className="text-gray-600">Welcome Back!</p>
        </div>

        {/* Login Method Toggle */}
        <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
          <button
            type="button"
            onClick={() => setLoginMethod('email')}
            className={`flex-1 py-2 rounded-md font-medium transition ${
              loginMethod === 'email'
                ? 'bg-white text-green-600 shadow'
                : 'text-gray-600'
            }`}
          >
            📧 Email
          </button>
          <button
            type="button"
            onClick={() => setLoginMethod('phone')}
            className={`flex-1 py-2 rounded-md font-medium transition ${
              loginMethod === 'phone'
                ? 'bg-white text-green-600 shadow'
                : 'text-gray-600'
            }`}
          >
            📱 Phone
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email/Phone Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {loginMethod === 'email' ? 'Email Address' : 'Phone Number'}
            </label>
            <input
              type={loginMethod === 'email' ? 'email' : 'tel'}
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder={loginMethod === 'email' ? 'your@email.com' : '+1234567890'}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <Link href="/auth/forgot-password" className="text-sm text-green-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
          >
            <span className="text-xl">🔵</span>
            <span className="font-medium">Google</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
          >
            <span className="text-xl">📘</span>
            <span className="font-medium">Facebook</span>
          </button>
        </div>

        {/* Quick Access for Low-Literacy Users */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800 mb-2">
            <strong>🎤 Voice Login Available</strong>
          </p>
          <button
            type="button"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            🎙️ Login with Voice
          </button>
        </div>

        {/* Signup Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don&apos;t have an account?{' '}
            <Link href="/auth/signup" className="text-green-600 font-semibold hover:underline">
              Sign Up Free
            </Link>
          </p>
        </div>

        {/* Emergency Access */}
        <div className="mt-4 text-center">
          <Link href="/auth/emergency" className="text-sm text-red-600 hover:underline">
            🚨 Emergency Access (SMS/USSD)
          </Link>
        </div>
      </div>
    </div>
  );
}

