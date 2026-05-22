import React, { useEffect } from 'react'
import Navbar from '../pages/public/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useAuth } from '../components/auth/hook/useAuth';

const CustomerLayout = () => {

  const currentUser = useSelector((state) => state.auth.user);

  const { fetchUserData } = useAuth();

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default CustomerLayout