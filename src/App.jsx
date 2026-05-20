import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Navbar from './pages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {

  // const currentUser = useSelector((state) => state.auth.user);

  // useEffect(() => {
  //   console.log(currentUser);
  // })
  
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App