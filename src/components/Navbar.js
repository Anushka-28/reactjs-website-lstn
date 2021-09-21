import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
// LstnLogo => https://stackoverflow.com/a/68149450/12302691
import { ReactComponent as LstnLogo } from '../logo.svg';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    }
    useEffect(() => showButton(), []);
    // https://dmitripavlutin.com/react-useeffect-explanation/
    /* []: the side-effect, i.e. showButton() runs once after the initial rendering
       without this, the button is always shown until screen is resized 
       because initial value of button in useState is true */
    window.addEventListener('resize', showButton);
    // showButton() runs once after each resizing

    return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <div>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        lstn
                        <LstnLogo className='navbar-logo-icon' height="40" width="40" />
                    </Link>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
                    </li>
                </ul>
                {/* <Button> component is rendered only if 'button' is true */}
                {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
            </div>
        </nav>
    </>
    );
}

export default Navbar;