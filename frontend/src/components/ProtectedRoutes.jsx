//Verify that token exist so the user cna navite in the landing pages
//Add this protection in all the routes that you want to protect in App.jsx
import {Outlet, Navigate} from 'react-router-dom'

const ProtectedRoute = () => {
    const token = localStorage.getItem('token')

    return(
        //If token false then redirect to login page, if token is true then render the component
        token ? <Outlet/> : <Navigate to="/login" />
    )

}

export default ProtectedRoute