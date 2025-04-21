import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MailIcon from '@mui/icons-material/Mail'; 
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {Link, useLocation} from 'react-router'


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
    
    {/*The Menu Title*/}
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
     
    {/*Navigation Drop Down Button*/}
      <ListItemButton sx={{ pl: 4 }} onClick={handleClick} >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Navigation" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

              {/*Landing Page*/}
          <ListItemButton sx={{ pl: 4 }}  component={Link} to="/" selected={path === "/"}>
              <ListItemIcon>
                <DashboardCustomizeIcon />
              </ListItemIcon>
            <ListItemText primary="Landing" />
          </ListItemButton>

        </List>
      </Collapse>
    </List>


    
    {/*The Menu Title*/}
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
            Dashboard 
        </ListSubheader>
      }
    >  
          {/*Dashboard Drop Down*/}
          <ListItemButton sx={{ pl: 4 }} onClick={handleClick} >
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
            <ListItemText primary="Dashboard" /> 
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>

                  {/*Dashboard*/}
                  <ListItemButton sx={{ pl: 4 }}  component={Link} to="/dashboard" selected={path === "/dashboard"}>
                      <ListItemIcon>
                        <AccountCircleIcon />
                      </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItemButton>

                  {/*Create Listing*/}
                  <ListItemButton sx={{ pl: 4 }}  component={Link} to="/create" selected={path === "/create"}>
                      <ListItemIcon>
                        <DashboardCustomizeIcon />
                      </ListItemIcon>
                    <ListItemText primary="Create Listings" />
                  </ListItemButton>


                  {/*My Listing*/}
                  <ListItemButton sx={{ pl: 4 }}  component={Link} to="/userlistings" selected={path === "/userlisting"}>
                      <ListItemIcon>
                        <CalendarViewMonthIcon />
                      </ListItemIcon>
                    <ListItemText primary="My Listings" />
                  </ListItemButton>

                  {/*Notifications*/}
                  <ListItemButton sx={{ pl: 4 }}  component={Link} to="/notification" selected={path === "/notification"}>
                      <ListItemIcon>
                        <CircleNotificationsIcon />
                      </ListItemIcon>
                    <ListItemText primary="Notifications" />
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
        The DMs
    </ListSubheader>
    }
    >

    {/*Chat Button*/}
    <ListItemButton sx={{ pl: 4 }} component={Link} to="/messages" selected={path === "/messages"}>
        <ListItemIcon>
            <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Chat" />
    </ListItemButton>
    
    </List>

    </>
  );
}