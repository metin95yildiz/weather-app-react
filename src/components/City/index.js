import React from "react";
import DailyCard from "../DailyCard";
import { removeCity } from "../../store/actions";
import { useDispatch } from "react-redux";
import Current from "../Current";
import "./City.scss";

export default function City({city}) {
    const dispatch = useDispatch();
    function remove(event) {
        event.preventDefault();
        dispatch(removeCity(city.city));
    }
    return (
        <div className="city">
            <div className="city-name">
                <h2>{city.city}</h2>
                <button className="remove-button" onClick={remove}></button>
            </div>
            <div className="current-weather">
                <Current current={city.details.current}/>
            </div>
            <div className="weekly-forecast">
                {
                    city.details.daily.map((day, index) => {
                        return (
                        <DailyCard
                         data={day}
                         isToday={index === 0 ? true : false}/>
                        );
                    })
                }
            </div>
        </div>
    )
}