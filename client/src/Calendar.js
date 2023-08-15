import React, {useCallback, useEffect, useState} from "react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { EventForm } from "./Form";
import axios from 'axios'
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "./slice/eventSlice";
import { EventDisplay } from "./Display";
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
    const [displayEvent, setDisplayEvent] = useState('')
    const dispatch = useDispatch()
    const events = useSelector((state) => state.events)
    

    useEffect(() => {
        dispatch(fetchEvents())
    },[dispatch])

    // const handleSelectEvent = useCallback(
    //         (event) => window.alert(event.title),[]
    // )

    const handleSelectEvent = (e) => {
        setDisplayEvent(e)
    }

    if(events[0] === undefined) {
        return <h1>Loading</h1>
    }

    const map_event = events.map(e => (
        {
            title: e.title,
            start: new Date(e.startDate),
            end: new Date(e.endDate),
            desc: e.description
        }
    ))
       
    // const doubleClickHandle = (e) => {
    //     setDisplayEvent(e)
    // }
 

    return (
        <>        
            <div className = 'container'>
                <div className = 'calendar-container'>
                    <Calendar 
                    localizer={localizer}
                    defaultView={Views.WEEK} 
                    events = {map_event}
                    onSelectEvent={handleSelectEvent} 
                    startAccessor="start" 
                    endAccessor="end"
                    selectable
                    // onDoubleClickEvent={doubleClickHandle}
                    // timeslots={6}
                    style = {{ height:500, margin: "50px"}}
                    />
                </div>
                <EventForm/>
            </div>
            <EventDisplay display = {displayEvent}/>
        </>
    )
}