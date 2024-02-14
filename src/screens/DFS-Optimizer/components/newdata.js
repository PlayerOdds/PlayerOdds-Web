
import { PrizPicksLogo, FanDuel, Bovada, DraftKingsLogo, BetMGM,Pinnacle,Barstool } from "../../../images/ImageRepository";

export const playersData = [
  {
      name: 'Josh Giddey',
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
    },
    
  ];
  