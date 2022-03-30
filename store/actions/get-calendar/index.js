import {
  GET_CALENDAR_START,
  GET_CALENDAR_SUCCESS,
  GET_CALENDAR_FAIL,
  GET_CALENDAR_CLEANUP,
} from "../../actionTypes";
import { API } from "../../../utils/Axios";

const getCalendarStart = () => {
  return { type: GET_CALENDAR_START };
};
export const getCalendarSucess = (payload, message) => {
  return { type: GET_CALENDAR_SUCCESS, payload, message };
};
const getCalendarFail = (payload) => {
  return { type: GET_CALENDAR_FAIL, payload };
};
export const getCalendarCleanUp = () => {
  return { type: GET_CALENDAR_CLEANUP };
};

export const getCalendarRequest = (payload) => {
  return async (dispatch) => {
    dispatch(getCalendarStart());

    try {
      const callObj = {
        method: "POST",
        path: `party/calenders`,
        data: payload,
      };

      const data = await API(callObj);

      if (data.status) {
        dispatch(getCalendarSucess(data.data, data.message));

        return data;
      } else {
        dispatch(getCalendarFail(data.data, data.message));
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
      dispatch(getCalendarFail([], errorResponse));
    }
  };
};
