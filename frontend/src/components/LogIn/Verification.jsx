import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import FormLabel from '@mui/joy/FormLabel';
import AxiosInstance from '../AxiosInstance'; // Corrected path




export default function veri(){

     /* onSubmit IS THE FUNCTION TO PASS THE DATA TO THE SERVER (BACKEND) */ 
     const navigate = useNavigate();//variable navigate to another page
  
     const {
       register,
       handleSubmit,
       formState: { errors },
       setError,
     } = useForm();
 
     const onSubmit = async (data, action) => {
       // Log the data before sending
       console.log("Data being sent:", data);
     
       try {
         const response = await AxiosInstance.post('/verification/', {
           email: data.email,
           code: data.code,
           action: action
         });
         console.log("Server response:", response.data);
         if (response.data.message === 'Verification successful') {
            // Save the email ifor info page
            navigate('/information', { state: { email: data.email } }); 
          }
 
       } catch (error) {
         console.error("Submission error:", error.response?.data || error.message);
        // Set error message
        setError("code", {
            type: "manual",
            message: error.response?.data?.error || "Only @my.erau.edu or @erau.edu emails are allowed.",
        });
       }
     };
 

    /* RETURN THE FRONTEND  WITH  onSubmit FUNCTION INCLUDED*/ 
    return (
        <>

        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "10px" }} >

            <div>
              <Typography level="h4" component="h1">
                <b>Verification Code</b>
              </Typography>
            </div>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                type="email"
                placeholder="@my.erau.edu or @erau.edu"
                {...register("email", { required: true})}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Verification Code</FormLabel>
                <Input
                    type="text"
                    placeholder="XXXXXX"
                    {...register("code")} // optional if just sending
                />
                {errors.code && <span>{errors.code.message}</span>}
            </FormControl>
            
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <Chip
                    variant="outlined"
                    color="primary"
                    size="lg"
                    //onClick={() => alert('A new code was send!')}>
                    onClick={handleSubmit((data) => onSubmit(data, "send"))}>
                Send or Resend Code
                </Chip>
            </Box>

            <Button sx={{ mt: 1 }} 
                  onClick={handleSubmit((data) => onSubmit(data, "verify"))}>
                Verify your account
            </Button>

            <Typography level="body-sm">
                <strong>Note:</strong> Only emails ending in <code>@my.erau.edu</code> or <code>@erau.edu</code> may be used for account verification.
            </Typography>
        
        </form>
        </>
    )

}
