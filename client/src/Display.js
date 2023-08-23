import React from 'react'
import { Button } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { deleteEvent } from './slice/eventSlice'
export const EventDisplay = (props) => {

    const {display} = props
    
    const dispatch = useDispatch()

    const dateFormatter = (date) => {
        const dateData = new Date(date)
        return dateData.toLocaleString()
    }

    const buttonHandler = (title) => {
        dispatch(deleteEvent({title: title}))
    }
    
    if(display.title === undefined) {
        return <div className = 'display-container'>Select event to display</div>
    }

    return (
        <div className = 'display-container'>
            <div>
                <p>{display.title}</p>
                <p>{display.desc}</p>
                <small>From {dateFormatter(display.start)} To {dateFormatter(display.end)} </small>
                <Button variant = 'secondary' onClick={() => buttonHandler(display.title)}>Delete</Button>
            </div>
        </div>
    )
}