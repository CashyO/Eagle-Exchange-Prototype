import { useState } from 'react'
import {Routes, Route} from 'react-router'
import './App.css'
// importing the component files 
  // importing menu component
import Navbar from './components/navbar/Navbar'
  // importing the pages
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import Create from './components/Create'
import Edit from './components/Edit'
import Delete from './components/Delete'
import Favorites from './components/Favorites'

// Designing the App features

function App() {

  return (
    <>
      <Navbar
        content={
          <Routes>
            <Route path="" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/delete/:id" element={<Delete />} />
          </Routes>
        }
      />
    </>
  )
}

export default App
