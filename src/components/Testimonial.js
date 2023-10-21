/** @format */

import React from "react"
import TestimonialSlider from "./TestimonialSlider"
const Testimonial = () => {
  return (
    <section className='mb-64 lg:mb-48'>
      <div className='container mx-auto'>
        <div className='p-12 rounded-lg max-h-[400px] bg-purple-400/10 '>
          <div className='text-center'>
            <h2
              data-aos='fade-right'
              data-aos-offset='300'
              data-aos-delay='1000'
              className='mb-6 font-bold text-3xl'>
              What Our Clients Say
            </h2>
            <p
              data-aos='flip-left'
              data-aos-offset='300'
              data-aos-delay='1500'
              className='mb-12 lg:mb-24 max-w-2xl mx-auto'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              obcaecati. Autem ex ratione molestias eaque, cupiditate iusto
              sequi doloremque corporis.
            </p>
          </div>
          <div
            data-aos='flip-up'
            data-aos-offset='300'
            data-aos-delay='1800'
            className=''>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
