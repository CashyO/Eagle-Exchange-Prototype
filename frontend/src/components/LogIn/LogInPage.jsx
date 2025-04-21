import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { useForm } from 'react-hook-form'; // <-- Import useForm
import AxiosInstance from '../AxiosInstance'; // Corrected path




export default function Login () {

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
        const response = await AxiosInstance.post('/login/', { //post the data in the backend
          email: data.email,
          password: data.password
        });
        console.log("Server response:", response.data);
        //Store the token this is the token that will be used to authenticate the user
        localStorage.setItem('token', response.data.token);
        navigate('/'); 

      } catch (error) {
        console.error("Submission error:", error.response?.data || error.message);
        // Set error under password field
        setError("password", {
          type: "manual",
          message: error.response?.data?.error || "Login failed",
        });
      }
    };


  /* RETURN THE FRONTEND  WITH  onSubmit FUNCTION INCLUDED*/ 
  return (
    <>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "10px" }} > 

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
              type="email"
              placeholder="@my.erau.edu or @erau.edu"
              {...register("email", { required: true})}
            />
          </FormControl>
          
            <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              type="password"
              placeholder="password"
            />
            {errors.password && <span>{errors.password.message}</span>}
            </FormControl>

            <Button sx={{ mt: 1 }} type={"submit"}>
              Log in
            </Button>
            <Typography
              endDecorator={<Link href="/verification">Sign up</Link>}
              sx={{ fontSize: 'sm', alignSelf: 'center' }}>
              Don't have an account?
            </Typography>

      </form>
    </>
  );
}