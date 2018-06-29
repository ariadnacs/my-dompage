import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import CreateEmployee from './containers/CreateEmp';
import ShowEmployee from './containers/ShowEmp';
import SearchEmployee from './containers/SearchEmp';
import BirthdayEmp from './containers/BirthdayEmp';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="create" component={CreateEmployee} />
    <Route path="show" component={ShowEmployee} />
    <Route path="search" component={SearchEmployee} />
    <Route path="birthday" component={BirthdayEmp} />
  </Route>
);
