import React from 'react'
import { NavLink } from 'react-router'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
      <div>
        <img src={assets.site_logo} alt='logo' className='w-[279px] mb-6'/>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, eligendi, voluptatibus deleniti ipsum officiis alias ex impedit.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Important Links</h3>
        <ul className="space-y-2">
          <li>
            <NavLink to="/contact-us" className="hover:text-gray-400">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/privacy-policy" className="hover:text-gray-400">
              Privacy Policy
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ul className="space-y-2">
          <li>
            <NavLink to="/terms-and-conditions" className="hover:text-gray-400">
              Terms & Conditions
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-support" className="hover:text-gray-400">
              Contact Support
            </NavLink>
          </li>
        </ul>
        <div className="flex justify-center sm:justify-start space-x-4 mt-4">
          <NavLink to="/" className="hover:text-gray-400 border border-white p-3">
             <img className='w-auto h-3' src={assets.facebook_logo} alt="" />
          </NavLink>
          <NavLink to="/" className="hover:text-gray-400 border border-white p-3">
          <img  className='w-auto h-3' src={assets.insta_logo} alt="" />
          </NavLink>
          <NavLink to="/" className="hover:text-gray-400 border border-white p-3">
          <img className='w-auto h-3'src={assets.linkdn_logo} alt="" />
          </NavLink>
          <NavLink to="/" className="hover:text-gray-400 border border-white p-3">
          <img className='w-auto h-3' src={assets.skype_logo} alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer
