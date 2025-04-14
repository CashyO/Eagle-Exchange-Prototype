import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import {Link, useLocation} from 'react-router';
//Import Icons
import AddBoxIcon from '@mui/icons-material/AddBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';


// Designing the Compact Menu feature for the project

export default function MenuShort() {

  const location = useLocation()
  const path = location.pathname
  console.log(path)

  return (
    <>
    {/*Creating a List of Buttons*/}
    
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

      <ListItemButton component={Link} to="/create" selected={path === "/create"} sx={{display:'flex', justifyContent:'center'}}>
        <ListItemIcon sx={{display:'flex', justifyContent:'center'}}>
            <AddBoxIcon />
        </ListItemIcon>
      </ListItemButton>

      <ListItemButton component={Link} to="/profile" selected={path === "/profile"} sx={{display:'flex', justifyContent:'center'}}>
        <ListItemIcon sx={{display:'flex', justifyContent:'center'}}>
            <AccountCircleIcon />
        </ListItemIcon>
      </ListItemButton>

      <ListItemButton component={Link} to="/messages" selected={path === "/messages"} sx={{display:'flex', justifyContent:'center'}}>
        <ListItemIcon sx={{display:'flex', justifyContent:'center'}}>
            <MailIcon />
        </ListItemIcon>
      </ListItemButton>

      <ListItemButton component={Link} to="/notification" selected={path === "/notification"} sx={{display:'flex', justifyContent:'center'}}>
        <ListItemIcon sx={{display:'flex', justifyContent:'center'}}>
            <SettingsIcon />
        </ListItemIcon>
      </ListItemButton>

  
    </List>

    </>
  );
}