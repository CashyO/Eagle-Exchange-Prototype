import { useState } from 'react'

import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import ProtectedRoute from './components/ProtectedRoutes'

// importing the component files 
// importing the landing pages
import Navbar from './components/navbar/Navbar'
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import UserListings from './components/UserListings'
import Create from './components/Create'
import Edit from './components/Edit'
import Delete from './components/Delete'
import Listing from './components/Listing'
import Favorites from './components/Favorites'
import Notification from './components/Notification'
import Profile from './components/Profile'
import Messages from './components/Messages'
// importing the LogIn/SignUp pages
import TemplateLogIn from './components/LogIn/TemplateLogIn'
import LogInPage from './components/LogIn/LogInPage'
import Verification from './components/LogIn/Verification'
import Information from './components/LogIn/Information'

/*
  To make the code cleaner and more readable,
  I changed the format of the if else statement to a ternary opertator.
  - The ternary operator is a shorthand way of writing an if-else statement.
  Now the parameterized URLs can function properly.
*/

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Define routes that require the Navbar
  const navbarRoutes = [
    '/',
    '/dashboard',
    '/messages',
    '/profile',
    '/notification',
    '/favorites',
    '/create',
    '/userlistings',
  ];

  // Check if the current path matches any of the navbar routes or parameterized routes
  const isNavbarRoute =
    navbarRoutes.includes(location.pathname) ||
    /^\/(edit|delete|listing)\/[^/]+$/.test(location.pathname); // Matches /edit/:id, /delete/:id, /listing/:id

  if (isNavbarRoute) {
    return (
      <>
        <Navbar
          content={
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Landing />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path='/userlistings' element={<UserListings />} />
                <Route path="/create" element={<Create />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/delete/:id" element={<Delete />} />
                <Route path="/listing/:id" element={<Listing />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/messages" element={<Messages />} />
              </Route>
            </Routes>
          }
        />
      </>
    );
  } else {
    return (
      <>
        <TemplateLogIn
          content={
            <Routes>
              <Route path="/verification" element={<Verification />} />
              <Route path="/login" element={<LogInPage />} />
              <Route path="/information" element={<Information />} />
            </Routes>
          }
        />
      </>
    );
  }
}

export default App;
