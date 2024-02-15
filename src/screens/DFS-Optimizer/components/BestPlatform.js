import React from 'react';

const BestPlatform = ({ best_platform }) => {
  return (
      // Adjusting shape and size to match OddsToHit, without changing color schemes
      <div className="flex flex-col justify-center items-center space-y-2 rounded-xl p-0.5 w-28">
          <div className="">
              {/* Keeping original color and font size */}
              <span className="text-xs text-white sm:text-xs md:text-sm">Best Value</span>

          </div>
          <div className="">
              {/* Keeping original color and adjusting size for consistency */}
              <img src={best_platform} alt="platform logo" className="h-7 w-auto" />
            
        </div>

      </div>
  );
};

export default BestPlatform;