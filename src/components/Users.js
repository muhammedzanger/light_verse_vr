/** @format */

import React from "react"
import ava1 from "../assets/img/avt1.png"
import ava2 from "../assets/img/avt2.png"
import ava3 from "../assets/img/avt3.png"
import ava4 from "../assets/img/avt4.png"

import { BsFillCircleFill } from "react-icons/bs"
const Users = () => {
  return (
    <div
      data-aos='fade-down'
      data-aos-delay='800'
      className='flex flex-col justify-center items-center space-x-5 space-y-2 lg:flex-row lg:space-y-0 lg:justify-start'>
      <div className='flex -space-x-2'>
        <div className='h-12 w-12 rounded-full'>
          <img src={ava1} alt='avatar' />
        </div>
        <div className='h-12 w-12 rounded-full'>
          <img src={ava2} alt='avatar' />
        </div>
        <div className='h-12 w-12 rounded-full'>
          <img src={ava3} alt='avatar' />
        </div>
        <div className='h-12 w-12 rounded-full'>
          <img src={ava4} alt='avatar' />
        </div>
      </div>
      <div className='flex items-center space-x-2 font-secondary font-medium'>
        <BsFillCircleFill className='text-xs text-green-500 animate-pulse' />
        <div>400+ People Online</div>
      </div>
    </div>
  )
}

export default Users
