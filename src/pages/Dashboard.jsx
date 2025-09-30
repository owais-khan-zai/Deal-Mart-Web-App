import React from 'react'
import Navbar from '../layout/Navbar'
import Sidebar from '../sections/Dashboard_Sections/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='bg-[#F6F9FF] w-screen max-w-[1500px] min-h-screen h-screen flex flex-col'>
      {/* Navbar at the top */}
      <Navbar />
      
      {/* Main content area - FIXED HEIGHT CONTAINER */}
      <div className='flex  overflow-hidden h-[calc(100vh-80px)] mt-4'>
        <Sidebar />
        
        {/* Content container - FULL HEIGHT */}
        <div className='flex-1 ml-4 h-full flex flex-col'>
          <Outlet />
        </div>
        
      </div>
    </div>
  )
}

export default Dashboard