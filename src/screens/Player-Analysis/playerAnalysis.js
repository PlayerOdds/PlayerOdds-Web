import React, { useState } from "react";

//TODO - Add Slide animation of data for onclick of the player
//TODO - Add Arrow bar signaling if the state is open or close (maybe add an animation of the arrow flipping up and down for each click
//TODO - Add more stlying to the player data
//TODO - Seperate into seperate components for clean file strucutre

const games = [
  {
    id: 'game1',
    title: 'San Francisco 49ers at Kansas City Chiefs',
    date: '2/11 - 6:30 PM EST',
    players: [
      {
        name: 'Brock Purdy - SF',
        previousGames: ['300 yards, 3 TDs', '250 yards, 2 TDs'],
        season:[{
          Games_Played:['14'],
          Rush_Att:['0.1'],
          Rush_Yards:['-0.1'],
          Rush_TD:['0'],
          Rec_Tgt:['2.9'],
          Receptions:['1.8'],
          Rec_Yards:['23.9'],
          Rec_TD:['0.1'],
        }],
        last_10:[{
          Games_Played:['10'],
          Rush_Att:['0.1'],
          Rush_Yards:['-0.1'],
          Rush_TD:['0'],
          Rec_Tgt:['3.3'],
          Receptions:['2'],
          Rec_Yards:['23.3'],
          Rec_TD:['0.1'],
        }],
        last_5:[{
          Games_Played:['5'],
          Rush_Att:['0.2'],
          Rush_Yards:['-0.2'],
          Rush_TD:['0'],
          Rec_Tgt:['3'],
          Receptions:['2.2'],
          Rec_Yards:['27.6'],
          Rec_TD:['0.2'],
        }],
        previous:[{
          Games_Played:['1'],
          Rush_Att:['0'],
          Rush_Yards:['0'],
          Rush_TD:['0'],
          Rec_Tgt:['2'],
          Receptions:['1'],
          Rec_Yards:['8'],
          Rec_TD:['0'],
        }],
        vs_opponent:[{
          Games_Played:['-'],
          Rush_Att:['-'],
          Rush_Yards:['-'],
          Rush_TD:['-'],
          Rec_Tgt:['-'],
          Receptions:['-'],
          Rec_Yards:['-'],
          Rec_TD:['-'],
        }],
      },
      {
        name: 'Patrick Mahomes - KC',
        previousGames: ['350 yards, 4 TDs', '280 yards, 2 TDs'],
        season:[{
          Games_Played:['14'],
          Rush_Att:['0.1'],
          Rush_Yards:['-0.1'],
          Rush_TD:['0'],
          Rec_Tgt:['2.9'],
          Receptions:['1.8'],
          Rec_Yards:['23.9'],
          Rec_TD:['0.1'],
        }],
        last_10:[{
          Games_Played:['10'],
          Rush_Att:['0.1'],
          Rush_Yards:['-0.1'],
          Rush_TD:['0'],
          Rec_Tgt:['3.3'],
          Receptions:['2'],
          Rec_Yards:['23.3'],
          Rec_TD:['0.1'],
        }],
        last_5:[{
          Games_Played:['5'],
          Rush_Att:['0.2'],
          Rush_Yards:['-0.2'],
          Rush_TD:['0'],
          Rec_Tgt:['3'],
          Receptions:['2.2'],
          Rec_Yards:['27.6'],
          Rec_TD:['0.2'],
        }],
        previous:[{
          Games_Played:['1'],
          Rush_Att:['0'],
          Rush_Yards:['0'],
          Rush_TD:['0'],
          Rec_Tgt:['2'],
          Receptions:['1'],
          Rec_Yards:['8'],
          Rec_TD:['0'],
        }],
        vs_opponent:[{
          Games_Played:['-'],
          Rush_Att:['-'],
          Rush_Yards:['-'],
          Rush_TD:['-'],
          Rec_Tgt:['-'],
          Receptions:['-'],
          Rec_Yards:['-'],
          Rec_TD:['-'],
        }],
      },
    ],
  },
];

const renderStatsTable = (player) => (
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
          {player[category].map((stat) => (
            <>
              <td className="border px-4 py-2 text-white">{stat.Games_Played}</td>
              <td className="border px-4 py-2 text-white">{stat.Rush_Att}</td>
              <td className="border px-4 py-2 text-white">{stat.Rush_Yards}</td>
              <td className="border px-4 py-2 text-white">{stat.Rush_TD}</td>
              <td className="border px-4 py-2 text-white">{stat.Rec_Tgt}</td>
              <td className="border px-4 py-2 text-white">{stat.Receptions}</td>
              <td className="border px-4 py-2 text-white">{stat.Rec_Yards}</td>
              <td className="border px-4 py-2 text-white">{stat.Rec_TD}</td>
            </>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

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

const PlayerAnalysis = () => {
  const [openGameId, setOpenGameId] = useState(null);
  const [openPlayerName, setOpenPlayerName] = useState(null);

  const toggleGame = (gameId) => {
    setOpenGameId(openGameId === gameId ? null : gameId);
    setOpenPlayerName(null);
  };

  const togglePlayer = (playerName) => {
    setOpenPlayerName(openPlayerName === playerName ? null : playerName);
  };

  return (
    <div className="space-y-4">
      {games.map((game) => (
        <div key={game.id} className="p-4 border rounded-lg shadow-lg">
          <div
            className="font-bold text-lg cursor-pointer text-white"
            onClick={() => toggleGame(game.id)}
          >
            {game.title} <span className="text-sm font-normal">{game.date}</span>
          </div>
          {openGameId === game.id && (
            game.players.map((player, index) => (
              <div key={index} className="py-4 text-white cursor-pointer bg-slate-800 mt-2 p-8 " onClick={() => togglePlayer(player.name)}>
                {player.name}
                {openPlayerName === player.name && (
                  <>
                    <div className="bg-transparent flex flex-wrap items-center" style={{ gap: '0px' }}>
                      {Array.from({ length: 6 }).map((_, idx) => (
                        <div key={idx} className="border-pink-500 rounded-xl px-24 py-8 flex flex-col items-center justify-center text-center" style={{ marginRight: '-2px', marginLeft: '-2px' }}>
                          <div className="flex flex-wrap justify-around items-center w-full mb-2">
                            {over_stats.map((stat, index) => (
                              <div key={index} className="text-sm flex flex-col items-center p-2">
                                <div>{`${stat.key}:`}</div>
                                <div>{`${stat.value}`}</div>
                              </div>
                            ))}
                          </div>
                          <div className="bg-slate-400	 w-32 h-24 rounded flex items-center justify-center text-sm">Passing Yards</div>
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
                    <ul className="text-gray-400 mt-2">
                    {renderStatsTable(player)}
                    </ul>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
};

export default PlayerAnalysis;