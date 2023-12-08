import React from "react"
import { useState } from "react"



export const api = () => {
    const [availableDates, setAvailableDates] = useState([
        {
            bookings: [],
            time: [
                {
                    time: '11:00',
                    amount: 0
                },
                {
                    time: '12:00',
                    amount: 6
                },
                {
                    time: '1:00',
                    amount: 6
                },
                {
                    time: '2:00',
                    amount: 6
                },
            ],
            date: '12/3/2023',
            selected: true
        },
        {
            bookings: [],
            time: [
                {
                    time: '11:30',
                    amount: 6
                },
                {
                    time: '12:30',
                    amount: 0
                },
                {
                    time: '1:30',
                    amount: 6
                },
                {
                    time: '2:30',
                    amount: 6
                },
            ],
            date: '12/4/2023',
            selected: true
        },
        {
            bookings: [],
            time: [
                {
                    time: '11:30',
                    amount: 6
                },
                {
                    time: '12:30',
                    amount: 0
                },
                {
                    time: '1:30',
                    amount: 6
                },
                {
                    time: '2:30',
                    amount: 0
                },
            ],
            date: '12/5/2023',
            selected: true
        }
    ])


    /**
 * checking to see if form date matches avaiable dates date - then checking for matching times - then decrementing the amount by 1/ finally updating array.
 * @param  {Object} booking [object with data user entered //const booking = {
//    name: '',
//    guests: '' ,
//    time: '',
//    selectedSlot: '',
//    date: '',
//    occasion: '',
//    selected: true
//}]
 * @return {undefined} [updates available dates array]
 */
    function updateDate(booking) {
        //decrementing amount
        const foundDate = availableDates.find((element) => element.date === booking.date);
        const foundTime = foundDate.time.find((element) => element.time === booking.time);
        foundTime.amount -= 1;
        //
        console.log('booking', booking)
        console.log('availabledates', availableDates)
        //updating array of booking
        foundDate.bookings.push(booking);

    }


    /**
 * returns the data
 * @return {Array} [returns availableDates data]
 */
    function getAvailableDates() {
        return availableDates
    }

    
    return (
        {
            updateDate: updateDate,
            getAvailableDates: getAvailableDates
        }
    )
}

export default api


