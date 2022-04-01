import { checkJoinStatus } from "../../initialState";
import { CHECK_JOIN_PARTY_SUCCESS, CHECK_JOIN_PARTY_FAILED } from "../../actionTypes";

const checkPartyReducer = (state = checkJoinStatus, action) => {
    switch (action.type) {
        case CHECK_JOIN_PARTY_SUCCESS:
            return {...state, message: action.message, isSuccessful: true };
        case CHECK_JOIN_PARTY_FAILED:
            return {...state, message: action.message };
        default:
            return state;
    }
};
export default checkPartyReducer;