import React from "react";

export const SubmitForm = (props) => {
    
    const start = () => {
        return `${new Date(2023, Number(props.startmonth)- 1, Number(props.start), Number(props.starttime), Number(props.startMin), 0 )}`
    }

    const end = () => {
        return `${new Date (2023, Number(props.endmonth) - 1, Number(props.end), Number(props.endtime), Number(props.endMin), 0)}`
    }
    return (
        <div>
            <p>{props.tech}</p>
            <p>From</p>
            <small>{start()}</small>
            <p>To</p>
            <small>{end()}</small>
        </div>
    )
}