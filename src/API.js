import React from "react"
import { useState } from "react"



export const api = () => {
    const [availableDates, setAvailableDates] = useState([
        {
            name: '',
            guests: '',
            time: [
                {
                    time: '11:30',
                    amount: 6
                },
                {
                    time: '12:30',
                    amount: 6
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
            date: '12/3/2023',
            occasion: '',
            selected: true
        },
        {
            name: '',
            guests: '',
            time: [
                {
                    time: '11:30',
                    amount: 6
                },
                {
                    time: '12:30',
                    amount: 6
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
            occasion: '',
            selected: true
        },
        {
            name: '',
            guests: '',
            time: [
                {
                    time: '11:30',
                    amount: 6
                },
                {
                    time: '12:30',
                    amount: 6
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
            date: '12/5/2023',
            occasion: '',
            selected: true
        }
    ])


    function updateDate () {

    }

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


