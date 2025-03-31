import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';



export default function Info() {

  const navigate = useNavigate();//variable navigate to acces the main page when the user clicks on LogIn button

  return (
    <>
          <div>
            <Typography level="h4" component="h1">
              <b>Profile Information</b>
            </Typography>
          </div>
          <FormControl>
            <Input
              // html input attribute
              name="Fisrt Name"
              type="Fisrt Name"
              placeholder="Fisrt Name"
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
              name="password"
              type="password"
              placeholder="password"
            />
          </FormControl>
            <Button sx={{ mt: 1 }} onClick={() => navigate("/")}>Create Account</Button>
         
    </>
  );
}