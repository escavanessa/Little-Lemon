import React from 'react'

export const About = () => {
  return (
    <div className='About flex justify-center items-center p-20'>
      <div className='cardcontainer grid gap-10 grid-cols-2'>
        <div className='card cols-span-1'>
          <h2 className='font-bold text-xl text-darkgrey'>Little Lemon</h2>
          <h3 className='font-bold text-lightgrey'>Chicago</h3>
          <p className='text-lightgrey'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas cumque commodi suscipit alias error perspiciatis
            voluptatibus autem officiis quo magnam?</p>
        </div>

        <div className='images col-span-1'>
          <img src='./logo.svg'></img>
          <img src='./logo.svg'></img>
        </div>
      </div>
    </div>
  )
}

export default About
