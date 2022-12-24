import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Checkbox, Container, ListItem, ListItemButton, ListItemIcon, TextField, Typography } from '@mui/material';
import { alpha, height } from '@mui/system';
import styled from '@emotion/styled/types/base';
import { ThemeContext } from '@emotion/react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';

//search MUI
//ANT
//
function App() {
  const [count, setCount] = useState(0)

  // const containerStyle = {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // };

  return (
    <Container sx={{
      
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
    }}>
      

      <Typography sx={{
        color: 'blue',
        display: 'block',
      }}>Time to get shit done!</Typography>
      <br></br>
      
      {/* <Box sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'grey'
      }}>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Box> */}
      


      <ListItem sx={{
        color: 'red'
        }}>Item 1 
        <Checkbox ></Checkbox>
      </ListItem>
      <ListItem sx={{
        color: 'blue'
        }}>Item 3 
        <Checkbox ></Checkbox>
      </ListItem>
      <ListItem sx={{
        color: 'green'
        }}>Item 2 
        <Checkbox ></Checkbox>
      </ListItem>
      
    </Container>
  )
}

export default App
