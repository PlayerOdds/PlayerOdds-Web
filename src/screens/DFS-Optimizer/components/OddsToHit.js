import React from "react"

const OddsToHit = ({odds, oddsValue }) => {
  return (
   <div className='text-center '>
   
    <div className="flex flex-col text-center bg-green-600 justify-center items-center space-y-2 rounded-xl p-1  sm:w- md:w-32 lg:w-36">
    <div className="">
        <span className="text-white text-xs text-bold sm:text-s md:text-sm ">ODDS TO HIT</span> {/* `text-center` is optional here due to flex settings */}
      </div>
      <div className="">
        <span className="text-s font-bold sm:text-sm md:text-lg">{odds}</span> {/* `text-center` added for consistency, optional if flex settings are enough */}
      </div>
      <div className="">
        <span className="text-xs  sm:text-s md:text-lg">{oddsValue}</span> {/* `text-center` added for consistency, optional if flex settings are enough */}
      </div>
    </div>
    </div>
  )
}

export default OddsToHit;