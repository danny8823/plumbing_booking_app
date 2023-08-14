import React, {useEffect, useState} from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { EventForm } from "./Form";
import axios from 'axios'

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



export const Cal = () => {

    const [event, setEvents] = useState(undefined)

    useEffect(() => {
        const fetchEvents = async() => {
            const {data} = await axios.get('/api/')
            setEvents(data)
    }
    fetchEvents()
    },[])

    const events = [
        {
            title: "Big Meeting",
            start: new Date(2023,8,1,20,0,0),
            end: new Date(2023,8,1,22,30,0),
            desc: 'a really big meeting with really big people in a really big room'
        },
        
    ]

    if(!event) {
        return <h1>Loading</h1>
    }

    const map_event = event.map(e => (
        {
            title: e.title,
            start: new Date(e.startDate),
            end: new Date(e.endDate),
            desc: e.description
        }
    ))
    return (
        <>        
        <div className = 'container'>
            <div className = 'calendar-container'>
                <Calendar 
                localizer={localizer} 
                events = {map_event} 
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