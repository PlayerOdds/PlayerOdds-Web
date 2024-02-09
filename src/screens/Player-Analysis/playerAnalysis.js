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
                    <div className="mt-2 p-4">
                      <div className="border-4 border-pink-500 rounded-xl overflow-hidden">
                        <div className="flex justify-between items-center bg-black w-full p-2">
                          {Array.from({ length: 6 }).map((_, idx) => (
                            <div key={idx} className="bg-gray-500 w-24 h-24 rounded flex items-center justify-center text-sm">Passing Yards</div>
                          ))}
                        </div>
                      </div>
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
