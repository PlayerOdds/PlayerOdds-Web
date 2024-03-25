import React, { useState } from "react";
import { games } from './components/gamesData';
import Player from "./components/Player";

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

  const defaultColors = {
    primary: '#D3D3D3',
    secondary: '#A9A9A9' 
  };

  return (
    <div className="space-y-4 mx-auto" style={{ maxWidth: '1700px', width: '100%', padding: '20px', boxSizing: 'border-box' }}>
      <div className="buttons flex justify-start gap-4 mb-6">
        <button onClick={() => setActiveLeague('NFL')} className="py-2 px-8 border rounded hover:bg-gray-200 transition" style={{ backgroundColor: '#03FD91' }}>NFL</button>
        <button onClick={() => setActiveLeague('NHL')} className="py-2 px-8 border rounded hover:bg-gray-200 transition" style={{ backgroundColor: '#03FD91' }}>NHL</button>
        <button onClick={() => setActiveLeague('NBA')} className="py-2 px-8 border rounded hover:bg-gray-200 transition" style={{ backgroundColor: '#03FD91' }}>NBA</button>
      </div>
      {filteredGames.map((gameEntry) => (
        gameEntry.todays_games.map((game) => (
          <div key={game.id} className="p-1 border bg-[#181a24ab] rounded-lg shadow-lg">
            <div className="flex items-center gap-2 flex-wrap"> {/* Adjusted for wrapping */}
              <div style={{
                    background: `linear-gradient(${game.awayteamColors?.primary || defaultColors.primary} 2%, ${game.awayteamColors?.secondary || defaultColors.secondary} 30%)`,
                    padding: '10px', 
                    borderRadius: '10px',
                    display: 'inline-block'
                  }}>
                    <img src={game.away} style={{ maxHeight: '50px', maxWidth: '50px' }} alt="Away Team"/>
              </div>
              <div className="text-white text-sm px-1 py-.5 rounded-full" style={{
                    background: '#000000',
                    margin: '0 -18px',
                    zIndex: 1,
                    position: 'relative'
                  }}>vs</div>
              <div style={{
                    background: `linear-gradient(${game.hometeamColors?.primary || defaultColors.primary} 2%, ${game.hometeamColors?.secondary || defaultColors.secondary} 30%)`,
                    padding: '10px', 
                    borderRadius: '10px',
                    display: 'inline-block' 
                  }}>
                    <img src={game.home} style={{ maxHeight: '50px', maxWidth: '50px' }} alt="Home Team"/>
              </div>
              <div className="flex-1 min-h-[60px] flex items-center gap-2" style={{flexWrap: 'wrap'}}> 
                <div className="font-bold text-lg cursor-pointer text-white" onClick={() => toggleGame(game.id)}>
                  {game.title}
                </div>
                <div className="text-sm text-white font-normal">
                  {game.date}
                </div>
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
