import * as types from '../actionTypes';

let initialState = {
  loading: false,
  employees: [],
  error: false
};

export default function getEmployeeReducer(state=initialState, action) {
  console.log(action)
  switch(action.type) {
    case types.LOAD_EMPLOYEES:
      return {
        loading: true,
        employees: [],
        error: false
      };
    case types.LOAD_EMPLOYEES_SUCCESS:
      return {
        loading: false,
        employees: action.payload,
        error: false
      };
    case types.LOAD_EMPLOYEES_FAILURE:
      return {
        loading: false,
        employees: [],
        error: true
      };
    default:
      return state;
  }
}
