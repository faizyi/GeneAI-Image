import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineReload, AiOutlineCloudUpload } from "react-icons/ai";
export const GenerateImageForm = ({handleGenerateImage, imagePrompt, setImagePrompt}) => {
    const navigate = useNavigate();
    const [authorName, setAuthorName] = useState("");
    const [disabled, setDisabled] = useState(true)
    const handlePostImage = () => {
        console.log("Posting image...");
        console.log(authorName, imagePrompt)
        navigate("/")
      };
      const handleAuthorNameChange = (e)=>{
        const value = e.target.value;
        setAuthorName(value);
        setDisabled(!value.trim())
      }
  return (
    <>
    <div className="flex flex-col flex-1 gap-4">
          <label className="text-gray-600 font-medium">Author Name</label>
          <input
            type="text"
            value={authorName}
            onChange={handleAuthorNameChange}
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter image name..."
          />

          <label className="text-gray-600 font-medium">Image Prompt</label>
          <textarea
            value={imagePrompt}
            onChange={(e) => setImagePrompt(e.target.value)}
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
            placeholder="Describe the image you want to generate..."
          />

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleGenerateImage}
              className="flex items-center justify-center bg-blue-500 text-white 
              px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              <AiOutlineReload className="h-5 w-5 mr-2" />
              Generate Image
            </button>

            <button
            disabled={disabled}
            onClick={handlePostImage}
            className={`flex items-center justify-center px-4 py-2 rounded-md transition duration-200 ${
              disabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
          >
            <AiOutlineCloudUpload className="h-5 w-5 mr-2" />
            Post Image
          </button>
          </div>
        </div>
    </>
  )
}
