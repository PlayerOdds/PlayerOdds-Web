import React, { useMemo } from 'react';
import { playersData } from './components/newdata';
import PlayerLine from './components/PlayerLine';
import PlayerInfo from './components/PlayerInfo';
import OverUnder from './components/OverUnder';
import OddsToHit from './components/OddsToHit';
import Platform from './components/platform';
import EV from './components/EV';
import PrizePicksBtn from './components/PrizePickBtn';
import PlayerStats from './components/PlayerStats';

export default function BasicTable() {

  //This function is not working at the moment - NEED FIX
  const sortedPlayers = useMemo(() => {
    return [...playersData].sort((a, b) => {
      const oddsA = parseFloat(a.oddsValue.replace('%', ''));
      const oddsB = parseFloat(b.oddsValue.replace('%', ''));
      return oddsB - oddsA; 
    });
  }, [playersData]);

  const shouldRenderPlayerStats = (player) => {
    return player.last_5 || player.last_10 || player.SZN_avg || player.Vs_Opponent;
  };

  return (
    <div className='flex flex-col items-center w-full'>
      <div className="w-full max-w-[1500px] px-12">
        <div className="w-full flex justify-start pb-4">
          <PrizePicksBtn />
        </div>
        <div className='flex flex-col justify-center content-center w-full'>
          {sortedPlayers.map((player, idx) => (
            <div key={idx} className="mb-1.5 mx-auto rounded-2xl overflow-hidden">
              <div className="bg-[#181a24ab] p-3 text-white max-w-[1300px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1 items-center">
                  <div className="flex flex-col mb-2 items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                    <PlayerInfo playerImage={player.playerImage} name={player.name} teamInfo={player.teamInfo} matchup={player.matchup}/>
                  </div>
                  <div className="text-center flex flex-row items-center justify-between sm:space-x-1 p-1 col-span-1 md:col-span-3 lg:col-span-2 overflow-x-auto"> {/* Add overflow-x-auto for horizontal scrolling */}
                    <PlayerLine line={player.line} betType={player.betType}/>
                    <OverUnder pick={player.pick}/>
                    <OddsToHit odds={player.odds} oddsValue={player.oddsValue}/>
                    <EV ev={player.ev}/>
                  </div>
                  <div className="flex items-center justify-center col-span-1 md:col-span-2 ">
                    <Platform platforms={player.platforms} />
                  </div>
                </div>
              </div>
              {shouldRenderPlayerStats(player) && (
                <div className="bg-transparent text-white max-w-[375px]">
                  <PlayerStats 
                    last5={player.last_5}
                    last10={player.last_10}
                    sznAvg={player.SZN_avg}
                    vsOpponent={player.Vs_Opponent}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
