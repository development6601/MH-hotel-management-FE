import React, { lazy } from 'react'
import { createBrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App';
import Login from '../features/auth/pages/Login';
import Register from '../features/auth/pages/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
]);

export default router