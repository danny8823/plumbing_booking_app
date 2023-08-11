import { useEffect, useState } from "react";

function App() {
    const [days, setDays] = useState([])
    const [month, setMonth] = useState('')
    let date = new Date();
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth();
    
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    const renderCalendar = () => {
        let firstDay = new Date(currentYear, currentMonth, 1).getDay();
        let lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
        let lastDay = new Date(currentYear, currentMonth, lastDate).getDay();
        let lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate();

        let render = []

        for(let i = firstDay; i > 0; i--) {
            render.push(<li className = 'inactive'>{lastDateofLastMonth - i + 1}</li>)
        }

        for( let i = 1; i <= lastDate; i++) {
            let isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active" : "";
            render.push(<li className = {isToday}>{i}</li>)
        }

        for(let i = lastDay; i < 6; i++) {
            render.push(<li className = "inactive">{i - lastDay + 1}</li>)
        }

        setDays(render)
    }
    
    

    const previousHandler = () => {
        currentMonth = currentMonth - 1;
        if (currentMonth < 0) {
            currentYear = currentYear - 1;
            currentMonth = 11;
        }
        date = new Date(currentYear, currentMonth, 1);
        setMonth(months[currentMonth-1])
        renderCalendar();
    };

    const nextHandler = () => {
        currentMonth = currentMonth + 1;
        if (currentMonth > 11) {
            currentYear = currentYear + 1;
            currentMonth = 0;
        }
        date = new Date(currentYear, currentMonth, 1);
        setMonth(months[currentMonth-1])
        renderCalendar();
    };


    useEffect(() => {
        renderCalendar()
        setMonth(months[currentMonth-1])
    },[])

  return (
    <div className = 'container'>
        <div className = 'title'>
            <p>{month} {currentYear}</p>
            <div className = 'icons'>
                <span id = "prev" onClick ={previousHandler}>Prev</span>
                <span id = "next" onClick = {nextHandler}>Next</span>
            </div>
        </div>
        <div className = 'calendar'>
            <ul className = 'weeks'>
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thur</li>
                <li>Fri</li>
                <li>Sat</li>
            </ul>
            <ul className = 'days'>{days}</ul>
        </div>
    </div>
  );
}

export default App;
