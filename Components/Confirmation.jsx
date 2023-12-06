import React from 'react'
import Nav from './Nav'
import { useLocation } from 'react-router-dom';

const Confirmation = () => {
  let location = useLocation();
  let booked = location.state.booking
  console.log(location)

  return (
    <>
      <Nav />
      <div className=' outer-container flex justify-center items-center'>
        <div className='info-container flex-col justify-center items-center p-10 bg-whitish rounded-lg'>
          <h1 className='text-xl mb-6'>Confirmation</h1>
          <h2 className='mb-4'>Thank you for booking with Little Lemon! Here are your booking details.</h2>
          <h1>Name: {booked.name}</h1>
          <h1>Date: {booked.date}</h1>
          <h1>Time: {booked.time}</h1>
          <h1>Amount of Guests: {booked.guests}</h1>
          <h1>Occasion: {booked.occasion}</h1>
        </div>
      </div>
    </>

  )
}

export default Confirmation