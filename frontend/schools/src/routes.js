
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/components/Home.jsx';
import UserRegister from './pages/components/UserRegister.jsx';
import Users from './pages/components/Users.jsx';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/newUser' exact={true} component={UserRegister} />
            <Route path='/users' exact={true} component={Users} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;

