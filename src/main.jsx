import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Model from './Components/Model.jsx'
// import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Model/> */}
    <Home/>
  </StrictMode>,
)
