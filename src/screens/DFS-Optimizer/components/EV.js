import React from 'react';

const EV = ({ ev }) => {
  return (
      <div className=" flex flex-col justify-center items-center space-y-2 rounded-xl w-28">
          <div className="">
            <span className="text-sm text-white sm:text-s md:text-sm font-bold">EV %</span> 
          </div>
          <div className="">
            <span className="text-sm font-bold text-[#6ae487] sm:text-sm md:text-base">{ev}%</span> 
          </div>

      </div>
  );
};

export default EV;