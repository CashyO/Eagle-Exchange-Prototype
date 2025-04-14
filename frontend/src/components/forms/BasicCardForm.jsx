import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

// This is a basic card form component that includes an image upload button and a placeholder for an image. 

export default function BasicCardForm() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <AspectRatio minHeight="120px" maxHeight="200px">
            <img
            
            />
        </AspectRatio>
      </CardContent>
      <CardActions>
        <Button size="small"  display='flex' justifyContent='center'>Upload Photo</Button>
      </CardActions>
    </Card>
  );
}
