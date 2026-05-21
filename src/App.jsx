import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Navbar from './pages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useAuth } from './components/auth/hook/useAuth';

const App = () => {

  const currentUser = useSelector((state) => state.auth.user);

  const { fetchUserData } = useAuth();

  useEffect(() => {
    fetchUserData();
    console.log(currentUser);
    
  })
  
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App