import {
  GET_INVITE_START,
  GET_INVITE_SUCCESS,
  GET_INVITE_FAIL,
  GET_INVITE_CLEANUP,
} from "../../actionTypes";
import { API } from "../../../utils/Axios";

const getInviteStart = () => {
  return { type: GET_INVITE_START };
};
export const getInviteSucess = (payload, message) => {
  return { type: GET_INVITE_SUCCESS, payload, message };
};
const getInviteFail = (payload) => {
  return { type: GET_INVITE_FAIL, payload };
};
export const getInviteCleanUp = () => {
  return { type: GET_INVITE_CLEANUP };
};

export const getInviteRequest = (payload) => {
  return async (dispatch) => {
    dispatch(getInviteStart());

    try {
      const callObj = {
        method: "POST",
        path: `party/invites`,
        data: payload,
      };

      const data = await API(callObj);

      if (data.status) {
        dispatch(getInviteSucess(data.parties, data.parties, data.message));

        return data;
      } else {
        dispatch(getInviteFail(data.data, data.message));
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
      dispatch(getInviteFail([], errorResponse));
    }
  };
};
