import {
  GET_PARTY_DETAILS_START,
  GET_PARTY_DETAILS_SUCCESS,
  GET_PARTY_DETAILS_FAIL,
  GET_PARTY_DETAILS_CLEANUP,
} from "../../actionTypes";
import { API } from "../../../utils/Axios";

const token = "";

const getPartyDetailsStart = () => {
  return { type: GET_PARTY_DETAILS_START };
};
const getPartyDetailsSucess = (payload, message) => {
  return { type: GET_PARTY_DETAILS_SUCCESS, payload, message };
};
const getPartyDetailsFail = (payload) => {
  return { type: GET_PARTY_DETAILS_FAIL, payload };
};
export const getPartyDetailsCleanUp = () => {
  return { type: GET_PARTY_DETAILS_CLEANUP };
};

export const getPartyDetailsRequest = (payload) => {
  return async (dispatch) => {
    await dispatch(getPartyDetailsStart());

    try {
      const callObj = {
        method: "POST",
        path: `party/details`,
        data: payload,
      };

      const data = await API(callObj);
      if (data) {
        await dispatch(getPartyDetailsSucess(data, (data.message = "Successful")));

        return data;
      } else {
        await dispatch(getPartyDetailsFail(data.data, (data.message = "Failed")));
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
      await dispatch(getPartyDetailsFail([], errorResponse));
    }
  };
};
