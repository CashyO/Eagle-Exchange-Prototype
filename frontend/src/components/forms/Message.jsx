import * as React from 'react';
import {Box, Typography} from '@mui/material';

// Formik Parameters (starts at value)
// Yup Parameters (start at error)
export default function MyMessage({messageText, messageColor}) {
  return (
    <Box
        sx={{
            width: '100%',
            height: '30px',
            color: 'white',
            marginBottom: '20px',
            padding: '10px',
            display: 'flex',
            backgroundColor: messageColor,
            alignItems: 'center'
        }}
        >
        <Typography>
            {messageText}
        </Typography>
    </Box>
      
  );
}
