import {
    CREATE_GIFT_START,
    CREATE_GIFT_SUCCESS,
    CREATE_GIFT_FAIL,
    CREATE_PARTY_CLEANUP,
} from "../../actionTypes/index";

import { createGift } from "../../initialState";

const createGiftReducer = (state = createGift, action) => {
    switch (action.type) {
        case CREATE_GIFT_START:
            return {...state, isLoading: true };
        case CREATE_GIFT_SUCCESS:
            return {...state, isLoading: false, isSuccessful: true, message: action.message };
        case CREATE_GIFT_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
                isSuccessful: false,
                message: action.message,
            };
        case CREATE_PARTY_CLEANUP:
            return {...state, error: null, isLoading: false, isSuccessful: false };
        default:
            return state;
    }
};
export default createGiftReducer;