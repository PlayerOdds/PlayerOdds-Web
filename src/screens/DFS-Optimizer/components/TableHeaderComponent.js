import React from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';
import { HeadercellStyle, imageContainerStyle, imageStyle } from './styles'; // Assume styles are exported from a separate file
import { DraftKingsLogo, Bovada, FanDuel, BetMGM, Pinnacle, Barstool, PrizPicksLogo } from '../../../images/ImageRepository';
const TableHeaderComponent = () => (
  <TableHead>
    <TableRow>
      <TableCell style={HeadercellStyle}>Players</TableCell>
      <TableCell style={HeadercellStyle}>Stat</TableCell>
      <TableCell style={HeadercellStyle}>O/U</TableCell>
      <TableCell style={{ color: 'white', textAlign: 'center', backgroundColor: '#1D3448',  borderBottom: '2px solid black',}}>
        <div style={imageContainerStyle}>
          <img src={PrizPicksLogo} alt="FanDuel" style={imageStyle} />
        </div>
      </TableCell>
      <TableCell style={HeadercellStyle}>Sportsbook Line</TableCell>
      <TableCell style={HeadercellStyle}>% Odds to Hit</TableCell>
      <TableCell style={HeadercellStyle}>
        <div style={imageContainerStyle}>
          <img src={FanDuel} alt="FanDuel" style={imageStyle} />
        </div>
      </TableCell>
      <TableCell style={HeadercellStyle}>
        <div style={imageContainerStyle}>
          <img src={Bovada} alt="Bovada" style={imageStyle} />
        </div>
      </TableCell>
      <TableCell style={HeadercellStyle}>
        <div style={imageContainerStyle}>
          <img src={DraftKingsLogo} alt="DraftKingsLogo" style={imageStyle} />
        </div>
      </TableCell>
      <TableCell style={HeadercellStyle}>
        <div style={imageContainerStyle}>
          <img src={BetMGM} alt="BetMGM" style={imageStyle} />
        </div>
      </TableCell>
      <TableCell style={HeadercellStyle}>
        <div style={imageContainerStyle}>
          <img src={Pinnacle} alt="Pinnacle" style={imageStyle} />
        </div>
      </TableCell>
      <TableCell style={HeadercellStyle}>
        <div style={imageContainerStyle}>
          <img src={Barstool} alt="Barstool" style={imageStyle} />
        </div>
      </TableCell>
    </TableRow>
  </TableHead>
);

export default TableHeaderComponent;