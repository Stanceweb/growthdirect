import React from 'react'
import {Outlet} from 'react-router-dom'
import Header4 from '../components/header/header4/Header4'
import Footer from '../components/Homepage 4 components/Footer/Footer'

const Layout4 = () => {
  return (
    <div className="flex flex-col relative overflow-hidden">
        {/* Header */}
       <Header4 />

        {/* Page content */}
        <main className='flex-1'>
            <Outlet />
        </main>
        
        <Footer />
    </div>
  )
}

export default Layout4