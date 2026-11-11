import React from 'react'
import {Outlet} from 'react-router-dom'
import Header5 from '../components/header/header5/Header5'
import Footer1 from '../components/Homepage1 Components/Footer/Footer1'

const Layout5 = () => {
  return (
     <div className="flex flex-col relative overflow-hidden">
        {/* Header */}
   <Header5 />
        {/* Page content */}
        <main className='flex-1'>
            <Outlet />
        </main>
       <Footer1 /> 
    </div>
  )
}

export default Layout5