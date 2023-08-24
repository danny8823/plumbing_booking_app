import React from 'react'
import { Button } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { deleteEvent } from './slice/eventSlice'

export const EventDisplay = (props) => {

    const {title,start,end,desc} = props.event
    
    console.log(title)
    const dispatch = useDispatch()

    const dateFormatter = (date) => {
        const dateData = new Date(date)
        return dateData.toLocaleString()
    }

    const buttonHandler = (title) => {
        dispatch(deleteEvent({title: title}))
    }
    
    if(props === undefined) {
        return <div className = 'display-container'>Select event to display</div>
    }

    return (
        <div className = 'display-container'>
            <div>
                <p>{title}</p>
                <p>{desc}</p>
                {start && end ? (
                    <small>From {dateFormatter(start)} To {dateFormatter(end)} </small>
                ) : 
                    <small>No event selected</small>}
                <Button variant = 'secondary' onClick={() => buttonHandler(title)}>Delete</Button>
            </div>
        </div>
    )
}