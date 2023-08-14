import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postEvents } from "./slice/eventSlice";

export const SubmitForm = (props) => {
    const {allDay, title, desc} = props
    const dispatch = useDispatch()
    const start = () => {
        return `${new Date(2023, Number(props.startmonth)- 1, Number(props.start), Number(props.starttime), Number(props.startMin), 0 )}`
    }

    const end = () => {
        return `${new Date (2023, Number(props.endmonth) - 1, Number(props.end), Number(props.endtime), Number(props.endMin), 0)}`
    }

    const bookHandler = async () => {
        dispatch(postEvents({
            title: props.title,
            start: new Date(2023, Number(props.startmonth)- 1, Number(props.start), Number(props.starttime), Number(props.startMin), 0 ),
            end: new Date (2023, Number(props.endmonth) - 1, Number(props.end), Number(props.endtime), Number(props.endMin), 0),
            desc: props.desc
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
                    <small>{start()}</small>
                    <p>To</p>
                    <small>{end()}</small>
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