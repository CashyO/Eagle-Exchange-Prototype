import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import ProtectedRoute from './components/ProtectedRoutes'

// importing the component files 
// importing the landing pages
import Navbar from './components/navbar/Navbar'
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import Create from './components/Create'
import Edit from './components/Edit'
import Delete from './components/Delete'
import Favorites from './components/Favorites'
import Notification from './components/Notification'
import Profile from './components/Profile'
import Messages from './components/Messages'
// importing the LogIn/SignUp pages
import TemplateLogIn from './components/LogIn/TemplateLogIn'
import LogInPage from './components/LogIn/LogInPage'
import Verification from './components/LogIn/Verification'
import Information from './components/LogIn/Information'


// Designing the App features

function App() {
  const location = useLocation();

  if (location.pathname === "/" ||location.pathname === '/dashboard' ||location.pathname === '/messages' ||location.pathname === '/profile' ||location.pathname === '/notification' ||location.pathname === '/favorites' || location.pathname === '/create' || location.pathname === '/edit/:id' || location.pathname === '/delete/:id') {
    return (
      <>
        <Navbar
          content={
            <Routes>
              <Route element={<ProtectedRoute/>}>
               <Route path="" element={<Landing />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/create" element={<Create />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/delete/:id" element={<Delete />} />
                <Route path='/notification' element={<Notification />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/messages' element={<Messages />} />
              </Route>
            </Routes>
          }
        />  
         
      </>
    )    
  }
  else if (location.pathname === "/verification" ||location.pathname === '/login' || location.pathname === "/newaccount" || location.pathname === "/information"){
    return (
      <>  
      <TemplateLogIn content ={
        <Routes>
          <Route path="/verification" element={<Verification />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      }/>
      </>
    )    
  }

  
}



export default App
