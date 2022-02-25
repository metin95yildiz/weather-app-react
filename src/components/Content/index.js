import React from "react";
import SearchCity from "../SearchCity";
import Time from "../Time";
import "./Content.scss";

export default function Content() {
    

    return (
        <div className="content">
            <Time />
            <SearchCity />
         </div>
    )
}