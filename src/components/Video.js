/** @format */

import React from "react"
import ModalVideo from "react-modal-video"
import "../modalVideo.scss"
import { BsPlayCircleFill } from "react-icons/bs"
import { useState } from "react"
const Video = () => {
  const [isOpen, setisOpen] = useState(false)
  return (
    <div className='bg-[#534686]/30 py-6'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-center text-center lg:justify-between'>
          <h3
            className='font-3xl font-semibold mb-8 lg:mb-0'
            data-aos='fade-right'
            data-aos-offset='350'>
            Awesome Experience With Virtual Reality World!
          </h3>
          <ModalVideo
            channel='youtube'
            autoplay
            isOpen={isOpen}
            videoId='NOK_M1lb5F0'
            onClose={() => setisOpen(false)}
          />
          <div
            data-aos='fade-left'
            data-aos-offset='350'
            className='bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center'>
            <div className='cursor-pointer' onClick={() => setisOpen(!isOpen)}>
              <BsPlayCircleFill className='text-4xl text-white/80 hover:text-white hover:scale-110  transition' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
