import React from "react";



const Platform = ({ platforms }) => {
  return (
    <div className="flex overflow-x-auto gap-4 mt-2">
      {platforms.map((platform, index) => (
        <div key={index} className="flex-col bg-[#35384786] px-3 py-1 rounded flex justify-between items-center min-w-max">
          {/* Adjust the image height and width with breakpoints */}
          <img src={platform.platform} alt="platform logo" className="h-7 sm:h-6 md:h-7 lg:h-8 w-auto" />
          {/* Adjust the text size with breakpoints */}
          <span className="text-xs sm:text-xxs md:text-xs lg:text-sm">{platform.line}</span>
          <span className="text-xs sm:text-xxs md:text-xs lg:text-sm">{platform.odds}</span>
        </div>
      ))}
    </div>
  );
};

export default Platform;
