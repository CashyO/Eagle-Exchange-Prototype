import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import Box from '@mui/material/Box';
import logo from '../../assets/embry-riddle-aeronautical-university-logo-black-and-white.png';


function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
}

export default function TemplateLogIn({content}) {

  //const navigate = useNavigate();//variable navigate to acces the main page when the user clicks on LogIn button

  return (
    <main>
      <CssVarsProvider>
        <ModeToggle />
        <CssBaseline />
        
        {/*BOX FOR LOGO*/}
        <Box sx={{ display: 'flex', backgroundColor: '#1976d2', height: 63, padding: 1, boxShadow: 'xl', borderRadius: 0, alignItems: 'center' }}>
          <img src={logo} style={{ width: '190px', height: 'auto' }} /> {/*add a logo when you find one */}
          <Typography variant="h4" noWrap component="div" sx={{ color: 'white', marginLeft: 1, fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', fontWeight: 'bold', fontSize: '20px', lineHeight: 1.5, letterSpacing: '0.00938em' }}>
           Eagle Exchange 
          </Typography>
        </Box>

        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 16, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}variant="outlined">
          
          {content}

        </Sheet>
      </CssVarsProvider>
    </main>
  );
}