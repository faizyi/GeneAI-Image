import React from 'react'

export const ImageGenerationCard = ({imageGenerated, imagePrompt}) => {
  return (
    <div className="flex-1 mt-4 lg:mt-0">
    <div
      className={`w-full h-96 bg-gray-200 flex items-center justify-center rounded-md shadow-md ${
        imageGenerated ? "bg-blue-100" : "bg-gray-200"
      }`}
    >
      {imageGenerated ? (
        <p className="text-gray-700 text-lg font-medium">🖼️ {imagePrompt}</p>
      ) : (
        <p className="text-gray-500">Click "Generate Image" to create one</p>
      )}
    </div>
  </div>
  )
}
