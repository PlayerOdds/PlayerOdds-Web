import React from 'react';
import StatsTable from './StatsTable';

const getColorClassForValue = (value) => {
  const percentage = parseFloat(value);
  if (!isNaN(percentage)) {
    if (percentage > 70) return 'text-green-500';
    if (percentage < 30) return 'text-red-500';
  }
  return 'text-white';
};

const PlayerDetails = ({ player, sport }) => {
  
  const getOverStatsFromStatItem = (statItem) => [
    { key: "L5", value: statItem.last_5 || "N/A" },
    { key: "L10", value: statItem.last_10 || "N/A" },
    { key: "SZN", value: statItem.SZN_avg || "N/A" },
    { key: "H2H", value: statItem.Vs_Opponent || "N/A" },
  ];

  return (
  <>
      <style>
      {`
        /* For Webkit browsers like Chrome and Safari */
        .custom-scrollbar::-webkit-scrollbar {
          width: 12px; /* Width of the scrollbar */
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f1f1e; /* Color of the tracking area */
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #888; /* Color of the scroll thumb */
          border-radius: 6px; /* Rounded corners of the scroll thumb */
          border: 3px solid  #1f1f1e; /* Creates padding around the scroll thumb */
        }

        /* For Firefox */
        .custom-scrollbar {
          scrollbar-width: thin; /* "auto" or "thin" */
          scrollbar-color: #888  #1f1f1e; /* thumb and track color */
        }
      `}
    </style>

    <div className="flex items-center overflow-x-auto custom-scrollbar" style={{ gap: '0px'}}>
        <div className="flex flex-nowrap " style={{ gap: '0px' }}>
          {player.stat.map((statItem, idx) => {
            const overStats = getOverStatsFromStatItem(statItem);
            return (
            <div key={idx} className="border-r-4 border-r-[#1f232a] px-14 py-4 flex flex-col items-center justify-center text-center" 
                style={{ marginRight: '-2px', marginLeft: '-2px' }}>
                <div className="text-white rounded-xl flex p-4 justify-around items-center w-full mb-2 border-rounded">
                  {overStats.map((stat, index) => (
                    <div key={index} className="text-sm flex flex-col items-center p-2">
                      <div>{`${stat.key}:`}</div>
                      <div className={getColorClassForValue(stat.value.replace('%', ''))}>{`${stat.value}`}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#1f232a] w-36 h-24 rounded flex flex-col items-center justify-center text-sm">
                  <div className='text-white mb-2'>{statItem.stat}</div>
                  <div className='text-yellow-400 text-xl'>{`${statItem.Stat_Value}`}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <StatsTable player={player} sport={sport}/>
    </>
  );
};

export default PlayerDetails;