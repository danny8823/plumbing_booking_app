const currentDate = new Date()
const month = currentDate.getMonth()


const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
function App() {
  return (
    <div className = 'cal-container'>
        <h1 className = 'cal-month'>{months[month - 1]}</h1>
        <div className = 'cal-day'>            
            <div className = 'cal-date'>
                <p>Sun</p>
                <div>{currentDate.setDate(1)}</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className = 'cal-date'>
                <p>Mon</p>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className = 'cal-date'>
                <p>Tue</p>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className = 'cal-date'>
                <p>Wed</p>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className = 'cal-date'>
                <p>Thur</p>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className = 'cal-date'>
                <p>Fri</p>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className = 'cal-date'>
                <p>Sat</p>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    </div>
  );
}

export default App;
