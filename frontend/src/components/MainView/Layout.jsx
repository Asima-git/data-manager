import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { ToastContainer} from 'react-toastify';

const MainView = () => {
  return (
    <>
      <Header />
      <section className="container py-16 px-6 sm:px-12 lg:px-20 m-auto">
         <Outlet/>
         <ToastContainer />
      </section>
      <Footer />
    </>
  )
}

export default MainView
