import React, {useState} from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay"
import "react-big-calendar/lib/css/react-big-calendar.css"
import DatePicker from "react-datepicker"

const locales = {
    "en-US" : require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2023,7,1),
        end: new Date(2023,7,1)
    },
    {
        title: "Vacation",
        start: new Date(2023,7,3),
        end: new Date(2023,7,7)
    },
    {
        title: "Conference",
        start: new Date(2023,7,10),
        end: new Date(2023,7,12)
    }
]

export const Cal = () => {
    return (
        <div>
            <Calendar 
                localizer={localizer} 
                events = {events} 
                startAccessor="start" 
                endAccessor="end"
                style = {{height:500, margin: "50px"}}
            />
        </div>
    )
}