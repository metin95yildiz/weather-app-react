import {
    COMPLETE_ADDING_CITY_REQUEST,
    UPDATED_CITY_DATA,
    REMOVE_CITY
} from "../actions/actionTypes";

export default function cities(state = "", action)  {
    switch(action.type) {
        case COMPLETE_ADDING_CITY_REQUEST: return {
            ...state,
            [action.data.city]: action.data
        };
        case UPDATED_CITY_DATA: return {
            ...state,
            [action.data.city]: { ...state[action.data.city], "details": action.data.details }
        };
        case REMOVE_CITY:
            delete state[action.cityName]
        return {
            ...state
        };
        default: return state;
    }

}