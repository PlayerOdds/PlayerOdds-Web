import {Mahomes, Purdy,
   Niners, Chiefs,
    Mats, MIN,
     Butler, MIA,
      LA, CLE,
       Crosby, PIT, DAL, seguin, Robertson, Malkin, TWolves, Levert, Garland, Edwards, Gobert} from '../../../images/ImageRepository'

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
    { 
      id: 'game2',
      title: 'Cleveland Cavaliers at Minnesota Timberwolves',
      teamInfo: 'NBA / MIA ',
      home: TWolves,
      away: CLE,
      date: '3/22 - 8:00 PM EDT',
      players: [
        {
          name: 'Darius Garland - PG',
          image: Garland, 
          teamLogo: CLE,
          teamColors: {
            primary: '#6F263D', 
            secondary: '#181a24ab' 
          },
          stat:[
            {
              book:'PrizePicks',
              stat: "POINTS",
              Stat_Value: "20.5",
              Over_Under: "Over",
              last_5:'40%',
              last_10: '30%',
              SZN_avg: '33%',
              Vs_Opponent: '100%',
            },
          {
              book:'PrizePicks',
              stat: "ASSISTS",
              Stat_Value: "6.5",
              Over_Under: "Under",
              last_5:'60%',
              last_10: '60%',
              SZN_avg: '51%',
              Vs_Opponent: '100%',
            },
            {
              book:'PrizePicks',
              stat: "PTS+REBS+AST",
              Stat_Value: "30.5",
              Over_Under: "Over",
              last_5:'40%',
              last_10: '30%',
              SZN_avg: '29%',
              Vs_Opponent: '100%',
            },
          {
              book:'PrizePicks',
              stat: "PTS+REBS",
              Stat_Value: "23.5",
              Over_Under: "Under",
              last_5:'40%',
              last_10: '30%',
              SZN_avg: '36%',
              Vs_Opponent: '100%',
            },
            {
              book:'PrizePicks',
              stat: "PTS+ASTS",
              Stat_Value: "27.5",
              Over_Under: "Over",
              last_5:'60%',
              last_10: '40%',
              SZN_avg: '38%',
              Vs_Opponent: '100%',
            },
          {
              book:'PrizePicks',
              stat: "REBS+ASTS",
              Stat_Value: "9.5",
              Over_Under: "Under",
              last_5:'60%',
              last_10: '50%',
              SZN_avg: '38%',
              Vs_Opponent: '100%',
            }
          ],
          previousGames: ['300 yards, 3 TDs', '250 yards, 2 TDs'],
          season: [{
            Games_Played: ['45'],
            Minutes: ['33.4'],
            Points: ['18.7'],
            Rebounds: ['2.5'],
            Assists: ['6.4'],
            PRA: ['27.6'],
            PR: ['21.3'],
            PA: ['25.1'],
            RA: ['8.9'],
            FS: ['32.4'],
            Threes: ['2.4'],
            BLK: ['0.1'],
            Steals: ['1.3'],
            FTM: ['2.9'],
            TO: ['3.1'],
        }],
        last_10: [{
            Games_Played: ['10'],
            Minutes: ['35.9'],
            Points: ['20'],
            Rebounds: ['3.1'],
            Assists: ['7.2'],
            PRA: ['30.3'],
            PR: ['23.1'],
            PA: ['27.2'],
            RA: ['10.3'],
            FS: ['35.2'],
            Threes: ['3.6'],
            BLK: ['0.1'],
            Steals: ['1.1'],
            FTM: ['2'],
            TO: ['2.9'],
        }],
        last_5: [{
            Games_Played: ['5'],
            Minutes: ['36'],
            Points: ['20.4'],
            Rebounds: ['4'],
            Assists: ['7.2'],
            PRA: ['31.6'],
            PR: ['24.4'],
            PA: ['27.6'],
            RA: ['11.2'],
            FS: ['37.8'],
            Threes: ['4'],
            BLK: ['0.2'],
            Steals: ['1.2'],
            FTM: ['1.6'],
            TO: ['2.4'],
        }],
        previous: [{
            Games_Played: ['1'],
            Minutes: ['41'],
            Points: ['20'],
            Rebounds: ['1'],
            Assists: ['9'],
            PRA: ['30'],
            PR: ['21'],
            PA: ['29'],
            RA: ['10'],
            FS: ['33.7'],
            Threes: ['5'],
            BLK: ['0'],
            Steals: ['0'],
            FTM: ['1'],
            TO: ['1'],
        }],
        vs_opponent: [{
            Games_Played: ['1'],
            Minutes: ['44'],
            Points: ['34'],
            Rebounds: ['4'],
            Assists: ['8'],
            PRA: ['46'],
            PR: ['38'],
            PA: ['42'],
            RA: ['12'],
            FS: ['44.8'],
            Threes: ['2'],
            BLK: ['0'],
            Steals: ['0'],
            FTM: ['6'],
            TO: ['6'],
        }],
        },
        {
          name: 'Caris LeVert- SG',
          image: Levert, 
          teamLogo: CLE,
          teamColors: {
            primary: '#6F263D', 
            secondary: '#181a24ab' 
          },
          stat:[
            {
              book:'PrizePicks',
              stat: "POINTS",
              Stat_Value: "20.5",
              Over_Under: "Over",
              last_5:'40%',
              last_10: '30%',
              SZN_avg: '33%',
              Vs_Opponent: '100%',
            },
          {
              book:'PrizePicks',
              stat: "ASSISTS",
              Stat_Value: "6.5",
              Over_Under: "Under",
              last_5:'60%',
              last_10: '60%',
              SZN_avg: '51%',
              Vs_Opponent: '100%',
            },
            {
              book:'PrizePicks',
              stat: "PTS+REBS+AST",
              Stat_Value: "30.5",
              Over_Under: "Over",
              last_5:'40%',
              last_10: '30%',
              SZN_avg: '29%',
              Vs_Opponent: '100%',
            },
          {
              book:'PrizePicks',
              stat: "PTS+REBS",
              Stat_Value: "23.5",
              Over_Under: "Under",
              last_5:'40%',
              last_10: '30%',
              SZN_avg: '36%',
              Vs_Opponent: '100%',
            },
            {
              book:'PrizePicks',
              stat: "PTS+ASTS",
              Stat_Value: "27.5",
              Over_Under: "Over",
              last_5:'60%',
              last_10: '40%',
              SZN_avg: '38%',
              Vs_Opponent: '100%',
            },
          {
              book:'PrizePicks',
              stat: "REBS+ASTS",
              Stat_Value: "9.5",
              Over_Under: "Under",
              last_5:'60%',
              last_10: '50%',
              SZN_avg: '38%',
              Vs_Opponent: '100%',
            }
          ],
          previousGames: ['300 yards, 3 TDs', '250 yards, 2 TDs'],
          season: [{
            Games_Played: ['57'],
            Minutes: ['28.5'],
            Points: ['14'],
            Rebounds: ['4'],
            Assists: ['5.3'],
            PRA: ['23.3'],
            PR: ['18'],
            PA: ['19.3'],
            RA: ['9.3'],
            FS: ['29.8'],
            Threes: ['1.6'],
            BLK: ['0.5'],
            Steals: ['1.1'],
            FTM: ['2.2'],
            TO: ['1.6'],
        }],
        last_10: [{
            Games_Played: ['10'],
            Minutes: ['33.8'],
            Points: ['13.7'],
            Rebounds: ['5'],
            Assists: ['9.2'],
            PRA: ['27.9'],
            PR: ['18.7'],
            PA: ['22.9'],
            RA: ['14.2'],
            FS: ['39.1'],
            Threes: ['1.6'],
            BLK: ['0.7'],
            Steals: ['1.9'],
            FTM: ['2.5'],
            TO: ['2.2'],
        }],
        last_5: [{
            Games_Played: ['5'],
            Minutes: ['34'],
            Points: ['15.8'],
            Rebounds: ['5.4'],
            Assists: ['10'],
            PRA: ['31.2'],
            PR: ['21.2'],
            PA: ['25.8'],
            RA: ['15.4'],
            FS: ['42.1'],
            Threes: ['1.2'],
            BLK: ['0.6'],
            Steals: ['1.6'],
            FTM: ['3.8'],
            TO: ['1.8'],
        }],
        previous: [{
            Games_Played: ['1'],
            Minutes: ['37'],
            Points: ['16'],
            Rebounds: ['5'],
            Assists: ['12'],
            PRA: ['33'],
            PR: ['21'],
            PA: ['28'],
            RA: ['17'],
            FS: ['44'],
            Threes: ['1'],
            BLK: ['1'],
            Steals: ['2'],
            FTM: ['7'],
            TO: ['5'],
        }],
        vs_opponent: [{
            Games_Played: ['1'],
            Minutes: ['34'],
            Points: ['15'],
            Rebounds: ['5'],
            Assists: ['8'],
            PRA: ['28'],
            PR: ['20'],
            PA: ['23'],
            RA: ['13'],
            FS: ['43'],
            Threes: ['2'],
            BLK: ['1'],
            Steals: ['3'],
            FTM: ['3'],
            TO: ['2'],
        }],
    
        },
        {
          name: 'Anthony Edwards - SG',
          image: Edwards, 
          teamLogo: TWolves,
          teamColors: {
            primary: '#0C2340', 
            secondary: '#181a24ab' 
          },
          stat:[
            {
              book:'PrizePicks',
              stat: "POINTS",
              Stat_Value: "20.5",
              Over_Under: "Over",
              last_5:'40%',
              last_10: '30%',
              SZN_avg: '33%',
              Vs_Opponent: '100%',
            },
          {
              book:'PrizePicks',
              stat: "ASSISTS",
              Stat_Value: "6.5",
              Over_Under: "Under",
              last_5:'60%',
              last_10: '60%',
              SZN_avg: '51%',
              Vs_Opponent: '100%',
            },
            {
              book:'PrizePicks',
              stat: "PTS+REBS+AST",
              Stat_Value: "30.5",
              Over_Under: "Over",
              last_5:'40%',
              last_10: '30%',
              SZN_avg: '29%',
              Vs_Opponent: '100%',
            },
          {
              book:'PrizePicks',
              stat: "PTS+REBS",
              Stat_Value: "23.5",
              Over_Under: "Under",
              last_5:'40%',
              last_10: '30%',
              SZN_avg: '36%',
              Vs_Opponent: '100%',
            },
            {
              book:'PrizePicks',
              stat: "PTS+ASTS",
              Stat_Value: "27.5",
              Over_Under: "Over",
              last_5:'60%',
              last_10: '40%',
              SZN_avg: '38%',
              Vs_Opponent: '100%',
            },
          {
              book:'PrizePicks',
              stat: "REBS+ASTS",
              Stat_Value: "9.5",
              Over_Under: "Under",
              last_5:'60%',
              last_10: '50%',
              SZN_avg: '38%',
              Vs_Opponent: '100%',
            }
          ],
          previousGames: ['300 yards, 3 TDs', '250 yards, 2 TDs'],
          season: [{
            Games_Played: ['66'],
            Minutes: ['35.3'],
            Points: ['26.7'],
            Rebounds: ['5.4'],
            Assists: ['5.1'],
            PRA: ['37.2'],
            PR: ['32.1'],
            PA: ['31.8'],
            RA: ['10.5'],
            FS: ['43.4'],
            Threes: ['2.5'],
            BLK: ['0.6'],
            Steals: ['1.3'],
            FTM: ['5.3'],
            TO: ['3.1'],
        }],
        last_10: [{
            Games_Played: ['10'],
            Minutes: ['36'],
            Points: ['26.9'],
            Rebounds: ['6.2'],
            Assists: ['4.8'],
            PRA: ['37.9'],
            PR: ['33.1'],
            PA: ['31.7'],
            RA: ['11'],
            FS: ['47'],
            Threes: ['2.2'],
            BLK: ['1.1'],
            Steals: ['1.6'],
            FTM: ['4.1'],
            TO: ['2.6'],
        }],
        last_5: [{
            Games_Played: ['5'],
            Minutes: ['37.6'],
            Points: ['31'],
            Rebounds: ['8'],
            Assists: ['6.4'],
            PRA: ['45.4'],
            PR: ['39'],
            PA: ['37.4'],
            RA: ['14.4'],
            FS: ['56.8'],
            Threes: ['2.8'],
            BLK: ['1.4'],
            Steals: ['1.8'],
            FTM: ['3'],
            TO: ['3'],
        }],
        previous: [{
            Games_Played: ['1'],
            Minutes: ['38'],
            Points: ['30'],
            Rebounds: ['8'],
            Assists: ['8'],
            PRA: ['46'],
            PR: ['38'],
            PA: ['38'],
            RA: ['16'],
            FS: ['54.6'],
            Threes: ['3'],
            BLK: ['0'],
            Steals: ['2'],
            FTM: ['1'],
            TO: ['3'],
        }],
        vs_opponent: [{
            Games_Played: ['1'],
            Minutes: ['42'],
            Points: ['19'],
            Rebounds: ['5'],
            Assists: ['3'],
            PRA: ['27'],
            PR: ['24'],
            PA: ['22'],
            RA: ['8'],
            FS: ['30.5'],
            Threes: ['0'],
            BLK: ['1'],
            Steals: ['1'],
            FTM: ['5'],
            TO: ['5'],
        }],
    
        },
        {
          name: 'Rudy Gobert - C',
          image: Gobert, 
          teamLogo: TWolves,
          teamColors: {
            primary: '#0C2340', 
            secondary: '#181a24ab' 
          },
          stat:[
            {
              book:'PrizePicks',
              stat: "POINTS",
              Stat_Value: "20.5",
              Over_Under: "Over",
              last_5:'40%',
              last_10: '30%',
              SZN_avg: '33%',
              Vs_Opponent: '100%',
            },
          {
              book:'PrizePicks',
              stat: "ASSISTS",
              Stat_Value: "6.5",
              Over_Under: "Under",
              last_5:'60%',
              last_10: '60%',
              SZN_avg: '51%',
              Vs_Opponent: '100%',
            },
            {
              book:'PrizePicks',
              stat: "PTS+REBS+AST",
              Stat_Value: "30.5",
              Over_Under: "Over",
              last_5:'40%',
              last_10: '30%',
              SZN_avg: '29%',
              Vs_Opponent: '100%',
            },
          {
              book:'PrizePicks',
              stat: "PTS+REBS",
              Stat_Value: "23.5",
              Over_Under: "Under",
              last_5:'40%',
              last_10: '30%',
              SZN_avg: '36%',
              Vs_Opponent: '100%',
            },
            {
              book:'PrizePicks',
              stat: "PTS+ASTS",
              Stat_Value: "27.5",
              Over_Under: "Over",
              last_5:'60%',
              last_10: '40%',
              SZN_avg: '38%',
              Vs_Opponent: '100%',
            },
          {
              book:'PrizePicks',
              stat: "REBS+ASTS",
              Stat_Value: "9.5",
              Over_Under: "Under",
              last_5:'60%',
              last_10: '50%',
              SZN_avg: '38%',
              Vs_Opponent: '100%',
            }
          ],
          previousGames: ['300 yards, 3 TDs', '250 yards, 2 TDs'],
          season: [{
            Games_Played: ['63'],
            Minutes: ['33.9'],
            Points: ['13.7'],
            Rebounds: ['12.8'],
            Assists: ['1.2'],
            PRA: ['27.7'],
            PR: ['26.5'],
            PA: ['14.9'],
            RA: ['14.1'],
            FS: ['37.7'],
            Threes: ['0'],
            BLK: ['2.1'],
            Steals: ['0.6'],
            FTM: ['3.2'],
            TO: ['1.5'],
        }],
        last_10: [{
            Games_Played: ['10'],
            Minutes: ['36.1'],
            Points: ['13'],
            Rebounds: ['14.6'],
            Assists: ['1.4'],
            PRA: ['29'],
            PR: ['27.6'],
            PA: ['14.4'],
            RA: ['16'],
            FS: ['40.9'],
            Threes: ['0'],
            BLK: ['2.6'],
            Steals: ['0.7'],
            FTM: ['2.4'],
            TO: ['1.6'],
        }],
        last_5: [{
            Games_Played: ['5'],
            Minutes: ['37.8'],
            Points: ['14'],
            Rebounds: ['14.8'],
            Assists: ['1.4'],
            PRA: ['30.2'],
            PR: ['28.8'],
            PA: ['15.4'],
            RA: ['16.2'],
            FS: ['43.7'],
            Threes: ['0'],
            BLK: ['2.6'],
            Steals: ['1.2'],
            FTM: ['2.8'],
            TO: ['1.6'],
        }],
        previous: [{
            Games_Played: ['1'],
            Minutes: ['33'],
            Points: ['8'],
            Rebounds: ['11'],
            Assists: ['3'],
            PRA: ['22'],
            PR: ['19'],
            PA: ['11'],
            RA: ['14'],
            FS: ['37.7'],
            Threes: ['0'],
            BLK: ['2'],
            Steals: ['2'],
            FTM: ['0'],
            TO: ['0'],
        }],
        vs_opponent: [{
            Games_Played: ['1'],
            Minutes: ['37'],
            Points: ['7'],
            Rebounds: ['17'],
            Assists: ['2'],
            PRA: ['26'],
            PR: ['24'],
            PA: ['9'],
            RA: ['19'],
            FS: ['37.4'],
            Threes: ['0'],
            BLK: ['2'],
            Steals: ['1'],
            FTM: ['1'],
            TO: ['2'],
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
            "Games_Played":['10'],
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
            "Games_Played":['59'],
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
  },

  {
    league: 'NHL',
    todays_games:[
      { 
      id: 'game2',
      title: 'Pittsburgh Penguins at Dallas Stars',
      home: DAL,
      away: PIT,
      teamInfo: 'NHL / MIN ',
      date: '3/22 - 8:00 PM EDT',
      players: [
       
         {
          name: 'Sydney Crosby - C',
          image: Crosby, 
          teamLogo: PIT,
          teamColors: {
            primary: '#FCB514', 
            secondary: '#181a24ab' 
          },
          stat:[
            {
              book:'PrizePicks',
              stat: "Assists",
              Stat_Value: "0.5",
              Over_Under: "Over",
              last_5:'80%',
              last_10: '50%',
              SZN_avg: '47%',
              Vs_Opponent: '100%',
            },


            
          ],
          previousGames: ['300 yards, 3 TDs', '250 yards, 2 TDs'],
          season:[{
            Games_Played:['68'],
            TOI:['20:08'],
            PTS:['1'],
            G:['0.5'],
            AST:['0.5'],
            SOG:['3.5'],
            FW:['13.3'],
            HT:['1'],
            BS:['0.5'],
          }],
          last_10:[{
            Games_Played:['10'],
            TOI:['19:37'],
            PTS:['0.6'],
            G:['0.1'],
            AST:['0.5'],
            SOG:['3'],
            FW:['12.2'],
            HT:['1.1'],
            BS:['0.2'],
          }],
          last_5:[{
            Games_Played:['5'],
            TOI:['20:22'],
            PTS:['1'],
            G:['0.2'],
            AST:['0.8'],
            SOG:['3'],
            FW:['12.6'],
            HT:['1'],
            BS:['0.4'],
          }],
          previous:[{
            Games_Played:['1'],
            TOI:['21:32'],
            PTS:['1'],
            G:['0'],
            AST:['1'],
            SOG:['5'],
            FW:['11'],
            HT:['1'],
            BS:['0'],
          }],
          vs_opponent:[{
            Games_Played:['1'],
            TOI:['19:10'],
            PTS:['1'],
            G:['0'],
            AST:['1'],
            SOG:['3'],
            FW:['18'],
            HT:['1'],
            BS:['0'],
          }],
        },
        {
          name: 'Evgeni Malkin - C',
          image: Malkin, 
          teamLogo: PIT,
          teamColors: {
            primary: '#FCB514', 
            secondary: '#181a24ab' 
          },
          stat:[
            {
              book:'PrizePicks',
              stat: "POINTS",
              Stat_Value: "0.5",
              Over_Under: "Over",
              last_5:'60%',
              last_10: '50%',
              SZN_avg: '57%',
              Vs_Opponent: '0%',
            },


            
          ],
          previousGames: ['300 yards, 3 TDs', '250 yards, 2 TDs'],
          season: [{
            Games_Played: ["68"],
            TOI: ["18:39"],
            PTS: ["0.8"],
            G: ["0.3"],
            AST: ["0.5"],
            SOG: ["2.4"],
            FW: ["4.7"],
            HT: ["0.3"],
            BS: ["0.5"],
        }],
        last_10: [{
            Games_Played: ["10"],
            TOI: ["17:06"],
            PTS: ["0.6"],
            G: ["0.3"],
            AST: ["0.3"],
            SOG: ["1.4"],
            FW: ["4.6"],
            HT: ["0.2"],
            BS: ["0.3"],
        }],
        last_5: [{
            Games_Played: ["5"],
            TOI: ["16:24"],
            PTS: ["0.6"],
            G: ["0.2"],
            AST: ["0.4"],
            SOG: ["2"],
            FW: ["4.2"],
            HT: ["0.4"],
            BS: ["0.6"],
        }],
        previous: [{
            Games_Played: ["1"],
            TOI: ["16:01"],
            PTS: ["0"],
            G: ["0"],
            AST: ["0"],
            SOG: ["2"],
            FW: ["6"],
            HT: ["0"],
            BS: ["0"],
        }],
        vs_opponent: [{
            Games_Played: ["1"],
            TOI: ["20:57"],
            PTS: ["0"],
            G: ["0"],
            AST: ["0"],
            SOG: ["3"],
            FW: ["3"],
            HT: ["0"],
            BS: ["0"],
        }],
        },
      
        {
          name: 'Tyler Seguin - C',
          image: seguin, 
          teamLogo: DAL,
          teamColors: {
            primary: '#006847', 
            secondary: '#181a24ab' 
          },
          stat:[
            {
              book:'PrizePicks',
              stat: "POINTS",
              Stat_Value: "0.5",
              Over_Under: "Over",
              last_5:'20%',
              last_10: '40%',
              SZN_avg: '56%',
              Vs_Opponent: '0%',
            },


            
          ],
          previousGames: ['300 yards, 3 TDs', '250 yards, 2 TDs'],
          season: [{
            Games_Played: ["59"],
            TOI: ["16:34"],
            PTS: ["0.8"],
            G: ["0.4"],
            AST: ["0.4"],
            SOG: ["2.3"],
            FW: ["4.9"],
            HT: ["0.6"],
            BS: ["0.3"],
        }],
        last_10: [{
            Games_Played: ["10"],
            TOI: ["15:49"],
            PTS: ["0.7"],
            G: ["0.4"],
            AST: ["0.3"],
            SOG: ["3.3"],
            FW: ["4.2"],
            HT: ["0.6"],
            BS: ["0.4"],
        }],
        last_5: [{
            Games_Played: ["5"],
            TOI: ["15:33"],
            PTS: ["0.2"],
            G: ["0.2"],
            AST: ["0"],
            SOG: ["3.6"],
            FW: ["3.8"],
            HT: ["0.4"],
            BS: ["0.2"],
        }],
        previous: [{
            Games_Played: ["1"],
            TOI: ["14:44"],
            PTS: ["1"],
            G: ["1"],
            AST: ["0"],
            SOG: ["4"],
            FW: ["5"],
            HT: ["0"],
            BS: ["0"],
        }],
        vs_opponent: [{
            Games_Played: ["1"],
            TOI: ["15:53"],
            PTS: ["0"],
            G: ["0"],
            AST: ["0"],
            SOG: ["0"],
            FW: ["2"],
            HT: ["0"],
            BS: ["2"],
        }],
        },
        {
          name: 'Jason Robertson - LW',
          image: Robertson, 
          teamLogo: DAL,
          teamColors: {
            primary: '#006847', 
            secondary: '#181a24ab' 
          },
          stat:[
            {
              book:'PrizePicks',
              stat: "ASSISTS",
              Stat_Value: "0.5",
              Over_Under: "Over",
              last_5:'80%',
              last_10: '70%',
              SZN_avg: '56%',
              Vs_Opponent: '100%',
            },


            
          ],
          previousGames: ['300 yards, 3 TDs', '250 yards, 2 TDs'],
          season: [{
            Games_Played: ["70"],
            TOI: ["18:23"],
            PTS: ["1"],
            G: ["0.3"],
            AST: ["0.7"],
            SOG: ["2.8"],
            FW: ["0"],
            HT: ["0.7"],
            BS: ["0.4"],
        }],
        last_10: [{
            Games_Played: ["10"],
            TOI: ["18:27"],
            PTS: ["1.3"],
            G: ["0.5"],
            AST: ["0.8"],
            SOG: ["2.8"],
            FW: ["0"],
            HT: ["0.6"],
            BS: ["0.1"],
        }],
        last_5: [{
            Games_Played: ["5"],
            TOI: ["17:22"],
            PTS: ["1.4"],
            G: ["0.6"],
            AST: ["0.8"],
            SOG: ["2.6"],
            FW: ["0"],
            HT: ["0.8"],
            BS: ["0"],
        }],
        previous: [{
            Games_Played: ["1"],
            TOI: ["15:40"],
            PTS: ["2"],
            G: ["1"],
            AST: ["1"],
            SOG: ["4"],
            FW: ["0"],
            HT: ["3"],
            BS: ["0"],
        }],
        vs_opponent: [{
            Games_Played: ["1"],
            TOI: ["15:26"],
            PTS: ["2"],
            G: ["1"],
            AST: ["1"],
            SOG: ["6"],
            FW: ["0"],
            HT: ["1"],
            BS: ["0"],
        }],
        },
      ]
  }
]
  },
 
  
  
]

