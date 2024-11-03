import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Home,Slot,About,Report} from './Components/pages.js'
import Layout from './Components/Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import TandC from './Components/TandC.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/slot' element={<Slot/>}/>
      <Route path='/project-report' element={<Report/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/terms-and-conditions' element={<TandC/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
