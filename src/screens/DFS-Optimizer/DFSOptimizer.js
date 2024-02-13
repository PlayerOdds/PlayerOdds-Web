import React, { useState } from 'react';
import { TableContainer, Table, Paper, TableBody } from '@mui/material';
import TableRowComponent from './components/TableRowComponent';
import TableHeaderComponent from './components/TableHeaderComponent';
import MultiSelectDropdown from './components/LeagueFilter'; // Import the component
import SearchBar from './components/SearchBar'; // Make sure this path is correct
import { rows } from './components/data'; 

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
      <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: 'auto', boxShadow: 3, background: '#03161C' }}>
        {/* Flex container to align items */}
        <div style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          <div style={{ marginRight: '20px' }}> 
            <MultiSelectDropdown options={playerOptions} setSelectedOptions={setSelectedOptions} />
          </div>
          <SearchBar/>
        

        </div>
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableHeaderComponent />
          <TableBody>
            {filteredRows.map((row) => (
              <TableRowComponent key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}