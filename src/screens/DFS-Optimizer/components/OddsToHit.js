import React from "react"

const OddsToHit = ({ odds, oddsValue }) => {
  return (
    <div className='text-center'>
      
      <div className="border flex flex-col bg justify-center items-center space-y-2 rounded-xl p-0.5 w-28"> {/* Adjusted width and padding for a slightly smaller size without affecting text size */}
        <div className="">
        
          <span className="text-white text-xs font-bold">ODDS TO HIT</span>
        </div>
        <div className="">
          
          <span className="text-s text-[#6ae487] font-bold sm:text-sm md:text-lg">{odds}</span>
        </div>
        <div className="">
          
          <span className="text-xs sm:text-s md:text-lg">{oddsValue}</span>
        </div>
      </div>
    </div>
  );
}

export default OddsToHit;