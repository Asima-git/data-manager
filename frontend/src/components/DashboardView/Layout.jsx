import React from 'react'
import SideBar from '../Common/SideBar'
import { Outlet } from 'react-router'

const UserDashboardLayout = () => {
  return (
    <section className='bg-primary w-full flex pt-5 pb-5 pr-5'>
      <SideBar/>
      <div className='bg-white px-10 py-14 rounded-[30px] w-3/4 h-full'>
          <Outlet />
      </div>
    </section>
  )
}

export default UserDashboardLayout
