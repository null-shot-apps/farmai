'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [activeModule, setActiveModule] = useState<'crops' | 'livestock'>('crops');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-y-auto">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">🌾</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">FARMAI</h1>
                <p className="text-xs text-gray-600">Global Agriculture AI Platform</p>
              </div>
            </div>
            <nav className="flex items-center gap-4">
              <Link href="/dashboard" className="text-sm font-medium text-gray-700 hover:text-green-600">
                Dashboard
              </Link>
              <Link href="/marketplace" className="text-sm font-medium text-gray-700 hover:text-green-600">
                Marketplace
              </Link>
              <Link href="/community" className="text-sm font-medium text-gray-700 hover:text-green-600">
                Community
              </Link>
              <Link href="/wallet" className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700">
                Wallet
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Empowering Farmers with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Increase your income, productivity, and resilience through intelligent recommendations, 
            community support, and market access. Works offline, speaks your language.
          </p>
        </div>

        {/* Module Selector */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveModule('crops')}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all ${
              activeModule === 'crops'
                ? 'bg-green-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            🌾 Crop Farming
          </button>
          <button
            onClick={() => setActiveModule('livestock')}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all ${
              activeModule === 'livestock'
                ? 'bg-green-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            🐄 Livestock
          </button>
        </div>

        {/* Features Grid */}
        {activeModule === 'crops' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon="🤖"
              title="AI Crop Recommender"
              description="Get personalized crop recommendations based on your location, soil, weather, and market demand"
              link="/crops/recommender"
            />
            <FeatureCard
              icon="🔬"
              title="Pest & Disease Diagnosis"
              description="Upload photos or describe symptoms to get instant AI-powered diagnosis and treatment plans"
              link="/crops/diagnosis"
            />
            <FeatureCard
              icon="🧪"
              title="Fertilizer Advisor"
              description="Soil-aware dosage recommendations for organic and chemical fertilizers with safety guidance"
              link="/crops/fertilizer"
            />
            <FeatureCard
              icon="🌤️"
              title="Weather & Climate Alerts"
              description="Hyperlocal weather forecasts and extreme weather alerts for your crop stages"
              link="/crops/weather"
            />
            <FeatureCard
              icon="🏞️"
              title="Land Lending & Leasing"
              description="Find land to lease or list your land for rent with smart matching and contracts"
              link="/crops/land"
            />
            <FeatureCard
              icon="📚"
              title="Training Hub"
              description="Access video, audio, and text lessons in your local language with certifications"
              link="/crops/training"
            />
            <FeatureCard
              icon="💬"
              title="Farmer Community"
              description="Connect with other farmers, share knowledge, and get expert advice"
              link="/community/crops"
            />
            <FeatureCard
              icon="📞"
              title="Call Center Support"
              description="24/7 multilingual support with AI-assisted human agents"
              link="/support"
            />
            <FeatureCard
              icon="📱"
              title="Offline Access"
              description="Works without internet via SMS/USSD with automatic sync when online"
              link="/offline"
            />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon="🩺"
              title="Livestock Health Diagnosis"
              description="AI-powered health diagnosis with image and symptom analysis for early disease detection"
              link="/livestock/diagnosis"
            />
            <FeatureCard
              icon="🌾"
              title="Feed & Nutrition Planner"
              description="Species-specific feeding plans optimized for cost, growth, and production"
              link="/livestock/feed"
            />
            <FeatureCard
              icon="💉"
              title="Vaccination Scheduler"
              description="Automated reminders and vet-approved vaccination protocols"
              link="/livestock/vaccination"
            />
            <FeatureCard
              icon="📊"
              title="Animal Record Keeping"
              description="Digital profiles tracking health, breeding, and production history"
              link="/livestock/records"
            />
            <FeatureCard
              icon="🐮"
              title="Breed Recommender"
              description="Get recommendations for best livestock breeds based on your conditions and goals"
              link="/livestock/breeds"
            />
            <FeatureCard
              icon="🛒"
              title="Livestock Marketplace"
              description="Buy and sell animals with verified sellers and health certifications"
              link="/marketplace/livestock"
            />
            <FeatureCard
              icon="💬"
              title="Livestock Community"
              description="Species-based communities with vet participation and expert advice"
              link="/community/livestock"
            />
            <FeatureCard
              icon="🚨"
              title="Emergency Vet Support"
              description="24/7 emergency escalation with geo-mapped vet network"
              link="/livestock/emergency"
            />
            <FeatureCard
              icon="📱"
              title="Offline Access"
              description="Works without internet via SMS/USSD with automatic sync when online"
              link="/offline"
            />
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">1M+</div>
              <div className="text-gray-600">Farmers Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100K+</div>
              <div className="text-gray-600">Marketplace Buyers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-gray-600">Languages Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-gray-600">Avg Income Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">FARMAI</h3>
              <p className="text-gray-400 text-sm">
                Empowering farmers worldwide with AI-driven agriculture solutions
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/crops">Crop Farming</Link></li>
                <li><Link href="/livestock">Livestock</Link></li>
                <li><Link href="/marketplace">Marketplace</Link></li>
                <li><Link href="/community">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/training">Training Hub</Link></li>
                <li><Link href="/support">Support</Link></li>
                <li><Link href="/api">Developer API</Link></li>
                <li><Link href="/partners">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 FARMAI. All rights reserved. Building the world's largest digital farming ecosystem.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, link }: { icon: string; title: string; description: string; link: string }) {
  return (
    <Link href={link}>
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:scale-105 cursor-pointer border border-gray-100">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
}


