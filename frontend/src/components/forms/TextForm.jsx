import * as React from 'react';
import TextField from '@mui/material/TextField';


export default function TextForm({label, value, name, onChange, onBlur, error, helperText}) {

  // Formik Parameters:
  //  value =  The current value of the field
  //  name =  The name of the field  
  //  onChange =  A function to call when the value changes
  //  onBlur =  A function to call when the field loses focus

  // Yup Parameters:
  //  error =  A boolean indicating whether the field has an error (display red)
  //  helperText =  The error message to display if the field has an error
  
  return (
      <TextField 
            id="standard-basic" 
            sx={{ width: '100%' }}
            label={label}
            variant="outlined"

            value={value}
            name={name}
            onChange={onChange}
            onBlur={onBlur}

            error={error} 
            helperText={helperText} 
        />
  );
}
