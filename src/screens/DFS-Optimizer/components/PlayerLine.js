import React from 'react';

const PlayerLine = ({ line, betType }) => {
  return (
      <div className=" flex flex-col justify-center items-center space-y-0.5 rounded-xl mr-3 w-28">
          <div className="">
              <span className="text-xs text-[#aea6a6] sm:text-xs md:text-xs">LINE</span> 
          </div>
          <div className="">
              <span className="text-base font-bold text-[#f2914b] sm:text-base md:text-base">{line}</span> 
          </div>
          <div className="">
              <span className="text-xs font-bold text-white sm:text-xs md:text-xs">{betType}</span>
          </div>
      </div>
  );
};

export default PlayerLine;