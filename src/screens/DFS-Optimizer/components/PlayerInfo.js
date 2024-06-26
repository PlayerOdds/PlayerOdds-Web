import React from "react"

const PlayerInfo = ({name, teamInfo, matchupHome, matchupAway, playerImage, matchupDate }) => {
  return (
  <div className="flex items-center space-x-6">
    <img src={playerImage} alt={playerImage} className="w-16 h-16" />
      <div>
        <p className='text-l font-bold mb-1'>{name}</p>
        <p className="text-sm mb-1 sm:text-xs ">{teamInfo}</p>
        <p className="text-xs">{matchupHome} @ {matchupAway} -</p>
        <p className="text-xs">{matchupDate}</p>

      </div>
  </div>
  )
}

export default PlayerInfo;