import React from 'react'

export const Hero = () => {
  return (
    <div className='heroWrapper flex mt-6 p-4'>
    <div className='cardWrapper grid grid-cols-2'>
      <div className='col-span-1'>
        <h1 className=''>little lemon</h1>
        <h2>chicago</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, 
          repellat optio quia dolor aliquid voluptates repellendus molestiae. Provident, 
          repellat error.
        </p>

        <button>Says something</button>
      </div>

      <div className='cocol-span-2'>
        <img src='./logo.svg'></img>
      </div>
    </div>
  </div>
  )
}

export default Hero