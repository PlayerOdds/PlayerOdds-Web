import React from 'react';
import PlayerDetails from "./PlayerDetails";

const Player = ({ player, togglePlayer, openPlayerName }) => {
  return (
    <div className="mt-2 border" style={{background: '#1f1f1e'}}>
      <div className='cursor-pointer p-4 text-white flex items-center border' style={{background: 'linear-gradient(to right, red 0%, red 5%, #1f1f1e 30%, #1f1f1e 100%)'}} onClick={() => togglePlayer(player.name)}>
        
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
