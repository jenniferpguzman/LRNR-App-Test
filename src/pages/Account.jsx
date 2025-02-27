import React from "react";

export default function AccountPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
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
    </div>
  );
}
