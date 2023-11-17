import React from 'react'

export const Specials = () => {
  return (
    <>

      <div className='title flex justify-center items-center mt-8 p-4'>
        <h1 className='font-bold '>Specials</h1>
        <button className='bg-blue-400 '>Order</button>
      </div>

      
      <div className='specials mt-2 flex justify-center items-center'>
        <div className='cardWrapper grid grid-cols-3 p-4 h-[300px]'>
          <div className='card col-span-1 m-2'>
            <img src='./logo/svg'></img>
            <h2>Title</h2>
            <span>Price</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, commodi.</p>
          </div>

          <div className='card col-span-1 m-2'>
            <img src='./logo/svg'></img>
            <h2>Title</h2>
            <span>Price</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, commodi.</p>
          </div>

          <div className='card col-span-1 m-2'>
            <img src='./logo.svg'></img>
            <h2>Title</h2>
            <span>Price</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, commodi.</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Specials