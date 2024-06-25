import React from 'react'
import { FaBars } from "react-icons/fa6";

export const Header = () => {
  return (
    <div className='flex justify-between max-w-full overflow-hidden '>
    <div className='flex items-center justify-center gap-2'>
       <img src='./assets/Logo.svg'></img>
       <button className='bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2 py-1 rounded-2xl'>Hoster is Hiring</button>
    </div>
    <ul className='hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6'>
    <li><a href='#'>Plans</a></li>
    <li><a href='#'>Find Domain</a></li>
    <li><a href='#'>Why Hoster</a></li>
    
    </ul>
    <div className='hidden lg:flex justify-center items-center font-lato gap-6 '>
    <a className='text-gray-400' href='#'>Sign in</a>
    <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-700 text-white'>Join Waitlist</button>
    </div>

    <div className='lg:hidden'><FaBars /></div>
    </div>
  )
}
