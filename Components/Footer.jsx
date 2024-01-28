import React from 'react'

export const Footer = () => {
  return (
    <div className='footer flex justify-center items-center sm:mt-20 mb-10 bg-whitish p-20'>
      <div className='column sm:grid grid-cols-3'>
        <div className='column grid-cols-1 w-[200px]'>
          <img className='mb-8' src='/Little-Lemon//Logo.svg'></img>
        </div>

        <div className='grid-cols-1 w-[200px]'>
          <ul>
            <li className='text-lightgrey'>resources</li>
            <li className='text-lightgrey mt-1'>contact</li>
            <li className='text-lightgrey mt-1'>careers</li>
            <li className='text-lightgrey mt-1'>FAQ</li>
            <li className='text-lightgrey mt-1'>call center</li>
          </ul>
        </div>

        <div className='grid-cols-1 w-[200px]'>
          <ul>
            <li className='text-lightgrey mt-1'>insatgram</li>
            <li className='text-lightgrey mt-1'>twitter</li>
            <li className='text-lightgrey mt-1'>facebook</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer