import React from "react";
import { AiOutlineUser, AiOutlineDownload } from "react-icons/ai";
import { DownloadImage } from "./DownloadImage";

export const ImageCard = ({item}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {/* Placeholder for AI-generated images */}
        <div
          className="relative group w-40 h-40 md:w-48 md:h-48 bg-gray-200 rounded-lg 
          shadow-md overflow-hidden cursor-pointer transition duration-200"
        >
          {/* AI-generated Image */}
          <img
            className="w-full h-full object-cover"
            src={item?.photo}
            // alt={`AI-generated ${index}`}
          />

          {/* Hover Overlay (Dark background) */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between
             text-white opacity-0 group-hover:opacity-100 transition duration-200"
          >
            {/* Top Icons: Avatar & Download */}
            <div className="flex items-center ml-2 mt-2">
              {/* Avatar Icon */}
              <AiOutlineUser className="h-6 w-6" />
              {/* Download Icon */}
              <DownloadImage image={item?.photo}/>
            </div>

            {/* Bottom Prompt */}
            <div className="text-sm px-2 py-1
             bg-opacity-70 w-full absolute bottom-0">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Molestiae inventore alias officia illum nulla! Sint optio 
                soluta alias, maiores numquam animi aut totam quas 
                culpa rem incidunt nam illo enim?</p>
            </div>
          </div>
        </div>
    </div>
  );
};
