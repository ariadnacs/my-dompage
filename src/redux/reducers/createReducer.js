import * as types from '../actionTypes';

let initialState = {
  loading: false,
  response: "",
  error: false
};

export default function createEmployeeReducer(state=initialState, action) {
  switch(action.type) {
    case types.CREATE_EMPLOYEE:
      return {
        loading: true,
        response: "",
        error: false
      };
    case types.CREATE_EMPLOYEE_SUCCESS:
      return {
        loading: false,
        response: action.payload,
        error: false
      };
    case types.CREATE_EMPLOYEE_FAILURE:
      return {
        loading: false,
        response: "",
        error: true
      };
    default:
      return state;
  }
}
