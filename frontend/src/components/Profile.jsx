import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Box } from '@mui/material';
import AxiosInstance from './AxiosInstance';




export default function Profile() {

  const navigate = useNavigate();//variable navigate to acces the main page when the user clicks on LogIn button
  const logoutUser = () =>{
    AxiosInstance.post(`logoutall/`,{
    })
    .then( () => {
       localStorage.removeItem("token")
       navigate('/')
    }
    )}

  return (
    <>

        <Box
          sx={{
            width: 300,
            width: 300,
            mx: 0, // margin left & right
            my: 0, // margin top & bottom
            py: 0, // padding top & bottom
            px: 0, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
    
          }}variant="outlined">
          
          <div>
            <Typography level="h4" component="h1">
              <b>Profile Information</b>
            </Typography>
          </div>
          <FormControl>
            <Input
              // html input attribute
              name="First Name"
              type="First Name"
              placeholder="First Name"
            />
          </FormControl>
          <FormControl>
            <Input
              // html input attribute
              name="Last Name"
              type="Last Name"
              placeholder="Last Name"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="Password"
              type="Password"
              placeholder="Password"
            />
          </FormControl>
            <Button sx={{ mt: 3 }} onClick={() => navigate("/")}>Update</Button>
            <Button sx={{ mt: -1 }} onClick={() => navigate("/")}>Cancel</Button>
            <Button sx={{ mt: -1 }} onClick={logoutUser}>Log Out</Button>
          

        </Box>
          
    </>
  );
}