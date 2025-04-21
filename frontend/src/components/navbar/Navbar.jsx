import {React, useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { IconButton } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Menu from './Menu';
import MenuShort from './MenuShort';
//import logo from '../../assets/Logo.png'; add a logo when you find one
// See if you can use the Embry-Riddle logo
import logo from '../../assets/embry-riddle-aeronautical-university-logo-black-and-white.png';

// Designing the Navigation Bar for the Project 

const drawerWidth = 240;
const shortDrawerWidth = 80

export default function Navbar({content}) {

  const [isBigMenu, setIsBigMenu] = useState(false)

  // Function to switch between menu types (Standard v Compact)
  const changeMenu = () => {
     setIsBigMenu(!isBigMenu)
  }

  // GUI component for the Navigation Bar
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
            <IconButton onClick={changeMenu} sx={{marginRight:'30px', color: 'white'}}>
               {isBigMenu ? <MenuOpenIcon/> : <MenuIcon/>}
            </IconButton>
            <img  width="10%"  src={logo}/> {/*add a logo when you find one */}
            <Typography variant="h6" noWrap component="div">
                - Eagle Exchange 
            </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: isBigMenu ? drawerWidth : shortDrawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: isBigMenu ? drawerWidth : shortDrawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
          {isBigMenu ?  <Menu/> : <MenuShort/>}
           
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
            {content}
      </Box>
    </Box>
  );
}