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
import { fetchEvents, fetchSingleEvent } from "./slice/eventSlice";
import { EventDisplay } from "./Display";
import { deleteEvent } from "./slice/eventSlice";
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

    const events = useSelector((state) => state.events.events)
    const event = useSelector((state) => state.events.single_event)

    const dateFormatter = (date) => {
        const dateData = new Date(date)
        return dateData.toLocaleString()
    }

    const buttonHandler = (title) => {
        dispatch(deleteEvent({title: title}))
    }

    useEffect(() => {
        dispatch(fetchEvents())
    },[dispatch])

    const handleSelectEvent = (e) => {
        dispatch(fetchSingleEvent(e.title))
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
    console.log(event)
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
            {/* <EventDisplay display = {displayEvent}/> */}
            {/* <div className = 'display-container'>
                    {event ? 
                    <div>
                        <p>{event.title}</p>
                        <p>{event.desc}</p>
                       
                            {event.startDate && event.endDate && (
                                 <small>
                                From {dateFormatter(event.startDate)} to {dateFormatter(event.endDate)}
                                </small>
                            )}
                            
                    
                        <Button variant="secondary" onClick={() => buttonHandler(event.title)}>
                                Delete
                        </Button>
                    </div>: (
                        <p>No event selected</p>
                    )}
            </div> */}
            <div className="display-container">
                {event ? (
                    // If an event is selected, display its details
                    <div>
                    <p>{event.title}</p>
                    <p>{event.desc}</p>
                    {event.startDate && event.endDate ? (
                        // Check if startDate and endDate are available
                        <>
                            <small>
                            From {dateFormatter(event.startDate)} to {dateFormatter(event.endDate)}
                            </small>
                            <Button variant="secondary" onClick={() => buttonHandler(event.title)}>
                            Delete
                            </Button>
                        </>
                    ) : <p>No event selected</p>}
                    </div>
                ) : (
                    // If no event is selected, display a message
                    null
                )}
            </div>
        </>
    )
}