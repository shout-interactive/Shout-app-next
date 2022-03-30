import { TOPUP } from "../../actionTypes";
import { topUp } from "../../initialState";

const BuyCoin = (state = topUp, action) => {
    switch (action.type) {
        case TOPUP:
            return {...state, message: action.payload };
        default:
            return state;
    }
};
export default BuyCoin;