import { put, call, select, delay, take, all } from "redux-saga/effects";
import {
    GET_CITY_WEATHER_DATA,
    COMPLETE_GETTING_DATA_REQUEST,
    FAIL_GETTING_DATA_REQUEST,
    START_GETTING_DATA_REQUEST,
    UPDATED_CITY_DATA,
    COMPLETE_PERSIST
} from "../actions/actionTypes";
import axios from "axios";
import { citiesDataMemo } from "../selectors";

export function *cities() {
    yield take(COMPLETE_PERSIST);
    yield put({ type: GET_CITY_WEATHER_DATA });
    yield put({ type: START_GETTING_DATA_REQUEST });
    const cities = yield select(citiesDataMemo);
    try {
        if (cities) {
            yield all(Object.values(cities).map(cityName => (updateCity(cityName))))
        }
        yield put({ type: COMPLETE_GETTING_DATA_REQUEST});
    } catch (error) {
        yield put({
            type: FAIL_GETTING_DATA_REQUEST,
            error: "An error occured..."
        })
    }
}

export function *updateCity(cityName) {
    const API_KEY = "4f2ecdfde44ef77b912eae41ecfa42af";
    const forecast = yield call(axios.get, `https://api.openweathermap.org/data/2.5/onecall?lat=${cityName.details.lat}&lon=${cityName.details.lon}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`);
    const data = {
        city: cityName.city,
        details: forecast.data
    }
    yield put({ type: UPDATED_CITY_DATA, data });
    yield delay(1000);

}