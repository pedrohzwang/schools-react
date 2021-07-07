import React, { useContext } from 'react';
import { Context } from './context/AuthContext.js';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/components/Home.jsx';
import UserRegister from './pages/components/UserRegister.jsx';
import UserList from './pages/components/UserList.jsx';
import UserUpdate from './pages/components/UserUpdate.jsx';
import Login from './pages/components/Login.jsx';
import { Component } from 'react';
import PrivateRoute from './pages/components/PrivateRoute.jsx';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={Home} />
                <Route path='/login' exact={true} component={Login} />
                <Route path='/newUser' exact={true} component={UserRegister} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;

