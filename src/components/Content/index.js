import React from "react";
import SearchCity from "../SearchCity";
import Time from "../Time";
import CityList from "../CityList";
import ErrorMessage from "../ErrorMessage";
import "./Content.scss";

export default function Content() {
    

    return (
        <div className="content">
            <Time />
            <SearchCity />
            <ErrorMessage />
            <CityList />
         </div>
    )
}