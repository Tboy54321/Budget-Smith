// Nav.js
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom'; // Import useNavigate
import "./nav.css";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#features">Features</a></p>
    <p><a href="#testimonials">Testimonials</a></p>

  </>
);

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignupClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <p>BudgetSmith</p>
        <img className="img" src="../../../Assets/favicon.ico" alt=""></img>
      </div>
      <div className="nav">
        <div className='navbar-links-container'>
          <Menu />
        </div>
      </div>
      <div className="navbar-sign">
        <p>Sign in</p>
        <button type="button" onClick={handleSignupClick}>Sign up</button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#ffff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className='navbar-menu-container scale-up-center'>
            <div className='navbar-menu-container-links'>
              <Menu />
            </div>
            <div className="navbar-menu-container-links-sign">
              <p>Sign in</p>
              <button type="button" onClick={handleSignupClick}>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
