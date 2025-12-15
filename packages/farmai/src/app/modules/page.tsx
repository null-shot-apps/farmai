'use client';

import Link from 'next/link';

export default function ModulesPage() {
  const modules = [
    {
      category: 'Crop Management',
      icon: '🌾',
      color: 'green',
      items: [
        { name: 'AI Crop Recommender', href: '/crop-recommender', icon: '🤖', description: 'Get AI-powered crop suggestions based on your conditions' },
        { name: 'Pest & Disease Diagnosis', href: '/pest-diagnosis', icon: '🐛', description: 'Identify and treat crop diseases with AI' },
        { name: 'Fertilizer Guide', href: '/fertilizer', icon: '🧪', description: 'Soil-aware fertilizer recommendations' },
        { name: 'Weather & Climate', href: '/weather', icon: '🌤️', description: 'Hyperlocal weather forecasts and alerts' },
      ],
    },
    {
      category: 'Livestock Management',
      icon: '🐄',
      color: 'purple',
      items: [
        { name: 'Health Diagnosis', href: '/livestock-health', icon: '🩺', description: 'AI-powered livestock disease detection' },
        { name: 'Feed & Nutrition', href: '/livestock-feed', icon: '🌾', description: 'Optimized feeding plans for your animals' },
        { name: 'Vaccination Scheduler', href: '/livestock-vaccination', icon: '💉', description: 'Never miss important vaccinations' },
        { name: 'Record Keeping', href: '/livestock-records', icon: '📋', description: 'Digital health and breeding records' },
        { name: 'Breed Recommender', href: '/livestock-breeds', icon: '🐮', description: 'Find the best breeds for your farm' },
        { name: 'Emergency Vet', href: '/emergency-vet', icon: '🚨', description: '24/7 emergency veterinary support' },
      ],
    },
    {
      category: 'Marketplace & Trading',
      icon: '🛒',
      color: 'blue',
      items: [
        { name: 'Crop Marketplace', href: '/marketplace', icon: '🌽', description: 'Buy and sell crops directly' },
        { name: 'Livestock Marketplace', href: '/livestock-marketplace', icon: '🐄', description: 'Trade livestock with verified sellers' },
        { name: 'Input Suppliers', href: '/suppliers', icon: '🏪', description: 'Connect with seed and equipment suppliers' },
        { name: 'Group Buying', href: '/group-buying', icon: '👥', description: 'Save money through cooperative purchasing' },
      ],
    },
    {
      category: 'Financial Services',
      icon: '💰',
      color: 'yellow',
      items: [
        { name: 'Wallet & Rewards', href: '/wallet', icon: '💳', description: 'Manage payments and earn rewards' },
        { name: 'Microloans', href: '/microloans', icon: '🏦', description: 'Access affordable farm financing' },
        { name: 'Crop Insurance', href: '/insurance', icon: '🛡️', description: 'Protect your crops and livestock' },
        { name: 'Carbon Credits', href: '/carbon-credits', icon: '🌱', description: 'Earn from sustainable practices' },
      ],
    },
    {
      category: 'Community & Learning',
      icon: '👥',
      color: 'orange',
      items: [
        { name: 'Community Forum', href: '/community', icon: '💬', description: 'Connect with farmers worldwide' },
        { name: 'Training Hub', href: '/training', icon: '📚', description: 'Learn new farming techniques' },
        { name: 'Land Leasing', href: '/land-leasing', icon: '🏞️', description: 'Find or lease farmland' },
        { name: 'Ambassador Program', href: '/ambassador', icon: '⭐', description: 'Earn by referring farmers' },
      ],
    },
    {
      category: 'Advanced Technology',
      icon: '🚀',
      color: 'indigo',
      items: [
        { name: 'IoT & Smart Irrigation', href: '/iot-irrigation', icon: '💧', description: 'Automated water management' },
        { name: 'Drone Analytics', href: '/drone-analytics', icon: '🛸', description: 'Satellite and drone crop monitoring' },
        { name: 'FarmAI Pro', href: '/farmai-pro', icon: '📊', description: 'Enterprise analytics dashboard' },
        { name: 'Developer API', href: '/api-docs', icon: '⚙️', description: 'Build on FARMAI platform' },
      ],
    },
    {
      category: 'Government & Research',
      icon: '🏛️',
      color: 'gray',
      items: [
        { name: 'Government Integration', href: '/government', icon: '🏛️', description: 'Access subsidies and programs' },
        { name: 'Research Partnerships', href: '/research', icon: '🔬', description: 'Collaborate with universities' },
        { name: 'Policy Dashboard', href: '/policy-dashboard', icon: '📈', description: 'Agricultural insights for policymakers' },
      ],
    },
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700' },
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700' },
    indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700' },
    gray: { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-700' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="text-green-600 hover:text-green-700 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">FARMAI Platform Modules</h1>
          <p className="text-xl text-gray-600">Complete digital agriculture ecosystem - All phases implemented</p>
        </div>

        <div className="space-y-8">
          {modules.map((category) => {
            const colors = colorClasses[category.color];
            return (
              <div key={category.category} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center`}>
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <div className={`p-4 border-2 ${colors.border} ${colors.bg} rounded-xl hover:shadow-md transition-all cursor-pointer`}>
                        <div className="flex items-start gap-3 mb-2">
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <h3 className={`font-bold ${colors.text}`}>{item.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Farm?</h2>
          <p className="text-xl mb-6">Join millions of farmers using AI to increase productivity and income</p>
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard">
              <button className="px-8 py-3 bg-white text-green-600 rounded-lg font-bold hover:bg-green-50 transition">
                Go to Dashboard
              </button>
            </Link>
            <Link href="/training">
              <button className="px-8 py-3 bg-green-700 text-white rounded-lg font-bold hover:bg-green-800 transition">
                Start Learning
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

