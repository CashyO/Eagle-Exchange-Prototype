import {React, useState, useEffect} from 'react';
// importing axiosInstance to fetch data from the backend via API calls
import AxiosInstance from './AxiosInstance';
// importing material UI components
import { Box, Button, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
// importing form components
import TextForm from './forms/TextForm';
import SelectForm from './forms/SelectForm';
import MultiSelectForm from './forms/MultiSelectForm';
import DescriptionForm from './forms/DescriptionForm';
import PriceForm from './forms/PriceForm';
import MyMessage from './forms/Message'; 
import UploadForm from './forms/UploadForm'; // temporary upload form for testing 
import BasicCardForm from './forms/BasicCardForm'; // temporary card form for testing
// importing Formik and Yup for form validation
import { useFormik } from 'formik';
import * as yup from 'yup';
// importing react-router for navigation (useParams)
import { useNavigate, useParams } from 'react-router-dom';

// The Edit Page Component:
// - This component is responsible for editing a listing
// - It fetches data from the backend via API calls and displays it in the GUI

// To fetch the data:
// 1. Define a constant variable to get the data from the API endpoint
//    - Use the axiosInstance to make a GET request to the API endpoint
// 2. Store the data in a state variable using the useState hook
// 3. Trigger the API call using the useEffect hook when the component mounts

// The Create Page GUI:
// - The return statement contains div elements

// To incorperate new tables add a new state variable and a new API call in the GetData function:


const Edit = () => {

    const MyParameter = useParams()
    const MyId = MyParameter.id

    // 2. Define state variables to store data fetched from the API
    const [priceType, setPriceType] = useState([])
    const [contactType, setContactType] = useState([])
    const [characteristic, setCharacteristic] = useState([])
    // To notify the user of succesful upload to database
    const [message, setMessage] = useState([])
    // Loading in the data 
    const [myData, setMyData] = useState({
        name: "",
        description: "",
        price: 0.00,
        priceType: "",
        characteristic: [],
        contactType: "",
        contactName: "",
    })
    // Check that the data is being fetched correctly
    console.log("My data", myData)
    // To navigate to another web page
    const navigate = useNavigate()
    
    // 1. Define a constant variable to get the data from the API endpoint

    const GetData = () => 
        {
            AxiosInstance.get(`priceType/`).then((res) =>
                {
                    setPriceType(res.data)
                })

            AxiosInstance.get(`contactType/`).then((res) => 
                {
                    setContactType(res.data)
                })

            AxiosInstance.get(`characteristic/`).then((res) =>
                {
                    setCharacteristic(res.data)
                })

            AxiosInstance.get(`userListing/${MyId}/`).then((res) => 
                {
                    setMyData(res.data)
                })
        }

    // 3. Trigger the API call using the useEffect hook when the component mounts
    useEffect(() => 
        {
            GetData()
        }, [])

    
    // Yup Validation Schema
    const validationSchema = yup.object({
        // Rules for the form fields (each title must be a column in the model.py file)
        name: yup
            .string()
            .required("Listing Title is required"),
        description: yup
            .string()
            .required("Description is required"),
        price: yup
            .number()
            .nullable()
            .min(0.00, "Price must be 0 or greater")
            .required("Required"),
        priceType: yup
            .string()
            .required("Price Type is required"),
        characteristic: yup
            .array()
            .min(1, "Select at least one tag"),
        contactType: yup
            .string()
            .required("Contact Type is required"),
        contactName: yup
            .string()
            .required("Enter a contact information"),
    })
    
    // Formik Constant to handle form submission and validation (has to exactly same as the columns in the db table)
    const formik = useFormik({
        initialValues: {
            name: myData.name,
            description: myData.description,
            price: myData.price,
            priceType: myData.priceType,
            characteristic: myData.characteristic,
            contactType: myData.contactType,
            contactName: myData.contactName,
        },
        enableReinitialize: true,
        validationSchema: validationSchema, 

        // Creating a function to submit data to the backend
        // Do not forget the backslash '/'
        onSubmit: (values) => {
            AxiosInstance.put(`userListing/${MyId}/`, values)
            .then(() =>
                {
                    console.log("Successful data submission")
                    
                    setMessage(
                        // The pop up message 
                        <MyMessage
                            messageText={"You succesfully updated data to the database!"}
                            messageColor={"green"}
                        />
                    )
                    setTimeout(() =>
                        {
                            // The web page onSubmit directs to after succesful upload
                            navigate('/userlistings')
                            // The time till is execute command 1.5 seconds
                        }, 1500)
                })
            .catch((error) => 
                {
                console.error('Error submitting data:', error);
                });
        }
    })

    // Checking that formik is working correctly
    console.log("Form values", formik.values)

    // Return the GUI of the Create page
    // - The return statement contains div elements
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>

            <Box className={"TopBar"} sx={{ display: 'flex', alignItems: 'center' }}>

                <AddBoxIcon sx={{ marginRight: '8px' }} /> 
                <Typography sx={{ fontWeight: 'bold' }} variant='subtitle2'>
                    Edit a  listing!
                </Typography>
            </Box>

            {message}

            <Box className={"FormBox"}>

                {/* Column 1: Tempoary until image column in model.py class is figured out */}
                <Box className={"FormArea"}>
                    {/*Change: Going to combine the 2 boxes into the Basic Card Form file */}

                    <Box >
                        <SelectForm
                            label={"Communication Preference"} 
                            options={contactType}
                            name='contactType'
                            value={formik.values.contactType}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.contactType && Boolean(formik.errors.contactType)}
                            helperText={formik.touched.contactType && formik.errors.contactType}
                        />
                    </Box>

                    <Box sx={{ marginTop: '16px' }}>
                        <TextForm 
                            
                            label={"Contact Information"}
                            name='contactName'
                            value={formik.values.contactName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.contactName && Boolean(formik.errors.contactName)}
                            helperText={formik.touched.contactName && formik.errors.contactName} 
                        />
                    </Box>
                    
                    {/**/}
                    <Box sx={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}>
                    <Button type="submit" variant="contained" fullWidth color="primary">
                        Submit the Data
                    </Button>
                    </Box>
                    
                </Box>

                {/* Column 2: */}
                <Box className={"FormArea"}>
                    <TextForm 
                        
                        label={"Listing Title"}
                        name='name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name} 
                    />

                    <Box sx={{ marginTop: '16px' }}>
                    <SelectForm
                        label={"Exchange Type"} 
                        options={priceType}
                        name='priceType'
                        value={formik.values.priceType}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.priceType && Boolean(formik.errors.priceType)}
                        helperText={formik.touched.priceType && formik.errors.priceType}
                    />
                    </Box>

                    <Box sx={{ marginTop: '16px' }}>
                    <PriceForm 
                        label={"Price"}
                        name='price'
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.price && Boolean(formik.errors.price)}
                        helperText={formik.touched.price && formik.errors.price}
                    />
                    </Box>

                </Box>

                {/* Column 3: */}
                <Box className={"FormArea"}>
                    <DescriptionForm 
                        label={"Description"} 
                        rows={4}
                        name='description'
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                    />

                    <Box sx={{ marginTop: '16px' }}>
                    <MultiSelectForm 
                        label={"Characteristics"} 
                        options={characteristic}
                        name='characteristic'
                        value={formik.values.characteristic}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.characteristic && Boolean(formik.errors.characteristic)}
                        helperText={formik.touched.characteristic && formik.errors.characteristic}
                    />
                    </Box>
                
                </Box>

            </Box>

            </form>
        </div>
    )
}

export default Edit