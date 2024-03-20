import React from 'react';

// Define leagueHeaders outside the component because it's a static object
const leagueHeaders = {
  NFL: ["Games Played", "Rush Att", "Rush Yds", "Rush TDs", "Rec TGT", "Rec", "Rec Yds", "Rec TD"],
  NBA: ["Games Played", "Points", "Assists", "Rebounds", "Steals", "Blocks"],
  NHL: ["Games Played", "Goals", "Assists", "Points", "Penalty Minutes", "Shots"]
};

const StatsTable = ({ player, activeLeague }) => {
  // Directly access leagueHeaders here, no need for a separate declaration within the function
  const headers = leagueHeaders[activeLeague] || [];

  return (
    <>
      <style>
        {`
          .no-vertical-borders th, .no-vertical-borders td {
            border-left: none !important; /* Removes left borders */
            border-right: none !important; /* Removes right borders */
          }

          /* Optionally, if you want to keep the horizontal lines */
          .no-vertical-borders th, .no-vertical-borders td {
            border-bottom: 1px solid white; /* Keeps bottom border */
          }
        `}
      </style>
      <table className="min-w-full table-fixed text-center no-vertical-borders">
        <thead>
          <tr>
            <th className="px-4 py-2 text-white"></th>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-2 text-white">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {['season', 'last_10', 'last_5', 'previous', 'vs_opponent'].map((category) => (
            <tr key={category}>
              <td className="px-4 py-2 text-white">{category.toUpperCase()}</td>
              {player[category].map((stat, index) => (
                <React.Fragment key={index}>
                  <td className="px-4 py-2 text-white">{stat.Games_Played}</td>
                  <td className="px-4 py-2 text-white">{stat.Rush_Att}</td>
                  <td className="px-4 py-2 text-white">{stat.Rush_Yards}</td>
                  <td className="px-4 py-2 text-white">{stat.Rush_TD}</td>
                  <td className="px-4 py-2 text-white">{stat.Rec_Tgt}</td>
                  <td className="px-4 py-2 text-white">{stat.Receptions}</td>
                  <td className="px-4 py-2 text-white">{stat.Rec_Yards}</td>
                  <td className="px-4 py-2 text-white">{stat.Rec_TD}</td>
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default StatsTable;