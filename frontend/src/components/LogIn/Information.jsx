import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'; // <-- Import useForm
import { useEffect, useState } from "react";
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import AxiosInstance from '../AxiosInstance'; // Corrected path
import { useLocation } from "react-router-dom";




export default function Info() {

    /* onSubmit IS THE FUNCTION TO PASS THE DATA TO THE SERVER (BACKEND) */ 
    const navigate = useNavigate();//variable navigate to other pages

    //Set User Email from the email given in Verification.jsx page
    const location = useLocation();
    const [email, setEmail] = useState(null);

    useEffect(() => {
      // Retrieve email passed through state
      const emailFromState = location.state?.email;
      if (emailFromState) {
        setEmail(emailFromState);
      } else {
        console.log("No email found in state.");
      }
    }, [location]);


    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
      // Log the data before sending
      console.log("Data being sent:", data);
    
      try {
        const response = await AxiosInstance.post('/information/', {
          email: data.email,
          first_name: data.first_name,
          last_name: data.last_name,
          password: data.password,
        });
        console.log("Server response:", response.data);
        navigate(`/`)

      } catch (error) {
        console.error("Submission error:", error.response?.data || error.message);
      }
    };


  /* RETURN THE FRONTEND  WITH  onSubmit FUNCTION INCLUDED*/ 
  return (
    <>
        
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "10px" }} >

          <div>
            <Typography level="h4" component="h1">
              <b>Profile Information</b>
            </Typography>
          </div>

       
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="email"
              value={email} // Set the email value
              {...register("email", {required: true})}
              readOnly // Make the email field read-only since it's pre-filled
            />
            {errors.email && <span>This email is already in use. Please use a different email</span>}
          </FormControl>
          
          
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              placeholder="First Name"
              {...register("first_name", { required: true })}
            />
            {errors.first_name && <span>This field is required</span>}
          </FormControl>

          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              placeholder="Last Name"
              {...register("last_name", { required: true })}
            />
            {errors.last_name && <span>This field is required</span>}
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                {...register("password", { required: true, minLength: 6 })}
              />
            {errors.password && <span>Password must be at least 6 characters</span>}
          </FormControl>

            <Button sx={{ mt: 1 }} type={"submit"}>
                Create Account
            </Button>
        </form>
    </>
  );
}