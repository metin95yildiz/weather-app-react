import React from "react";
import cn from "classnames"
import "./DailyCard.scss";

export default function DailyCard({ data, isToday }) {

    return (
        <div className={cn("weather-card", {"today": isToday})}>
            <h4>{isToday ? "Today" : "Day Name" }</h4>
            <img
            src={`http://openweathermap.org/img/wn//${data.weather[0].icon}@4x.png`}
            alt="weather-icon"
            className="weather-icon"
            />
            <div className="details">
                <p>Night - {data.temp.night}&#176;C</p>
                <p>Day - {data.temp.day}&#176;C</p>
            </div>
        </div>
    )
}