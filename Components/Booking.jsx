
import React, { useState } from 'react'
import Nav from './Nav'
import api from '../src/API'
import { useNavigate } from "react-router-dom";


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
    const apiInstance = api()
    const availableDates = apiInstance.getAvailableDates()
    const navigate = useNavigate();

    const [newTime, setNewTime] = useState([])

    const [errorMessage, setErrorMessage] = useState('')

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



    /**
     * handle name input
     * @param  {Object} e [js event]
     * @return {undefined} [updates name in form]
     */
    function handleClickName(e) {
        const updateName = { ...booking, name: e.target.value }
        console.log(updateName)
        Setbooking(updateName);
    }

    /**
     * handle date selection
     * @param  {Object} e [js event]
     * @return {undefined} [updates date in state/ update available time depending on date
     * / turns on time selection after date selection]
     */
    function handleChangeDate(e) {
        const updateDate = { ...booking, date: e.target.value }
        let selectedDate = e.target.value
        const foundDate = availableDates.find((element) => element.date === selectedDate);
        setNewTime(foundDate.time)


        timeSelectionEnabled = true
        console.log(updateDate)
        Setbooking(updateDate);
    }

    /**
     * handle change guest amount
     * @param  {Object} e [js event]
     * @return {undefined} [updates guest in form]
     */
    function handleChangeGuests(e) {
        const updateGuests = { ...booking, guests: e.target.value }
        console.log(updateGuests)
        Setbooking(updateGuests);
    }


    /**
     * handle change time
     * @param  {Object} e [js event]
     * @return {undefined} [updates time in form]
     */
    function handleChangeTime(e) {
        const updateTime = { ...booking, time: e.target.value }
        console.log(updateTime)
        Setbooking(updateTime);
    }


    /**
 * handle change occasion
 * @param  {Object} e [js event]
 * @return {undefined} [updates occasion in form]
 */
    function handleChangeOccasion(e) {
        const updateOccasion = { ...booking, occasion: e.target.value }
        console.log(updateOccasion)
        Setbooking(updateOccasion);
    }



    /**
 * handle submit
 * @param  {Object} e [js event]
 * @return {undefined} [validating data/ updating API/ redirecting user]
 * @return {undefined} [updates guest in form]
 */
    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)
        if (!booking.date || !booking.name || !booking.guests || !booking.occasion || !booking.time) {
            setErrorMessage('please fill out form')
            return;
        }
        //update data
        apiInstance.updateDate(booking)
        navigate("/confirmation", { state: { booking: booking } });
    }







    return (
        <>
            <Nav />
            <div className='flex justify-center items-center m-8'>
                <form className='flex flex-col m-8 bg-whitish p-10 rounded-lg'>
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
                                    <option key={index} value={time.time}
                                        disabled={time.amount < 1}
                                    >{time.time}</option>
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
                        className='mt-8 border rounded-md bg-white hover:bg-green hover:text-whitish' type='submit'>submit</button>
                    <div className=''>
                        {errorMessage}
                    </div>
                </form>

            </div >
        </>
    )
}


export default Booking