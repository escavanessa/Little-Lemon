import React from 'react'

export const About = () => {
  return (
    <div className='About-wrapper flex justify-center items-center p-20'>
      <div className='About-container mb-[300px] sm:grid gap-10 grid-cols-2'>
        <div className='about cols-span-1'>
          <h2 className='font-bold text-xl text-darkgrey'>Little Lemon</h2>
          <h3 className='font-bold text-lightgrey'>Chicago</h3>
          <p className='text-lightgrey'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas cumque commodi suscipit alias error perspiciatis
            voluptatibus autem officiis quo magnam?</p>
        </div>

        <div className='images col-span-1 relative'>
          <img className='absolute w-90 h-60 rounded-lg right-0 top-0' src='/Little-Lemon//Mario and Adrian A.jpg'></img>
          <img className='absolute w-90 h-60 rounded-lg top-20 left-10' src='/Little-Lemon//Mario and Adrian b.jpg'></img>
        </div>
      </div>
    </div>
  )
}

export default About
