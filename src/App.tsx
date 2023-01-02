import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { AddIcon, Box, Button, Checkbox, Container, Divider, FormControlLabel, FormControl, FormLabel, Grid, ListItem, ListItemButton, ListItemIcon, Radio, RadioGroup, SearchIcon, TextField, Typography } from '@mui/material';
import { alpha, height } from '@mui/system';
import styled from '@emotion/styled/types/base';
import { ThemeContext } from '@emotion/react';

// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// import InboxIcon from '@mui/icons-material/Inbox';

//search MUI
//ANT
//


//a search bar [incl. placeholder words, search icon]
//a dropdown menu => app bar? [incl. account name, profile pic, dropdown button for? ]
//a function to the input button to add items into the list
//a delete function to remove item from the list
//a function to tick & untick items on the list
interface Data {
  stat: string;
  description: string;
  
}

function createData (
  name: string,
  stat: string,
  description: string,

) : Data {

}

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(["item1", "item2", "item3", "item4"])
 
 
 

  return (
    <Container sx={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: "column",
           
    }}>

      {/* Add a search bar here */}
      <div>
        <h1><Typography sx={{
        color: '#00FA9A',
        display: 'block',
        justifyContent: 'center',
        fontWeight: "1000",
        fontSize: "50px",
        fontFamily: "Lucida Handwriting",

      }}>Today</Typography></h1>
      </div>
    
    
      <Box sx={{
        display: "inline-block",
        bgcolor: "#e6fff9",
        color: "grey",
        width: " 100%",
        flexDirection: "column",
        justifyContent: "center",
      }}>
      <RadioGroup sx={{
        justifyContent: 'center',
      }}>
      {data.map(item => <ListItem sx={{
          }}>{item} 
          <Checkbox>{/**checkbox needs a function to manipulate item in string to be crossed out */}</Checkbox>
          {/**add a button to delete list item here */}
        </ListItem> )
        
      }
      </RadioGroup>
      </Box>
     
      <Box>
        <TextField 
          id="standard-basic" 
          label="New items here!"
        />

        <Button 
        variant="contained"
        onClick={() => {
          data.map(item => <ListItem>item<CheckBox></CheckBox></ListItem>)}}
        sx={{
          fontSize: "22px",
          color: "#00664d",
          backgroundColor: "#99ffe6",
        }}>
          +
        </Button>
      </Box>


      
    </Container>
  )
}

export default App
