import React from "react"
import JoshG from './JoshG.webp'

const PlayerInfo = ({name, teamInfo, matchup }) => {
  return (
  <div className="flex items-center space-x-6">
    <img src={JoshG} alt={name} className="w-20 h-20" />
      <div>
        <p className='text-lg font-bold mb-4'>{name}</p>
        <p className="text-sm">{teamInfo}</p>
        <p className="text-sm">{matchup}</p>
      </div>
  </div>
  )
}

export default PlayerInfo;