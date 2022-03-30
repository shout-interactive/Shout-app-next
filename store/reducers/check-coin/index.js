import { checkWalletCoin } from "../../initialState";
import { CHECK_COIN } from "../../actionTypes";

const checkCoinReducer = (state = checkWalletCoin, action) => {
    switch (action.type) {
        case CHECK_COIN:
            return {...state, data: action.payload, message: action.message };
        default:
            return state;
    }
};
export default checkCoinReducer;