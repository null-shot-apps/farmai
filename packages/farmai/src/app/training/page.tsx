'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TrainingPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'crops' | 'livestock' | 'business'>('all');

  const courses = [
    {
      id: 1,
      category: 'crops',
      title: 'Modern Tomato Farming Techniques',
      instructor: 'Dr. James Ochieng',
      duration: '2 hours',
      lessons: 12,
      level: 'Beginner',
      progress: 65,
      rating: 4.8,
      students: 1240,
      icon: '🍅',
      description: 'Learn modern techniques for high-yield tomato production',
    },
    {
      id: 2,
      category: 'livestock',
      title: 'Dairy Cow Management & Health',
      instructor: 'Dr. Sarah Wanjiru',
      duration: '3 hours',
      lessons: 18,
      level: 'Intermediate',
      progress: 30,
      rating: 4.9,
      students: 890,
      icon: '🐄',
      description: 'Complete guide to dairy cow health and productivity',
    },
    {
      id: 3,
      category: 'crops',
      title: 'Organic Pest Control Methods',
      instructor: 'Prof. David Kimani',
      duration: '1.5 hours',
      lessons: 8,
      level: 'Beginner',
      progress: 100,
      rating: 4.7,
      students: 2100,
      icon: '🐛',
      description: 'Natural and organic solutions for pest management',
    },
    {
      id: 4,
      category: 'business',
      title: 'Farm Business & Financial Planning',
      instructor: 'Mary Akinyi',
      duration: '2.5 hours',
      lessons: 15,
      level: 'Intermediate',
      progress: 0,
      rating: 4.6,
      students: 1560,
      icon: '💼',
      description: 'Turn your farm into a profitable business',
    },
    {
      id: 5,
      category: 'livestock',
      title: 'Poultry Farming for Beginners',
      instructor: 'John Mutua',
      duration: '2 hours',
      lessons: 10,
      level: 'Beginner',
      progress: 45,
      rating: 4.8,
      students: 3200,
      icon: '🐔',
      description: 'Start your poultry farm with confidence',
    },
    {
      id: 6,
      category: 'crops',
      title: 'Drip Irrigation Installation & Maintenance',
      instructor: 'Eng. Peter Mwangi',
      duration: '1 hour',
      lessons: 6,
      level: 'Beginner',
      progress: 0,
      rating: 4.9,
      students: 980,
      icon: '💧',
      description: 'Save water and increase yields with drip irrigation',
    },
  ];

  const filteredCourses = activeCategory === 'all'
    ? courses
    : courses.filter(c => c.category === activeCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-blue-100 text-blue-700';
      case 'Advanced': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <span className="text-2xl">🌾</span>
              <span className="text-xl font-bold text-green-700">FARMAI</span>
            </Link>
            <Link
              href="/dashboard"
              className="text-sm text-gray-600 hover:text-green-600 transition-colors"
            >
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">📚 Training & Education</h1>
          <p className="text-gray-600">Learn from experts and grow your farming skills</p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-4 text-center">
            <div className="text-3xl mb-2">📖</div>
            <div className="text-2xl font-bold text-gray-900">3</div>
            <div className="text-sm text-gray-600">Courses In Progress</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 text-center">
            <div className="text-3xl mb-2">✅</div>
            <div className="text-2xl font-bold text-gray-900">1</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 text-center">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-gray-900">1</div>
            <div className="text-sm text-gray-600">Certificates</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 text-center">
            <div className="text-3xl mb-2">⏱️</div>
            <div className="text-2xl font-bold text-gray-900">8.5h</div>
            <div className="text-sm text-gray-600">Learning Time</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            All Courses
          </button>
          <button
            onClick={() => setActiveCategory('crops')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeCategory === 'crops'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            🌾 Crops
          </button>
          <button
            onClick={() => setActiveCategory('livestock')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeCategory === 'livestock'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            🐄 Livestock
          </button>
          <button
            onClick={() => setActiveCategory('business')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeCategory === 'business'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            💼 Business
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="bg-gradient-to-br from-green-100 to-blue-100 h-40 flex items-center justify-center text-6xl">
                {course.icon}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <span>⭐</span>
                    <span>{course.rating}</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-lg text-gray-900 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{course.description}</p>
                
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center justify-between">
                    <span>👨‍🏫 {course.instructor}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>📚 {course.lessons} lessons</span>
                    <span>⏱️ {course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>👥 {course.students.toLocaleString()} students</span>
                  </div>
                </div>

                {course.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium text-green-600">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <button className={`w-full py-2 rounded-lg font-medium transition-colors ${
                  course.progress === 100
                    ? 'bg-gray-100 text-gray-600'
                    : course.progress > 0
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}>
                  {course.progress === 100 ? '✓ Completed' : course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

