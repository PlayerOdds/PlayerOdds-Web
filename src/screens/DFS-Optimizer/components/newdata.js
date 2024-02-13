export function playersData = (
    {
      name: 'Josh Giddey',
      teamInfo: 'NBA / OKC / SG / #3',
      matchup: 'OKC @ ORL - 2/13 7:30 PM ET',
      betType: 'POINTS',
      line: 10.5,
      pick: 'UNDER',
      odds: '53.93%',
      oddsValue: '-117.1',
      platforms: [
        { platform: 'P', line: 10.5, odds: '-119' },
        { platform: 'P', line: 10.5, odds: '-119' },
        { platform: 'P', line: 10.5, odds: '-119' },
        { platform: 'P', line: 10.5, odds: '-119' },
        
      ],
    },
);
 

export function createData(name, teamInfo, matchup, betType, line, pick, odds, oddsValue, platforms) {
    return { name, teamInfo, matchup, betType, line, pick, odds, oddsValue, platforms };
  }
  
  export const rows = [
    createData('Patrick Mahomes', 'Passing Yards', 'Under', 220.5, 225.5, '57.34%', -160, -156, -124, -143, -123, -154),
  ];
  
  