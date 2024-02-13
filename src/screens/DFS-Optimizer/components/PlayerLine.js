import React from 'react';
import newdata from './newdata'

console.log(newdata)
const PlayerLine = (player) => {
    return (
        <div className="flex flex-col bg-purple-700 items-center space-y-2 rounded-lg p-2">
            <div className="px-2 py-1 rounded">
              <span className="text-sm">LINE</span>
            </div>
            <div className="px-2 py-1 rounded">
              <span className="text-sm">{player.line}</span>
            </div>
            <div className="px-2 py-1 rounded">
              <span className="text-sm">{player.betType}</span>
            </div>
        </div>
    );
};

export default PlayerLine;
