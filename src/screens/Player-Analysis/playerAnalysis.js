import React, { useState } from "react";
import {games} from './components/gamesData'
import PlayerDetails from "./components/PlayerDetails"; // Adjust the path as necessary

const PlayerAnalysis = () => {
  const [openGameId, setOpenGameId] = useState(null);
  const [openPlayerName, setOpenPlayerName] = useState(null);

  const toggleGame = (gameId) => {
    setOpenGameId(openGameId === gameId ? null : gameId);
  };

  const togglePlayer = (playerName) => {
    setOpenPlayerName(openPlayerName === playerName ? null : playerName);
  };

  return (
    <div className="space-y-4">
      {games.map((gameEntry) => (
        gameEntry.todays_games.map((game) => (
          <div key={game.id} className="p-4 border rounded-lg shadow-lg">
            <div className="font-bold text-lg cursor-pointer text-white" onClick={() => toggleGame(game.id)}>
              {game.title} <span className="text-sm font-normal">{game.date}</span>
            </div>
            {openGameId === game.id && (
              game.players.map((player, index) => (
                <div key={index} className="cursor-pointer mt-2" onClick={() => togglePlayer(player.name)}>
                  {openPlayerName === player.name ? <PlayerDetails player={player} /> : <div className="p-4 text-white">{player.name}</div>}
                </div>
              ))
            )}
          </div>
        ))
      ))}
    </div>
  );
};

export default PlayerAnalysis;
