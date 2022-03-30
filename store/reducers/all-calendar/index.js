import {
    GET_CALENDAR_START,
    GET_CALENDAR_CLEANUP,
    GET_CALENDAR_FAIL,
    GET_CALENDAR_SUCCESS,
} from "../../actionTypes";

import { getAllCalendar } from "../../initialState";

const getAllCalendarReducer = (state = getAllCalendar, action) => {
    switch (action.type) {
        case GET_CALENDAR_START:
            return {...state, isLoading: true };
        case GET_CALENDAR_SUCCESS:
            return {
                ...state,
                calendar: action.payload,
                isLoading: false,
                isSuccessful: true,
                message: action.message,
            };
        case GET_CALENDAR_FAIL:
            return {...state, error: action.payload, isLoading: false, message: action.message };
        case GET_CALENDAR_CLEANUP:
            return {...state, error: null, isLoading: false, isSuccessful: false };
        default:
            return state;
    }
};

export default getAllCalendarReducer;