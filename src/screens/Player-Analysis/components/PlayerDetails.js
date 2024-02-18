import React from 'react';
import StatsTable from './StatsTable';

const over_stats = [
  { key: "L5", value: "60%" },
  { key: "L10", value: "60%" },
  { key: "SZN", value: "50%" },
  { key: "H2H", value: "-" },
];

const under_stats = [
  { key: "L5", value: "60%" },
  { key: "L10", value: "60%" },
  { key: "SZN", value: "50%" },
  { key: "H2H", value: "-" },
];

const PlayerDetails = ({ player }) => (
  <>
    <div className="bg-[#1f232a] flex flex-wrap items-center" style={{ gap: '0px' }}>
      {player.stat.map((statItem, idx) => (
        <div key={idx} className="border-pink-500 rounded-xl px-24 py-8 flex flex-col items-center justify-center text-center" style={{ marginRight: '-2px', marginLeft: '-2px' }}>
          <div className="flex flex-wrap justify-around items-center w-full mb-2">
            {over_stats.map((stat, index) => (
              <div key={index} className="text-sm flex flex-col items-center p-2">
                <div>{`${stat.key}:`}</div>
                <div>{`${stat.value}`}</div>
              </div>
            ))}
          </div>
          <div className="bg-slate-400 w-32 h-24 rounded flex items-center justify-center text-sm">
            {`${statItem.stat}: ${statItem.Stat_Value} (${statItem.Over_Under})`}
          </div>
          <div className="flex flex-wrap justify-around items-center w-full mb-2">
            {under_stats.map((stat, index) => (
              <div key={index} className="text-sm flex flex-col items-center p-2 mt-2">
                <div>{`${stat.key}:`}</div>
                <div>{`${stat.value}`}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <StatsTable player={player} />
  </>
);

export default PlayerDetails;
