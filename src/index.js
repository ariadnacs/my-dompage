//Polyfill transpile some ES6 features that Babel can't, we bring the whole Polyfill
//We may want to change this to only pull individual polyfills for each features
//since we only need polyfill for object.assign by now
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
