import * as types from '../actionTypes';
import MockEmployeeApi from '../../api/mockEmployeeApi';

export function loadEmployees() {
  return {type: types.LOAD_EMPLOYEES};
}

export function loadEmployeesSuccess(employees) {
  return {
    type: types.LOAD_EMPLOYEES_SUCCESS,
    payload: employees
  };
}

export function loadEmployeesFailure(error) {
  return {
    type: types.LOAD_EMPLOYEES_FAILURE,
    payload: error
  };
}

export function getEmployeeAction() {
  return function (dispatch) {
    dispatch(loadEmployees());
    let myHeaders = new Headers({
      "Content-Type": "application/json;charset=UTF-8 "
    });

    let myInit = { method: 'GET',
                  headers: myHeaders,
                  protocol:'http:',
                  mode: 'cors'};
    return fetch('http://10.71.112.132:8080/EmployeeDemo/Employees', myInit)
    //return MockEmployeeApi.getAllEmployees()
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
          }
        })
      .then((employees) => {
          dispatch(loadEmployeesSuccess(employees));
      })
      .catch((error) => {
        dispatch(loadEmployeesFailure(error));
        return error;
    });
  };
}
