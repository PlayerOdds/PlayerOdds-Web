import * as React from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar'; 
import Box from '@mui/material/Box';
import { NBA } from '../../../images/ImageRepository';
import { NFL } from '../../../images/ImageRepository';
import { MLB } from '../../../images/ImageRepository';
import { NHL } from '../../../images/ImageRepository';
import { NCAAF } from '../../../images/ImageRepository';
import { WNBA } from '../../../images/ImageRepository';
import { ATP } from '../../../images/ImageRepository';
import { WTA } from '../../../images/ImageRepository';
import { ITF } from '../../../images/ImageRepository';

export default function MultiSelectDropdown() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    // Define options with labels for NBA, NFL, NHL, MLB, etc., and their image imports
    const options = [
      { label: 'NBA', image: NBA },
      { label: 'NFL', image: NFL },
      { label: 'NHL', image: NHL },
      { label: 'MLB', image: MLB },
      { label: 'NCAAF', image: NCAAF },
      { label: 'WNBA', image: WNBA },
      { label: 'ATP', image: ATP },
      { label: 'WTA', image: WTA },
      { label: 'ITF', image: ITF },
      // Add more options as needed
    ];

    // Automatically select all options by setting their indices in the 'checked' state
    const [checked, setChecked] = React.useState(options.map((_, index) => index));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleSelectAll = () => {
        setChecked(options.map((_, index) => index)); // Select all options
    };

    const handleDeselectAll = () => {
        setChecked([]); // Clear selection
    };
    
      return (
        <div>
          <Button
            aria-describedby="select-league"
            variant="contained"
            onClick={handleClick}
            sx={{
                backgroundColor: '#03FD91', // Custom background color
                color: 'black', // Custom text color
                '&:hover': {
                backgroundColor: '#17D475', // A darker shade for the hover state
                },
            }}
            >
            Select League
            </Button>
          <Popover
            id="select-league"
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
                  <Button sx={{ color: 'black',  mt: 1,}} size="small" onClick={handleSelectAll}>Select All</Button>
                  <Button sx={{ color: 'black',  mt: 1,}} size="small" onClick={handleDeselectAll}>Deselect All</Button>
              </Box>
              <List>
                {options.map((option, index) => {
                  const labelId = `checkbox-list-label-${index}`;
      
                  return (
                    <ListItem
                      key={index}
                      disablePadding
                    >
                      <ListItemButton role={undefined} onClick={handleToggle(index)} dense>
                        <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={checked.indexOf(index) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                            sx={{
                                color: '#17D475', // Default color
                                '&.Mui-checked': {
                                color: '#17D475', // Color when checked
                                },
                            }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={option.label} />
                        <IconButton edge="end" aria-label="league-logo">
                          <Box
                            component="img"
                            src={option.image}
                            alt={option.label}
                            sx={{ width: 35, height: 35, objectFit: 'contain' }}
                          />
                        </IconButton>
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Popover>
        </div>
      );
  }