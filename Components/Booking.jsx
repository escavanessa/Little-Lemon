
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


const FormFieldErrorMessage = (props) => {
    return (
        <div className="FieldError">{props.msg}</div>
    );
};




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
    const [isTouched, setIsTouched] = useState(
        {
            name: false,
            guests: false,
            time: false,
            selectedSlot: false,
            date: false,
            occasion: false,
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
        setErrorMessage(validateValues(booking))
        apiInstance.updateDate(booking)
        navigate("/confirmation", { state: { booking: booking } });
    }







    return (
        <>
            <Nav />
            <div className='flex justify-center items-center m-8'>
                <form className='flex flex-col m-8 bg-whitish p-10 rounded-lg'>
                    <label for="booking-name" className='mt-8'>Name</label>
                    <input
                        value={booking.name}
                        onChange={(e) => handleClickName(e)}
                        onBlur={() => {
                            setIsTouched({ ...isTouched, name: true });
                        }}
                        className='mt-4 border' type='text' id='booking-name' placeholder='Name'></input>
                    {isTouched.name && !booking.name ? (<FormFieldErrorMessage msg={"please enter a name"} />) : ''}


                    <label for="booking-date" className='mt-8'>Date</label>
                    <select
                        value={booking.date}
                        onChange={(e) => handleChangeDate(e)}
                        onBlur={() => {
                            setIsTouched({ ...isTouched, date: true });
                        }}
                        className='mt-4 border' id='booking-date'>
                        <option value=''>--Select a date--</option>
                        {
                            availableDates.map((date, index) => {
                                return (
                                    <option key={index} value={date.date}>{date.date}</option>
                                )
                            })
                        }
                    </select>
                    {isTouched.date && !booking.date ? (<FormFieldErrorMessage msg={"please choose a date"} />) : ''}


                    <label for="booking-time" className='mt-8'>Choose Time</label>
                    <select
                        value={booking.time}
                        onChange={(e) => handleChangeTime(e)}
                        onBlur={() => {
                            setIsTouched({ ...isTouched, time: true });
                        }}


                        className='border' id='booking-time' disabled={!booking.date}>
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
                    {isTouched.time && !booking.time ? (<FormFieldErrorMessage msg={"please choose a time"} />) : ''}

                    <label for="booking-guests" className='mt-8'>Number of Guests</label>
                    <input
                        value={booking.guests}
                        onChange={(e) => handleChangeGuests(e)}
                        onBlur={() => {
                            setIsTouched({ ...isTouched, guests: true });
                        }}
                        className='mt-4 border'  type='number' placeholder='1' min="1" max='10' id='booking-guests'></input>
                    {isTouched.guests && !booking.guests ? (<FormFieldErrorMessage msg={"please enter party size"} />) : ''}
                    {isTouched.guests && (booking.guests > 10) ? (<FormFieldErrorMessage msg={"party size less than 10"} />) : ''}


                    <label for="booking-occasion" className='mt-8'>Occasion</label>
                    <select
                        value={booking.occasion}
                        onChange={(e) => handleChangeOccasion(e)}
                        onBlur={() => {
                            setIsTouched({ ...isTouched, occasion: true });
                        }}
                        className='mt-4 border' id='booking-occasion'>
                        <option value=''>--Select an occasion--</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Party</option>
                        <option>Other</option>
                    </select>
                    {isTouched.occasion && !booking.occasion ? (<FormFieldErrorMessage msg={"please choose an occasion"} />) : ''}


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