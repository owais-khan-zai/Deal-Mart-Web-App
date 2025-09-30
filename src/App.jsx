import React from 'react'
import Dashboard from './pages/Dashboard'
import 'remixicon/fonts/remixicon.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SideContainer from './sections/Dashboard_Sections/SideContainer'
import { RoutesData } from './routes/RoutesData'
import { Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Verification from './pages/VarificationPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Support from './pages/Support'

  const routeItem = RoutesData[0].path
  const router = createBrowserRouter([
    // default home route
    {
      path: '/',
      element: <Home/>,
    },
    // dashboard routes
    {
      path: '/dashboard',
      element: <Dashboard/>,
      children: [
        {
          index:true,
          element: <Navigate to={`/dashboard/${routeItem}`}  />,
        },
        {
          path: ':page',
          element: <SideContainer/>
        }
      ]
    },
    // Signup Route
    {
      path: '/signup',
      element: <Signup/>
    },
    // OTP Verification route
    {
      path: '/verification',
      element: <Verification/>
    },
    // Login Route
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/support',
      element: <Support/>
    }
  ])


const App = () => {
  return (
    <div className='min-h-screen flex justify-center bg-[#F6F9FF]'>
      <ToastContainer position="top-left" autoClose={5000} />
      <RouterProvider router={router} />
    </div>
  )
}

export default App

//  outline react mn hamay milta hy is sy hum ye kr sakhty hain like hamray pass jysy header or footer same hota hy to header footer bar bar lgany ki jaga osko children bana krd rakh do routing krty hue phir parent component mn outlet kaha use krlo jah outlet likhogy wahi wo children visible hoga baki eader footer same rahengy  