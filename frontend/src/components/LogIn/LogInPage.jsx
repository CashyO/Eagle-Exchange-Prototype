import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';


export default function Login () {

  const navigate = useNavigate();//variable navigate to acces the main page when the user clicks on LogIn button

  return (
    <>
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome to Eagle Exchange!</b>
            </Typography>
            <Typography level="body-sm">Sign in to continue.</Typography>
          </div>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="@my.erau.edu or @erau.edu"
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

            <Button sx={{ mt: 1 }} onClick={() => navigate("/")}>Log in</Button>
            <Typography
              endDecorator={<Link href="/newaccount">Sign up</Link>}
              sx={{ fontSize: 'sm', alignSelf: 'center' }}>
              Don&apos;t have an account?
            </Typography>

    </>
  );
}