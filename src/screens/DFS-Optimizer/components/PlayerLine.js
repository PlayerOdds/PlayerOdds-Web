import React from 'react';
import {playersData} from './newdata'

const PlayerLine = ({line, betType}) => {
    return (
        <div className="flex flex-col justify-center items-center  space-y-4 rounded-lg p-2 w-24">
            <div className="px-1 py-0.5 "> 
              <span className="text-s text-white">LINE</span> 
            </div>
            <div className="px-1 py-0.5 "> 
              <span className="text-xl text-white">{line}</span> 
            </div>
            <div className="px-1 py-0.5 "> 
              <span className="text-s text-white">{betType}</span> 
            </div>
        </div>
    );
};

export default PlayerLine;
