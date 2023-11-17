import React from 'react'

export const About = () => {
  return (
    <div className='About container flex justify-center items-center p-4'>
      <div className='card container grid grid-cols-2'>
        <div className='about cols-span-1'>
          <h2 className='font-bold'>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas cumque commodi suscipit alias error perspiciatis
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
