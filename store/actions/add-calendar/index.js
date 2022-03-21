import {
  ADD_CALENDAR_START,
  ADD_CALENDAR_SUCCESS,
  ADD_CALENDAR_FAIL,
  ADD_CALENDAR_CLEANUP,
} from "../../actionTypes";
import { API } from "../../../utils/Axios";

const addCalendarStart = () => {
  return { type: ADD_CALENDAR_START };
};
const addCalendarSucess = (payload, message) => {
  return { type: ADD_CALENDAR_SUCCESS, message, payload };
};
const addCalendarFail = (payload) => {
  return { type: ADD_CALENDAR_FAIL, payload };
};
export const addCalendarCleanUp = () => {
  return { type: ADD_CALENDAR_CLEANUP };
};

export const addCalendarRequest = (payload) => async (dispatch) => {
  dispatch(addCalendarStart);

  try {
    const callObj = {
      method: "POST",
      path: "./addcalendar",
      data: payload,
    };
    const data = await API(callObj);
    console.log(data);
    if (data.status) {
      dispatch(addCalendarSucess(data.data, data.message));
      return data;
    } else {
      dispatch(addCalendarFail(data.data));
    }
  } catch (e) {
    const error = e?.response?.data?.error;
    let errorResponse;
    if (error) {
      const errorResponses = Object.values(error.errors);
      errorResponse = errorResponses.reduce((acc, i) => acc.concat(i), []);
    } else {
      errorResponse = ["Something went wrong. please try again"];
    }
    dispatch(addCalendarFail(errorResponse));
  }
};
