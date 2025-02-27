import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Irnr</h1>
      <div className="space-x-6">
        <a href="#" className="hover:underline">
          Account
        </a>
        <a href="#" className="hover:underline">
          Quiz Generation
        </a>
      </div>
    </nav>
  );
}
