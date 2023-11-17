import React from 'react'

export const Footer = () => {
  return (
    <div className='footer flex justify-center items-center mt-20 mb-10'>
      <div className='column grid grid-cols-3'>
        <div className='column grid-cols-1 w-[200px]'>
          <img src='./logo.svg'></img>
        </div>

        <div className='grid-cols-1 w-[200px]'>
          <ul>
            <li>resources</li>
            <li>contact</li>
            <li>careers</li>
            <li>FAQ</li>
            <li>call center</li>
          </ul>
        </div>

        <div className='grid-cols-1 w-[200px]'>
          <ul>
            <li>insatgram</li>
            <li>twitter</li>
            <li>facebook</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer