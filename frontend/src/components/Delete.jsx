import {React, useState, useEffect} from 'react';
// importing axiosInstance to fetch data from the backend via API calls
import AxiosInstance from './AxiosInstance';
// importing material UI components
import { Box, Button, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
// importing form components
import MyMessage from './forms/Message'; // temporary message form for testing
import UploadForm from './forms/UploadForm'; // temporary upload form for testing 
import BasicCardForm from './forms/BasicCardForm'; // temporary card form for testing
// importing react-router for navigation
import { useNavigate, useParams } from 'react-router-dom';

// The Delete Page Component:
// - This component is responsible for deleting a listing
// - It fetches data from the backend via API calls and displays it in the GUI

// To fetch the data:
// 1. Define a constant variable to get the data from the API endpoint
//    - Use the axiosInstance to make a GET request to the API endpoint
// 2. Store the data in a state variable using the useState hook
// 3. Trigger the API call using the useEffect hook when the component mounts

// The Create Page GUI:
// - The return statement contains div elements

// To incorperate new tables add a new state variable and a new API call in the GetData function:


const Delete = () => {

    // Implementing Parameters from the url
    const MyParameter = useParams()
    const MyId = MyParameter.id 
    console.log("MyId", MyId)

    // To notify the user of succesful upload to database
    const [message, setMessage] = useState([])
    // To retrieve specific records to populate the forms
    const [myData, setMyData] = useState({
        // empty strings & lists because we want to clear the titles so it can be repopulated correctly 
        name: '',
        priceType: '',
        price: 0.00,
        description: '',
        characteristic: [],   
    })
    console.log("My Data", myData)
    // To navigate to another web page
    const navigate = useNavigate()
    
    // 1. Define a constant variable to get the data from the API endpoint
    const GetData = () => 
        {   
            // These are the API endpoints to fetch data from the backend
            // Use Promise.all to fetch data from multiple endpoints concurrently
            Promise.all([
                AxiosInstance.get(`userListing/${MyId}/`)
            ]).then(([userListingRes]) => 
                // The data is stored in the state variables 
                {
                    setMyData(userListingRes.data)
                }).catch((error) => 
                    // Handle any errors that occur during the API calls
                    {
                        console.error("Error fetching data:", error);
                    });
        };

    // 3. Trigger the API call using the useEffect hook when the component mounts
    useEffect(() => 
        {
            GetData()
        }, [])

    const DeleteRecord = (event) => {
        // Make sure the page is not reloaded when the button is clicked
        event.preventDefault()
        // Call the API to delete the record
        AxiosInstance.delete(`userListing/${MyId}/`)
        .then(() =>{
            setMessage(
            <MyMessage
                messageText={"You succesfully deleted data in the database!"}
                messageColor={"green"}
            />
            )
            console.log("Successful data deletion")
            setTimeout(() =>{
            // The web page onSubmit directs to after succesful upload
            navigate('/userlistings')
            // The time till is execute command 1.5 seconds
            }, 1500)
        })
        .catch((error) => {
            console.error("Error deleting data:", error);
            setMessage(
                <MyMessage
                    messageText={"Error deleting data in the database!"}
                    messageColor={"red"}
                />
            )
        })
    }    

    // Return the GUI of the Create page
    // - The return statement contains div elements
    return (
        <div>
            <form onSubmit={DeleteRecord}>

            {message}

            <Box className={"TopBar"} sx={{ display: 'flex', alignItems: 'center' }}>

                <AddBoxIcon sx={{ marginRight: '8px' }} /> 
                <Typography sx={{ fontWeight: 'bold' }} variant='subtitle2'>
                    Are you sure you want to delete this listing?
                </Typography>
            </Box>

            <Box className={'TextBox'}>
            <AddBoxIcon sx={{ marginRight: '8px' }} /> 
                <Typography>
                    You are about to delete the following listing: 
                    <strong>{myData.name}</strong>
                </Typography>
            </Box>
            
            <Box sx={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" fullWidth color="primary" type="submit">
                Delete the Listing
            </Button>
            </Box>
            
            </form>
        </div>
    )
}

export default Delete