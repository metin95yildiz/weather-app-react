import React from "react";
import "./Current.scss";

export default function Current({ current }) {
    const sunrise = new Date(current.sunrise*1000);
    const sunset = new Date(current.sunset*1000);
    function formatTime(date) {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return hours + ":" + minutes.substr(-2);
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
                <p>Sunrise: {}</p>
            </div>
            <div className="current-item">
                <p>Sunset: {}</p>
            </div>
        </div>
    )
}