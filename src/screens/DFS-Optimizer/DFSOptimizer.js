import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, Stat, O_U, SportsbookLine, _OddstoHit, Book1, Book2, Book3, Book4) {
  return { name, Stat, O_U, SportsbookLine, _OddstoHit, Book1, Book2, Book3, Book4 };
}

const rows = [
  createData('John Doe', 'Points', 6.0, 7.0, 42.3, -100, -100, -100, -100),
  createData('John Doe', 'Points', 6.0, 7.0, 42.3, -100, -100, -100, -100),
  createData('John Doe', 'Points', 6.0, 7.0, 42.3, -100, -100, -100, -100),
  createData('John Doe', 'Points', 6.0, 7.0, 42.3, -100, -100, -100, -100),
  createData('John Doe', 'Points', 6.0, 7.0, 42.3, -100, -100, -100, -100),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: '80%', margin: 'auto', boxShadow: 3, background: '#3e3f42' }}>
  <Table sx={{ minWidth: 100 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell style={{ color: 'white' }}>Players</TableCell>
        <TableCell align="right" style={{ color: 'white' }}>Stat</TableCell>
        <TableCell align="right" style={{ color: 'white' }}>O/U</TableCell>
        <TableCell align="right" style={{ color: 'white' }}>Sportsbook Line</TableCell>
        <TableCell align="right" style={{ color: 'white' }}>Odds to Hit</TableCell>
        <TableCell align="right" style={{ color: 'white' }}>Book1</TableCell>
        <TableCell align="right" style={{ color: 'white' }}>Book2</TableCell>
        <TableCell align="right" style={{ color: 'white' }}>Book3</TableCell>
        <TableCell align="right" style={{ color: 'white' }}>Book4</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row" style={{ color: 'white' }}>
            {row.name}
          </TableCell>
          <TableCell align="right"style={{ color: 'white' }}>{row.Stat}</TableCell>
          <TableCell align="right"style={{ color: 'white' }}>{row.O_U}</TableCell>
          <TableCell align="right"style={{ color: 'white' }}>{row.SportsbookLine}</TableCell>
          <TableCell align="right"style={{ color: 'white' }}>{row._OddstoHit}</TableCell>
          <TableCell align="right"style={{ color: 'white' }}>{row.Book1}</TableCell>
          <TableCell align="right"style={{ color: 'white' }}>{row.Book2}</TableCell>
          <TableCell align="right"style={{ color: 'white' }}>{row.Book3}</TableCell>
          <TableCell align="right"style={{ color: 'white' }}>{row.Book4}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
  );
}