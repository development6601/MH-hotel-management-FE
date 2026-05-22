import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const CustomerRoute = ({ children }) => {
    
    const user = useSelector((state) => state.auth.user);

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (user.role !== "CUSTOMER") {
        return <Navigate to="/" />;
    }
    return children;
}

export default CustomerRoute