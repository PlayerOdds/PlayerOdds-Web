import React, { useState } from "react";
import { games } from './components/gamesData';
import Player from "./components/Player";
import { Niners, Chiefs, Purdy, Mahomes } from "../../images/ImageRepository";

const PlayerAnalysis = () => {
  const [openGameId, setOpenGameId] = useState(null);
  const [openPlayerName, setOpenPlayerName] = useState(null);
  const [activeLeague, setActiveLeague] = useState('NFL'); 

  const toggleGame = (gameId) => {
    setOpenGameId(openGameId === gameId ? null : gameId);
  };

  const togglePlayer = (playerName) => {
    setOpenPlayerName(openPlayerName === playerName ? null : playerName);
  };

  const filteredGames = games.filter(game => game.league === activeLeague);

  return (
    <div className="space-y-4 mx-auto" style={{ maxWidth: '1700px', width: '100%', padding: '20px', boxSizing: 'border-box' }}>
      <div className="buttons flex justify-start gap-4 mb-6">
        <button onClick={() => setActiveLeague('NFL')} className="py-2 px-8 border rounded hover:bg-gray-200 transition"  style={{ backgroundColor: '#03FD91' }}>NFL</button>
        <button onClick={() => setActiveLeague('NHL')} className="py-2 px-8 border rounded hover:bg-gray-200 transition"  style={{ backgroundColor: '#03FD91' }}>NHL</button>
        <button onClick={() => setActiveLeague('NBA')} className="py-2 px-8 border bg-gray-200 rounded hover:bg-gray-200 transition"  style={{ backgroundColor: '#03FD91' }}>NBA</button>
      </div>
      {filteredGames.map((gameEntry) => (
        gameEntry.todays_games.map((game) => (
          <div key={game.id} className="p-4 border bg-[#181a24ab] rounded-lg shadow-lg ">
            <div className="flex items-center gap-2">
              <img src={game.away} style={{ maxHeight: '50px', maxWidth: '50px' }} alt="Niners"/>
              <img src={game.home} style={{ maxHeight: '50px', maxWidth: '50px' }} alt="Chiefs"/>
              <div className="font-bold text-lg cursor-pointer text-white" onClick={() => toggleGame(game.id)}>
                {game.title} <span className="text-sm font-normal">{game.date}</span>
              </div>
            </div>
            {openGameId === game.id && (
              game.players.map((player, index) => (
                <Player 
                  key={index} 
                  player={player}
                  activeLeague={activeLeague} 
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
