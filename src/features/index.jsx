import React from 'react'
import Header from '../modules/Header'
import Navbar from '../modules/Navbar'
import getToken from '../hooks/getToken'
const DashboardLayout = ({children}) => {
  const {hideMenu} = getToken()
  return (
    <>
        <Header/>
        <div className='flex justify-baseline'>
            <Navbar/>
            <div className={`${hideMenu?'w-[100%]':'w-[80%]'} h-[90vh] overflow-y-auto`}>{children}</div>
        </div>
    </>
  )
}

export default DashboardLayout
