import React, { useState, useEffect } from "react";
import "./Time.scss"

export default function Time() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const [time, setTime] = useState(new Date());
    const [day, setDay] = useState();
    const [month, setMonth] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [minutes, setMinutes] = useState();
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
            setDate(time.getDate());
            setMonth(time.getMonth());
            setDay(time.getDay());
            setHour(time.getHours());
            setMinutes(time.getMinutes());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [time]);
    const hoursFormat = hour >= 13 ? hour % 12 : hour;
    const amPm = hour >= 12 ? "PM" : "AM";
    const showHour = hoursFormat < 10 ? "0"+hoursFormat : hoursFormat;
    const showMinutes = minutes < 10 ? "0"+minutes : minutes;
    return (
        <div className="time-box">
            { showHour ?
            <>
                <div className="time">
                    {showHour}:{showMinutes}
                    <span className="am-pm">
                        {amPm}
                    </span>
                </div>
                <div className="date">
                    {days[day]}, {date} {months[month]}
                </div>
            </>
        : "Loading..."}
        </div>
    )
}