<<<<<<< HEAD
import { PrizPicksLogo, FanDuel, Bovada, DraftKingsLogo, BetMGM,Pinnacle,Barstool } from "../../../images/ImageRepository";
=======
//This will become an API service file when the backend is built out
>>>>>>> 4affbd4e3689652091480cddb15401a4a9ff7917

export const playersData = [
  {
      name: 'Josh Giddey',
      teamInfo: 'NBA / OKC ',
      matchup: 'OKC @ ORL - 2/13 7:30 PM ET',
      betType: 'POINTS',
      line: 10.5,
      pick: 'UNDER',
      odds: '53.93%',
      oddsValue: '-117.1',
      platforms: [
        { platform: PrizPicksLogo, line: 10.5, odds: '-119' },
        { platform: FanDuel, line: 10.5, odds: '-119' },
        { platform: Bovada, line: 10.5, odds: '-119' },
        { platform: DraftKingsLogo, line: 10.5, odds: '-119' },
        { platform: BetMGM, line: 10.5, odds: '-119' },
        { platform: Pinnacle, line: 10.5, odds: '-119' },
        { platform: Barstool, line: 10.5, odds: '-119' },
        
      ],
    },
    {
      name: 'Jackson Mahomes',
      teamInfo: 'NFL / KC / QB / #69',
      matchup: 'KC @ ORL - 2/13 7:30 PM ET',
      betType: 'POINTS',
      line: 10.5,
      pick: 'UNDER',
      odds: '53.93%',
      oddsValue: '-117.1',
      platforms: [
        { platform: 'Q', line: 10.5, odds: '-119' },
        { platform: 'S', line: 13.5, odds: '+129' },
        { platform: 'W', line: 12.5, odds: '-119' },
        { platform: 'G', line: 12.5, odds: '-119' },
        
      ],
    },
  ];
  