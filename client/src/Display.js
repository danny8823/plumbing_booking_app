import React from 'react'

export const EventDisplay = (props) => {

    const {display} = props
    
    const dateFormatter = (date) => {
        const dateData = new Date(date)
        return dateData.toLocaleString()
    }

    if(display.title === undefined) {
        return <div className = 'display-container'>Select event to display</div>
    }

    return (
        <div className = 'display-container'>
            <div>
                <p>{display.title}</p>
                <p>{display.desc}</p>
                <small>From {dateFormatter(display.start)} To {dateFormatter(display.end)} </small>
            </div>
        </div>
    )
}