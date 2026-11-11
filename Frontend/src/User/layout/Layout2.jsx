import React from 'react'
import Header2 from '../components/header/header2/Header2'
import {Outlet} from 'react-router-dom'
import Footer2 from '../components/Homepage2 components/Footer/Footer2'

const Layout2 = () => {
  return (
    <div className="flex flex-col relative overflow-hidden">
        {/* Header */}
        <Header2 />

        {/* Page content */}
        <main className='flex-1'>
            <Outlet />
        </main>
    <Footer2 />
    </div>
  )
}

export default Layout2