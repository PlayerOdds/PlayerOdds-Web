import React, { useState } from "react";

const games = [
  {
    id: 'game1',
    title: 'San Francisco 49ers at Kansas City Chiefs',
    date: '2/11 - 6:30 PM EST',
    players: [
      {
        name: 'Brock Purdy - SF',
        previousGames: ['300 yards, 3 TDs', '250 yards, 2 TDs'],
      },
      {
        name: 'Patrick Mahomes - KC',
        previousGames: ['350 yards, 4 TDs', '280 yards, 2 TDs'],
      },
    ],
  },
];

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
              <div key={index} className="py-1 text-white cursor-pointer" onClick={() => togglePlayer(player.name)}>
                {player.name}
                {openPlayerName === player.name && (
                  <>
                    <div className="bg-black flex flex-wrap items-center" style={{ gap: '0px' }}>
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
                          <div className="bg-gray-500 w-32 h-24 rounded flex items-center justify-center text-sm">Passing Yards</div>
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
                      {player.previousGames.map((gameData, gameIndex) => (
                        <li key={gameIndex}>{gameData}</li>
                      ))}
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