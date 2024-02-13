import React from "react";
import {playersData} from './newdata'

// console.log(playersData.pick)
const OverUnder = ({pick}) => {
  // Determine styles based on pick value
  const isOver = pick.toLowerCase() === 'over';
  const bgColorClass = isOver ? 'bg-[#122a31]' : 'bg-[#2a192b]';
  const textColorClass = isOver ? 'text-[#6ae487]' : 'text-[#ee3a4a]';
  const borderColorClass = isOver ? 'border-[#1b3239]' : 'border-[#322233]';

  // Combine all classes
  const combinedClasses = `px-10 py-5 rounded text-center inline-block border-2 ${bgColorClass} ${textColorClass} ${borderColorClass}`;

  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <div className={combinedClasses}>
        <span className="text-l">{pick}</span>
      </div>
    </div>
  );
}

export default OverUnder;