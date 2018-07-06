import {combineReducers} from 'redux';
import getEmployees from './getReducer';
import createEmployee from './createReducer';

const rootReducer = combineReducers({
  getEmployees,
  createEmployee
});

export default rootReducer;
