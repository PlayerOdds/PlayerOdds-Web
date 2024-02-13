import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

// Changed the function name from App to SearchBar
function SearchBar() {
  const playerNames = [
    { label: 'Player 1', value: 'player1' },
    { label: 'Player 2', value: 'player2' },
    // Add more player options here
  ];

  const [selectedPlayer, setSelectedPlayer] = useState(null);

  return (
    <div className="App">
      <div className="max-w-md mx-auto">
        <Autocomplete
          options={playerNames}
          style={{ width: 200, background:'#1D2C36', color: 'white' }}
          renderInput={(params) => (
            <TextField {...params}
              label="Search for Player"
              InputLabelProps={{
                style: { color: 'white' },
              }}
              // Apply styles to the input element
              inputProps={{
                ...params.inputProps,
                style: { color: 'white' } // Make text color white
              }}
              // Apply styles to the notched outline
              InputProps={{
                ...params.InputProps,
                notchedOutline: {
                  borderColor: 'white',
                },
                style: { color: 'white' } // Ensure the dropdown icon matches
              }}
            />
          )}
          value={selectedPlayer}
          onChange={(event, newValue) => {
            setSelectedPlayer(newValue);
          }}
        />
      </div>
    </div>
  );
}

// Updated the export statement to export SearchBar instead of App
export default SearchBar;