import React, { lazy } from 'react'
import { createBrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App';
import Home from '../pages/Home/Home';
import Login from '../components/auth/pages/Login/Login';
import Register from '../components/auth/pages/Register/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
        ]
    },

]);

export default router