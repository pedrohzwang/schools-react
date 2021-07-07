import React, { Component, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Context } from '../../context/AuthContext.js';

const PrivateRoute = props => {
    const { authenticated } = useContext(Context);

    if (!authenticated) {
        return <Route {...props} />;
    }

    <Redirect to="/login" />
}
/*
const PrivateRoute = ({ children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return RenovaToken() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                );
            }}
        />
    );
   };*/

export default PrivateRoute;