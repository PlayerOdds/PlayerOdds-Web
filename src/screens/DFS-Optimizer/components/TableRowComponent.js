import React from 'react';
import { TableCell, TableRow } from '@mui/material';
import { cellStyle, getOddsToHitCellStyle } from './styles'; 

const TableRowComponent = ({ row }) => (
  <TableRow key={row.name}>
    <TableCell style={cellStyle} align="center" component="th" scope="row">
      {row.name}
    </TableCell>
    <TableCell align="center" style={cellStyle}>{row.Stat}</TableCell>
    <TableCell align="center" style={cellStyle}>{row.O_U}</TableCell>
    <TableCell align="center" style={{ color: 'white', backgroundColor: '#223446', borderBottom: '2px solid black', }}>{row.SportsbookLine}</TableCell>
    <TableCell align="center" style={cellStyle}>{row.PrizePicks}</TableCell>
    <TableCell align="center" style={cellStyle}>
      <div style={getOddsToHitCellStyle(row._OddstoHit)}>
        {row._OddstoHit}
      </div>
    </TableCell>
    <TableCell align="center" style={cellStyle}>{row.Book1}</TableCell>
    <TableCell align="center" style={cellStyle}>{row.Book2}</TableCell>
    <TableCell align="center" style={cellStyle}>{row.Book3}</TableCell>
    <TableCell align="center" style={cellStyle}>{row.Book4}</TableCell>
    <TableCell align="center" style={cellStyle}>{row.Book5}</TableCell>
    <TableCell align="center" style={cellStyle}>{row.Book6}</TableCell>
  </TableRow>
);

export default TableRowComponent;