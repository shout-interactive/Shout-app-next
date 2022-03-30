import { CHECK_COIN } from "../../actionTypes/index";
import { API } from "../../../utils/Axios";
import { Encrypt } from "../../../utils/helpers";

export const checkCoinSuccess = (payload, message) => {
    return { type: CHECK_COIN, payload, message };
};
export const checkCoin = () => {
    return async(dispatch) => {
        const userId = localStorage.getItem("userId");
        const data = {
            user: userId,
        };
        const encryptData = Encrypt(data);
        const newData = {
            data: encryptData,
        };
        try {
            const callObj = {
                method: "POST",
                path: `billing/check-coin`,
                data: newData,
            };
            const data = await API(callObj);
            console.log(data);
            if (data.status) {
                dispatch(checkCoinSuccess(data.data, data.message));
            }
        } catch (e) {
            console.log(e);
        }
    };
};