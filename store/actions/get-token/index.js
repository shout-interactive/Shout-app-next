import {
  VERIFY_TOKEN_START,
  VERIFY_TOKEN_SUCCESS,
  VERIFY_TOKEN_FAIL,
  VERIFY_TOKEN_CLEANUP,
} from "../../actionTypes";
import { API } from "../../../utils/Axios";

// export const token = process.env.NEXT_PUBLIC_API_TEMP_TOKEN;
export const token =
  "eyJpZCI6IjIwN2IwNDY0LTE5N2UtNDkwYi1hYmM2LTA0M2NlYjRiYTU3MSIsImZpcnN0bmFtZSI6IkF3YSIsImxhc3RuYW1lIjoiTWFyaWFtIiwibWlkZGxlbmFtZSI6bnVsbCwicHJvbm91bmNlIjpudWxsLCJlbWFpbCI6ImF3YUBnbWFpbC5jb20iLCJwaG9uZSI6bnVsbCwicm9sZSI6WyJ1c2VyIl0sInBlcm1pc3Npb25zIjpbInVzZXIiXSwiY29udGFjdHMiOm51bGwsImlzT25ib2FyZGVkIjpmYWxzZSwiY3JlYXRlZEF0IjoiMjAyMi0wMy0wN1QxMTo1ODoyMy45NDNaIiwidXBkYXRlZEF0IjoiMjAyMi0wMy0wN1QxMTo1ODoyMy45NDNaIiwiQ29udGFjdCI6bnVsbH0=";
const verifyTokenStart = () => {
  return { type: VERIFY_TOKEN_START };
};
const verifyTokenSucess = (payload, message) => {
  return { type: VERIFY_TOKEN_SUCCESS, payload, message };
};
const verifyTokenFail = (payload) => {
  return { type: VERIFY_TOKEN_FAIL, payload };
};
export const getTokenCleanUp = () => {
  return { type: VERIFY_TOKEN_CLEANUP };
};

export const verifyTokenRequest = () => {
  return async (dispatch) => {
    dispatch(verifyTokenStart());

    try {
      const callObj = {
        method: "GET",
        path: `auth/token/${token}`,
        data: null,
      };

      const data = await API(callObj);

      if (data.status) {
        dispatch(verifyTokenSucess(data.data, data.message));
        return data.data;
      } else {
        dispatch(verifyTokenFail(data.data, data.message));
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
      dispatch(verifyTokenFail([], errorResponse));
    }
  };
};
