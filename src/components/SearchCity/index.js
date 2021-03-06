import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCity } from "../../store/actions";
import "./SearchCity.scss";

export default function SearchCity() {
    const [cityName, setCityName] = useState("");
    const dispatch = useDispatch();
    function submit(event) {
        event.preventDefault();
        dispatch(addCity(cityName));
        setCityName("");
    }

    return (
        <div className="add-city-form">
            <h2>Add City to See Weather Details</h2>
            <form onSubmit={submit}>
                <div className="city-input">
                    <input type="search" className="search-input"
                    onChange={(event) => setCityName(event.target.value)}
                    placeholder="Enter a city name..." value={cityName}/>
                </div>
                <input type="submit" className="submit-input" value="Add" disabled={!cityName}/>
            </form>
        </div>
    )
}