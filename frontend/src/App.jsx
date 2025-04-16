import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
// Importing the component files //
// Navbar Pages
import Navbar from './components/navbar/Navbar';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import UserListings from './components/UserListings';
import Create from './components/Create';
import Edit from './components/Edit';
import Delete from './components/Delete';
import Listing from './components/Listing';
import Favorites from './components/Favorites';
import Notification from './components/Notification';
import Profile from './components/Profile';
import Messages from './components/Messages';
// Login Pages
import TemplateLogIn from './components/LogIn/TemplateLogIn';
import LogInPage from './components/LogIn/LogInPage';
import Verification from './components/LogIn/Verification';
import Information from './components/LogIn/Information';

/*
  To make the code cleaner and more readable,
  I changed the format of the if else statement to a ternary opertator.
  - The ternary operator is a shorthand way of writing an if-else statement.
  Now the parameterized URLs can function properly.
*/

function App() {
  const location = useLocation();

  // Define routes for pages with the Navbar
  const navbarRoutes = (
    <Navbar
      content={
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<Create />} />
          <Route path="/userlistings" element={<UserListings />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/listing/:id" element={<Listing />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      }
    />
  );

  // Define routes for login and signup pages
  const loginRoutes = (
    <TemplateLogIn
      content={
        <Routes>
          <Route path="/verification" element={<Verification />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      }
    />
  );

  // Render the appropriate routes based on the current path
  return (
    <>
      {location.pathname.startsWith('/verification') ||
      location.pathname.startsWith('/login') ||
      location.pathname.startsWith('/information')
        ? loginRoutes
        : navbarRoutes}
    </>
  );
}

export default App;
