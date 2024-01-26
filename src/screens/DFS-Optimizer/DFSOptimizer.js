import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { DraftKingsLogo, Bovada, FanDuel, BetMGM, Pinnacle, Barstool, PrizPicksLogo } from '../../images/ImageRepository';

function createData(name, Stat, O_U, SportsbookLine,PrizePicks, _OddstoHit, Book1, Book2, Book3, Book4, Book5, Book6) {
  return { name, Stat, O_U, SportsbookLine, PrizePicks, _OddstoHit, Book1, Book2, Book3, Book4, Book5, Book6 };
}

const rows = [
  createData('Patrick Mahomes', 'Passing Yards', 'Under', 220.5, 225.5, '57.34%', -160, -156, -124, -143, -123, -154),
  createData('Brittney Grinder', 'Points + Rebs', 'Under', 13.5, 12.5, '57.13%', -160, -156, -124, -143, -123, -154),
  createData('Travis Kelce', 'Receptions', 'Over', 3.5, 4.5, '57.01%', -160, -156, -124, -143, -123, -154),
  createData('Rich Hill', 'Stikeouts', 'Under', 7,8, '56.78%', -160, -156, -124, -143, -123, -154),
  createData('Trae Young', '1st Quarter Points', 'Under', 6, 6, '55.36%', -157, -156, -124, -143, -123, -154),
  createData('Luka Doncic', 'Total Points', 'Over',31.5, 30.5, '54.36%', -157, -156, -124, -143, -123, -154),
  createData('Anyhony Edwards', 'Points + Ast', 'Under', 39.5, 39.5, '54.36%', -157, -156, -124, -143, -123, -154),
  createData('Lamar Jackson', 'Rushing Yards', 'Over', 76.5, 76.5, '53.36%', -157, -156, -124, -143, -123, -154),
  createData('Lamar Jackson', 'Rushing Yards', 'Over', 76.5, 76.5, '53.36%', -157, -156, -124, -143, -123, -154),
  createData('Lamar Jackson', 'Rushing Yards', 'Over', 76.5, 76.5, '53.36%', -157, -156, -124, -143, -123, -154),
  createData('Lamar Jackson', 'Rushing Yards', 'Over', 76.5, 76.5, '53.36%', -157, -156, -124, -143, -123, -154),
  createData('Lamar Jackson', 'Rushing Yards', 'Over', 76.5, 76.5, '53.36%', -157, -156, -124, -143, -123, -154),
];

export default function BasicTable() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const playerNames = rows.map(row => row.name);
  const filteredRows = selectedPlayer ? rows.filter(row => row.name === selectedPlayer) : rows;

  const imageStyle = {
    maxWidth: '70px',
    maxHeight: '25px',
    objectFit: 'contain'
  };

  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };

  const cellStyle = {
    color: 'white',
    textAlign: 'center',
    borderBottom: '2px solid black', 
  };
  const HeadercellStyle = {
    color: 'white',
    textAlign: 'center',
    borderBottom: '2px solid black',
    backgroundColor: '#1D3448',
  };
  
  const getOddsToHitCellStyle = (percentage) => {
    const isUnder55 = parseFloat(percentage.replace('%', '')) < 55;
    return {
      color: 'white',
      textAlign: 'center',
      backgroundColor: isUnder55 ? '#4CBB17' : '#0b6623',
      borderRadius: '10px',
      padding: '15px',
      display: 'inline-block',
      borderBottom: '2px solid black',
    };
  };

  return (
    <>
    <div style={{ display: 'flex',  marginBottom: '20px' }}>
      <Autocomplete
        options={playerNames}
        style={{ width: 200, marginBottom: '20px', marginLeft: '20px', background:'#1D2C36', color:'white,'}}
        renderInput={(params) => <TextField {...params} label="Filter by Team" />}
        value={selectedPlayer}
        onChange={(event, newValue) => {
          setSelectedPlayer(newValue);
        }}
      />
      <Autocomplete
        options={playerNames}
        style={{ width: 200, marginBottom: '20px',marginLeft: '20px', background:'#1D2C36',}}
        renderInput={(params) => <TextField {...params} label="Filter by Player" />}
        value={selectedPlayer}
        onChange={(event, newValue) => {
          setSelectedPlayer(newValue);
        }}
      />
      <Autocomplete
        options={playerNames}
        style={{ width: 200, marginBottom: '20px',marginLeft: '20px', background:'#1D2C36',}}
        renderInput={(params) => <TextField {...params} label="Filter by Book"
        value={selectedPlayer}
        onChange={(event, newValue) => {
          setSelectedPlayer(newValue);
        }} />}
      />
      <Autocomplete
        options={playerNames}
        style={{ width: 200, marginBottom: '20px', marginLeft: '20px', background:'#1D2C36',}}
        renderInput={(params) => <TextField {...params} label="Filter by Player" />}
        value={selectedPlayer}
        onChange={(event, newValue) => {
          setSelectedPlayer(newValue);
        }}
      />
    </div>
    <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: 'auto', boxShadow: 3, background: '#03161C' }}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell style={HeadercellStyle}>Players</TableCell>
            <TableCell style={HeadercellStyle}>Stat</TableCell>
            <TableCell style={HeadercellStyle}>O/U</TableCell>
            <TableCell style={{ color: 'white', textAlign: 'center', backgroundColor: '#1D3448',  borderBottom: '2px solid black',}}>
             <div style={imageContainerStyle}>
                <img src={PrizPicksLogo} alt="FanDuel" style={imageStyle} />
              </div></TableCell>
            <TableCell style={HeadercellStyle}>Sportsbook Line</TableCell>
            <TableCell style={HeadercellStyle}>% Odds to Hit</TableCell>
            <TableCell style={HeadercellStyle}>
              <div style={imageContainerStyle}>
                <img src={FanDuel} alt="FanDuel" style={imageStyle} />
              </div>
            </TableCell>
            <TableCell style={HeadercellStyle}>
              <div style={imageContainerStyle}>
                <img src={DraftKingsLogo} alt="Draft Kings" style={imageStyle} />
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
            <TableCell style={HeadercellStyle}>
              <div style={imageContainerStyle}>
                <img src={Bovada} alt="Bovada" style={imageStyle} />
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}