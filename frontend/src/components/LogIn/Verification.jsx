
import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';


export default function veri(){
  const navigate = useNavigate();//variable navigate to acces the main page when the user clicks on LogIn button

    return (
        <>
            <div>
              <Typography level="h4" component="h1">
                <b>Verification Code</b>
              </Typography>
            </div>
            <FormControl>
              <Input
                // html input attribute
                name="code"
                type="code"
                placeholder="XXXX"
              />
            </FormControl>
            
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <Chip
                variant="outlined"
                color="primary"
                size="lg"
                onClick={() => alert('A new code was send!')}>
              Resend Code
              </Chip>
            </Box>

            <Button sx={{ mt: 1 }} onClick={() => navigate("/information")}>Verify your account</Button>

        </>
    )

}
