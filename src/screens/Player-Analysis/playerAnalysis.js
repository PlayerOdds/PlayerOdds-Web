import React, { useState } from "react";
import { games } from './components/gamesData';
import Player from "./components/Player";
import { Niners, Chiefs, Purdy, Mahomes } from "../../images/ImageRepository";

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
            <div className="flex items-center gap-2">
              <img src={Niners} style={{ maxHeight: '50px', maxWidth: '50px' }} alt="Niners"/>
              <img src={Chiefs} style={{ maxHeight: '50px', maxWidth: '50px' }} alt="Chiefs"/>
              <div className="font-bold text-lg cursor-pointer text-white" onClick={() => toggleGame(game.id)}>
                {game.title} <span className="text-sm font-normal">{game.date}</span>
              </div>
            </div>
            {openGameId === game.id && (
              game.players.map((player, index) => (
                <Player 
                  key={index} 
                  player={player} 
                  togglePlayer={togglePlayer} 
                  openPlayerName={openPlayerName} 
                />
              ))
            )}
          </div>
        ))
      ))}
    </div>
  );
};

export default PlayerAnalysis;
