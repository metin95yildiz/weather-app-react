import React from "react";
import cn from "classnames"
import "./DailyCard.scss";

export default function DailyCard({ data, isToday, cityName }) {
    const days = ["Sun", "Mon", "Tues", "Wed",
    "Thu", "Fri", "Sat"];
    const dayName = days[new Date(data.dt*1000).getDay()];
    return (
        <div className={cn("weather-card", {"today": isToday})}>
            <h4>
                {isToday ? `Today in ${cityName}: ${dayName}` : dayName }
            </h4>
            <div className="image-frame">
                <img
                src={`http://openweathermap.org/img/wn//${data.weather[0].icon}@4x.png`}
                alt="weather-icon"
                className="weather-icon"
                />
            </div>
            <div className="details">
                <p><span>{data.weather[0].main}</span></p>
                <p>Night: <span>{data.temp.night}&#176;C</span></p>
                <p>Day: <span>{data.temp.day}&#176;C</span></p>
            </div>
        </div>
    )
}