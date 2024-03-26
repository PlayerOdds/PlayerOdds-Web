import React from "react";

const Platform = ({ platforms }) => {
  return (
    <>
      <style>{`
          /* Custom Scroll Bar Styling is below */

        .custom-scroll::-webkit-scrollbar {
          width: 12px;
          height: 12px;
        }

        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scroll::-webkit-scrollbar-thumb {
          background-color: #888;
          border-radius: 6px;
          border: 3px solid transparent;
        }

        /* For Firefox */
        .custom-scroll {
          scrollbar-width: thin;
          scrollbar-color: #888 transparent;
        }
      `}</style>

      <div className="custom-scroll flex overflow-x-auto gap-4 max-w-[475px] mt-2">
        {platforms.map((platform, index) => (
          <div key={index} className="flex-col bg-[#35384786] px-3 py-1 rounded flex justify-between items-center min-w-max">
            <img src={platform.platform} alt="platform logo" className="h-7 sm:h-6 md:h-7 lg:h-8 w-auto" />
            <span className="text-xs sm:text-xxs md:text-xs lg:text-sm">{platform.line}</span>
            <span className="text-xs sm:text-xxs md:text-xs lg:text-sm">{platform.odds}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Platform;
