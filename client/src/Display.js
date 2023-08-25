import React, { useEffect, useState } from 'react'
import { Button, Modal,Form } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { deleteEvent, fetchSingleEvent } from './slice/eventSlice'

import edit_icon from './icons/edit_icon.png'
import del_icon from './icons/delete_icon.png'
export const EventDisplay = () => {
    const singleE = useSelector((state) => state.events.single_event)

    const dispatch = useDispatch()

    const [single_Event, setSingleEvent] = useState(undefined)
    const [show, setShow] = useState(false)

    const [title,setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState(undefined)
    const [endDate, setEndDate] = useState(undefined)
    const [startTime, setStartTime] = useState(undefined)
    const [endTime, setEndTime] = useState(undefined)

    const handleClose = () => setShow(false)

    useEffect(() => {
        setSingleEvent(singleE)
    },[singleE])

    

    const dateFormatter = (date) => {
        const dateData = new Date(date)
        return dateData.toLocaleString()
    }

    const delHandler = (title) => {
        dispatch(deleteEvent({title: title}))
        setSingleEvent(undefined)
    }

    const editHandler = (id) => {
        setShow(true)
    }

    const editFormHandler = (e) => {
        e.preventDefault()
        setDescription('')
        setTitle('')
        setStartDate(undefined)
        setEndDate(undefined)
        setStartTime(undefined)
        setEndTime(undefined)
    }
    
    const dateDisplay = () => {
        if(single_Event.allDay) {
            return <small>Appointed book for all day</small>
        } else if(single_Event.startDate){
            return <small>From {dateFormatter(single_Event.startDate)} To {dateFormatter(single_Event.endDate)} </small>
        } else {
            return <small>No event selected</small>
        }
    }
    
    if(single_Event === undefined) {
        return <div className = 'display-container'>
                    <p id = 'display-empty-msg'>Select event to display</p>
                </div>
    }

    return (
        <div className = 'display-container'>
            <div>
                <div id = 'display_buttons'>
                    <img src = {del_icon} onClick={() => delHandler(single_Event.title)} alt = 'delete icon'/>
                    <img src = {edit_icon} onClick={() => editHandler(single_Event.id)} alt = 'edit icon'/>
                </div>
            </div>
            <div id = 'display'>
                <p id = 'display_title'>{single_Event.title}</p>
                <p>{single_Event.description}</p>
                {dateDisplay()}
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={editFormHandler}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="input" placeholder={single_Event.title} onChange={(e) => setTitle(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="input" placeholder={single_Event.description} onChange = {(e) => setDescription(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="date" onChange={(e) => setStartDate(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>End Date</Form.Label>
                            <Form.Control type="date" onChange = {(e) => setEndDate(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Start time</Form.Label>
                            <Form.Control type="time" onChange = {(e) => setStartTime(e.target.value)}/>
                        </Form.Group>   
                        <Form.Group className="mb-3" >
                            <Form.Label>End time</Form.Label>
                            <Form.Control type="time" onChange = {(e) => setEndTime(e.target.value)}/>
                        </Form.Group>
                        <Button variant='primary' onClick={handleClose} type='submit'>Save Changes</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}