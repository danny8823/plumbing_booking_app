import React, {useState} from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { EventForm } from "./Form";


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
        start: new Date(2023,8,1,20,0,0),
        end: new Date(2023,8,1,22,30,0),
        desc: 'a really big meeting with really big people in a really big room'
    },
]

export const Cal = () => {

    

    return (
        <>        
        <div className = 'container'>
            <div className = 'calendar-container'>
                <Calendar 
                localizer={localizer} 
                events = {events} 
                startAccessor="start" 
                endAccessor="end"
                style = {{ height:500, margin: "50px"}}
                 />
            </div>
            <EventForm/>
        </div>
        </>
    )
}