import {
  CREATE_PARTY_START,
  CREATE_PARTY_SUCCESS,
  CREATE_PARTY_FAIL,
  CREATE_PARTY_CLEANUP,
} from "../../actionTypes";
import { API } from "../../../utils/Axios";

import { getPartiesSucess } from "../get-parties";

const token = "";

const createPartyStart = () => {
  return { type: CREATE_PARTY_START };
};
const createPartySucess = (payload, message) => {
  return { type: CREATE_PARTY_SUCCESS, message, payload };
};
const createPartyFail = (payload) => {
  return { type: CREATE_PARTY_FAIL, payload };
};
export const createPartyCleanUp = () => {
  return { type: CREATE_PARTY_CLEANUP };
};

export const createPartyRequest = (payload) => {
  return async (dispatch) => {
    dispatch(createPartyStart());

    try {
      const callObj = {
        method: "POST",
        path: `party/create`,
        data: payload,
      };

      const data = await API(callObj);
      console.log(data, "party data");
      if (data.status) {
        dispatch(getPartiesSucess([], payload));
        dispatch(createPartySucess(data.data, data.message));
        return data;
      } else {
        dispatch(createPartyFail(data.data, data.message));
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
      dispatch(createPartyFail([], errorResponse));
    }
  };
};
