import React, { useState } from 'react';
import { TableCell, TableRow } from '@mui/material';
import { cellStyle, getO_UStyle, getOddsToHitCellStyle } from './styles';

const TableRowComponent = ({ row }) => {
  // Use useState to manage hover state
  const [hover, setHover] = useState(false);

  // Conditional style for hover effect
  const hoverStyle = hover ? { backgroundColor: '#232d36' } : {};

  return (
    <TableRow
      key={row.name}
      onMouseEnter={() => setHover(true)} // Set hover to true when mouse enters the row
      onMouseLeave={() => setHover(false)} // Set hover to false when mouse leaves the row
      style={hoverStyle} // Apply conditional styling based on hover state
    >
      <TableCell style={cellStyle} align="center" component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="center"  style={cellStyle}>{row.Stat}</TableCell>
      <TableCell align="center" style={cellStyle}>
      <div style={getO_UStyle(row.O_U)}>
        {row.O_U}
        </div>
      </TableCell>
      <TableCell align="center" style={{ ...cellStyle, color: 'white', backgroundColor: '#223446', borderBottom: '2px solid black' }}>
        {row.SportsbookLine}
      </TableCell>
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
};

export default TableRowComponent;
