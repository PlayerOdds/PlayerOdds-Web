import React from 'react';
import PlayerDetails from "./PlayerDetails";

const Player = ({ player, togglePlayer, openPlayerName }) => {
  return (
    <div className="mt-2 border bg-emerald-950" style={{background: ' #1f1f1e'}}>
      <div className='cursor-pointer p-4 text-white flex items-center border' style={{background: 'linear-gradient(to right, red 0%, red 5%, #1f1f1e 30%, #1f1f1e 100%)'}} onClick={() => togglePlayer(player.name)}>
        {player.image && <img src={player.image} alt={player.name} style={{ maxWidth: '75px', maxHeight: '75px', marginRight: '10px' }} />} 
        <div>{player.name}</div>
      </div>
      {openPlayerName === player.name && <PlayerDetails player={player} />}
    </div>
  );
};

export default Player;
