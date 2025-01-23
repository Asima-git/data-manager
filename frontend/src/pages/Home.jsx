import React from 'react'
import { NavLink } from 'react-router'
import { assets } from '../assets/assets'


const Home = () => {
  return (
    <>
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Power and <span className="text-[#FFCC33]">Success</span><br />
              <span className="text-[#FFCC33]">Inspired</span> Life
            </h1>
            <p className="text-base sm:text-lg text-black mt-4">
              Knowledge is the greatest wealth. Financial security is the foundation of a peaceful life. Along with this, when there is mutual cooperation and mutual trust, our life becomes very beautiful.
            </p>
            <p className="text-base sm:text-lg text-black mt-4">
              Thank you for choosing us as your gateway to a secure life.
            </p>
            <p className="text-base sm:text-lg text-black mt-4">
              Let's travel together, have a better tomorrow.
            </p>
            <div className='flex mt-11 gap-4'>
              <NavLink to='/online-courses' className='bg-primary text-white text-xl py-1 px-6 border border-primary'>Online Courses</NavLink>
              <NavLink to='/videos' className='bg-transparent text-primary text-xl py-1 px-6 border border-primary'>Videos</NavLink>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src={assets.home_banner}
              alt="Home Banner"
              className="w-full h-auto rounded-tl-[44px] rounded-br-[44px] object-fill"
            />
          </div>
        </div>
    </>
  )
}

export default Home
