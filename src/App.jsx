import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const App = () => {

  const currentUser = useSelector((state) => state.auth.user);

  useEffect(() => {
    console.log(currentUser);
  })
  
  return (
    <div>App</div>
  )
}

export default App