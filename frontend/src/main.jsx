import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";

// Designing the Frontend features

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*Wrapping the App with React Router library*/}
    <BrowserRouter>      
        <App />
    </BrowserRouter>
  </StrictMode>,
)
