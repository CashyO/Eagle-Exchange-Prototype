import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';


export default function PriceForm({label, value, name, onChange, onBlur, error, helperText}) {

  return (
        <FormControl sx={{width: '100%'}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">{label}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label={label}
            type="number"
            inputProps={{min: 0.00, step: 0.01}}
            sx={{width: '100%'}}

            value={value}
            name={name}
            onChange={onChange}
            onBlur={onBlur}

            error={error}
            helperText={helperText}
            
          />
          {<FormHelperText error>{helperText}</FormHelperText>}
        </FormControl>
  );
}
