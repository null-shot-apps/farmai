'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual password reset logic
    console.log('Reset password for:', email);
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-600 mb-2">🔒 Reset Password</h1>
          <p className="text-gray-600">
            {sent ? 'Check your email' : 'Enter your email to reset password'}
          </p>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Send Reset Link
            </button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <div className="text-6xl mb-4">✅</div>
            <p className="text-gray-700">
              We&apos;ve sent a password reset link to <strong>{email}</strong>
            </p>
            <p className="text-sm text-gray-500">
              Check your inbox and click the link to reset your password.
            </p>
            <button
              onClick={() => setSent(false)}
              className="text-green-600 hover:underline"
            >
              Didn&apos;t receive? Resend
            </button>
          </div>
        )}

        {/* Back to Login */}
        <div className="mt-6 text-center">
          <Link href="/auth/login" className="text-green-600 hover:underline">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

