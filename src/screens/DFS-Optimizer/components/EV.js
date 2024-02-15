import React from 'react';

const EV = ({ ev }) => {
  return (
      // Adjusting shape and size to match OddsToHit, without changing color schemes
      <div className=" flex flex-col justify-center items-center space-y-2 rounded-xl p-0.5 w-28">
          <div className="">
              {/* Keeping original color and font size */}
              <span className="text-xs text-white sm:text-s md:text-sm">+EV %</span> 
          </div>
          <div className="">
              {/* Keeping original color and adjusting size for consistency */}
              <span className="text-s font-bold text-[#6ae487] sm:text-sm md:text-lg">{ev}%</span> 
          </div>

      </div>
  );
};

export default EV;