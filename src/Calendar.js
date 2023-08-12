import React, {useState} from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay"
import "react-big-calendar/lib/css/react-big-calendar.css"
import DatePicker from "react-datepicker"
import { Button, Form } from "react-bootstrap";

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
    const [endTime, setEndTime] = useState('')
    const [startMonth, setStartMonth] = useState('')
    const [endMonth, setEndMonth] = useState('')
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
                    <div className = 'time'>
                        <Form.Label>Start Time</Form.Label>
                        <Form.Select value = {startTime} onChange = {startTimeHandler}>
                            <option value = '6'>6 am</option>
                            <option value = '7'>7 am</option>
                            <option value = '8'>8 am</option>
                            <option value = '9'>9 am</option>
                            <option value = '10'>10 am</option>
                            <option value = '11'>11 am</option>
                            <option value = '12'>12 am</option>
                            <option value = '13'>1 pm</option>
                            <option value = '14'>2 pm</option>
                            <option value = '15'>3 pm</option>
                            <option value = '16'>4 pm</option>
                            <option value = '17'>5 pm</option>
                            <option value = '18'>6 pm</option>
                            <option value = '19'>7 pm</option>
                            <option value = '20'>8 pm</option>
                        </Form.Select>
                    </div>
                    <div className = 'time'>
                        <Form.Label>End Time</Form.Label>
                        <Form.Select value = {endTime} onChange = {endTimeHandler}>
                            <option value = '6'>6 am</option>
                            <option value = '7'>7 am</option>
                            <option value = '8'>8 am</option>
                            <option value = '9'>9 am</option>
                            <option value = '10'>10 am</option>
                            <option value = '11'>11 am</option>
                            <option value = '12'>12 am</option>
                            <option value = '13'>1 pm</option>
                            <option value = '14'>2 pm</option>
                            <option value = '15'>3 pm</option>
                            <option value = '16'>4 pm</option>
                            <option value = '17'>5 pm</option>
                            <option value = '18'>6 pm</option>
                            <option value = '19'>7 pm</option>
                            <option value = '20'>8 pm</option>
                        </Form.Select>
                    </div>
                </div>
                <div className = 'month-container'>
                    <div className = 'month'>
                        <Form.Label>Start Month</Form.Label>
                        <Form.Select value = {startMonth} onChange = {startMonthHandler}>
                            <option value = '0'>January</option>
                            <option value = '1'>Feburary</option>
                            <option value = '2'>March</option>
                            <option value = '3'>April</option>
                            <option value = '4'>May</option>
                            <option value = '5'>June</option>
                            <option value = '6'>July</option>
                            <option value = '7'>August</option>
                            <option value = '8'>September</option>
                            <option value = '9'>October</option>
                            <option value = '10'>November</option>
                            <option value = '11'>December</option>
                        </Form.Select>
                    </div>
                    <div className = 'month'>
                        <Form.Label>End Month</Form.Label>
                        <Form.Select value = {endMonth} onChange = {endMonthHandler}>
                            <option value = '0'>January</option>
                            <option value = '1'>Feburary</option>
                            <option value = '2'>March</option>
                            <option value = '3'>April</option>
                            <option value = '4'>May</option>
                            <option value = '5'>June</option>
                            <option value = '6'>July</option>
                            <option value = '7'>August</option>
                            <option value = '8'>September</option>
                            <option value = '9'>October</option>
                            <option value = '10'>November</option>
                            <option value = '11'>December</option>
                        </Form.Select>
                    </div>
                </div>
                <div>
                    <Form>
                        <Form.Label>Type start date</Form.Label>
                        <Form.Control type = 'integer' placeholder="enter day"></Form.Control>
                    </Form>
                </div>
                {tech} {startTime} {endTime} {startMonth} {endMonth}
            </div>
            
        </div>
    )
}