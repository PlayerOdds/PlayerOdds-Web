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
  // Add more games as needed
];

const PlayerAnalysis = () => {
  const [openGameId, setOpenGameId] = useState(null);
  const [openPlayerName, setOpenPlayerName] = useState(null);

  const toggleGame = (gameId) => {
    if (openGameId === gameId) {
      setOpenGameId(null);
      setOpenPlayerName(null); // Reset player selection when toggling games
    } else {
      setOpenGameId(gameId);
    }
  };

  const togglePlayer = (playerName) => {
    if (openPlayerName === playerName) {
      setOpenPlayerName(null);
    } else {
      setOpenPlayerName(playerName);
    }
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
            <ul className="mt-2">
              {game.players.map((player, index) => (
                <li key={index} className="py-1 text-white cursor-pointer" onClick={() => togglePlayer(player.name)}>
                  {player.name}
                  {openPlayerName === player.name && (
                    <ul className="mt-2 pl-4 text-gray-400">
                      {player.previousGames.map((gameData, gameIndex) => (
                        <li key={gameIndex}>{gameData}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default PlayerAnalysis;
