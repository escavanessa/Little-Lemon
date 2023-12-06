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
        <h1>Confirmation</h1>
        <h1>{booked.name}</h1>
        <h1>{booked.date}</h1>
        <h1>{booked.time}</h1>
        <h1>{booked.guests}</h1>
        <h1>{booked.occasion}</h1>
    </>

  )
}

export default Confirmation