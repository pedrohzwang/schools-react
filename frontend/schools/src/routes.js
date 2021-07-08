import React, { useContext } from 'react';
import { Context } from './context/AuthContext.js';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/components/Home.jsx';
import UserRegister from './pages/components/UserRegister.jsx';
import UserList from './pages/components/UserList.jsx';
import Login from './pages/components/Login.jsx';
import { Component } from 'react';
import PrivateRoute from './pages/components/PrivateRoute.jsx';
import Menu from './pages/components/Menu.jsx';
import StudentList from './pages/components/StudentList.jsx';
import StudentRegister from './pages/components/StudentRegister.jsx';
import UserList2 from './pages/components/UserList2.jsx';
import FAQ from './pages/components/FAQ.jsx';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={Home} />
                <Route path='/login' exact={true} component={Login} />
                <Route path='/newUser' exact={true} component={UserRegister} />
                <Route path='/newStudent' exact={true} component={StudentRegister} />
                <Route path='/menu' exact={true} component={Menu} />
                <Route path='/users' exact={true} component={UserList} />
                <Route path='/users2' exact={true} component={UserList2} />
                <Route path='/students' exact={true} component={StudentList} />
                <Route path='/faq' exact={true} component={FAQ} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;

