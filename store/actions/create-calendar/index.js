import {
  CREATE_CALENDAR_START,
  CREATE_CALENDAR_SUCCESS,
  CREATE_CALENDAR_FAIL,
  CREATE_CALENDAR_CLEANUP,
} from "../../actionTypes";
import { API } from "../../../utils/Axios";

const createCalendarStart = () => {
  return { type: CREATE_CALENDAR_START };
};
const createCalendarSucess = (payload, message) => {
  return { type: CREATE_CALENDAR_SUCCESS, message, payload };
};
const createCalendarFail = (payload) => {
  return { type: CREATE_CALENDAR_FAIL, payload };
};
export const createCalendarCleanUp = () => {
  return { type: CREATE_CALENDAR_CLEANUP };
};

export const createCalendarRequest = (payload) => {
  return async (dispatch) => {
    dispatch(createCalendarStart());

    try {
      const callObj = {
        method: "POST",
        path: `party/calendars/create`,
        data: payload,
      };

      const data = await API(callObj);
      console.log(data, "party data");
      if (data.status) {
        dispatch(createCalendarSucess(data.data, data.message));
        // dispatch(getPartiesSucess(data.data, data.message));
        return data;
      } else {
        dispatch(createCalendarFail(data.data, data.message));
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
      dispatch(createCalendarFail(errorResponse));
    }
  };
};
