/** @format */

import React from "react"
import img1 from "../assets/img/headset-1.png"
import img2 from "../assets/img/headset-2.png"
import img3 from "../assets/img/headset-3.png"
import img4 from "../assets/img/headset-4.png"
const Headsets = () => {
  return (
    <section className='py-12 lg:py-24'>
      <div className='container mx-auto'>
        <h2
          data-aos='fade-down'
          data-aos-offset='900'
          className='mb-6 font-bold text-3xl'>
          Mixed Reality HeadSets
        </h2>
        <div className='grid lg:grid-cols-2 gap-y-4 lg:gap-9'>
          <div
            className='relative'
            data-aos='zoom-in'
            // data-aos-offset='300'
            data-aos-delay='1000'>
            <img className='' src={img1} alt='' />
            <div className='absolute bottom-0 bg-white/70 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h2 className='mb-2 font-semibold text-xl'>Metaverse</h2>
              <p className=''>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                ipsam impedit neque officiis at maiores!
              </p>
            </div>
          </div>
          <div
            className='relative'
            data-aos='zoom-in'
            // data-aos-offset='300'
            data-aos-delay='1100'>
            <img className='' src={img2} alt='' />
            <div className='absolute bottom-0 bg-white/70 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h2 className='mb-2 font-semibold text-xl'>AIoT</h2>
              <p className=''>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                ipsam impedit neque officiis at maiores!
              </p>
            </div>
          </div>
          <div
            className='relative'
            data-aos='zoom-in'
            // data-aos-offset='300'
            data-aos-delay='1200'>
            <img className='' src={img3} alt='' />
            <div className='absolute bottom-0 bg-white/70 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h2 className='mb-2 font-semibold text-xl'>HoloLens</h2>
              <p className=''>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                ipsam impedit neque officiis at maiores!
              </p>
            </div>
          </div>
          <div
            className='relative'
            data-aos='zoom-in'
            // data-aos-offset='300'
            data-aos-delay='1300'>
            <img className='' src={img4} alt='' />
            <div className='absolute bottom-0 bg-white/70 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h2 className='mb-2 font-semibold text-xl'>TPCASTT</h2>
              <p className=''>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                ipsam impedit neque officiis at maiores!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Headsets
