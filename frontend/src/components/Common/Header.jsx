import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router'
const Header = () => {
    return (
        <>
            <nav className="bg-[#043B64] w-full py-3 px-1 sm:px-12 lg:px-24 m-auto flex justify-between items-center">
                <img
                    src={assets.site_logo}
                    className="w-[165px] h-[69px]"
                    alt="Site Logo"
                />
                <div className="flex space-x-4">
                    <NavLink to="/login" className="bg-white text-primary py-1 px-8 text-sm cursor-pointer">
                      Login 
                    </NavLink>
                    <NavLink to="/register" className="bg-transparent py-1 px-8 text-white text-sm cursor-pointer border border-white">
                       Sign Up
                    </NavLink>
                </div>
            </nav>
        </>
    )
}

export default Header

