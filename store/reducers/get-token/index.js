import { VERIFY_TOKEN_START, VERIFY_TOKEN_CLEANUP, VERIFY_TOKEN_FAIL, VERIFY_TOKEN_SUCCESS } from '../../actionTypes';

import { verifyToken } from '../../initialState';

const verifyTokenReducer = (state = verifyToken, action) => {
  switch (action.type) {
    case VERIFY_TOKEN_START:
      return { ...state, isLoading: true };
    case VERIFY_TOKEN_SUCCESS:
      return { ...state, token: action.payload.token, user: action.payload.user, isLoading: false, isSuccessful: true, message: action.message };
    case VERIFY_TOKEN_FAIL:
      return { ...state, error: action.payload, isLoading: false, message: action.message };
    case VERIFY_TOKEN_CLEANUP:
      return { ...state, error: null, isLoading: false, isSuccessful: false };
    default:
      return state;
  }
};

export default verifyTokenReducer;