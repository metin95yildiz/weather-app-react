import * as ACTION from "./actionTypes";


export function addCity(cityName) {
    return { type: ACTION.ADD_CITY, cityName}
}
