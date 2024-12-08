import React, { useState } from "react";
import { GenerateImageForm } from "../components/GenerateImageForm";
import { ImageGenerationCard } from "../components/ImageGenerationCard";

export const Post = () => {
  const [imageGenerated, setImageGenerated] = useState(false);
  const [imagePrompt, setImagePrompt] = useState("");
  const handleGenerateImage = () => {
    console.log(imagePrompt)
    console.log("Generating image...");
    setImageGenerated(true); // Simulate image generation
  };
  return (
    <div className="container mx-auto px-6 py-8 lg:px-20 lg:py-10 w-full md:w-3/4 lg:w-2/3">
      {/* Main Heading */}
      <h1 className="text-gray-800 text-3xl md:text-4xl font-bold text-center mb-6">
        Generate AI Images
      </h1>

      {/* Input Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8">
        {/* Input Fields */}
        <GenerateImageForm handleGenerateImage={handleGenerateImage}
        imagePrompt={imagePrompt}
        setImagePrompt={setImagePrompt}
        />

        {/* Image Generation Card */}
        <ImageGenerationCard 
        imageGenerated={imageGenerated}
        imagePrompt={imagePrompt}
        />
      </div>
    </div>
  );
};
