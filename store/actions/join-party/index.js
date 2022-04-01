import { JOIN_PARTY_PAYMENT, JOIN_PARTY_FAILED } from "../../actionTypes/index";
import { API } from "../../../utils/Axios";

export const joinPartySuccess = (message) => {
    return { type: JOIN_PARTY_PAYMENT, message };
};
export const joinPartyFail = (message) => {
    return { type: JOIN_PARTY_FAILED, message };
};
export const joinPartyPayment = (payload) => {
    const token = localStorage.getItem("token");
    return async(dispatch) => {
        try {
            const callObj = {
                method: "POST",
                path: `party/pay-to-join`,
                data: payload,
                headers: {
                    Authorization: token,
                },
            };
            const data = await API(callObj);
            console.log(data);
            if (data.status) {
                dispatch(joinPartySuccess(data.message));
            } else {
                dispatch(joinPartyFail(data.message));
            }
        } catch (e) {
            console.log(e);
        }
    };
};