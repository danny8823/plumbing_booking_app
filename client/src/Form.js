import React,{useState} from "react";
import { Button, Form } from "react-bootstrap";
import { days, hours, months } from "./constants";

export const EventForm = () => {
    
    const [tech, setTech] = useState('')
    const [startTime, setStartTime] = useState('')
    const [startMin, setStartMin] = useState('')
    const [endTime, setEndTime] = useState('')
    const [endMin, setEndMin] = useState('')
    const [startMonth, setStartMonth] = useState('')
    const [endMonth, setEndMonth] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [address, setAddress] = useState('')
    const [description, setDescription] = useState('')

    const techHandler = (e) => {
        setTech(e.target.value)
    }

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

    const formHandler = (e) => {
        e.preventDefault()
        setDescription('')
        setAddress('')
    }
    return (
        <div className = 'form-container'>
            <div>
                <Form.Label>Select Technician</Form.Label>
                <Form.Select value = {tech} onChange = {techHandler}>
                    <option value="John">John</option>
                    <option value="David">David</option>
                    <option value="Chris">Chris</option>
                </Form.Select> 
            </div>
            <div className = 'time-container'>
                <div className = 'hour-select-form'>
                    <div>
                        <Form.Label>Start Time</Form.Label>
                        <Form.Select value = {startTime} onChange = {startTimeHandler}>
                            {hours.map((hour) => (
                                <option key={hour.value} value = {hour.value}>{hour.hour}</option>
                            ))}
                        </Form.Select>
                    </div>
                    <div>
                        <Form.Select value = {startMin} onChange = {startMinHandler}>
                            <option value = '0'>0</option>
                            <option value = '30'>30</option>
                        </Form.Select>
                    </div>
                </div>
            <div className = 'hour-select-form'>
                <div>
                    <Form.Label>End Time</Form.Label>
                    <Form.Select value = {endTime} onChange = {endTimeHandler}>
                        {hours.map((hour) => (
                                <option key={hour.value} value = {hour.value}>{hour.hour}</option>
                            ))}
                    </Form.Select>
                </div>
                <div>
                    <Form.Select value = {endMin} onChange = {endMinHandler}>
                        <option value = '0'>0</option>
                        <option value = '30'>30</option>
                    </Form.Select>
                </div>
            </div>
        </div>
            <div className = 'month-container'>
                <div>
                    <Form.Label>Start Month</Form.Label>
                    <Form.Select value = {startMonth} onChange = {startMonthHandler}>
                        {months.map((month) => (
                            <option key = {month.value} value = {month.value}>{month.month}</option>
                        ))}
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
            </div>
            <div className = 'date-container'>
                <div className = 'date'>
                    <Form.Label>Start Date</Form.Label>
                    <Form.Select value = {startDate} onChange = {startDateHandler}>
                        {days.map((day) => (
                            <option key = {day} value = {day}>{day}</option>
                        ))}
                    </Form.Select>
                </div>
                <div classname = 'date'>
                    <Form.Label>Start Date</Form.Label>
                    <Form.Select value = {endDate} onChange = {endDateHandler}>
                        {days.map((day) => (
                                <option key = {day} value = {day}>{day}</option>
                            ))}
                        </Form.Select>
                    </div>
                </div>
                    <div>
                        <Form onSubmit={formHandler}>
                            <Form.Group className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="input" placeholder="address" value ={address} onChange={(e) => setAddress(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="input" placeholder="description" value = {description} onChange={(e) => setDescription(e.target.value)}/>
                            </Form.Group>
                        </Form>
                    </div>
                <div>
                    {tech} will be {address} doing {description} from {startTime}:{startMin} to {endTime}:{endMin}
                </div>
            </div>
    )
}