import React from "react";
import { Button } from "react-bootstrap";
import axios from 'axios'
export const SubmitForm = (props) => {
    
    const start = () => {
        return `${new Date(2023, Number(props.startmonth)- 1, Number(props.start), Number(props.starttime), Number(props.startMin), 0 )}`
    }

    const end = () => {
        return `${new Date (2023, Number(props.endmonth) - 1, Number(props.end), Number(props.endtime), Number(props.endMin), 0)}`
    }

    const bookHandler = async () => {
       const {data} = await axios.post('/api/', {
            title: props.title,
            start: new Date(2023, Number(props.startmonth)- 1, Number(props.start), Number(props.starttime), Number(props.startMin), 0 ),
            end: new Date (2023, Number(props.endmonth) - 1, Number(props.end), Number(props.endtime), Number(props.endMin), 0),
            desc: props.desc
        })
        return console.log(data)
    }

    return (
        <div>
            <div>
                <p>{props.tech}</p>
                <p>From</p>
                <small>{start()}</small>
                <p>To</p>
                <small>{end()}</small>
            </div>
            <Button variant="primary" onClick={bookHandler}>Book</Button>
        </div>
    )
}