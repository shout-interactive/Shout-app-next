import { joinPartyPayment } from "../../initialState";
import { JOIN_PARTY_PAYMENT, JOIN_PARTY_FAILED } from "../../actionTypes";

const joinPartyReducer = (state = joinPartyPayment, action) => {
    switch (action.type) {
        case JOIN_PARTY_PAYMENT:
            return {...state, message: action.message, successful: true };
        case JOIN_PARTY_FAILED:
            return {...state, message: action.message };
        default:
            return state;
    }
};
export default joinPartyReducer;