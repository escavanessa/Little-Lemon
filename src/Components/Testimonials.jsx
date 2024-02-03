import React from 'react'

export const Testimonials = () => {
  return (
    <>
      <div className='Testimonial flex justify-center mt-80 bg-whitish p-10'>
        <h1 className='font-bold text-darkgrey'>Testimonials</h1>
      </div>
      <div className='test-container flex justify-center items-center bg-whitish'>
        <div className='cardtest-container sm:grid grid-cols-4 gap-6 mt-6 m-8 sm:h-[300px]'>

          <div className='test relative'>
            <h2 className='mt-4 font-semibold text-green text-lg'>John</h2>
            <span className='absolute bg-white rounded-full w-10 h-10 p-2 top-0 right-0 sm:right-10'></span>
            <p className='mt-4 text-lightgrey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quidem!</p>
          </div>

          <div className='test relative'>
            <h2 className='mt-8 font-semibold text-green text-lg'>Vanessa</h2>
            <span className='absolute bg-white rounded-full w-10 h-10 p-2 top-0  right-0 sm:right-10'></span>
            <p className='mt-4 text-lightgrey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor praesentium fugiat, nulla perspiciatis numquam optio.</p>
          </div>

          <div className='test relative'>
            <h2 className='mt-8 font-semibold text-green text-lg'>Isobel</h2>
            <span className='absolute bg-white rounded-full w-10 h-10 p-2 top-0  right-0 sm:right-10'></span>
            <p className='mt-4 text-lightgrey'>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='test relative'>
            <h2 className='mt-8 font-semibold text-green text-lg'>Gale</h2>
            <span className='absolute bg-white rounded-full w-10 h-10 p-2 top-0 right-0 sm:right-10'></span>
            <p className='mt-4 text-lightgrey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas corrupti ratione ipsam aspernatur ab consequatur soluta temporibus laborum aliquid quo.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials