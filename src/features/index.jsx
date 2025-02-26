import React from 'react'
import Header from '../modules/Header'
import Navbar from '../modules/Navbar'
const DashboardLayout = ({children}) => {
  return (
    <>
        <Header/>
        <div className='flex justify-baseline'>
            <Navbar/>
            <div className={`flex-1 h-[90vh] overflow-y-auto`}>{children}</div>
        </div>
    </>
  )
}

export default DashboardLayout
