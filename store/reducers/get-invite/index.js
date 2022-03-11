import {
    GET_INVITE_START,
    GET_INVITE_SUCCESS,
    GET_INVITE_FAIL,
    GET_INVITE_CLEANUP,
} from "../../actionTypes";

import { getAllInvite } from "../../initialState";

const createInviteReducer = (state = getAllInvite, action) => {
    switch (action.type) {
        case GET_INVITE_START:
            return {...state, isLoading: true };
        case GET_INVITE_SUCCESS:
            return {...state, isLoading: false, isSuccessful: true, message: action.message };
        case GET_INVITE_FAIL:
            return {...state, error: action.payload, isLoading: false, message: action.message };
        case GET_INVITE_CLEANUP:
            return {...state, error: null, isLoading: false, isSuccessful: false };
        default:
            return state;
    }
};

export default createInviteReducer;