import React from "react";
import {playersData} from './newdata'


const Platform = ({ platforms }) => {
  return (
    <div className="flex overflow-x-auto gap-3 mt-2">
      {platforms.map((platform, index) => (
        <div key={index} className="min-w-max flex-col bg-gray-700 px-2 py-1 rounded flex justify-between items-center">
          <img src={platform.platform} alt="platform logo" className="h-7 w-auto" /> {/* Adjust the height and width as needed */}
          <span className="text-s">{platform.line}</span>
          <span className="text-s">{platform.odds}</span>
        </div>
      ))}
    </div>
  );
};

export default Platform;
