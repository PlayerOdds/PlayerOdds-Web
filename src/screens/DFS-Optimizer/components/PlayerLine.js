import React from 'react';
import {playersData} from './newdata'

console.log(playersData)
console.log(playersData.line)

const PlayerLine = ({line, betType}) => {
    return (
        <div className="flex flex-col bg-purple-700 items-center space-y-2 rounded-lg p-2">
            <div className="px-2 py-1 rounded">
              <span className="text-sm">LINE</span>
            </div>
            <div className="px-2 py-1 rounded">
              <span className="text-sm text-white">{line}</span>
            </div>
            <div className="px-2 py-1 rounded">
              <span className="text-sm">{betType}</span>
            </div>
        </div>
    );
};

export default PlayerLine;
