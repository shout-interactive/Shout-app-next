import { API } from "../../../utils/Axios";
import { Encrypt } from "../../../utils/helpers";
import { TOPUP } from "../../actionTypes";
export const BuyCoinSuccess = (message) => {
    return { type: TOPUP, message };
};
export const BuyCoin = (amount) => {
    return async(dispatch) => {
        const userId = localStorage.getItem("userId");
        const data = {
            user: userId,
            amount,
        };
        const encryptData = Encrypt(data);
        const newData = {
            data: encryptData,
        };
        try {
            const callObj = {
                method: "POST",
                path: `billing/topup`,
                data: newData,
            };
            const data = await API(callObj);
            console.log(data);
            if (data.status) {
                dispatch(BuyCoinSuccess());
            }
        } catch (e) {
            console.log(e);
        }
    };
};