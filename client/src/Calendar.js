import React, {useEffect, useState} from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { EventForm } from "./Form";
import axios from 'axios'
import { Button } from "react-bootstrap";

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