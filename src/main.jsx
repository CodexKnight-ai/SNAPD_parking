import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Home,Slot,About,Report} from '../src/Components/pages.js'
import Layout from './Components/Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/slot' element={<Slot/>}/>
      <Route path='/project-report' element={<Report/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
