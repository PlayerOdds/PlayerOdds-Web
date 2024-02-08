import * as React from 'react';
import { useState } from 'react';
import { TableContainer, Table, Paper, Autocomplete, TextField, TableBody } from '@mui/material';
import TableRowComponent from './components/TableRowComponent';
import TableHeaderComponent from './components/TableHeaderComponent';
import { rows, createData } from './components/data'; 

export default function BasicTable() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const playerNames = rows.map(row => row.name);
  const filteredRows = selectedPlayer ? rows.filter(row => row.name === selectedPlayer) : rows;

  return (
    <>
      <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: 'auto', boxShadow: 3, background: '#03161C' }}>
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