import { createSelector } from "reselect";

export const citiesDataMemo = createSelector(
    state => state.cities,
    cities => {
        return cities
    }
)

export const errorDataMemo = createSelector(
    state => state.error,
    error => {
        return error
    }
)