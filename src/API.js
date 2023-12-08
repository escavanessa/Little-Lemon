import React from "react"
import { useState } from "react"

const [availableDates, setAvailableDates] = useState([
    {
        name: '',
        guests: '',
        time: '',
        selectedSlot: '',
        date: '',
        occasion: '',
        selected: true
    }
])

let api = {}

api.updateDate = function () {

}

api.getAvailableDates = function () {
    return availableDates
}

export default api