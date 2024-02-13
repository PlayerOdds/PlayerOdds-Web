import React from "react";
import {playersData} from './newdata'

// console.log(playersData.pick)

const OverUnder = ({pick}) => {
  return (
    <div className="flex flex-col items-center space-y-2">
    <div className={`${pick === 'UNDER' ? 'bg-red-500' : 'bg-green-500'} px-4 py-1 rounded`}>
      <span className="text-sm">{pick}</span>
    </div>
  </div>
  )
}

export default OverUnder;