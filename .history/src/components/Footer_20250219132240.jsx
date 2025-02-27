import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white p-6 text-center mt-auto">
      <p className="mb-4">
        Embrace the power of our app and unlock the secrets of the universe, one
        quiz at a time. As I always say, "Yesterday is history, tomorrow is a
        mystery, but today is a gift. That is why it is called the present."
      </p>
      <div className="flex justify-center space-x-4">
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
  );
}
