import React from "react"

const OddsToHit = ({ odds, oddsValue }) => {
  return (
    <div className='text-center'>
      
      <div className=" flex flex-col justify-center items-center space-y-1 rounded-xl p-0.5 w-28"> {/* Adjusted width and padding for a slightly smaller size without affecting text size */}
        <div className="">
        
          <span className="text-white text-xs font-bold">ODDS TO HIT</span>
        </div>
        <div className="">
          
          <span className="text-base text-[#6ae487] font-bold sm:text-sm md:text-base">{odds}</span>
        </div>
        <div className="">
          
          <span className="text-xs sm:text-s md:text-sm">{oddsValue}</span>
        </div>
      </div>
    </div>
  );
}

export default OddsToHit;