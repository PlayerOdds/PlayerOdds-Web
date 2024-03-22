
import { PrizPicksLogo, FanDuel, Bovada, DraftKingsLogo, BetMGM,Pinnacle,Barstool, Giddy, Wiggins, Mbeng } from "../../../images/ImageRepository";

export const playersData = [
  {
      name: 'Josh Giddey',
      playerImage: Giddy,
      teamInfo: 'NBA / OKC ',
      matchup: 'OKC @ ORL - 2/13 7:30 PM ET',
      betType: 'POINTS + REBOUNDS',
      line: 10.5,
      pick: 'UNDER',
      odds: '53.93%',
      oddsValue: '-117.1',
      ev: '+2.23',
      platforms: [
        { platform: PrizPicksLogo, line: 10.5, odds: '-119' },
        { platform: FanDuel, line: 10.5, odds: '-119' },
        { platform: Bovada, line: 10.5, odds: '-119' },
        { platform: DraftKingsLogo, line: 10.5, odds: '-119' },
        { platform: BetMGM, line: 10.5, odds: '-119' },
        { platform: Pinnacle, line: 10.5, odds: '-119' },
        { platform: Barstool, line: 10.5, odds: '-119' },
        
      ],
      best_platform:PrizPicksLogo,
      last_5:'20%',
      last_10: '45%',
      SZN_avg: '35%',
      Vs_Opponent: '50%',

    },
    {
      name: 'Andrew Wiggins',
      playerImage: Wiggins, //Please look at the gamesData file and restructure this to make sure it will work when we incorperate out new backend
      teamInfo: 'NBA / GSW ',
      matchup: 'OKC @ ORL - 3/22 10:10 PM ET',
      betType: 'REBOUNDS',
      line: 5.5,
      pick: 'UNDER',
      odds: '54.62%',
      oddsValue: '-120.4',
      ev: '+2.23',
      platforms: [
        { platform: PrizPicksLogo, line: 5.5, odds: '-119' },
        { platform: FanDuel, line: 5.5, odds: '-150' },
        { platform: Bovada, line: 5.5, odds: '-143' },
        { platform: DraftKingsLogo, line: 5.5, odds: '-135' },
        { platform: BetMGM, line: 5.5, odds: '-130' },
        { platform: Pinnacle, line: 5.5, odds: '-141' },
        { platform: Barstool, line: 5.5, odds: '-129' },
        
      ],
      best_platform:PrizPicksLogo,
      last_5:'60%',
      last_10: '40%',
      SZN_avg: '25%',
      Vs_Opponent: '0%',

    },
    {
      name: 'Bez Mbeng',
      playerImage: Mbeng, 
      teamInfo: 'NCAAM / YALE ',
      matchup: 'Yale @ AUB - 3/22 4:15 PM ET',
      betType: 'POINTS',
      line: 8.5,
      pick: 'OVER',
      odds: '55.3%',
      oddsValue: '-123.7',
      ev: '+5.23',
      platforms: [
        { platform: PrizPicksLogo, line: 8.5, odds: '-119' },
        { platform: FanDuel, line: 9.5, odds: '+100' },
        { platform: Bovada, line: 8.5, odds: '-135' },
        { platform: DraftKingsLogo, line: 9.5, odds: '+100' },
        { platform: BetMGM, line: 9.5, odds: '+100' },
        { platform: Pinnacle, line: 9.5, odds: '-102' },
        { platform: Barstool, line: '-', odds: '-' },
        
      ],
      best_platform:PrizPicksLogo,
      last_5:null,
      last_10: null,
      SZN_avg: null,
      Vs_Opponent: null,

    },
 
  ]