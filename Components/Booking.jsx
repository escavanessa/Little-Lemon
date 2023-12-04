
import React, { useState } from 'react'
import Nav from './Nav'
//import {getAvailableDates, updateDate} from '../src/API'
import api from '../src/API'

//const booking = {
//    name: '',
//    guests: '' ,
//    time: '',
//    selectedSlot: '',
//    date: '',
//    occasion: '',
//    selected: true
//}



export const Booking = () => {
    const availableDates = api().getAvailableDates()

    const [newTime, setNewTime] = useState([])

    const [booking, Setbooking] = useState(
        {
            name: '',
            guests: '',
            time: '',
            selectedSlot: '',
            date: '',
            occasion: '',
        }
    )


    let timeSelectionEnabled = false


    function handleClickName(e) {
        const updateName = { ...booking, name: e.target.value }
        console.log(updateName)
        Setbooking(updateName);
    }


    function handleChangeDate(e) {
        const updateDate = { ...booking, date: e.target.value }
        let selectedDate = e.target.value
        const foundDate = availableDates.find((element) => element.date === selectedDate);
        setNewTime(foundDate.time)


        timeSelectionEnabled = true
        console.log(updateDate)
        Setbooking(updateDate);
    }


    function handleChangeGuests(e) {
        const updateGuests = { ...booking, guests: e.target.value }
        console.log(updateGuests)
        Setbooking(updateGuests);
    }


    function handleChangeTime(e) {
        const updateTime = { ...booking, time: e.target.value }
        console.log(updateTime)
        Setbooking(updateTime);
    }


    function handleChangeOccasion(e) {
        const updateOccasion = { ...booking, occasion: e.target.value }
        console.log(updateOccasion)
        Setbooking(updateOccasion);
    }

    function handleSubmit(e) {
        e.preventDefualt()

    }



    //console.log(api().getAvailableDates())



    return (
        <>
            <Nav />
            <div className='flex justify-center items-center m-8'>
                <form className='flex flex-col m-8'>
                    <label className='mt-8'>Name</label>
                    <input
                        value={booking.name}
                        onChange={(e) => handleClickName(e)}
                        className='mt-4 border' type='text' placeholder='Name'></input>


                    <label className='mt-8'>Date</label>
                    <select
                        value={booking.date}
                        onChange={(e) => handleChangeDate(e)}
                        className='mt-4 border'>
                        <option value=''>--Select a date--</option>
                        {
                            availableDates.map((date, index) => {
                                return (
                                    <option key={index} value={date.date}>{date.date}</option>
                                )
                            })
                        }
                    </select>



                    <label className='mt-8'>Choose Time</label>
                    <select
                        value={booking.time}
                        onChange={(e) => handleChangeTime(e)}
                        className='border' id='select-time' disabled={!booking.date}>
                        <option value=''>--Select a time--</option>
                        {
                            newTime.map((time, index) => {
                                return (
                                    <option key={index} value={time.time}>{time.time}</option>
                                )
                            })

                        }
                    </select>


                    <label className='mt-8'>Number of Guests</label>
                    <input
                        value={booking.guests}
                        onChange={(e) => handleChangeGuests(e)}
                        className='mt-4 border' type='number' placeholder='1' min="1" max='10' id='guests'></input>


                    <label className='mt-8'>Occasion</label>
                    <select
                        value={booking.occasion}
                        onChange={(e) => handleChangeOccasion(e)}
                        className='mt-4 border' id='occasion'>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Party</option>
                    </select>


                    <button
                        onClick={handleSubmit}
                        className='mt-8 border' type='submit'>submit</button>

                </form>

            </div >
        </>
    )
}


export default Booking