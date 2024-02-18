import React from 'react';

const StatsTable = ({ player }) => (
  <table className="min-w-full table-fixed text-center">
    <thead>
      <tr>
        <th className="px-4 py-2 text-white"></th>
        <th className="px-4 py-2 text-white">Games Played</th>
        <th className="px-4 py-2 text-white">Rush Att</th>
        <th className="px-4 py-2 text-white">Rush Yds</th>
        <th className="px-4 py-2 text-white">Rush TDs</th>
        <th className="px-4 py-2 text-white">Rec TGT</th>
        <th className="px-4 py-2 text-white">Rec</th>
        <th className="px-4 py-2 text-white">Rec Yds</th>
        <th className="px-4 py-2 text-white">Rec TD</th>
      </tr>
    </thead>
    <tbody>
      {['season', 'last_10', 'last_5', 'previous', 'vs_opponent'].map((category) => (
        <tr key={category}>
          <td className="border px-4 py-2 text-white">{category.toUpperCase()}</td>
          {player[category].map((stat, index) => (
            <React.Fragment key={index}>
              <td className="border px-4 py-2 text-white">{stat.Games_Played}</td>
              <td className="border px-4 py-2 text-white">{stat.Rush_Att}</td>
              <td className="border px-4 py-2 text-white">{stat.Rush_Yards}</td>
              <td className="border px-4 py-2 text-white">{stat.Rush_TD}</td>
              <td className="border px-4 py-2 text-white">{stat.Rec_Tgt}</td>
              <td className="border px-4 py-2 text-white">{stat.Receptions}</td>
              <td className="border px-4 py-2 text-white">{stat.Rec_Yards}</td>
              <td className="border px-4 py-2 text-white">{stat.Rec_TD}</td>
            </React.Fragment>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default StatsTable;
