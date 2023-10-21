/** @format */

import React from "react"
import img1 from "../assets/img/exp-img1.png"
import img2 from "../assets/img/exp-img2.png"
const Experience = () => {
  return (
    <section className='mb-12 lg:mb-24 mt-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row min-[480px] lg:space-x-20'>
          <div className='flex flex-1 items-center space-x-6 lg:space-x-12'>
            <div
              className='self-start'
              data-aos='fade-down'
              data-aos-offset='400'>
              <img src={img1} alt='' />
            </div>
            <div className='self-end' data-aos='fade-up'>
              <img src={img2} alt='' />
            </div>
          </div>
          <div
            className='flex flex-1 flex-col lg:mt-0 mt-6 justify-center items-start'
            data-aos='fade-left'
            data-aos-offset='400'>
            <h2 className='mb-6 font-bold text-3xl'>
              New Experience In Playing Games
            </h2>
            <p className='mb-6 font-secondary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id enim,
              quos modi labore tempore dolor cum fuga. Optio, ad perferendis!
            </p>
            <button className='btn'>Get It Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
