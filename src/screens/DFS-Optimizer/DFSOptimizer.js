import React, { useState } from 'react';
import { TableContainer, Table, Paper, TableBody } from '@mui/material';
import TableRowComponent from './components/TableRowComponent';
import TableHeaderComponent from './components/TableHeaderComponent';
import TableFilter from './components/TableFilter'; // Make sure this path is correct
import { rows } from './components/data'; 
import PlayerLine from './components/PlayerLine';

export default function BasicTable() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // New state for search term

  const playerOptions = rows.map(row => ({ label: row.name, value: row.name }));

  // First filter rows based on selected options, then filter based on search term
  const filteredRows = rows.filter(row => 
    (selectedOptions.length === 0 || selectedOptions.includes(row.name)) &&
    (searchTerm === '' || row.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const playersData = [
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
   
  ];


  
console.log(PlayerLine)
 return (
  <>
    <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: 'auto', boxShadow: 3, background: '#0f1a1b' }}>

      <TableFilter/>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHeaderComponent />
        <TableBody>
          {filteredRows.map((row) => (
            <TableRowComponent key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
   
    <div className="bg-gray-900 p-4">
    {playersData.map((player, idx) => (
      <div key={idx} className="bg-gray-800 text-white p-4 my-2 rounded-lg">
        <div className="grid grid-cols-5 gap-2"> {/* Adjusted gap from 5 to 2 */}
          
          {/* Player Info */}
          <div className="flex items-center space-x-2">
            <img src={player.image} alt={player.name} className="w-12 h-12 rounded-full" />
            <div>
              <h2 className="font-bold">{player.name}</h2>
              <p className="text-sm">{player.teamInfo}</p>
              <p className="text-sm">{player.matchup}</p>
            </div>
          </div>

          {/* Betting Line */}
          <div className="flex flex-col bg-purple-700 items-center space-y-2 rounded-lg p-2">
            <div className="px-2 py-1 rounded">
              <span className="text-sm">LINE</span>
            </div>
            <div className="px-2 py-1 rounded">
              <span className="text-sm">{player.line}</span>
            </div>
            <div className="px-2 py-1 rounded">
              <span className="text-sm">{player.betType}</span>
            </div>
          </div>

          {/* O/U */}
          <div className="flex flex-col items-center space-y-2">
            <div className={`${player.pick === 'UNDER' ? 'bg-red-500' : 'bg-green-500'} px-4 py-1 rounded`}>
              <span className="text-sm">{player.pick}</span>
            </div>
          </div>

          {/* Odds to Hit */}
          <div className="flex flex-col bg-purple-700 items-center space-y-2">
            <div className="px-4 py-1 rounded">
              <span className="text-sm">ODDS TO HIT</span>
            </div>
            <div className="px-4 py-1 rounded">
              <span className="text-sm">{player.odds}</span>
            </div>
            <div className="px-4 py-1 rounded">
              <span className="text-sm">{player.oddsValue}</span>
            </div>
          </div>

          {/* Platforms */}
        <div className="grid grid-cols-4 gap-1 mt-2">
          {player.platforms.map((platform, index) => (
            <div key={index} className="bg-gray-700 px-2 py-1 rounded flex justify-between items-center">
              <span className="text-xs font-semibold">{platform.platform}</span>
              <span className="text-xs">{platform.line}</span>
              <span className="text-xs">{platform.odds}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    ))}
  </div>
  </>
);
}