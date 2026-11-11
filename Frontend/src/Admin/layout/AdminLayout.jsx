import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Content from './Content'

const AdminLayout = () => {
  return (
   <section className="adminLayout h-auto min-h-screen w-full bg-[#c8f  0d2] flex">
        <div className="left-layoutmin-h-auto w-78">
          <Sidebar />
        </div>

        <div className="right-layout min-h-full w-full">
          <div className="navbar sticky top-0 w-full text-white">
          <Header />
          </div>

          <div className="content min-h-auto overflow-x-hidden">
          <Content />
          </div>
        </div>
   </section>
  )
}

export default AdminLayout