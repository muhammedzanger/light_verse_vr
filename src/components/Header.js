/** @format */

import React from "react"
import Logo from "../assets/img/logo.svg"
import Nav from "./Nav"
import { HiMenu } from "react-icons/hi"
const Header = ({ setNavMobile }) => {
  return (
    <header
      className='py-6'
      data-aos='fade-down'
      data-aos-delay='900'
      data-aos-duration='2000'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <a href='#'>
            <img className='h-[30px]' src={Logo} alt='' />
          </a>
          <Nav />
          <HiMenu
            onClick={() => setNavMobile(true)}
            className='lg:hidden text-white text-3xl cursor-pointer'
          />
        </div>
      </div>
    </header>
  )
}

export default Header
