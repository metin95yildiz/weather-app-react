import React from "react";
import "./Current.scss";
import { DateTime } from "luxon";

export default function Current({ current, timezone }) {
    const sunrise = current.sunrise;
    const sunset = current.sunset;
    function formatTime(date) {
        const localDate = DateTime.fromSeconds(date).setZone(timezone);
        const hours = localDate.toFormat("hh");
        const minutes = localDate.toFormat("mm");
        const amPm  = localDate.toFormat("a");
        return `${hours}:${minutes} ${amPm}`;
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