import React from 'react'

export const Nav = () => {
  return (
    <div className='navbar flex justify-between mt-4'>
        <div className='logoDiv'>
          <img className='ml-4' src='./logo.svg'></img>
        </div>


        <ul className='menu flex'>
          <li className='ml-4'><a href=''></a>Home</li>
          <li className='ml-4'><a href=''></a>Order</li>
          <li className='ml-4'><a href=''></a>Menu</li>
          <li className='ml-4'><a href=''></a>Reservations</li>
          <li className='ml-4'><a href=''></a>About</li>
          <li className='ml-4'><a href=''></a>Contact</li>
        </ul>
      </div>
  )
}

export default Nav
