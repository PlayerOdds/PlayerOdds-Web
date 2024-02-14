import React from 'react';
import {playersData} from './newdata'

const PlayerLine = ({line, betType}) => {
    return (
        // Use responsive widths and padding for better scaling across devices
        <div className="flex flex-col justify-center items-center space-y-1 rounded-lg p-1 w-32 sm:w-28 md:w-32 lg:w-10">
            <div className="">
      
              <span className="text-xs text-[#aea6a6] sm:text-s md:text-sm">LINE</span> 
            </div>
            
            <div className="">
   
              <span className="text-s font-bold text-[#f2914b] sm:text-sm md:text-lg">{line}</span> 
            </div>

            <div className="">
        
              <span className="text-xs font-bold text-white sm:text-s md:text-sm">{betType}</span> 
            </div>
        </div>
    );
};

export default PlayerLine;