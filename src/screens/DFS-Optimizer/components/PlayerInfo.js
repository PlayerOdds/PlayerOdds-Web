import React from "react"
import {playersData} from './newdata'

// console.log(playersData.teamInfo)

const PlayerInfo = ({name, teamInfo,matchup }) => {
  return (
  <div className="flex items-center space-x-2">
    <img alt={name} className="w-12 h-12 rounded-full" />
      <div>
        <h2 className="font-bold"></h2>
        <p className="text-sm">{teamInfo}</p>
        <p className="text-sm">{matchup}</p>
      </div>
  </div>
  )
}

export default PlayerInfo;