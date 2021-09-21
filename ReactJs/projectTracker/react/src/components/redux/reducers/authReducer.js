import * as actionTypes from "../actions/authActionTypes";
const initSate = {
  authError: null,
};

const authReducer = (state = initSate, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      console.log("success");
      return {
        ...state,
        authError: null,
      };
    case actionTypes.LOGIN_ERROR:
      console.log("error");
      return {
        ...state,
        authError: "Login Failed",
      };
    case actionTypes.SIGNOUT_SUCCESS:
      console.log("success");
      return state;
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null,
      };
    case actionTypes.SIGNUP_ERROR:
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
