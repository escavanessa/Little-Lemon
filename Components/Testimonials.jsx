import React from 'react'

export const Testimonials = () => {
  return (
    <>
      <div className='Test flex justify-center mt-12'>
        <h1 className='font-bold'>Testimonials</h1>
      </div>
      <div className='test conainer flex justify-center items-center'>
        <div className='card container grid grid-cols-4 mt-6 m-8 h-[300px]'>

          <div className='card relative'>
            <h2>John</h2>
            <span className='absolute bg-blue-500 top-0 right-0 mr-4'>Icon</span>
            <p>Quote about the little lemon restaurant</p>
          </div>

          <div className='card relative'>
            <h2>Vanessa</h2>
            <span className='absolute bg-blue-500 top-0 right-0 mr-4'>Icon</span>
            <p>Quote about the little lemon restaurant</p>
          </div>

          <div className='card relative'>
            <h2>Isobel</h2>
            <span className='absolute bg-blue-500 top-0 right-0 mr-4'>Icon</span>
            <p>Quote about the little lemon restaurant</p>
          </div>

          <div className='card relative'>
            <h2>Gale</h2>
            <span className='absolute bg-blue-500 top-0 right-0 mr-4'>Icon</span>
            <p>Quote about the little lemon restaurant</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials