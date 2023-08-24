import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postEvents } from "./slice/eventSlice";

export const SubmitForm = (props) => {
    const {allDay, title, desc, startmonth,endmonth,start,end,starttime,endtime,startMin,endMin} = props

    const dispatch = useDispatch()

    const startRender = () => {
        const start_date = `${new Date(2023, Number(startmonth)- 1, Number(start), Number(starttime), Number(startMin), 0 )}`
        if(start_date  === 'Invalid Date') {
            return <p>Please input all the fields</p>
        }
        return start_date
    }

    const endReder= () => {
        const end_date = `${new Date (2023, Number(endmonth) - 1, Number(end), Number(endtime), Number(endMin), 0)}`
        if(end_date === 'Invalid Date') {
            return <p>Please input all the fields</p>
        }
        return end_date
    }

    const bookHandler = async () => {
        if(allDay) {
            dispatch(postEvents({
                title: props.title,
                start: new Date(),
                end: new Date (),
                desc: props.desc,
                allDay: allDay
            }))
        }
        dispatch(postEvents({
            title: props.title,
            start: new Date(2023, Number(props.startmonth)- 1, Number(props.start), Number(props.starttime), Number(props.startMin), 0 ),
            end: new Date (2023, Number(props.endmonth) - 1, Number(props.end), Number(props.endtime), Number(props.endMin), 0),
            desc: props.desc,
            allDay: allDay
        }))
    }

    if (props === 'undefined') return (
        <div>Loading</div>
    )

    const bookingDetails = () => {
        if(allDay) {
            return <p>{title}, {desc}, booked all day </p>
        } else {
            return (
                <div>
                    <p>From</p>
                    <small>{startRender()}</small>
                    <p>To</p>
                    <small>{endReder()}</small>
                </div>
            )
        }
    }

    return (
        <div>
            <div>
                {bookingDetails()}
            </div>
            <Button variant="primary" onClick={bookHandler}>Book</Button>
        </div>
    )
}