import { GET_PARTY_DETAILS_START, GET_PARTY_DETAILS_CLEANUP, GET_PARTY_DETAILS_FAIL, GET_PARTY_DETAILS_SUCCESS } from '../../actionTypes';

import { getPartyDetails } from '../../initialState';

const getPartyDetailsReducer = (state = getPartyDetails, action) => {
  switch (action.type) {
    case GET_PARTY_DETAILS_START:
      return { ...state, isLoading: true };
    case GET_PARTY_DETAILS_SUCCESS:
      return { ...state, partyDetails: action.payload, isLoading: false, isSuccessful: true, message: action.message };
    case GET_PARTY_DETAILS_FAIL:
      return { ...state, error: action.payload, isLoading: false, message: action.message };
    case GET_PARTY_DETAILS_CLEANUP:
      return { ...state, error: null, isLoading: false, isSuccessful: false };
    default:
      return state;
  }
};

export default getPartyDetailsReducer;