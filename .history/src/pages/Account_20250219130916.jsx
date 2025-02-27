import React from "react";

export default function AccountPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-500 p-4 flex justify-between text-white">
        <h1 className="text-lg font-bold">Lrnr</h1>
        <div className="space-x-4">
          <a href="#" className="hover:underline">
            Account
          </a>
          <a href="#" className="hover:underline">
            Quiz Generation
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow px-6 md:px-12 py-12 text-center">
        <h2 className="text-4xl font-bold text-teal-600">Account</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
          {/* Streak Section */}
          <div className="flex flex-col items-center">
            <span className="text-4xl">🔥</span>
            <h3 className="font-semibold text-lg mt-2">Streak</h3>
            <p>You have a streak of 5 days!</p>
          </div>

          {/* Platinum Quizzes */}
          <div className="flex flex-col items-center">
            <span className="text-4xl">📋</span>
            <h3 className="font-semibold text-lg mt-2">Platinum Quizzes</h3>
            <p>golang - intermediate</p>
            <p>Javascript - beginner</p>
            <p>AWS - beginner</p>
          </div>

          {/* Lrnr Level */}
          <div className="flex flex-col items-center">
            <span className="text-4xl">👤</span>
            <h3 className="font-semibold text-lg mt-2">Lrnr Level: 2</h3>
            <p>150/200 xp</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-500 text-white p-6 text-center">
        <p className="max-w-3xl mx-auto">
          Embrace the power of our app and unlock the secrets of the universe,
          one quiz at a time. As I always say, 'Yesterday is history, tomorrow
          is a mystery, but today is a gift. That is why it is called the
          present.'
        </p>
        <div className="mt-4 text-sm">
          Made by <span className="font-bold">Materialize</span>
        </div>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Quiz Generator
          </a>
          <a href="#" className="hover:underline">
            Account
          </a>
        </div>
      </footer>
    </div>
  );
}
