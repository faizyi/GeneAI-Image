import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchBar = () => {
  return (
    <div className="w-full max-w-lg mx-auto mt-4">
      <div className="relative">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for AI-generated images or posts..."
          className="w-full px-6 py-3 pl-12 bg-gray-100 rounded-lg 
          shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 
          transition duration-200"
        />
        {/* Search Icon */}
        <div className="absolute left-4 top-3 text-gray-500">
          <AiOutlineSearch className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};
