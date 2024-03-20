import {Mahomes, Purdy, Niners, Chiefs, Mats, MIN, Butler, MIA, LA, CLE} from '../../../images/ImageRepository'

export const games = [
  { 
    league: 'NBA',
    todays_games:[
      { 
      id: 'game1',
      title: 'Miami Heat at Cleveland Cavaliers',
      teamInfo: 'NBA / MIA ',
      home: CLE,
      away: MIA,
      date: '3/20 - 7:00 PM EDT',
      players: [
        {
          name: 'Jimmy Butler - MIA',
          image: Butler, 
          teamLogo: MIA,
          teamColors: {
            primary: '#98002E', 
            secondary: '#181a24ab' 
          },
          stat:[
            {
              book:'PrizePicks',
              stat: "Passing Yards",
              Stat_Value: "276.5",
              Over_Under: "Over"
            },
          {
              book:'PrizePicks',
              stat: "Rushing Yards",
              Stat_Value: "27.5",
              Over_Under: "Under"
            },
            {
              book:'PrizePicks',
              stat: "Completions",
              Stat_Value: "276.5",
              Over_Under: "Over"
            },
          {
              book:'PrizePicks',
              stat: "Passing TD's",
              Stat_Value: "1.5",
              Over_Under: "Under"
            },
            {
              book:'PrizePicks',
              stat: "Total Touchdowns",
              Stat_Value: "2.5",
              Over_Under: "Over"
            },
          {
              book:'PrizePicks',
              stat: "Turnover",
              Stat_Value: "0.5",
              Over_Under: "Under"
            }
          ],
          previousGames: ['300 yards, 3 TDs', '250 yards, 2 TDs'],
          season:[{
            Games_Played:['47'],
            Rush_Att:['34.1'],
            Rush_Yards:['21.4'],
            Rush_TD:['5.5'],
            Rec_Tgt:['4.8'],
            Receptions:['31.7'],
            Rec_Yards:['26.9'],
            Rec_TD:['26.2'],
          }],
          last_10:[{
            Games_Played:['10'],
            Rush_Att:['35.1'],
            Rush_Yards:['21.5'],
            Rush_TD:['5.5'],
            Rec_Tgt:['5.5'],
            Receptions:['32.5'],
            Rec_Yards:['27'],
            Rec_TD:['27'],
          }],
          last_5:[{
            Games_Played:['5'],
            Rush_Att:['35.6'],
            Rush_Yards:['17.2'],
            Rush_TD:['5.2'],
            Rec_Tgt:['4.4'],
            Receptions:['26.8'],
            Rec_Yards:['22.4'],
            Rec_TD:['21.6'],
          }],
          previous:[{
            Games_Played:['1'],
            Rush_Att:['31'],
            Rush_Yards:['14'],
            Rush_TD:['4'],
            Rec_Tgt:['3'],
            Receptions:['21'],
            Rec_Yards:['18'],
            Rec_TD:['17'],
          }],
          vs_opponent:[{
            Games_Played:['2'],
            Rush_Att:['32'],
            Rush_Yards:['13'],
            Rush_TD:['4.5'],
            Rec_Tgt:['5.5'],
            Receptions:['23'],
            Rec_Yards:['17.5'],
            Rec_TD:['18.5'],
          }],
        },
      
      ],
    },
  ],
  },
  {
    league: 'NFL',
    todays_games:[
      { 
      id: 'game1',
      title: 'San Francisco 49ers at Kansas City Chiefs',
      teamInfo: 'NFL / SF ',
      home: Chiefs,
      away: Niners,
      date: '2/11 - 6:30 PM EST',
      players: [
        {
          name: 'Brock Purdy - SF',
          image: Purdy, 
          teamLogo: Niners,
          teamColors: {
            primary: '#AA0000', 
            secondary: '#181a24ab' 
          },
          stat:[
            {
              book:'PrizePicks',
              stat: "Passing Yards",
              Stat_Value: "276.5",
              Over_Under: "Over"
            },
          {
              book:'PrizePicks',
              stat: "Rushing Yards",
              Stat_Value: "27.5",
              Over_Under: "Under"
            },
            {
              book:'PrizePicks',
              stat: "Completions",
              Stat_Value: "276.5",
              Over_Under: "Over"
            },
          {
              book:'PrizePicks',
              stat: "Passing TD's",
              Stat_Value: "1.5",
              Over_Under: "Under"
            },
            {
              book:'PrizePicks',
              stat: "Total Touchdowns",
              Stat_Value: "2.5",
              Over_Under: "Over"
            },
          {
              book:'PrizePicks',
              stat: "Turnover",
              Stat_Value: "0.5",
              Over_Under: "Under"
            }
          ],
          previousGames: ['300 yards, 3 TDs', '250 yards, 2 TDs'],
          season:[{
            Games_Played:['14'],
            Rush_Att:['0.1'],
            Rush_Yards:['-0.1'],
            Rush_TD:['0'],
            Rec_Tgt:['2.9'],
            Receptions:['1.8'],
            Rec_Yards:['23.9'],
            Rec_TD:['0.1'],
          }],
          last_10:[{
            Games_Played:['10'],
            Rush_Att:['0.1'],
            Rush_Yards:['-0.1'],
            Rush_TD:['0'],
            Rec_Tgt:['3.3'],
            Receptions:['2'],
            Rec_Yards:['23.3'],
            Rec_TD:['0.1'],
          }],
          last_5:[{
            Games_Played:['5'],
            Rush_Att:['0.2'],
            Rush_Yards:['-0.2'],
            Rush_TD:['0'],
            Rec_Tgt:['3'],
            Receptions:['2.2'],
            Rec_Yards:['27.6'],
            Rec_TD:['0.2'],
          }],
          previous:[{
            Games_Played:['1'],
            Rush_Att:['0'],
            Rush_Yards:['0'],
            Rush_TD:['0'],
            Rec_Tgt:['2'],
            Receptions:['1'],
            Rec_Yards:['8'],
            Rec_TD:['0'],
          }],
          vs_opponent:[{
            Games_Played:['-'],
            Rush_Att:['-'],
            Rush_Yards:['-'],
            Rush_TD:['-'],
            Rec_Tgt:['-'],
            Receptions:['-'],
            Rec_Yards:['-'],
            Rec_TD:['-'],
          }],
        },
        {
          name: 'Patrick Mahomes - KC',
          image: Mahomes, 
          teamLogo: Chiefs,
          teamColors: {
            primary: '#E31837', 
            secondary: '#181a24ab' 
          },
          game: 'KC vs SF 5pm', 
          teamInfo: 'NFL / KC ',
          stat:[
          {
            book:'PrizePicks',
            stat: "Passing Yards",
            Stat_Value: "276.5",
            Over_Under: "Over"
          },
        {
            book:'PrizePicks',
            stat: "Rushing Yards",
            Stat_Value: "27.5",
            Over_Under: "Under"
          },
          {
            book:'PrizePicks',
            stat: "Completions",
            Stat_Value: "276.5",
            Over_Under: "Over"
          },
        {
            book:'PrizePicks',
            stat: "Passing TD's",
            Stat_Value: "1.5",
            Over_Under: "Under"
          },
          {
            book:'PrizePicks',
            stat: "Total Touchdowns",
            Stat_Value: "2.5",
            Over_Under: "Over"
          },
        {
            book:'PrizePicks',
            stat: "Turnover",
            Stat_Value: "0.5",
            Over_Under: "Under"
          }
        ],
          previousGames: ['350 yards, 4 TDs', '280 yards, 2 TDs'],
          season:[{
            Games_Played:['14'],
            Rush_Att:['0.1'],
            Rush_Yards:['-0.1'],
            Rush_TD:['0'],
            Rec_Tgt:['2.9'],
            Receptions:['1.8'],
            Rec_Yards:['23.9'],
            Rec_TD:['0.1'],
          }],
          last_10:[{
            Games_Played:['10'],
            Rush_Att:['0.1'],
            Rush_Yards:['-0.1'],
            Rush_TD:['0'],
            Rec_Tgt:['3.3'],
            Receptions:['2'],
            Rec_Yards:['23.3'],
            Rec_TD:['0.1'],
          }],
          last_5:[{
            Games_Played:['5'],
            Rush_Att:['0.2'],
            Rush_Yards:['-0.2'],
            Rush_TD:['0'],
            Rec_Tgt:['3'],
            Receptions:['2.2'],
            Rec_Yards:['27.6'],
            Rec_TD:['0.2'],
          }],
          previous:[{
            Games_Played:['1'],
            Rush_Att:['0'],
            Rush_Yards:['0'],
            Rush_TD:['0'],
            Rec_Tgt:['2'],
            Receptions:['1'],
            Rec_Yards:['8'],
            Rec_TD:['0'],
          }],
          vs_opponent:[{
            Games_Played:['-'],
            Rush_Att:['-'],
            Rush_Yards:['-'],
            Rush_TD:['-'],
            Rec_Tgt:['-'],
            Receptions:['-'],
            Rec_Yards:['-'],
            Rec_TD:['-'],
          }],
        },
      ],
    },
  ],
  },
  
  
  {
    league: 'NHL',
    todays_games:[
      { 
      id: 'game1',
      title: 'Minnesota Wild at Los Angeles Kings',
      home: LA,
      away: MIN,
      teamInfo: 'NHL / MIN ',
      date: '3/20 - 10:00 PM EDT',
      players: [
        {
          name: 'Mats Zuccarello - SF',
          image: Mats, 
          teamLogo: MIN,
          teamColors: {
            primary: '#154734', 
            secondary: '#181a24ab' 
          },
          stat:[
            {
              book:'PrizePicks',
              stat: "Passing Yards",
              Stat_Value: "276.5",
              Over_Under: "Over"
            },
          {
              book:'PrizePicks',
              stat: "Rushing Yards",
              Stat_Value: "27.5",
              Over_Under: "Under"
            },
            {
              book:'PrizePicks',
              stat: "Completions",
              Stat_Value: "276.5",
              Over_Under: "Over"
            },
          {
              book:'PrizePicks',
              stat: "Passing TD's",
              Stat_Value: "1.5",
              Over_Under: "Under"
            },
            {
              book:'PrizePicks',
              stat: "Total Touchdowns",
              Stat_Value: "2.5",
              Over_Under: "Over"
            },
          {
              book:'PrizePicks',
              stat: "Turnover",
              Stat_Value: "0.5",
              Over_Under: "Under"
            },
            
          ],
          previousGames: ['300 yards, 3 TDs', '250 yards, 2 TDs'],
          season:[{
            Games_Played:['59'],
            Rush_Att:['18:37'],
            Rush_Yards:['0.9'],
            Rush_TD:['0.2'],
            Rec_Tgt:['0.7'],
            Receptions:['2.4'],
            Rec_Yards:['0.4'],
            Rec_TD:['0.3'],
          }],
          last_10:[{
            Games_Played:['10'],
            Rush_Att:['18:29'],
            Rush_Yards:['0.5'],
            Rush_TD:['0'],
            Rec_Tgt:['0.5'],
            Receptions:['2.3'],
            Rec_Yards:['0.3'],
            Rec_TD:['0.7'],
          }],
          last_5:[{
            Games_Played:['5'],
            Rush_Att:['19:57'],
            Rush_Yards:['0.4'],
            Rush_TD:['0'],
            Rec_Tgt:['0.4'],
            Receptions:['2.4'],
            Rec_Yards:['0.2'],
            Rec_TD:['0.8'],
          }],
          previous:[{
            Games_Played:['1'],
            Rush_Att:['20:22'],
            Rush_Yards:['0'],
            Rush_TD:['0'],
            Rec_Tgt:['0'],
            Receptions:['3'],
            Rec_Yards:['1'],
            Rec_TD:['0'],
          }],
          vs_opponent:[{
            Games_Played:['1'],
            Rush_Att:['20:20'],
            Rush_Yards:['1'],
            Rush_TD:['0'],
            Rec_Tgt:['1'],
            Receptions:['2'],
            Rec_Yards:['0'],
            Rec_TD:['0'],
          }],
        },
      ]
  }
]
  }
]

