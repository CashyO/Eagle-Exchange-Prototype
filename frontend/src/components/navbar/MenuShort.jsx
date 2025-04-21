import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountBoxIcon from '@mui/icons-material/AccountBox'; 
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {Link, useLocation} from 'react-router-dom'


export default function MenuShort() {

  const location = useLocation()
  const path = location.pathname
  console.log(path)

  return (
    <>
    
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
     
    
      <ListItemButton component={Link} to="/" selected={path === "/"} sx={{display:'flex', justifyContent:'center'}}>
        <ListItemIcon sx={{display:'flex', justifyContent:'center'}}>
          <DashboardIcon />
        </ListItemIcon>
      </ListItemButton>


      <ListItemButton component={Link} to="/dashboard" selected={path === "/dashboard"} sx={{display:'flex', justifyContent:'center'}}>
        <ListItemIcon sx={{display:'flex', justifyContent:'center'}}>
          <AccountBoxIcon />
        </ListItemIcon>
      </ListItemButton>

      <ListItemButton component={Link} to="/messages" selected={path === "/messages"} sx={{display:'flex', justifyContent:'center'}}>
        <ListItemIcon sx={{display:'flex', justifyContent:'center'}}>
            <MailIcon />
        </ListItemIcon>

    </ListItemButton>
    </List>

    </>
  );
}