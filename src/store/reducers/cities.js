import {
    COMPLETE_ADDING_CITY_REQUEST,
    COMPLETE_GETING_DATA_REQUEST,
    REMOVE_CITY
} from "../actions/actionTypes";

export default function cities(state = "", action)  {
    switch(action.type) {
        case COMPLETE_ADDING_CITY_REQUEST:
        case COMPLETE_GETING_DATA_REQUEST: return {
            ...state,
            [action.data.city]: action.data
        };
        case REMOVE_CITY:
            delete state[action.cityName]
        return {
            ...state
        };
        default: return state;
    }

}