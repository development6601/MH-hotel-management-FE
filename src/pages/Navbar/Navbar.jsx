import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Navbar/Navbar.scss"

const Navbar = () => {

  const navigate= useNavigate();
  
  return (
    <div className='navbar'>
        <div className="left-part">
            <h4>ATLANTA</h4>
        </div>
        <div className="right-part">
            <h4><Link className='menu' to={"/"}>Home</Link></h4>
            <h4><Link className='menu' to={"/home"}>Book Now</Link></h4>
            <h4><Link className='menu' to={"/home"}>About Us</Link></h4>
            <h4><Link className='menu' to={"/home"}>Contact Us</Link></h4>
            <button className='btn' onClick={() => navigate("/login")} type="button">Login</button>
        </div>
    </div>
  )
}

export default Navbar