import React, { useState } from 'react';
import { TableContainer, Table, Paper, TableBody } from '@mui/material';
import TableRowComponent from './components/TableRowComponent';
import TableHeaderComponent from './components/TableHeaderComponent';
import MultiSelectDropdown from './components/filterpart'; // Import the component
import { rows } from './components/data'; 

export default function BasicTable() {
  // State to hold selected options from the dropdown
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Prepare options for the dropdown based on 'rows' data
  const playerOptions = rows.map(row => ({ label: row.name, value: row.name }));

  // Filter rows based on selected options
  const filteredRows = selectedOptions.length > 0 
    ? rows.filter(row => selectedOptions.includes(row.name)) 
    : rows;

  return (
    <>
      <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: 'auto', boxShadow: 3, background: '#03161C' }}>
        <div style={{ padding: '20px' }}>
          <MultiSelectDropdown options={playerOptions} setSelectedOptions={setSelectedOptions} />
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