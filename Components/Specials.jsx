import React from 'react'

export const Specials = () => {
  return (
    <>

      <div className='title flex justify-center items-center mt-8 p-4'>
        <h1 className='font-bold text-xl text-darkgrey mr-6'>Specials</h1>
        <button className='bg-green  w-20 p-2 rounded-full text-whitish hover:shadow-md hover:scale-105'>Order</button>
      </div>

      
      <div className='specials mt-2 m-10 flex justify-center items-center'>
        <div className='specialWrapper sm:grid grid-cols-3 gap-4 p-4 sm:h-[300px]'>


          <div className='card col-span-1 m-2 relative bg-whitish p-4 rounded-xl hover:shadow-md hover:scale-105'>
            <img className='rounded-lg w-[100%] max-h-[300px] mt-4' src='/greek salad.jpg'></img>
            <h2 className='text-darkgrey text-xl font-bold mt-4'>Title</h2>
            <span className='absolute top-1 right-6 font-semibold text-green'>$12</span>
            <p className='text-lightgrey mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, commodi.</p>
          </div>

          <div className='card col-span-1 m-2 relative bg-whitish p-4 rounded-xl hover:shadow-md hover:scale-105'>
            <img className='rounded-lg w-[100%] object-cover max-h-[300px] mt-4' src='/lemon dessert.jpg'></img>
            <h2 className='text-darkgrey text-xl font-bold mt-4'>Title</h2>
            <span className='absolute top-2 right-6 font-semibold text-green'>$15</span>
            <p className='text-lightgrey mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, commodi.</p>
          </div>

          <div className='card col-span-1 m-2 relative bg-whitish p-4 rounded-xl hover:shadow-md hover:scale-105'>
            <img className='rounded-lg w-[100%] max-h-[300px] mt-4' src='/bruchetta.svg'></img>
            <h2 className='text-darkgrey text-xl font-bold mt-4'>Title</h2>
            <span className='absolute top-1 right-6 font-semibold text-green'>$15</span>
            <p className='text-lightgrey mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, commodi.</p>
          </div>

          

        </div>
      </div>
    </>
  )
}

export default Specials