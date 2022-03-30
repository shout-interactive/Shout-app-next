import {
    CREATE_CALENDAR_START,
    CREATE_CALENDAR_CLEANUP,
    CREATE_CALENDAR_FAIL,
    CREATE_CALENDAR_SUCCESS,
} from "../../actionTypes";

import { createCalendar } from "../../initialState";

const createCalendarReducer = (state = createCalendar, action) => {
    switch (action.type) {
        case CREATE_CALENDAR_START:
            return {...state, isLoading: true };
        case CREATE_CALENDAR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccessful: true,
                message: action.message,
                calendarData: action.payload,
            };
        case CREATE_CALENDAR_FAIL:
            return {...state, error: action.payload, isLoading: false, message: action.message };
        case CREATE_CALENDAR_CLEANUP:
            return {...state, error: null, isLoading: false, isSuccessful: false, partyData: null };
        default:
            return state;
    }
};

export default createCalendarReducer;