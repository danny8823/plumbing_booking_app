import React, {useEffect, useState} from "react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { EventForm } from "./Form";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents, fetchSingleEvent } from "./slice/eventSlice";
import { deleteEvent } from "./slice/eventSlice";
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
    const dispatch = useDispatch()

    const events = useSelector((state) => state.events.events)

    const [singleEvent, setSingleEvent ] = useState('')
    // const dateFormatter = (date) => {
    //     const dateData = new Date(date)
    //     return dateData.toLocaleString()
    // }

    // const buttonHandler = (title) => {
    //     dispatch(deleteEvent({title: title}))
    // }

    
    useEffect(() => {
        dispatch(fetchEvents())

    },[dispatch])


    const handleSelectEvent = (e) => {
        setSingleEvent(e)
    }

    if(events[0] === undefined) {
        return <h1>hld on</h1>
    }
    const map_event = events.map(e => (
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
            <EventDisplay event = {singleEvent}/>
        </>
    )
}