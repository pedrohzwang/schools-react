import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { CssBaseline } from '@material-ui/core';
import { Router } from 'react-router-dom';
import history from './history';
import { AuthProvider } from './context/AuthContext';

ReactDOM.render(
  <AuthProvider>
    <CssBaseline />
    <Router history={history}>
      <Routes />
    </Router>
  </AuthProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
