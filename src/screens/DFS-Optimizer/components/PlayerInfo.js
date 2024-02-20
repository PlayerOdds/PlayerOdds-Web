import React from "react"
import JoshG from './JoshG.webp'

const PlayerInfo = ({name, teamInfo, matchup }) => {
  return (
  <div className="flex items-center space-x-6">
    <img src={JoshG} alt={name} className="w-16 h-16" />
      <div>
        <p className='text-l font-bold mb-1'>{name}</p>
        <p className="text-sm mb-1 sm:text-xs ">{teamInfo}</p>
        <p className="text-sm">{matchup}</p>
      </div>
  </div>
  )
}

export default PlayerInfo;