import React from "react";
import {playersData} from './newdata'

// console.log(playersData.pick)

const OverUnder = ({ pick }) => {
  // Determine styles based on pick value
  const isOver = pick.toLowerCase() === 'over';
  const bgColorClass = isOver ? 'bg-[#122a31]' : 'bg-[#2a192b]';
  const textColorClass = isOver ? 'text-[#6ae487]' : 'text-[#ee3a4a]';
  const borderColorClass = isOver ? 'border-[#1b3239]' : 'border-[#322233]';

  // Combine all classes with responsive design adjustments
  const combinedClasses = `rounded-xl text-center inline-block border-2 ${bgColorClass} ${textColorClass} ${borderColorClass} p-5 sm:p-2 md:p-5`;

  // Responsive text size
  const textSizeClass = "text-xs sm:text-sm md:text-l";

  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <div className={combinedClasses}>
        <span className={textSizeClass}>{pick}</span>
      </div>
    </div>
  );
};

export default OverUnder;