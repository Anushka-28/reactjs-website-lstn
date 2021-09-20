import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ReactComponent as LstnLogo } from '../lstn_gold.svg';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <div>
                <Link to='/' className='navbar-logo'>
                    {/* <img src={LstnLogo} alt='logo' className='navbar-logo-icon' /> */}
                    <LstnLogo className='navbar-logo-icon' height='40' />
                    lstn
                </Link>
            </div>
            <ul className='nav-menu'>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links'>Services</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nav-links'>Products</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links'>Sign Up</Link>
                </li>
            </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;