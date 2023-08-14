import React,{useState} from "react";
import { Button, Form } from "react-bootstrap";
import { days, hours, months } from "./constants";
import { SubmitForm } from "./Submit";

export const EventForm = () => {
    
    const [tech, setTech] = useState('tech')
    const [startTime, setStartTime] = useState('start time')
    const [startMin, setStartMin] = useState(0)
    const [endTime, setEndTime] = useState('end time')
    const [endMin, setEndMin] = useState(0)
    const [startMonth, setStartMonth] = useState('start month')
    const [endMonth, setEndMonth] = useState('end month')
    const [startDate, setStartDate] = useState('start date')
    const [endDate, setEndDate] = useState('end date')
    const [address, setAddress] = useState('address')
    const [description, setDescription] = useState('description')

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
        console.log(e.target.value)
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

    const addressFormHandler = (e) => {
        e.preventDefault()
        setAddress(e.target.value)
    }

    const descFormHandler = (e) => {
        setDescription(e.target.value)
    }

    return (
        <div className = 'form-container'>
            <div>
                <Form.Label>Select Technician</Form.Label>
                <Form.Select value = {tech} onChange = {techHandler}>
                    <option>Pick a technician</option>
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
                    <Form.Label>End Date</Form.Label>
                    <Form.Select value = {endDate} onChange = {endDateHandler}>
                        {days.map((day) => (
                                <option key = {day} value = {day}>{day}</option>
                            ))}
                        </Form.Select>
                    </div>
                </div>
                    <div>
                        <Form onChange={addressFormHandler}>
                            <Form.Group className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="input" placeholder="address" value ={address}/>
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
                        tech = {tech}
                        start = {startDate}
                        end = {endDate}
                        starttime={startTime}
                        startMin = {startMin}
                        endtime = {endTime}
                        endMin = {endMin}
                        desc = {description}
                        title = {address}
                        startmonth = {startMonth}
                        endmonth = {endMonth}
                    />
            </div>
    )
}