import React from "react";
import { useSelector } from "react-redux";
import City from "../City";
import { citiesDataMemo } from "../../store/selectors";
import "./CityList.scss";

export default function CityList() {
    const cities = useSelector(citiesDataMemo);
    return (
        <div className="city-list">
            {
                Object.values(cities).map((city) => {
                    return (
                        <City city={city} key={city.city} />
                    )
                })
            }
        </div>
    )
}