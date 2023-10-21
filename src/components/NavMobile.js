/** @format */

import React from "react"
import { IoClose } from "react-icons/io5"
const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className='lg:hidden w-full h-full bg-[#251f3f] transition-all'>
      <IoClose
        onClick={() => setNavMobile(false)}
        className='absolute top-6 left-4 text-3xl cursor-pointer'
      />
      <ul className='flex flex-col items-center justify-center h-full space-y-8 font-secondary transition-all'>
        <li className='text-lg hover:translate-x-5 transition-all ease-in-out'>
          <a href='#'>Home</a>
        </li>
        <li className='text-lg hover:translate-x-5 transition-all ease-in-out'>
          <a href='#'>Company</a>
        </li>
        <li className='text-lg hover:-translate-x-5 transition-all ease-in-out'>
          <a href='#'>Features</a>
        </li>
        <li className='btn'>
          <a href='#'>Sign Up</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavMobile
