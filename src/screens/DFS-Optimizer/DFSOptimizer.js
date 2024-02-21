import React, { useState } from 'react';
import {playersData} from './components/newdata'
import PlayerLine from './components/PlayerLine';
import PlayerInfo from './components/PlayerInfo';
import OverUnder from './components/OverUnder'
import OddsToHit from './components/OddsToHit';
import Platform from './components/platform';
import EV from './components/EV';
import BestPlatform from './components/BestPlatform';

export default function BasicTable() {

 
 return (

   
  <div className='flex justify-center content-center'>
  <div className=" p-0.5 flex-col">
  {playersData.map((player, idx) => (
    <div key={idx} className=" bg-[#181a24ab] p-3 text-white max-w-[1500px] mb-1.5 rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1 items-center">

        {/* PlayerInfo component */}
        <div className="flex flex-col mb-2 items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">

          <PlayerInfo playerImage={player.playerImage} name={player.name} teamInfo={player.teamInfo} matchup={player.matchup}/>
        </div>

        {/* Combined container for PlayerLine, OverUnder, and OddsToHit */}
        {/* Centered vertically and horizontally on small screens, spaced evenly on large screens */}
        <div className="text-center flex flex-row items-center justify-between sm:space-x-1 p-1 col-span-1 md:col-span-3 lg:col-span-2">
          <PlayerLine line={player.line} betType={player.betType}/>
          <OverUnder pick={player.pick}/>
          <OddsToHit odds={player.odds} oddsValue={player.oddsValue}/>
          <EV ev={player.ev}/>
        </div>
      
        {/* Platform component */}
        <div className="flex items-center justify-center col-span-1 md:col-span-2 ">
          <Platform platforms={player.platforms} />
        </div>
      </div>

    </div>
  ))}
</div>
</div>
);
}