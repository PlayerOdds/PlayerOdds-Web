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
    <div key={idx} className="bg-gray-800 max-w-[1800px] mx-auto text-white p-3 my-2 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1 items-center">
        
        {/* PlayerInfo stays on the left */}
        <div className="flex flex-col mb-3 items-center justify-center col-span-1 lg:col-span-1">
          <PlayerInfo name={player.name} teamInfo={player.teamInfo} matchup={player.matchup}/>
        </div>
        
        {/* Group PlayerLine, OddsToHit, OverUnder closer together */}
        <div className="flex flex-row border items-center justify-start lg:col-span-1 space-x-2"> {/* Adjusted for tighter grouping */}
          <div className="border px-2"> {/* Further reduced padding for tightness */}
            <PlayerLine line={player.line} betType={player.betType}/>
          </div>

          <div className="border px-2">
            <OddsToHit odds={player.odds} oddsValue={player.oddsValue}/>
          </div>

          <div className="border px-2">
            <OverUnder pick={player.pick}/>
          </div>
        </div>

        {/* Allocate more flexible space to Platform, allowing expansion or scrolling */}
        <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-2"> {/* Adjusted to give more room */}
          <Platform platforms={player.platforms} />
        </div>
      </div>

    </div>
  ))}
</div>
  </>
);
}