import {
    FAIL_ADDING_CITY_REQUEST,
    FAIL_GETING_DATA_REQUEST
} from "../actions/actionTypes";

export default function cities(state = "", action)  {
    switch(action.type) {
        case FAIL_ADDING_CITY_REQUEST:
        case FAIL_GETING_DATA_REQUEST: return action.error;
        default: return "";
    }

}