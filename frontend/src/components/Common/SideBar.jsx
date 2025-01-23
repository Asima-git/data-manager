import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { NavLink, useNavigate } from 'react-router'
import { adminMenu, userDashboardMenu } from '../../config'

const SideBar = () => {
 const  [role,SetRole] = useState('Admin');
 const navigate = useNavigate();

 const checkUserRole = ()=>{
  const getRole = localStorage.getItem('role');
  SetRole(getRole);
 }

 const logOut = ()=>{
  let keys = ["authToken","role"];
  keys.forEach((key) => {
    localStorage.removeItem(key);
    navigate('/login')
  });
 }
 useEffect(()=>{
  checkUserRole();
 },[])
  return (
    <nav className='side-bar w-1/4 flex-shrink-0'>
      <div className='w-[165px] h-14 ml-7 mt-5'>
        <img src={assets.admin_logo} alt='admin logo'/>
      </div>
      <ul className="mt-28">
        {
           role === 'User' ? 
            userDashboardMenu.map(menuItem => 
              <li
              key={menuItem.id}
              className="border-t border-white py-1"
            >
              <NavLink
            to={menuItem.path}
            className="text-white text-xl leading-8 block w-full h-full px-8 py-2"
          >
          <span className='flex gap-1'><img src={menuItem.icon}/>{menuItem.label}</span> 
          </NavLink>
            </li>)
            :
            adminMenu.map(menuItem => 
              <li
              key={menuItem.id}
              className="border-t border-white py-1"
            >
              <NavLink
            to={menuItem.path}
            className="text-white text-xl leading-8 block w-full h-full px-8 py-2"
          >
          <span className='flex gap-1'><img src={menuItem.icon}/>{menuItem.label}</span> 
          </NavLink>
            </li>)
          }
          <li className="border-t border-white py-1" onClick={()=>logOut()}>
            <p className="text-white text-xl leading-8 block w-full h-full px-8 py-2 cursor-pointer">
            <span className='flex gap-1'><img src={assets.logout_logo}/>Logout</span> 
            </p>
          </li>
     </ul>
    </nav>
  )
}

export default SideBar
