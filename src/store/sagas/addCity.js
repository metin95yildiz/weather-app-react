import { put, call, take, spawn } from "redux-saga/effects";

import {
    ADD_CITY,
    START_ADDING_CITY_REQUEST,
    COMPLETE_ADDING_CITY_REQUEST,
    FAIL_ADDING_CITY_REQUEST
} from "../actions/actionTypes";
import axios from "axios";

export function *addCity() {
    const { cityName } = yield take(ADD_CITY);
    const API_KEY = "4f2ecdfde44ef77b912eae41ecfa42af";
    yield put({ type: START_ADDING_CITY_REQUEST })
    try {
        const cityResponse = yield call(axios.get, `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);
        const latitude = cityResponse.data.coord["lat"];
        const longitude = cityResponse.data.coord["lon"];
        const forecast = yield call(axios.get, `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`);
        console.log(forecast);
        const data = {
            city: cityResponse.data.name,
            details: forecast.data,
            createdAt: new Date()
        }
        yield put({ type: COMPLETE_ADDING_CITY_REQUEST, data});
    } catch (error) {
        yield put({
            type: FAIL_ADDING_CITY_REQUEST,
            error: "City you're looking for was not found..."
        })
    } finally {
        yield spawn(addCity);
    }
}