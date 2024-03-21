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
              Over_Under: "Over",
              last_5:'60%',
              last_10: '45%',
              SZN_avg: '85%',
              Vs_Opponent: null,
            },
          {
              book:'PrizePicks',
              stat: "Rushing Yards",
              Stat_Value: "27.5",
              Over_Under: "Under",
              last_5:'60%',
              last_10: '45%',
              SZN_avg: '85%',
              Vs_Opponent: null,
            },
            {
              book:'PrizePicks',
              stat: "Completions",
              Stat_Value: "276.5",
              Over_Under: "Over",
              last_5:'60%',
              last_10: '45%',
              SZN_avg: '85%',
              Vs_Opponent: null,
            },
          {
              book:'PrizePicks',
              stat: "Passing TD's",
              Stat_Value: "1.5",
              Over_Under: "Under",
              last_5:'60%',
              last_10: '45%',
              SZN_avg: '85%',
              Vs_Opponent: null,
            },
            {
              book:'PrizePicks',
              stat: "Total Touchdowns",
              Stat_Value: "2.5",
              Over_Under: "Over",
              last_5:'60%',
              last_10: '45%',
              SZN_avg: '85%',
              Vs_Opponent: null,
            },
          {
              book:'PrizePicks',
              stat: "Turnover",
              Stat_Value: "0.5",
              Over_Under: "Under",
              last_5:'60%',
              last_10: '45%',
              SZN_avg: '85%',
              Vs_Opponent: null,
            }
          ],
          previousGames: ['300 yards, 3 TDs', '250 yards, 2 TDs'],
          season:[{
            Games_Played:['47'],
            Minutes:['34.1'],
            Points:['21.4'],
            Rebounds:['5.5'],
            Assists:['4.8'],
            PRA:['31.7'],
            PR:['26.9'],
            PA:['26.2'],
            RA:['2.9'],
            FS:['11.1'],
            Threes:['0.9'],
            BLK:['0.5'],
            Steals:['0.8'],
            FTM:['0.3'],
            TO:['0.6'],
          }],
          last_10:[{
            Games_Played:['10'],
            Minutes:['35.1'],
            Points:['21.5'],
            Rebounds:['5.5'],
            Assists:['5.5'],
            PRA:['32.5'],
            PR:['27'],
            PA:['27'],
            RA:['4.5'],
            FS:['19.4'],
            Threes:['1.2'],
            BLK:['0.9'],
            Steals:['2'],
            FTM:['0.1'],
            TO:['0.7'],
          }],
          last_5:[{
            Games_Played:['5'],
            Minutes:['28.6'],
            Points:['7.4'],
            Rebounds:['2.7'],
            Assists:['1.5'],
            PRA:['12.2'],
            PR:['8.2'],
            PA:['8.8'],
            RA:['4.5'],
            FS:['25.2'],
            Threes:['1.6'],
            BLK:['1.6'],
            Steals:['2.6'],
            FTM:['0.1'],
            TO:['1'],
          }],
          previous:[{
            Games_Played:['1'],
            Minutes:['25'],
            Points:['6'],
            Rebounds:['3'],
            Assists:['2'],
            PRA:['9'],
            PR:['7'],
            PA:['8'],
            RA:['3'],
            FS:['25.2'],
            Threes:['2'],
            BLK:['1'],
            Steals:['4'],
            FTM:['0'],
            TO:['0'],
          }],
          vs_opponent:[{
            Games_Played:['1'],
            Minutes:['15'],
            Points:['3'],
            Rebounds:['1'],
            Assists:['2'],
            PRA:['6'],
            PR:['4'],
            PA:['5'],
            RA:['3'],
            FS:['13.2'],
            Threes:['1'],
            BLK:['1'],
            Steals:['1'],
            FTM:['0'],
            TO:['0'],
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
              Over_Under: "Over",
              last_5:'60%',
              last_10: '45%',
              SZN_avg: '85%',
              Vs_Opponent: null,
            },
          {
              book:'PrizePicks',
              stat: "Rushing Yards",
              Stat_Value: "27.5",
              Over_Under: "Under",
              last_5:'60%',
              last_10: '45%',
              SZN_avg: '85%',
              Vs_Opponent: null,
            },
            {
              book:'PrizePicks',
              stat: "Completions",
              Stat_Value: "276.5",
              Over_Under: "Over",
              last_5:'60%',
              last_10: '45%',
              SZN_avg: '85%',
              Vs_Opponent: null,
            },
          {
              book:'PrizePicks',
              stat: "Passing TD's",
              Stat_Value: "1.5",
              Over_Under: "Under",
              last_5:'60%',
              last_10: '45%',
              SZN_avg: '85%',
              Vs_Opponent: null,
            },
            {
              book:'PrizePicks',
              stat: "Total Touchdowns",
              Stat_Value: "2.5",
              Over_Under: "Over",
              last_5:'60%',
              last_10: '45%',
              SZN_avg: '85%',
              Vs_Opponent: null,
            },
          {
              book:'PrizePicks',
              stat: "Turnover",
              Stat_Value: "0.5",
              Over_Under: "Under",
              last_5:'60%',
              last_10: '45%',
              SZN_avg: '85%',
              Vs_Opponent: null,
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
            Over_Under: "Over",
            last_5:'60%',
            last_10: '45%',
            SZN_avg: '85%',
            Vs_Opponent: null,
          },
        {
            book:'PrizePicks',
            stat: "Rushing Yards",
            Stat_Value: "27.5",
            Over_Under: "Under",
            last_5:'60%',
            last_10: '45%',
            SZN_avg: '85%',
            Vs_Opponent: null,
          },
          {
            book:'PrizePicks',
            stat: "Completions",
            Stat_Value: "276.5",
            Over_Under: "Over",
            last_5:'60%',
            last_10: '45%',
            SZN_avg: '85%',
            Vs_Opponent: null,
          },
        {
            book:'PrizePicks',
            stat: "Passing TD's",
            Stat_Value: "1.5",
            Over_Under: "Under",
            last_5:'60%',
            last_10: '45%',
            SZN_avg: '85%',
            Vs_Opponent: null,
          },
          {
            book:'PrizePicks',
            stat: "Total Touchdowns",
            Stat_Value: "2.5",
            Over_Under: "Over",
            last_5:'60%',
            last_10: '45%',
            SZN_avg: '85%',
            Vs_Opponent: null,
          },
        {
            book:'PrizePicks',
            stat: "Turnover",
            Stat_Value: "0.5",
            Over_Under: "Under",
            last_5:'60%',
            last_10: '45%',
            SZN_avg: '85%',
            Vs_Opponent: null,
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
              stat: "Shots",
              Stat_Value: "4.5",
              Over_Under: "Over",
              last_5:'80%',
              last_10: '65%',
              SZN_avg: '48%',
              Vs_Opponent: '85%',
            },
          {
              book:'PrizePicks',
              stat: "Goals",
              Stat_Value: "0.5",
              Over_Under: "Under",
              last_5:'60%',
              last_10: '45%',
              SZN_avg: '35%',
              Vs_Opponent: '85%',
            },
            {
              book:'PrizePicks',
              stat: "Hits",
              Stat_Value: "3.5",
              Over_Under: "Over",
              last_5:'20%',
              last_10: '25%',
              SZN_avg: '48%',
              Vs_Opponent: '50%',
            },

            
          ],
          previousGames: ['300 yards, 3 TDs', '250 yards, 2 TDs'],
          season:[{
            Games_Played:['59'],
            TOI:['18:37'],
            PTS:['0.9'],
            G:['0.2'],
            AST:['0.7'],
            SOG:['2.4'],
            FW:['0.4'],
            HT:['0.3'],
            BS:['0.7'],
          }],
          last_10:[{
            Games_Played:['10'],
            TOI:['18:29'],
            PTS:['0.5'],
            G:['0'],
            AST:['0.5'],
            SOG:['2.3'],
            FW:['0.3'],
            HT:['0.7'],
            BS:['0.4'],
          }],
          last_5:[{
            Games_Played:['5'],
            TOI:['19:57'],
            PTS:['0.4'],
            G:['0'],
            AST:['0.4'],
            SOG:['2.4'],
            FW:['0.2'],
            HT:['0.8'],
            BS:['0.2'],
          }],
          previous:[{
            Games_Played:['1'],
            TOI:['20:22'],
            PTS:['0'],
            G:['0'],
            AST:['0'],
            SOG:['3'],
            FW:['1'],
            HT:['0'],
            BS:['0'],
          }],
          vs_opponent:[{
            Games_Played:['1'],
            TOI:['20:20'],
            PTS:['1'],
            G:['0'],
            AST:['1'],
            SOG:['2'],
            FW:['0'],
            HT:['0'],
            BS:['0'],
          }],
        },
      ]
  }
]
  }
]

