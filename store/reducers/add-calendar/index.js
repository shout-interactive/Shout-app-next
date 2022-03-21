import {
   ADD_CALENDAR_START,
   ADD_CALENDAR_CLEANUP,
   ADD_CALENDAR_FAIL,
   ADD_CALENDAR_SUCCESS,
} from "../../actionTypes";

import { addCalendar } from "../../initialState";

const addCalendarReducer = (state = addCalendar , {type, payload, message}) => {
    switch(type){
        case ADD_CALENDAR_START:
            return {...state, isLoading: true}
        case ADD_CALENDAR_SUCCESS:
            return {...state, isLoading: false, isSuccessful: true, message, calendarData: payload }
        case ADD_CALENDAR_FAIL:
            return {...state, isLoading: false, isSuccessful: false, message}
        case  ADD_CALENDAR_CLEANUP:
            return {...state, error: null, isLoading: false, isSuccessful: false, calendarData: null }
        default:
            return state;
    }
}

export default addCalendarReducer;