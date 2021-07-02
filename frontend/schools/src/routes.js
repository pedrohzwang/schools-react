
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/components/Home.jsx';
import UserRegister from './pages/components/UserRegister.jsx';
import UserList from './pages/components/UserList.jsx';
import UserUpdate from './pages/components/UserUpdate.jsx';
import Login from './pages/components/Login.jsx';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={Home} />
                <Route path='/newUser' exact={true} component={UserRegister} />
                <Route path='/users' exact={true} component={UserList} />
                <Route path='/updateUser' exact={true} component={UserUpdate} />
                <Route path='/login' exact={true} component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;

