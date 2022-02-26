import React from "react";
import { useSelector } from "react-redux";
import cn from "classnames";
import { errorDataMemo } from "../../store/selectors";
import "./ErrorMessage.scss";

export default function ErrorMessage() {
    const message = useSelector(errorDataMemo);
    return (
        <div className={cn("error-message", { "shown": message })}>
            <p>{message}</p>
         </div>
    )
}