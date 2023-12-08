import React from 'react'
import { Link } from 'react-router-dom'



export const Nav = () => {



  return (
    <nav className='navbar flex justify-between mt-4 p-10'>
      <div className='logoDiv'>
        <img className='ml-4' src='/Logo.svg' alt='image'></img>
      </div>

        <ul className='menu flex'>
          <li className='ml-4 text-darkgrey border-b-4 border-white hover:border-b-4 hover:border-yellow'><Link to={`/`}>Home</Link></li>
          <li className='ml-4 text-darkgrey border-white hover:border-b-4 hover:border-yellow'><a href=''></a>Order</li>
          <li className='ml-4 text-darkgrey border-white hover:border-b-4 hover:border-yellow'><a href=''></a>Menu</li>
          <li className='ml-4 text-darkgrey border-white hover:border-b-4 hover:border-yellow'><Link to={`booking`}>Reservation</Link></li>
          <li className='ml-4 text-darkgrey border-white hover:border-b-4 hover:border-yellow'><a href=''></a>About</li>
          <li className='ml-4 text-darkgrey border-white hover:border-b-4 hover:border-yellow'><a href=''></a>Contact</li>
        </ul>

  
    </nav>
  )
}

export default Nav
