import React from 'react';

const sportsMapping = {
  NFL: [
    { key: 'Games_Played', label: 'GP' },
    { key: 'Rush_Att', label: 'Rush Att' },
    { key: 'Rush_Yards', label: 'Rush Yds' },
    { key: 'Rush_TD', label: 'Rush TDs' },
    { key: 'Rec_Tgt', label: 'Rec TGT' },
    { key: 'Receptions', label: 'Rec' },
    { key: 'Rec_Yards', label: 'Rec Yds' },
    { key: 'Rec_TD', label: 'Rec TD' },
  ],
  NHL: [
    { key: 'Games_Played', label: 'GP' },
    { key: 'TOI', label: 'TOI' },
    { key: 'PTS', label: 'PTS' },
    { key: 'G', label: 'G' },
    { key: 'AST', label: 'AST' },
    { key: 'SOG', label: 'SOG' },
    { key: 'FW', label: 'FW' },
    { key: 'HT', label: 'HT' },
    { key: 'BS', label: 'BS' },
  ],
  NBA: [
    { key: 'Games_Played', label: 'GP' },
    { key: 'Minutes', label: 'MIN' },
    { key: 'Points', label: 'PTS' },
    { key: 'Rebounds', label: 'REB' },
    { key: 'Assists', label: 'AST' },
    { key: 'PRA', label: 'PRA' },
    { key: 'PR', label: 'PR' },
    { key: 'PA', label: 'PA' },
    { key: 'RA', label: 'RA' },
    { key: 'FS', label: 'FS' },
    { key: 'Threes', label: '3PT' },
    { key: 'BLK', label: 'BLK' },
    { key: 'Steals', label: 'STL' },
    { key: 'FTM', label: 'FTM' },
    { key: 'TO', label: 'TO' },
  ]
};

const StatsTable = ({ player, sport }) => {
  const currentSportMapping = sportsMapping[sport] || [];

  return (
    <>
      <style>
        {`
          .stats-table-wrapper {
            overflow-x: auto;
          }
          .no-vertical-borders th, .no-vertical-borders td {
            border-left: none !important;
            border-right: none !important;
            border-bottom: 1px solid white;
          }
          @media (max-width: 768px) {
            .stats-table {
              min-width: 600px;
            }
            .stats-table th, .stats-table td {
              font-size: 12px; /* Smaller font size for table headers and cells */
              padding: 8px 4px; /* Adjust padding to match the smaller font size */
            }
          }
        `}
      </style>
      <div className="stats-table-wrapper border-t bg-[#1f232a]">
        <table className="stats-table min-w-full table-fixed text-center no-vertical-borders">
          <thead>
            <tr>
              <th className="px-4 py-2 text-white"></th>
              {currentSportMapping.map(({ label }) => (
                <th key={label} className="px-4 py-2 text-white">{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {['season', 'last_10', 'last_5', 'previous', 'vs_opponent'].map((category) => (
              <tr key={category}>
                <td className="px-4 py-2 text-white">{category.toUpperCase()}</td>
                {currentSportMapping.map(({ key }, index) => (
                  <td key={index} className="px-4 py-2 text-white">{player[category][0][key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default StatsTable;
