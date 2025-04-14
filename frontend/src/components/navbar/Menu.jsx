import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {Link, useLocation} from 'react-router';
//Import Icons
import AddBoxIcon from '@mui/icons-material/AddBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';

// Designing the Menu Feature of the Project

export default function Menu() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const location = useLocation()
  const path = location.pathname
  console.log(path)

  return (
    <>
    {/*Designing Buttons and Giving Functionality */}

    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
            The Exchange
        </ListSubheader>
      }
    >        
        {/*The Navigation Dropdown Button*/}
      <ListItemButton sx={{ pl: 4 }} onClick={handleClick} >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Navigation" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

            {/*The Landing button (assigning a link to the button)*/}
          <ListItemButton sx={{ pl: 4 }}  component={Link} to="/" selected={path === "/"}>
            <ListItemIcon>
              <DashboardCustomizeIcon />
            </ListItemIcon>
            <ListItemText primary="Landing" />
          </ListItemButton>

            {/*The Dashboard button (assigning a link to the button)*/}
          <ListItemButton sx={{ pl: 4 }}  component={Link} to="/dashboard" selected={path === "/dashboard"}>
            <ListItemIcon>
              <DashboardCustomizeIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

            {/*The Favorites button (assigning a link to the button)*/}
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/favorites" selected={path === "/favorites"}>
            <ListItemIcon>
              <DashboardCustomizeIcon />
            </ListItemIcon>
            <ListItemText primary="Favorites" />
          </ListItemButton>

        </List>
      </Collapse>
    </List>

    <List
    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
    <ListSubheader component="div" id="nested-list-subheader">
        Listings
    </ListSubheader>
    }
    >
        {/*The Create button (assigning a link to the button)*/}
    <ListItemButton sx={{ pl: 4 }} component={Link} to="/create" selected={path === "/create"}>
        <ListItemIcon>
            <AddBoxIcon />
        </ListItemIcon>
        <ListItemText primary="Create Listing" />
    </ListItemButton>
    
    
    {/*My Account Section*/}
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
            My Account
        </ListSubheader>
      }
    >  
    </List>

    {/*The Profile Information button (assigning a link to the button)*/}
    <ListItemButton sx={{ pl: 4 }}  component={Link} to="/profile" selected={path === "/profile"}>
    <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Profile Information" />
    </ListItemButton>
    {/*The Messages button (assigning a link to the button)*/}
    <ListItemButton sx={{ pl: 4 }}  component={Link} to="/messages" selected={path === "/messages"}>
      <ListItemIcon>
          <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Messages" />
    </ListItemButton>
    {/*The Notifications button (assigning a link to the button)*/}
    <ListItemButton sx={{ pl: 4 }}  component={Link} to="/notification" selected={path === "/notification"}>
      <ListItemIcon>
          <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Notifications" />
    </ListItemButton>

    </List>

    </>
  );
}