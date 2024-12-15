import React from "react";
import { SearchBar } from "../components/SearchBar";
import { ImageCard } from "../components/ImageCard";

export const Home = () => {
    const item={
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNtKbqeuYMD6Mk4zpuH0YfbEosTcCCOroXg&s",
        author:"",
        prompt: ""
    }
  return (
    <div className="flex items-center justify-center">
      {/* Main Content Wrapper */}
      <div className="container mx-auto px-8 py-6 lg:px-20 lg:py-10 w-full md:w-3/4 lg:w-2/3">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-gray-800 text-3xl md:text-4xl font-bold mb-2">
            Explore Popular Posts in the Community
          </h1>
          <h2 className="text-gray-600 text-lg md:text-xl font-medium">
            Generated with AI
          </h2>
        </div>

        {/* Search Bar Section */}
        <div className="mt-4">
          <SearchBar />
        </div>

        {/* AI-Generated Images Section */}
        <div className="mt-8">
          <ImageCard
          item={item} 
          />
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-700 text-sm md:text-base">
            Explore creative AI-generated visuals and engage with the community.
          </p>
        </div>

      </div>
    </div>
  );
};
