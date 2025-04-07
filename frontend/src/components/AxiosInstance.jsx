//create a component that can be used to get request from the backend or frontend
// Axios are used to take the information from the frontend and send it to the backend and vice versa
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/' //backend baseurl

//Create an axios called AxiosInstance that is const
const AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 5000, //time between pressing a button and getting the request run
    withCredentials: true, //Important so the code will be saved in the backend when user request code verification
    headers:{
        "Content-Type":"application/json", //the type of info we are getting is: application/json
         accept: "application/json"
    }
})


export default AxiosInstance;