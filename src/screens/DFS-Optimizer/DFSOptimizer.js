import React, { useState } from 'react';
import { TableContainer, Table, Paper, TableBody } from '@mui/material';
import TableRowComponent from './components/TableRowComponent';
import TableHeaderComponent from './components/TableHeaderComponent';
import TableFilter from './components/TableFilter'; 
import { rows } from './components/data';
import {playersData} from './components/newdata'
import PlayerLine from './components/PlayerLine';
import PlayerInfo from './components/PlayerInfo';
import OverUnder from './components/OverUnder'
import OddsToHit from './components/OddsToHit';
import Platform from './components/platform';

export default function BasicTable() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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
    <div key={idx} className="bg-gray-800 text-white p-3 my-2 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1 items-center">

        {/* PlayerInfo component */}
        <div className="flex flex-col mb-3 items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">

          <PlayerInfo name={player.name} teamInfo={player.teamInfo} matchup={player.matchup}/>
        </div>

        {/* Combined container for PlayerLine, OverUnder, and OddsToHit */}
        {/* Centered vertically and horizontally on small screens, spaced evenly on large screens */}
        <div className="flex flex-row items-center justify-between sm:space-x-1 md:flex-row md:justify-around lg:justify-around md:items-center md:space-x-2 md:space-y-0 lg:space-x-2 lg:space-y-0 col-span-1 md:col-span-3 lg:col-span-3">
          <PlayerLine line={player.line} betType={player.betType}/>
          <OddsToHit odds={player.odds} oddsValue={player.oddsValue}/>
          <OverUnder pick={player.pick}/>
          
        </div>


        {/* Platform component */}
        <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <Platform platforms={player.platforms} />
        </div>
      </div>

    </div>
  ))}
</div>
  </>
);
}