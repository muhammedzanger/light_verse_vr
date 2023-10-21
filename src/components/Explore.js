/** @format */

import React from "react"

const Explore = () => {
  return (
    <section className='mb-16 min-h-[400px] lg:mb-4 mt-15 lg:mt-5'>
      <div className='container mx-auto h-full mt-15 lg:mt-5'>
        <div
          data-aos='fade-left'
          data-aos-offset='300'
          data-aos-delay='1000'
          className='bg-explore h-full bg-no-repeat bg-cover md:bg-center sm:bg-center lg:bg-center flex flex-col items-start p-14 justify-center'>
          <h3
            data-aos='flip-down'
            // data-aos-offset='300'
            data-aos-delay='1000'
            className='mb-8 text-3xl font-semibold'>
            Explore Products In New Way
          </h3>
          <p
            data-aos='fade-up'
            // data-aos-offset='300'
            data-aos-delay='1500'
            className='mb-12 max-w-xs'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            voluptas magni animi! Minus at et quia exercitationem eum iste
            repellat?
          </p>
          <form
            data-aos='fade-down'
            // data-aos-offset='300'
            data-aos-delay='1800'
            action=''
            className='flex flex-col lg:flex-row space-y-4 gap-x-4 w-full lg:space-y-0'>
            <input
              type='text'
              placeholder='Your Message*'
              className='h-12 px-4 outline-none rounded-md bg-gradient-to-t from-[#341d38] to-[#271223]'
            />
            <button className='btn'>Start</button>
          </form>
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default Explore
