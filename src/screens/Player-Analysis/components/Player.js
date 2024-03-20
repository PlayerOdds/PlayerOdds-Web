import React from 'react';
import PlayerDetails from "./PlayerDetails";

const Player = ({ player, togglePlayer, openPlayerName }) => {
  const backgroundStyle = player.teamColors ? 
    `linear-gradient(to right, ${player.teamColors.primary} 0%, ${player.teamColors.primary} 5%, ${player.teamColors.secondary} 30%, ${player.teamColors.secondary} 100%)` : 
    'linear-gradient(to right, #930d11 0%, #930d11 5%, #181a24ab 30%, #181a24ab 100%)'; 

  return (
    <div className="mt-2 border" style={{background: '#181a24ab'}}>
     <div 
        className='cursor-pointer p-4 text-white flex items-center border' 
        style={{background: backgroundStyle}} 
        onClick={() => togglePlayer(player.name)}
      >        
        <div style={{ position: 'relative' }}>
          {player.teamLogo && (
            <img
              src={player.teamLogo}
              alt="Team Logo"
              style={{
                maxWidth: '50px', 
                maxHeight: '45px',
                marginLeft: '-5px',
                marginBottom:'20px',
                margintTop:'-10px',
                marginRight: '5px',
                position: 'absolute',
                zIndex: 1 
              }}
            />
          )}
          {player.image && (
            <img
              src={player.image}
              alt={player.name}
              style={{
                maxWidth: '75px',
                maxHeight: '75px',
                marginRight: '10px',
                position: 'relative',
                zIndex: 2
              }}
            />
          )}
        </div>

        <div>{player.name}</div>
      </div>
      {openPlayerName === player.name && <PlayerDetails player={player} />}
    </div>
  );
};

export default Player;
