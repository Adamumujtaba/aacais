import React, { useState } from 'react';
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../images/model_logo.png';
function Navbar() {
  const [click, setClick] = useState(!false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(!false);
  return (
    <>
      <nav className='navbar' id='/'>
        <div className='navbar-container '>
          <div className='navbar-logo-cont'>
            <Link
              to='/'
              className='navbar-logo'
              onClick={() => {
                return closeMobileMenu;
              }}
            >
              {' '}
              {/* <SiMediamarkt className="navbar-icon" /> */}
              <img src={Logo} alt='logo' width={'10%'} height={'100%'} />
              <span> MODEL</span>
            </Link>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaBars /> : <FaTimes />}
          </div>
          <div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link
                  to='/'
                  className='nav-links'
                  onClick={() => closeMobileMenu()}
                >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/staff'
                  className='nav-links'
                  onClick={() => closeMobileMenu()}
                >
                  Staff
                </Link>
              </li>

              <li className='nav-item'>
                <Link
                  to='about'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
