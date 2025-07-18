import React from "react";

const Header: React.FC = () => {
  return (
    
    <header className="bg-white shadow-md py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-4 sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        🏡 RealEstate
      </div>

      {/* Search Bar */}
      <div className="flex-1 w-full max-w-lg">
        <input
          type="text"
          placeholder="Search location, property..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Auth Buttons */}
      <div className="flex gap-4">
        <button className="text-blue-600 font-semibold hover:underline">Sign In</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Sign Up
        </button>
      </div>

      {/* Accommodation Types */}
      <div className="w-full flex gap-3 mt-4 overflow-x-auto md:justify-center md:mt-0 text-sm">
        {["Rooms", "Mansion", "Countryside", "Beachfront", "Loft", "Cabin"].map((type) => (
          <span
            key={type}
            className="px-3 py-1 border border-gray-300 rounded-full whitespace-nowrap hover:bg-gray-100 cursor-pointer"
          >
            {type}
          </span>
        ))}
      </div>
    </header>
  );
};

export default Header;
