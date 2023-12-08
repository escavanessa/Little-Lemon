import React from 'react'

export const Hero = () => {
  return (
    <div className='heroWrapper flex mt-6 m-10 rounded-xl bg-whitish p-10'>
      <div className='cardWrapper sm:grid grid-cols-2'>
        <div className='col-span-1'>
          <h1 className='font-bold text-xl text-darkgrey'>Little Lemon</h1>
          <h2 className='font-bold text-lightgrey'>chicago</h2>
          <p className='text-lightgrey mt-4'>Lorem ipsum dolor sit amet, 
          consectetur adipisicing elit. Magnam tempora esse assumenda, perspiciatis
           neque laudantium ipsam reiciendis hic a eum voluptatem
           deserunt sint odit rerum, totam explicabo, nam beatae blanditiis!
          </p>

          <button className='menu-btn bg-green w-20 p-2 rounded-full mt-10 text-whitish hover:shadow-md hover:scale-105'>Menu</button>
        </div>

        <div className='cocol-span-2'>
          <img className='rounded-lg' src='/Mario and Adrian A.jpg'></img>
        </div>
      </div>
    </div>
  )
}

export default Hero