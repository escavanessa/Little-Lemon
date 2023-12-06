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
        <div>Confirmation Page!</div>
        
    </>

  )
}

export default Confirmation