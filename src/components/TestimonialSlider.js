/** @format */

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"

import { Pagination } from "swiper"

import { slider } from "../data"
const TestimonialSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}>
      {slider.map((slide, index) => {
        return (
          <SwiperSlide
            key={index}
            className='p-4 rounded-lg lg:p-6 min-h-[240px] bg-gradient-to-t from-[#130613] via-[#2a1428 to-[#331a35]'>
            <p className='mb-8 text-[15px] min-h-[100px]'>{slide.message}</p>
            <div className='flex flex-col gap-x-4 md:flex-row md:items-center'>
              <div className='w-14'>
                <img className='mb-3 md:mb-0' src={slide.image} alt='' />
              </div>
              <div className=''>
                <div className='font-medium text-base'>{slide.name}</div>
                <div className='font-medium text-rose-600'>{slide.email}</div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default TestimonialSlider
