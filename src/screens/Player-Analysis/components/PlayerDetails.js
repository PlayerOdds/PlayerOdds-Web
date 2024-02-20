import React from 'react';
import StatsTable from './StatsTable';

const over_stats = [
  { key: "L5", value: "60%" },
  { key: "L10", value: "60%" },
  { key: "SZN", value: "50%" },
  { key: "H2H", value: "75%" },
];

const under_stats = [
  { key: "L5", value: "60%" },
  { key: "L10", value: "60%" },
  { key: "SZN", value: "50%" },
  { key: "H2H", value: "25%" },
];

const getColorClassForValue = (value) => {
  const percentage = parseFloat(value);
  if (!isNaN(percentage)) {
    if (percentage > 70) return 'text-green-500';
    if (percentage < 30) return 'text-red-500';
  }
  return 'text-white';
};

const PlayerDetails = ({ player }) => (
  <>
    <div className="flex items-center overflow-x-auto " style={{ gap: '0px' }}>
      <div className="flex flex-nowrap " style={{ gap: '0px' }}>
        {player.stat.map((statItem, idx) => (
          <div key={idx} className="border-pink-500 rounded-xl px-16 py-8 flex flex-col items-center justify-center text-center" style={{ marginRight: '-2px', marginLeft: '-2px' }}>
            <div className="bg-[#1f232a] text-white rounded-xl flex p-4 justify-around items-center w-full mb-2 border-rounded">
              {over_stats.map((stat, index) => (
                <div key={index} className="text-sm flex flex-col items-center p-2">
                  <div>{`${stat.key}:`}</div>
                  <div className={getColorClassForValue(stat.value.replace('%', ''))}>{`${stat.value}`}</div>
                </div>
              ))}
            </div>
            <div className="bg-slate-500 w-36 h-24 rounded flex flex-col items-center justify-center text-sm">
              <div className='text-white mb-2'>{statItem.stat}</div>
              <div className='text-yellow-400 text-xl'>{`${statItem.Stat_Value}`}</div>
              <div className={statItem.Over_Under === 'Over' ? 'text-green-500 text-lg' : 'text-red-600 text-lg'}>
                {statItem.Over_Under}
              </div>
            </div>
            <div className="bg-[#1f232a] rounded-xl flex justify-around items-center w-full mt-2 mb-2">
              {under_stats.map((stat, index) => (
                <div key={index} className="text-sm text-white p-4 flex flex-col items-center mt-2">
                  <div>{`${stat.key}:`}</div>
                  <div className={getColorClassForValue(stat.value.replace('%', ''))}>{`${stat.value}`}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <StatsTable player={player} />
  </>
);

export default PlayerDetails;
