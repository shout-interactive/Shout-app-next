import { GET_PARTIES_START, GET_PARTIES_CLEANUP, GET_PARTIES_FAIL, GET_PARTIES_SUCCESS } from '../../actionTypes';

import { getAllParties } from '../../initialState';

const getAllPartiesReducer = (state = getAllParties, action) => {
  switch (action.type) {
    case GET_PARTIES_START:
      return { ...state, isLoading: true };
    case GET_PARTIES_SUCCESS:
      return { ...state, parties: action.payload, myParties: [...state.myParties, action.myParties] ,isLoading: false, isSuccessful: true, message: action.message };
    case GET_PARTIES_FAIL:
      return { ...state, error: action.payload, isLoading: false, message: action.message };
    case GET_PARTIES_CLEANUP:
      return { ...state, error: null, isLoading: false, isSuccessful: false };
    default:
      return state;
  }
};

export default getAllPartiesReducer;