import React from 'react';
import PlayerDetails from "./PlayerDetails";

const Player = ({ player, togglePlayer, openPlayerName }) => {
  return (
    <div className="mt-2 border bg-emerald-950">
      <div className='cursor-pointer p-4 text-white flex items-center border' onClick={() => togglePlayer(player.name)}>
        {player.image && <img src={player.image} alt={player.name} style={{ maxWidth: '75px', maxHeight: '75px', marginRight: '10px' }} />} 
        <div>{player.name}</div>
      </div>
      {openPlayerName === player.name && <PlayerDetails player={player} />}
    </div>
  );
};

export default Player;
