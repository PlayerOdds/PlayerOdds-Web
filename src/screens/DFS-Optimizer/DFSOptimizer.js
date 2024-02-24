import React, { useState } from 'react';
import {playersData} from './components/newdata'
import PlayerLine from './components/PlayerLine';
import PlayerInfo from './components/PlayerInfo';
import OverUnder from './components/OverUnder'
import OddsToHit from './components/OddsToHit';
import Platform from './components/platform';
import EV from './components/EV';
import PrizePicksBtn from './components/PrizePickBtn'

export default function BasicTable() {

 
 return (
  <div className='flex flex-col items-center w-full'>
    
      <div className="w-full max-w-[1500px]  px-12 ">

        <div className="w-full flex justify-star pb-4">
          <PrizePicksBtn />
        </div>
  <div className='flex justify-center content-center w-full'>
    <div className="p-0.5 flex-col">
      {playersData.map((player, idx) => (
        <div key={idx} className="bg-[#181a24ab] p-3 text-white max-w-[1500px] mb-1.5 mx-auto rounded-2xl"> {/* Ensure mx-auto for centering */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1 items-center">

        {/* PlayerInfo component */}
        <div className="flex flex-col mb-2 items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">

          <PlayerInfo playerImage={player.playerImage} name={player.name} teamInfo={player.teamInfo} matchup={player.matchup}/>
        </div>

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

</div>
</div>
);
}