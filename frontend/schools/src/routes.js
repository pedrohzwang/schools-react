
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/components/Home.jsx';
import UserRegister from './pages/components/UserRegister.jsx';
import UserList from './pages/components/UserList.jsx';
import UserUpdate from './pages/components/UserUpdate.jsx';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={Home} />
                <Route path='/newUser' exact={true} component={UserRegister} />
                <Route path='/users' exact={true} component={UserList} />
                <Route path='/updateUser' exact={true} component={UserUpdate} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;

