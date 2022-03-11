import {
  CREATE_PARTY_START,
  CREATE_PARTY_CLEANUP,
  CREATE_PARTY_FAIL,
  CREATE_PARTY_SUCCESS,
} from "../../actionTypes";

import { createParty } from "../../initialState";

const createPartyReducer = (state = createParty, action) => {
  switch (action.type) {
    case CREATE_PARTY_START:
      return { ...state, isLoading: true };
    case CREATE_PARTY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        message: action.message,
        partyData: action.payload,
      };
    case CREATE_PARTY_FAIL:
      return { ...state, error: action.payload, isLoading: false, message: action.message };
    case CREATE_PARTY_CLEANUP:
      return { ...state, error: null, isLoading: false, isSuccessful: false };
    default:
      return state;
  }
};

export default createPartyReducer;
