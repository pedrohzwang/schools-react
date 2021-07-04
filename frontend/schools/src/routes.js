import React, { useContext } from 'react';
import { Context } from './context/AuthContext.js';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/components/Home.jsx';
import UserRegister from './pages/components/UserRegister.jsx';
import UserList from './pages/components/UserList.jsx';
import UserUpdate from './pages/components/UserUpdate.jsx';
import Login from './pages/components/Login.jsx';

function CustomRoute({ isPrivate, ...rest }) {
    const { loading, authenticated } = useContext(Context);

    if (loading) {
        return <h1>Loading</h1>
    }

    if (isPrivate && !authenticated) {
        return <Redirect to="/login" />;
    }

    return <Route {...rest} />;
}

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={Home} />
                <CustomRoute isPrivate path='/newUser' component={UserRegister} />
                <CustomRoute isPrivate path='/users' component={UserList} />
                <CustomRoute isPrivate path='/updateUser' component={UserUpdate} />
                <Route path='/login' exact={true} component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;

