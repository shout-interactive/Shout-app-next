import {
  CREATE_GIFT_START,
  CREATE_GIFT_SUCCESS,
  CREATE_GIFT_CLEANUP,
  CREATE_GIFT_FAIL,
} from "../../actionTypes";
import { API } from "../../../utils/Axios";

export const createGiftStart = () => {
  return { type: CREATE_GIFT_START };
};
export const createGiftSuccess = (payload, message) => {
  return { type: CREATE_GIFT_SUCCESS, payload, message };
};
export const createGiftFailure = (payload) => {
  return { type: CREATE_GIFT_FAIL, payload };
};
export const createGiftCleanup = () => {
  return { type: CREATE_GIFT_CLEANUP };
};

export const createGiftSend = (payload) => {
  return async (dispatch) => {
    dispatch(createGiftStart());

    try {
      const callObj = {
        method: "POST",
        path: `party/goal`,
        data: payload,
      };
      const data = await API(callObj);
      console.log(data, "GIft sent");
      if (data.status) {
        dispatch(createGiftSuccess(data.message));
        return data;
      } else {
        dispatch(createGiftFailure(data.message, data.message));
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
      dispatch(createGiftFailure([], errorResponse));
    }
  };
};
