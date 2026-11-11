import React from 'react'
import Header1 from '../components/header/header1/Header1'
import {Outlet} from 'react-router-dom'
import Footer1 from '../components/Homepage1 Components/Footer/Footer1'

const Layout1 = () => {
  return (
    <div className="flex flex-col relative overflow-hidden">
        
        <Header1 />
       
        <main className='flex-1'>
            <Outlet />
        </main>
  <Footer1 />
    </div>
  )
}

export default Layout1