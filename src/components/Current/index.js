import React from "react";
import "./Current.scss";

export default function Current({ current }) {
    const sunrise = new Date(current.sunrise*1000);
    const sunset = new Date(current.sunset*1000);
    function formatTime(date) {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const hourFormat = hours >= 13 ? hours%12 : hours;
        const amPm  = hours >= 12 ? "PM" : "AM";
        return (hourFormat >= 10 ? hourFormat : "0"+hourFormat) + ":"
        + (minutes >= 10 ? minutes : "0"+minutes) + " " + amPm;
    }
    return (
        <div className="current">
            <div className="current-item">
                <p>Pressure: {current.pressure}</p>
            </div>
            <div className="current-item">
                <p>Humidity: {current.humidity}</p>
            </div>
            <div className="current-item">
                <p>Wind Speed: {current.wind_speed}</p>
            </div>
            <div className="current-item">
                <p>Sunrise: {formatTime(sunrise)}</p>
            </div>
            <div className="current-item">
                <p>Sunset: {formatTime(sunset)}</p>
            </div>
        </div>
    )
}