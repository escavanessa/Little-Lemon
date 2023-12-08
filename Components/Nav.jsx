import React from 'react'
import { Link } from 'react-router-dom'


export const Nav = () => {



  return (
    <nav className='navbar flex justify-between mt-4 p-10'>
      <div className='logoDiv'>
        <img className='ml-4' src='/Logo.svg' alt='image'></img>
      </div>

        <ul className='menu flex'>
          <li className='ml-4 text-darkgrey ease-in-out duration-300 border-b-4 border-white hover:border-b-4 hover:border-yellow'><a href=''></a>Home</li>
          <li className='ml-4 text-darkgrey ease-in-out duration-300 border-white hover:border-b-4 hover:border-yellow'><a href=''></a>Order</li>
          <li className='ml-4 text-darkgrey ease-in-out duration-300 border-white hover:border-b-4 hover:border-yellow'><a href=''></a>Menu</li>
          <li className='ml-4 text-darkgrey ease-in-out duration-300 border-white hover:border-b-4 hover:border-yellow'><a href=''></a>Reservations</li>
          <li className='ml-4 text-darkgrey ease-in-out duration-300 border-white hover:border-b-4 hover:border-yellow'><a href=''></a>About</li>
          <li className='ml-4 text-darkgrey ease-in-out duration-300 border-white hover:border-b-4 hover:border-yellow'><a href=''></a>Contact</li>
        </ul>

  
    </nav>
  )
}

export default Nav
