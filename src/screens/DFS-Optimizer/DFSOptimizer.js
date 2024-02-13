import React, { useState } from 'react';
import { TableContainer, Table, Paper, TableBody } from '@mui/material';
import TableRowComponent from './components/TableRowComponent';
import TableHeaderComponent from './components/TableHeaderComponent';
import TableFilter from './components/TableFilter'; // Make sure this path is correct
import { rows } from './components/data';
import {playersData} from './components/newdata'
import PlayerLine from './components/PlayerLine';
import PlayerInfo from './components/PlayerInfo';
import OverUnder from './components/OverUnder'
import OddsToHit from './components/OddsToHit';

export default function BasicTable() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // New state for search term

  const playerOptions = rows.map(row => ({ label: row.name, value: row.name }));

  // First filter rows based on selected options, then filter based on search term
  const filteredRows = rows.filter(row => 
    (selectedOptions.length === 0 || selectedOptions.includes(row.name)) &&
    (searchTerm === '' || row.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );


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
        <div className="grid grid-cols-5 gap-2"> 

          <PlayerInfo name={player.name} teamInfo={player.teamInfo} matchup={player.matchup}/>
          <PlayerLine line={player.line} betType={player.betType}/>
          <OverUnder pick={player.pick}/>
          <OddsToHit odds={player.odds} oddsValue={player.oddsValue}/>
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