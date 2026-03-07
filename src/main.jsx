import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'

// creat router code here;g

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Navbar></Navbar>
  </StrictMode>,
)
