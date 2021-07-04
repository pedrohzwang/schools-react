import React, { createContext, useState, useEffect } from 'react'
import api from '../pages/services/api';
import history from '../history';
import UserRegister from '../pages/components/UserRegister';

const Context = createContext();

function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            api.defaults.headers['x-acces-token'] = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }

        setLoading(false);
    }, []);

    async function handleLogin(loginData) {
        try {
            const { data: { token } } = await api.post('/login', loginData);
            if (token) {
                console.log(token);
                localStorage.setItem('token', JSON.stringify(token));
                api.defaults.headers['x-acces-token'] = `Bearer ${token}`;
                setAuthenticated(true);
                return history.push('/newUser');
            }
        } catch (error) {
            alert(error);
        }
    }

    function handleLogout() {
        try {
            setAuthenticated(false);
            localStorage.removeItem('token');
            api.defaults.headers['x-acces-token'] = undefined;
            history.push('/login');
        } catch (error) {
            alert(error);
        }
    }

    return (
        <Context.Provider value={{ loading, authenticated, handleLogin, handleLogout }}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider };