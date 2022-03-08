import {
  GET_PARTIES_START,
  GET_PARTIES_SUCCESS,
  GET_PARTIES_FAIL,
  GET_PARTIES_CLEANUP,
} from "../../actionTypes";
import { API } from "../../../utils/Axios";

const getPartiesStart = () => {
  return { type: GET_PARTIES_START };
};
export const getPartiesSucess = (payload, myParties, message) => {
  return { type: GET_PARTIES_SUCCESS, payload, myParties, message };
};
const getPartiesFail = (payload) => {
  return { type: GET_PARTIES_FAIL, payload };
};
export const getPartiesCleanUp = () => {
  return { type: GET_PARTIES_CLEANUP };
};

export const getPartiesRequest = (payload) => {
  return async (dispatch) => {
    dispatch(getPartiesStart());

    try {
      const callObj = {
        method: "POST",
        path: `party`,
        data: payload,
      };

      const data = await API(callObj);

      if (data.status) {
        dispatch(getPartiesSucess(data.parties, data.parties, data.message));

        return data;
      } else {
        dispatch(getPartiesFail(data.data, data.message));
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
      dispatch(getPartiesFail([], errorResponse));
    }
  };
};
