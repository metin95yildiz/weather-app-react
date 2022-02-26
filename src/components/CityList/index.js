import React from "react";
import { useSelector } from "react-redux";
import City from "../City";
import { citiesDataMemo } from "../../store/selectors";
import "./CityList.scss";

export default function CityList() {
    const cities = useSelector(citiesDataMemo);
    const sortedCities = Object.values(cities).sort((a, b) => {
    return new Date (b.createdAt) - new Date(a.createdAt) })
    return (
        <div className="city-list">
            {
                sortedCities.map((city) => {
                    return (
                        <City city={city} key={city.city} />
                    )
                })
            }
        </div>
    )
}