import * as types from '../actionTypes';
import MockEmployeeApi from '../../api/mockEmployeeApi';

export function createEmployee() {
  return {type: types.CREATE_EMPLOYEE};
}

export function createEmployeeSuccess(response) {
  return {
    type: types.CREATE_EMPLOYEE_SUCCESS,
    payload: response
  };
}

export function createEmployeeFailure(error) {
  return {
    type: types.CREATE_EMPLOYEE_FAILURE,
    payload: error
  };
}

export function CreateEmployeeAction(employee) {
  return function (dispatch) {
    dispatch(createEmployee());
    let myHeaders = new Headers({
      "Content-Type": "application/json;charset=UTF-8 "
    });

    let myInit = { method: 'POST',
                  headers: myHeaders,
                  protocol:'http:',
                  mode: 'cors',
                  body: JSON.stringify(employee)};
    return fetch('http://10.71.112.132:8080/EmployeeDemo/Employees', myInit)
    //return MockEmployeeApi.saveEmployee(employee)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
          }
        })
      .then((response) => {
          dispatch(createEmployeeSuccess(response));
      })
      .catch((error) => {
        dispatch(createEmployeeFailure(error));
        return error;
    });
  };
}
