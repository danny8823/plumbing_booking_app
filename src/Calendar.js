import React, {useState} from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay"
import "react-big-calendar/lib/css/react-big-calendar.css"
import DatePicker from "react-datepicker"
import { Button, Form } from "react-bootstrap";
import { days, hours, months } from "./constants";

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

const events = [
    {
        title: "Big Meeting",
        start: new Date(2023,8,1,20,0,0),
        end: new Date(2023,8,1,22,30,0),
        desc: 'a really big meeting with really big people in a really big room'
    },
]

export const Cal = () => {

    const [tech, setTech] = useState('')
    const [startTime, setStartTime] = useState('')
    const [startMin, setStartMin] = useState('')
    const [endTime, setEndTime] = useState('')
    const [endMin, setEndMin] = useState('')
    const [startMonth, setStartMonth] = useState('')
    const [endMonth, setEndMonth] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')


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

    return (
        <div className = 'container'>
            <div className = 'calendar-container'>
                <Calendar 
                localizer={localizer} 
                events = {events} 
                startAccessor="start" 
                endAccessor="end"
                style = {{ height:500, margin: "50px"}}
                 />
            </div>
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
                
            </div>
            
        </div>
    )
}