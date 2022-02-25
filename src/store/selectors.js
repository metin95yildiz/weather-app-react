import { createSelector } from "reselect";

export const citiesDataMemo = createSelector(
    state => state.cities,
    cities => {
        return cities
    }
)