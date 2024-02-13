import React from "react"

const OddsToHit = ({odds, oddsValue }) => {
  return (
    <div className="flex flex-col bg-purple-700 items-center space-y-2">
      <div className="px-4 py-1 rounded">
        <span className="text-sm">ODDS TO HIT</span>
      </div>
      <div className="px-4 py-1 rounded">
        <span className="text-sm">{odds}</span>
      </div>
      <div className="px-4 py-1 rounded">
        <span className="text-sm">{oddsValue}</span>
      </div>
    </div>
  )
}

export default OddsToHit;