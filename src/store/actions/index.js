import * as ACTION from "./actionTypes";


export function addCity(cityName) {
    return { type: ACTION.ADD_CITY, cityName}
}

export function removeCity(cityName) {
    return { type: ACTION.REMOVE_CITY, cityName }
}