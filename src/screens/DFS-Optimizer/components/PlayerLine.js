import React from 'react';

const PlayerLine = ({ line, betType }) => {
  return (
      // Adjusting shape and size to match OddsToHit, without changing color schemes
      <div className=" flex flex-col justify-center items-center space-y-0.5 rounded-xl p-0.25 w-28">
          <div className="">
              {/* Keeping original color and font size */}
              <span className="text-xs text-[#aea6a6] sm:text-xs md:text-xs">LINE</span> 
          </div>
          <div className="">
              {/* Keeping original color and adjusting size for consistency */}
              <span className="text-base font-bold text-[#f2914b] sm:text-base md:text-base">{line}</span> 
          </div>
          <div className="">
              {/* Keeping original color and font size */}
              <span className="text-xs font-bold text-white sm:text-xs md:text-xs">{betType}</span>

          </div>
      </div>
  );
};

export default PlayerLine;