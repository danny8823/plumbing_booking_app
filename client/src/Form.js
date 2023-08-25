import React,{useState} from "react";
import { Button, Form } from "react-bootstrap";
import { days, hours, months } from "./constants";
import { SubmitForm } from "./Submit";
import { set } from "date-fns";

export const EventForm = () => {
    
    const [startTime, setStartTime] = useState('start time')
    const [startMin, setStartMin] = useState(0)
    const [endTime, setEndTime] = useState('end time')
    const [endMin, setEndMin] = useState(0)
    const [startMonth, setStartMonth] = useState('start month')
    const [endMonth, setEndMonth] = useState('end month')
    const [startDate, setStartDate] = useState('start date')
    const [endDate, setEndDate] = useState('end date')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [allDay, setAllDay] = useState(false)
    const [hide, setHide] = useState({
        display: 'flex'
    })

    const startTimeHandler = (e) => {
        setStartTime(e.target.value)
    }

    const endTimeHandler = (e) => {
        setEndTime(e.target.value)
    }

    const startMonthHandler = (e) => {
        setStartMonth(e.target.value)
    }

    const endMonthHandler = (e) => {
        setEndMonth(e.target.value)
    }

    const startMinHandler = (e) => {
        setStartMin(e.target.value)
    }

    const endMinHandler = (e) => {
        setEndMin(e.target.value)
    }

    const startDateHandler = (e) => {
        setStartDate(e.target.value)
    }

    const endDateHandler = (e) => {
        setEndDate(e.target.value)
    }

    const titleFormHandler = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
    }

    const descFormHandler = (e) => {
        setDescription(e.target.value)
    }

    const handleSwitch = () => {
        setAllDay(prevValue => !prevValue)
        setHide(prevState => ({
            ...prevState,
            display: prevState.display === 'flex' ? 'none' : 'flex'
          }));
    }

    return (
        <div className = 'form-container'>
            <Form>
                <Form.Check
                    type='switch'
                    id='all-day'
                    label='Book for all day, today'
                    checked = {allDay}
                    onChange = {handleSwitch}/>
            </Form>
            <div className = 'time-date-container' style ={hide}>
                <div>
                    <Form.Label>Start hour</Form.Label>
                    <Form.Select value = {startTime} onChange = {startTimeHandler}>
                        {hours.map((hour) => (
                            <option key={hour.value} value = {hour.value}>{hour.hour}</option>
                        ))}
                    </Form.Select>
                </div>
                <div>
                    <Form.Label>Minute</Form.Label>
                    <Form.Select value = {startMin} onChange = {startMinHandler}>
                        <option value = '0'>0</option>
                        <option value = '30'>30</option>
                    </Form.Select>
                </div>
                <div>
                    <Form.Label>Month</Form.Label>
                    <Form.Select value = {startMonth} onChange = {startMonthHandler}>
                        {months.map((month) => (
                            <option key = {month.value} value = {month.value}>{month.month}</option>
                        ))}
                    </Form.Select>
                </div>
                <div>
                    <Form.Label>Start Date</Form.Label>
                    <Form.Select value = {startDate} onChange = {startDateHandler}>
                        {days.map((day) => (
                            <option key = {day} value = {day}>{day}</option>
                        ))}
                    </Form.Select>
                </div>
            </div>
            <div className = 'time-date-container' style ={hide}>
                <div>
                    <Form.Label>End hour</Form.Label>
                    <Form.Select value = {endTime} onChange = {endTimeHandler}>
                        {hours.map((hour) => (
                                <option key={hour.value} value = {hour.value}>{hour.hour}</option>
                            ))}
                    </Form.Select>
                </div>
                <div>
                    <Form.Label>Minute</Form.Label>
                    <Form.Select value = {endMin} onChange = {endMinHandler}>
                        <option value = '0'>0</option>
                        <option value = '30'>30</option>
                    </Form.Select>
                </div>
                <div>
                    <Form.Label>End Month</Form.Label>
                    <Form.Select value = {endMonth} onChange = {endMonthHandler}>
                        {months.map((month) => (
                                <option key = {month.value} value = {month.value}>{month.month}</option>
                        ))}
                    </Form.Select>
                </div>
                <div>
                    <Form.Label>End Date</Form.Label>
                    <Form.Select value = {endDate} onChange = {endDateHandler}>
                        {days.map((day) => (
                                <option key = {day} value = {day}>{day}</option>
                            ))}
                    </Form.Select>
                </div>           
            </div>
            <div>
                <Form onChange={titleFormHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="input" placeholder="title" value ={title}/>
                    </Form.Group>
                </Form>
                <Form onChange={descFormHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="input" placeholder="description" value = {description} />
                    </Form.Group>
                </Form>
            </div>
            <SubmitForm 
                        start = {startDate}
                        end = {endDate}
                        starttime={startTime}
                        startMin = {startMin}
                        endtime = {endTime}
                        endMin = {endMin}
                        desc = {description}
                        title = {title}
                        startmonth = {startMonth}
                        endmonth = {endMonth}
                        allDay = {allDay}
            />             
        </div>
                    
       
    )
}