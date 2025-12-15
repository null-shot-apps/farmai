'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Microloans() {
  const [loanType, setLoanType] = useState<'crop' | 'livestock' | 'equipment'>('crop');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanDetails, setLoanDetails] = useState<any>(null);

  const calculateLoan = () => {
    const amount = parseFloat(loanAmount);
    const interestRate = 8.5; // Annual rate
    const term = 12; // months
    
    const monthlyRate = interestRate / 100 / 12;
    const monthlyPayment = (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) / 
                          (Math.pow(1 + monthlyRate, term) - 1);
    
    setLoanDetails({
      amount,
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: (monthlyPayment * term).toFixed(2),
      totalInterest: (monthlyPayment * term - amount).toFixed(2),
      term,
      interestRate
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
              ← Back
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">💰 Microloans & Insurance</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Loan Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <button
            onClick={() => setLoanType('crop')}
            className={`p-6 rounded-xl text-left transition-all ${
              loanType === 'crop'
                ? 'bg-gradient-to-br from-green-600 to-emerald-600 text-white shadow-lg scale-105'
                : 'bg-white hover:shadow-lg'
            }`}
          >
            <div className="text-4xl mb-3">🌾</div>
            <h3 className="text-xl font-bold mb-2">Crop Loans</h3>
            <p className={`text-sm ${loanType === 'crop' ? 'text-white/90' : 'text-gray-600'}`}>
              Financing for seeds, fertilizers, and crop inputs
            </p>
          </button>

          <button
            onClick={() => setLoanType('livestock')}
            className={`p-6 rounded-xl text-left transition-all ${
              loanType === 'livestock'
                ? 'bg-gradient-to-br from-orange-600 to-red-600 text-white shadow-lg scale-105'
                : 'bg-white hover:shadow-lg'
            }`}
          >
            <div className="text-4xl mb-3">🐄</div>
            <h3 className="text-xl font-bold mb-2">Livestock Loans</h3>
            <p className={`text-sm ${loanType === 'livestock' ? 'text-white/90' : 'text-gray-600'}`}>
              Purchase animals, feed, and veterinary care
            </p>
          </button>

          <button
            onClick={() => setLoanType('equipment')}
            className={`p-6 rounded-xl text-left transition-all ${
              loanType === 'equipment'
                ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
                : 'bg-white hover:shadow-lg'
            }`}
          >
            <div className="text-4xl mb-3">🚜</div>
            <h3 className="text-xl font-bold mb-2">Equipment Loans</h3>
            <p className={`text-sm ${loanType === 'equipment' ? 'text-white/90' : 'text-gray-600'}`}>
              Farm machinery, tools, and infrastructure
            </p>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Loan Calculator */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Loan Calculator</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount ($)
                </label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Purpose
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>Seeds & Fertilizers</option>
                  <option>Livestock Purchase</option>
                  <option>Equipment</option>
                  <option>Land Improvement</option>
                  <option>Working Capital</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Repayment Period
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>6 months</option>
                  <option>12 months</option>
                  <option>18 months</option>
                  <option>24 months</option>
                </select>
              </div>

              <button
                onClick={calculateLoan}
                disabled={!loanAmount}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Calculate Loan
              </button>

              {loanDetails && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Loan Amount:</span>
                    <span className="font-bold">${loanDetails.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monthly Payment:</span>
                    <span className="font-bold text-blue-600">${loanDetails.monthlyPayment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Total Interest:</span>
                    <span className="font-medium">${loanDetails.totalInterest}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Total Payment:</span>
                    <span className="font-bold">${loanDetails.totalPayment}</span>
                  </div>
                  <div className="pt-3 border-t">
                    <button className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                      Apply for This Loan
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Insurance Options */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Insurance Plans</h2>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">Crop Insurance</h3>
                  <span className="text-blue-600 font-bold">$50/season</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Protection against crop failure, weather damage, and pest attacks
                </p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>✓ Weather damage coverage</li>
                  <li>✓ Pest & disease protection</li>
                  <li>✓ Up to 80% yield coverage</li>
                  <li>✓ Fast claim processing</li>
                </ul>
                <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Get Quote
                </button>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:border-orange-500 cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">Livestock Insurance</h3>
                  <span className="text-orange-600 font-bold">$30/animal/year</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Comprehensive coverage for your livestock health and mortality
                </p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>✓ Death & disease coverage</li>
                  <li>✓ Theft protection</li>
                  <li>✓ Emergency vet costs</li>
                  <li>✓ Breeding failure coverage</li>
                </ul>
                <button className="mt-4 w-full py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                  Get Quote
                </button>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:border-green-500 cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">Equipment Insurance</h3>
                  <span className="text-green-600 font-bold">$100/year</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Protect your farm equipment and machinery investments
                </p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>✓ Theft & damage coverage</li>
                  <li>✓ Breakdown protection</li>
                  <li>✓ Replacement cost coverage</li>
                  <li>✓ 24/7 support</li>
                </ul>
                <button className="mt-4 w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Active Loans */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Active Loans</h2>
          
          <div className="text-center py-12 text-gray-500">
            <div className="text-6xl mb-4">📋</div>
            <p>No active loans. Apply for a loan to get started!</p>
          </div>
        </div>
      </main>
    </div>
  );
}


