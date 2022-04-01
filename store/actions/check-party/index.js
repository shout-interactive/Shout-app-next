import { CHECK_JOIN_PARTY_SUCCESS, CHECK_JOIN_PARTY_FAILED } from "../../actionTypes/index";
import { API } from "../../../utils/Axios";

export const checkPartySuccess = (message) => {
    return { type: CHECK_JOIN_PARTY_SUCCESS, message };
};
export const checkPartyFail = (message) => {
    return { type: CHECK_JOIN_PARTY_FAILED, message };
};
export const checkPartyStatus = (payload) => {
    const token = localStorage.getItem("token");
    return async(dispatch) => {
        try {
            const callObj = {
                method: "POST",
                path: `party/join`,
                data: payload,
                headers: {
                    Authorization: token,
                },
            };
            const data = await API(callObj);
            console.log(data);
            if (data.status) {
                dispatch(checkPartySuccess(data.message));
            } else {
                dispatch(checkPartyFail(data.message));
            }
        } catch (e) {
            console.log(e);
        }
    };
};